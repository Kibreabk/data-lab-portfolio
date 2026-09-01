"use client";
import { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default function SkillsRadarChart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/skills-data")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Failed to fetch skills data", err));
  }, []);

  if (data.length === 0) {
    return (
      <div className="w-full h-full min-h-[300px] flex items-center justify-center text-purple-500 font-mono animate-pulse">
        Fetching Live Python Data...
      </div>
    );
  }

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
