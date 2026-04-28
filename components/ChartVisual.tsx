import React from 'react';
import { ChartData } from '../types';

interface ChartVisualProps {
    data: ChartData;
}

const ChartVisual: React.FC<ChartVisualProps> = ({ data }) => {
    // Simple SVG Line Chart generation
    const width = 600;
    const height = 300;
    const padding = 40;
    
    const maxValue = Math.max(...data.data.map(d => d.value)) * 1.2;
    
    const getX = (index: number) => padding + (index * ((width - padding * 2) / (data.data.length - 1)));
    const getY = (value: number) => height - padding - (value / maxValue) * (height - padding * 2);

    const points = data.data.map((d, i) => `${getX(i)},${getY(d.value)}`).join(' ');

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h4 className="font-bold text-slate-800 text-lg">{data.title}</h4>
                    <p className="text-sm text-slate-500">{data.trendDescription}</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span> Actuals
                    </div>
                </div>
            </div>
            
            <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[500px]">
                    {/* Grid Lines */}
                    {[0, 0.25, 0.5, 0.75, 1].map((tick, i) => (
                        <line 
                            key={i} 
                            x1={padding} 
                            y1={height - padding - (tick * (height - padding * 2))} 
                            x2={width - padding} 
                            y2={height - padding - (tick * (height - padding * 2))} 
                            stroke="#e2e8f0" 
                            strokeDasharray="4" 
                        />
                    ))}

                    {/* Y Axis Label */}
                    <text x="10" y={height / 2} transform={`rotate(-90 10,${height/2})`} textAnchor="middle" fill="#94a3b8" fontSize="12">
                        {data.yAxisLabel}
                    </text>

                    {/* The Line */}
                    <polyline 
                        points={points} 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                    />

                    {/* Data Points */}
                    {data.data.map((d, i) => (
                        <g key={i}>
                            <circle 
                                cx={getX(i)} 
                                cy={getY(d.value)} 
                                r="4" 
                                fill="white" 
                                stroke="#3b82f6" 
                                strokeWidth="2" 
                            />
                            {/* Tooltip value */}
                            <text 
                                x={getX(i)} 
                                y={getY(d.value) - 10} 
                                textAnchor="middle" 
                                fill="#1e293b" 
                                fontSize="10" 
                                fontWeight="bold"
                            >
                                {d.value}
                            </text>
                            {/* X Axis Label */}
                            <text 
                                x={getX(i)} 
                                y={height - 10} 
                                textAnchor="middle" 
                                fill="#64748b" 
                                fontSize="11"
                            >
                                {d.label}
                            </text>
                        </g>
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default ChartVisual;