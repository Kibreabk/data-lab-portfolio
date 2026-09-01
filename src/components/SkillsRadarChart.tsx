"use client";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Python', score: 95 },
  { subject: 'R / Stats', score: 90 },
  { subject: 'Machine Learning', score: 85 },
  { subject: 'SQL / DBs', score: 80 },
  { subject: 'React / UI', score: 75 },
  { subject: 'Data Viz', score: 95 },
];

export default function SkillsRadarChart() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#262626" />
          <PolarAngleAxis dataKey="subject" stroke="#a3a3a3" fontSize={11} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #262626', borderRadius: '8px' }}
            itemStyle={{ color: '#8b5cf6', fontWeight: 'bold' }}
            labelStyle={{ color: '#a3a3a3' }}
          />
          <Radar name="Skill Level" dataKey="score" stroke="#8b5cf6" strokeWidth={2} fill="#8b5cf6" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
