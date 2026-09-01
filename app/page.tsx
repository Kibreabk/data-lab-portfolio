import { Activity, Code, Server } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">System Overview</h1>
        <p className="text-neutral-400">Welcome to my Interactive Data Science Portfolio.</p>
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
          <h2 className="text-xl font-semibold mb-6">Live Data Stream</h2>
          <div className="flex-1 border border-neutral-800 border-dashed rounded-lg flex items-center justify-center text-neutral-500">
            [ Interactive Chart Will Go Here ]
          </div>
        </div>
        
        <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 min-h-[400px] flex flex-col">
          <h2 className="text-xl font-semibold mb-6">Skills Radar</h2>
          <div className="flex-1 border border-neutral-800 border-dashed rounded-lg flex items-center justify-center text-neutral-500 text-center px-4">
            [ Python / R / Next.js Visualization Will Go Here ]
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
