
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Lock } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-[#0f0f12] border-r border-zinc-800 flex flex-col h-screen shrink-0">
      <div className="p-6 border-b border-zinc-800 flex items-center gap-3">
        <div className="p-2 bg-green-600 rounded-lg glow-green">
          <Lock className="w-6 h-6 text-black" />
        </div>
        <div>
          <h1 className="font-bold text-sm leading-tight text-white tracking-wider">SOVEREIGN</h1>
          <p className="text-[10px] text-green-500 font-mono">ENFORCEMENT V2.0</p>
        </div>
      </div>
      
      <nav className="flex-1 py-6">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 ${
                  activeTab === item.id 
                  ? 'bg-zinc-800/50 text-green-400 border-r-4 border-green-500' 
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/30'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-zinc-800">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">System Ready</span>
        </div>
        <p className="text-[9px] font-mono text-zinc-600 leading-relaxed uppercase">
          Silicon Root of Trust: Verified<br/>
          Dell PowerEdge: Synchronized<br/>
          Survey Laws: Absolute
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
