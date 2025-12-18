
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Lock, ShieldCheck, Zap, Crown } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-[#050507] border-r border-zinc-800/60 flex flex-col h-screen shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 animate-pulse"></div>
      
      <div className="p-6 border-b border-zinc-800 flex items-center gap-3 bg-zinc-900/10 backdrop-blur-md">
        <div className="p-2 bg-emerald-600 rounded-lg shadow-[0_0_25px_rgba(16,185,129,0.3)]">
          <Crown className="w-6 h-6 text-black" />
        </div>
        <div>
          <h1 className="font-black text-xs leading-tight text-white tracking-[0.15em] uppercase italic">Supreme Sovereign</h1>
          <p className="text-[9px] text-yellow-500 font-mono font-bold animate-pulse italic">3MAX PRO PLUS</p>
        </div>
      </div>
      
      <nav className="flex-1 py-6 overflow-y-auto custom-scrollbar">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-[11px] uppercase tracking-widest transition-all duration-500 group relative ${
                  activeTab === item.id 
                  ? 'text-emerald-400 border-r-4 border-emerald-500 bg-emerald-500/5' 
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/30'
                }`}
              >
                {activeTab === item.id && (
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent"></div>
                )}
                <span className={`transition-transform duration-300 group-hover:scale-110 ${activeTab === item.id ? 'text-emerald-500' : ''}`}>
                  {item.icon}
                </span>
                <span className="font-black italic tracking-tighter">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-zinc-800 bg-black/40">
        <div className="flex items-center gap-2 mb-3">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute inset-0"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative shadow-[0_0_8px_#10b981]"></div>
          </div>
          <span className="text-[10px] uppercase font-black tracking-[0.25em] text-emerald-500 italic">Global Persistence</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center opacity-70">
            <span className="text-[8px] font-mono text-zinc-500 uppercase">Dell PowerEdge</span>
            <span className="text-[8px] font-mono text-emerald-600 font-bold uppercase tracking-widest">Locked</span>
          </div>
          <div className="flex justify-between items-center opacity-70">
            <span className="text-[8px] font-mono text-zinc-500 uppercase">HPE ProLiant</span>
            <span className="text-[8px] font-mono text-emerald-600 font-bold uppercase tracking-widest">Synced</span>
          </div>
          <div className="flex justify-between items-center opacity-70">
            <span className="text-[8px] font-mono text-zinc-500 uppercase">IBM Mainframe</span>
            <span className="text-[8px] font-mono text-emerald-600 font-bold uppercase tracking-widest">Absolute</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center gap-2">
          <Lock className="w-3 h-3 text-emerald-900" />
          <span className="text-[8px] font-mono text-zinc-700 tracking-tighter uppercase font-black">Master_Key_Turned_24/7</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;