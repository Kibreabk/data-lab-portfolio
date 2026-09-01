"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', accuracy: 82 },
  { name: 'Tue', accuracy: 85 },
  { name: 'Wed', accuracy: 88 },
  { name: 'Thu', accuracy: 87 },
  { name: 'Fri', accuracy: 93 },
  { name: 'Sat', accuracy: 95 },
  { name: 'Sun', accuracy: 98 },
];

export default function LiveStreamChart() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
          <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #262626', borderRadius: '8px' }}
            itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
            labelStyle={{ color: '#a3a3a3' }}
          />
          <Area type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAcc)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
