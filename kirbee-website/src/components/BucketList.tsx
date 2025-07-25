import React from 'react';

export default function BucketList() {
    const items = [
        { id: -1, year: 2023, text: '', done: true },
        { id: 1, year: 2024, text: '考到N3', done: true },
        { id: 1.1, year: 2024, text: '爬玉山', done: true },
        { id: 1.2, year: 2024, text: '第一次全馬', done: true },
        { id: 2.1, year: 2025, text: '騎腳踏車環島', done: false },
        { id: 2.2, year: 2025, text: '去日本大學', done: true },
        { id: 2.3, year: 2025, text: '大學畢業！', done: true },
        { id: 2.4, year: 2025, text: '爬雪山', done: false },
        { id: 3, year: 2026, text: '考上研究生/院生', done: false },
        { id: 3.1, year: 2026, text: '開始拍影片紀錄生活', done: false },
        { id: 4, year: 2027, text: '', done: false },
        { id: 5, year: 2028, text: '', done: false },
        { id: 6, year: 2029, text: '', done: false },
        { id: 7, year: 2030, text: '', done: false },
        { id: 8, year: 2031, text: '', done: false },
        { id: 9, year: 2032, text: '', done: false },
        { id: 10, year: 2033, text: '', done: false },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">人生清單</h1>
            {/* 設定固定高度並啟用滾動 */}
            <div className="overflow-y-auto max-h-80">
                <ul>
                    {items.map(item => (
                        <li
                            key={item.id}
                            className="grid grid-cols-[60px_auto] items-center p-4 mb-2 rounded-xl"
                        >
                            {/* 年份 */}
                            <span className="text-sm font-medium text-gray-500">{item.year}</span>
                            <div className="flex items-center">
                                {/* 完成狀態圖示 */}
                                <span
                                    className={`mr-3 text-xl ${item.done ? 'text-green-500' : 'text-gray-300'}`}
                                >
                  {item.done ? '✓' : '○'}
                </span>
                                {/* 項目文字 */}
                                <span
                                    className={`flex-1 ${item.done ? 'line-through text-gray-400' : ''}`}
                                >
                  {item.text}
                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
