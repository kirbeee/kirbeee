import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

interface GPXViewerProps {
    /** GPX 檔案的公開 URL，例如放在 public/gpx/summoonlake.gpx */
    src: string;
}
interface Coord {
    lat: number;
    lon: number;
    ele: number;
}
interface TrackData {
    coords: Coord[];
    chartData: { distance: number; elevation: number }[];
}

export default function GPXViewer({ src }: GPXViewerProps) {
    const [trackData, setTrackData] = useState<TrackData>({ coords: [], chartData: [] });

    useEffect(() => {
        if (!src) return;
        fetch(src)
            .then(res => res.text())
            .then(gpxText => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(gpxText, 'application/xml');
                const trkpts = Array.from(xml.getElementsByTagName('trkpt'));

                const coords: Coord[] = trkpts.map(node => ({
                    lat: parseFloat(node.getAttribute('lat') || '0'),
                    lon: parseFloat(node.getAttribute('lon') || '0'),
                    ele: parseFloat(node.getElementsByTagName('ele')[0]?.textContent || '0'),
                }));

                // 計算累積距離與高度資料
                let cumDist = 0;
                const data: TrackData['chartData'] = [];
                coords.forEach((curr, i) => {
                    if (i > 0) {
                        const prev = coords[i - 1];
                        const R = 6371; // 地球半徑 km
                        const dLat = (curr.lat - prev.lat) * (Math.PI / 180);
                        const dLon = (curr.lon - prev.lon) * (Math.PI / 180);
                        const a =
                            Math.sin(dLat / 2) ** 2 +
                            Math.cos(prev.lat * Math.PI / 180) *
                            Math.cos(curr.lat * Math.PI / 180) *
                            Math.sin(dLon / 2) ** 2;
                        const d = 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        cumDist += d;
                    }
                    data.push({ distance: parseFloat(cumDist.toFixed(2)), elevation: curr.ele });
                });

                setTrackData({ coords, chartData: data });
            });
    }, [src]);

    const { coords } = trackData;
    if (coords.length === 0) return <p>Loading GPX data…</p>;

    // 計算 SVG 與地圖背景參數
    const lats = coords.map(c => c.lat);
    const lons = coords.map(c => c.lon);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLon = Math.min(...lons);
    const maxLon = Math.max(...lons);

    const viewWidth = 600;
    const viewHeight = 300;
    const padding = 10;

    // 使用公開的 staticmap 服務載入底圖
    const mapUrl =
        `https://staticmap.openstreetmap.de/staticmap.php?bbox=${minLon},${minLat},${maxLon},${maxLat}` +
        `&size=${viewWidth}x${viewHeight}`;

    const points = coords
        .map(c => {
            const x = ((c.lon - minLon) / (maxLon - minLon)) * (viewWidth - 2 * padding) + padding;
            const y =
                viewHeight - (((c.lat - minLat) / (maxLat - minLat)) * (viewHeight - 2 * padding) + padding);
            return `${x},${y}`;
        })
        .join(' ');

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">路線地圖與高度圖</h2>

            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img src={mapUrl} alt="Map background" className="absolute inset-0 w-full h-full object-cover" />
                <svg
                    className="relative w-full h-full"
                    viewBox={`0 0 ${viewWidth} ${viewHeight}`}
                    preserveAspectRatio="xMidYMid meet"
                >
                    <polyline points={points} fill="none" stroke="#3b82f6" strokeWidth={2} />
                </svg>
            </div>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={trackData.chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis dataKey="distance" name="距離 (km)" unit="km" axisLine={false} tickLine={false} tick={{ fill: '#334155' }} />
                        <YAxis dataKey="elevation" name="高度 (m)" unit="m" axisLine={false} tickLine={false} tick={{ fill: '#334155' }} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.75)' }} itemStyle={{ color: '#1e293b' }} />
                        <Line type="monotone" dataKey="elevation" stroke="#3b82f6" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
