import Link from "next/link";
import { LayoutDashboard, Database, BarChart3, Settings, User, ExternalLink } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-[#0a0a0a] border-r border-neutral-800 h-screen p-4 text-white">
      <div className="flex items-center gap-2 mb-10 px-2 mt-4">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
          <Database size={18} className="text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight">Kibreab's Lab</span>
      </div>

      <nav className="flex flex-col gap-2">
        <NavItem href="/" icon={<LayoutDashboard size={20} />} label="Overview" active />
        <NavItem href="/analytics" icon={<BarChart3 size={20} />} label="Analytics Sandbox" />
        <NavItem href="/resume" icon={<User size={20} />} label="Interactive Resume" />
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <a 
          href="https://www.upwork.com/freelancers/~01b2bc7f57a143ee14" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-emerald-900/20"
        >
          Hire Me on Upwork
          <ExternalLink size={18} />
        </a>
        <NavItem href="/settings" icon={<Settings size={20} />} label="Settings" />
      </div>
    </div>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
        active 
          ? "bg-blue-600/10 text-blue-500 font-medium" 
          : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
