import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Lock, ShieldCheck, Zap, Crown, Landmark } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-[#050507] border-r border-yellow-900/20 flex flex-col h-screen shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 animate-pulse"></div>
      
      <div className="p-6 border-b border-yellow-900/10 flex flex-col items-center gap-4 bg-zinc-900/10 backdrop-blur-md text-center">
        <div className="p-3 bg-yellow-600 rounded-2xl shadow-[0_0_25px_rgba(234,179,8,0.3)] border border-yellow-400/50">
          <Landmark className="w-10 h-10 text-black" />
        </div>
        <div>
          <h1 className="font-black text-xs leading-tight text-white tracking-[0.2em] uppercase italic">Omniscience Sovereignty</h1>
          <p className="text-[8px] font-black text-yellow-500 font-mono animate-pulse italic mt-1">SUPER 3MAX PRO DE PRO PLUS</p>
        </div>
      </div>
      
      <nav className="flex-1 py-6 overflow-y-auto custom-scrollbar">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-[10px] uppercase tracking-widest transition-all duration-500 group relative ${
                  activeTab === item.id 
                  ? 'text-yellow-400 border-r-4 border-yellow-500 bg-yellow-500/5' 
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/30'
                }`}
              >
                {activeTab === item.id && (
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent"></div>
                )}
                <span className={`transition-transform duration-300 group-hover:scale-110 ${activeTab === item.id ? 'text-yellow-500' : ''}`}>
                  {item.icon}
                </span>
                <span className="font-black italic tracking-tighter">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-yellow-900/10 bg-black/60">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-ping absolute inset-0"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 relative shadow-[0_0_10px_#eab308]"></div>
          </div>
          <span className="text-[9px] uppercase font-black tracking-[0.2em] text-yellow-500 italic">Eternal Active</span>
        </div>
        <div className="space-y-2 opacity-80">
          <p className="text-[8px] font-mono text-zinc-500 uppercase flex justify-between">
            <span>ICTV Grid</span> <span className="text-yellow-600 font-bold">LOCKED</span>
          </p>
          <p className="text-[8px] font-mono text-zinc-500 uppercase flex justify-between">
            <span>Omni-Master</span> <span className="text-yellow-600 font-bold">ACTIVE</span>
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-yellow-900/10 flex items-center gap-2">
          <Lock className="w-3 h-3 text-yellow-900" />
          <span className="text-[8px] font-mono text-zinc-700 tracking-tighter uppercase font-black italic">OMNISCIENCE_MODE_ON</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;