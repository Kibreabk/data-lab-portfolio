import { Activity, Code, Server } from "lucide-react";
import LiveStreamChart from "@/components/LiveStreamChart";
import SkillsRadarChart from "@/components/SkillsRadarChart";

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Kibreab Kebede</h1>
        <h2 className="text-xl text-blue-500 font-medium mb-4">Statistician, Data Scientist & Full-Stack Developer</h2>
        <p className="text-neutral-400 max-w-3xl text-lg leading-relaxed">
          I am a Statistics graduate who specializes in building predictive models with R and Python, 
          and turning complex data into beautiful, interactive web applications.
        </p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <KpiCard title="Python API Status" value="Online" icon={<Server size={20} className="text-emerald-500" />} />
        <KpiCard title="Models Deployed" value="12" icon={<Activity size={20} className="text-blue-500" />} />
        <KpiCard title="Lines of Code" value="45.2k" icon={<Code size={20} className="text-purple-500" />} />
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 min-h-[400px] flex flex-col">
          <h2 className="text-xl font-semibold mb-6">Model Accuracy (Live Stream)</h2>
          <div className="flex-1 w-full">
            <LiveStreamChart />
          </div>
        </div>
        
        <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 min-h-[400px] flex flex-col">
          <h2 className="text-xl font-semibold mb-6">Technical Skills Radar</h2>
          <div className="flex-1 w-full">
            <SkillsRadarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-neutral-400 mb-1">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}
