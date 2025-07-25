import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhbmxpbjIzNCIsImEiOiJjbHRwZ21mN3MwcjR4MmxxczY1dzRkcjV5In0.TMSQU5z28kxAC7SGytv1kw'; // 🔑 替換這裡

interface GPXViewerProps {
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
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

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

                let cumDist = 0;
                const data: TrackData['chartData'] = [];
                coords.forEach((curr, i) => {
                    if (i > 0) {
                        const prev = coords[i - 1];
                        const R = 6371;
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

    useEffect(() => {
        if (trackData.coords.length === 0) return;

        if (mapRef.current) {
            mapRef.current.remove();
        }

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current!,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [
                trackData.coords[0].lon,
                trackData.coords[0].lat
            ],
            zoom: 13,
        });

        mapRef.current.on('load', () => {
            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: trackData.coords.map(c => [c.lon, c.lat]),
                },
            };

            mapRef.current!.addSource('track', {
                type: 'geojson',
                data: geojson,
            });

            mapRef.current!.addLayer({
                id: 'track-line',
                type: 'line',
                source: 'track',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#3b82f6',
                    'line-width': 4,
                },
            });

            const bounds = new mapboxgl.LngLatBounds();
            trackData.coords.forEach(c => bounds.extend([c.lon, c.lat]));
            mapRef.current!.fitBounds(bounds, { padding: 20 });
        });
    }, [trackData]);

    const { chartData } = trackData;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">路線地圖與高度圖</h2>

            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <div ref={mapContainerRef} className="w-full h-full" />
            </div>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis dataKey="distance" name="距離 (km)" unit="km" tick={{ fill: '#334155' }} />
                        <YAxis dataKey="elevation" name="高度 (m)" unit="m" tick={{ fill: '#334155' }} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.75)' }} itemStyle={{ color: '#1e293b' }} />
                        <Line type="monotone" dataKey="elevation" stroke="#3b82f6" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
