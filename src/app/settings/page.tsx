import { Settings as SettingsIcon, Bell, Shield, Paintbrush } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto h-full">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <SettingsIcon className="text-neutral-400" />
          System Settings
        </h1>
        <p className="text-neutral-400">
          Manage application preferences and API connections.
        </p>
      </header>

      <div className="space-y-6">
        <SettingsCard 
          icon={<Paintbrush className="text-blue-500" />}
          title="Appearance" 
          description="Customize the dashboard UI."
          action={<div className="bg-blue-600/20 text-blue-500 px-3 py-1 rounded-md text-sm font-bold">Dark Mode Enforced</div>}
        />
        
        <SettingsCard 
          icon={<Shield className="text-emerald-500" />}
          title="API Security" 
          description="Manage Python backend CORS and rate limiting."
          action={<div className="bg-emerald-600/20 text-emerald-500 px-3 py-1 rounded-md text-sm font-bold">Active & Secure</div>}
        />

        <SettingsCard 
          icon={<Bell className="text-purple-500" />}
          title="Notifications" 
          description="Receive alerts when the predictive model finishes training."
          action={<button className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">Configure</button>}
        />
      </div>
    </div>
  );
}

function SettingsCard({ icon, title, description, action }: any) {
  return (
    <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-neutral-400 text-sm">{description}</p>
        </div>
      </div>
      <div>{action}</div>
    </div>
  );
}
