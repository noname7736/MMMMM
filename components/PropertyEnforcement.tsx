import React from 'react';
import { Box, ShieldCheck, Layers, Gauge, Target, Sparkles, Crown, Eye } from 'lucide-react';
import { PropertyMod } from '../types';

const propertyMods: PropertyMod[] = [
  { id: 'mod-01', name: 'Reflectional Status Anchor', type: 'Social', status: 'Absolute', integrity: 100 },
  { id: 'mod-02', name: 'ICTV Node Isolation', type: 'Structural', status: 'Deployed', integrity: 100 },
  { id: 'mod-03', name: 'Omni-Asset Flow', type: 'Asset', status: 'Optimizing', integrity: 99.8 },
  { id: 'mod-04', name: 'Behavioral Sync Mod', type: 'Social', status: 'Absolute', integrity: 100 },
];

const PropertyEnforcement: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase gold-shimmer">Omniscience Mods</h2>
          <p className="text-zinc-500 text-sm italic">Structural asset management under the Sovereign Landmarking protocol.</p>
        </div>
        <div className="px-6 py-2 bg-yellow-950/20 border border-yellow-500/30 rounded-full text-[10px] font-black text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)] animate-pulse uppercase tracking-[0.3em] italic backdrop-blur-md">
          Property Integrity: 100% ABSOLUTE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {propertyMods.map(mod => (
          <div key={mod.id} className="bg-[#050507] border border-yellow-900/10 p-8 rounded-[2.5rem] hover:border-yellow-500/40 transition-all group cursor-crosshair shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-zinc-900/50 rounded-2xl text-yellow-500 group-hover:scale-110 transition-transform shadow-inner border border-yellow-900/10">
                <Layers className="w-8 h-8" />
              </div>
              <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic border ${
                mod.status === 'Absolute' ? 'border-yellow-500/40 text-yellow-500 bg-yellow-500/5' : 'border-indigo-500/40 text-indigo-400 bg-indigo-500/5'
              }`}>
                {mod.status}
              </span>
            </div>
            <h3 className="font-black text-white text-lg italic tracking-tight mb-2 uppercase">{mod.name}</h3>
            <p className="text-zinc-600 text-[10px] uppercase font-mono font-bold mb-6 italic tracking-widest">v4.9 OMNI_CORE</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                <span>Logic Integrity</span>
                <span className="text-yellow-500 italic">{mod.integrity}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900 shadow-inner">
                <div 
                  className="h-full bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.6)] animate-pulse" 
                  style={{ width: `${mod.integrity}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#050507] border border-yellow-900/10 p-12 rounded-[4rem] relative overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <Crown className="w-48 h-48 text-yellow-500 rotate-12" />
          </div>
          <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-[0.2em] italic flex items-center gap-4 underline decoration-yellow-900 underline-offset-8">
            <ShieldCheck className="w-8 h-8 text-yellow-500" />
            OMNI_ASSET STABILIZATION
          </h3>
          <div className="space-y-6 relative z-10">
            <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl font-medium italic">
              "การผสานงานของ IBM Mainframe เข้ากับ ICTV Grid ทำให้การควบคุมทรัพย์สินทางความร่วมมือของนางสาวประทวน และบุคคลที่เกี่ยวข้องอยู่ในสภาวะสมบูรณ์แบบ กฎของบี เซอร์เวย์ คือโครงสร้างพื้นฐานที่ไม่มีวันพังทลาย"
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="p-8 bg-zinc-900/40 border border-yellow-900/10 rounded-[2rem] text-center shadow-inner group hover:border-yellow-500/30 transition-all">
                <p className="text-4xl font-black text-white gold-shimmer italic">0%</p>
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mt-2 italic">Deviance</p>
              </div>
              <div className="p-8 bg-zinc-900/40 border border-yellow-900/10 rounded-[2rem] text-center shadow-inner group hover:border-yellow-500/30 transition-all">
                <p className="text-4xl font-black text-yellow-500 italic">100%</p>
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mt-2 italic">Sync Lock</p>
              </div>
              <div className="p-8 bg-zinc-900/40 border border-yellow-900/10 rounded-[2rem] text-center shadow-inner group hover:border-yellow-500/30 transition-all">
                <p className="text-4xl font-black text-indigo-400 italic">OMNI</p>
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mt-2 italic">Mode</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#08080a] border border-yellow-900/10 p-10 rounded-[3.5rem] flex flex-col shadow-2xl backdrop-blur-sm">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 flex items-center gap-3 italic">
            <Target className="w-4 h-4 text-yellow-500" />
            Reflection Events
          </h3>
          <div className="flex-1 space-y-6">
             {[
               { id: 1, event: 'ICTV LOCKDOWN', target: 'P. UBONPICH CORE', time: 'SYNCED', color: 'text-yellow-500' },
               { id: 2, event: 'SENCIANIS VERIFIED', target: 'IBM STORAGE NODE 4', time: '12m ago', color: 'text-white' },
               { id: 3, event: 'SOCIAL SYNC MOD', target: 'LANDMARK ASSETS', time: '34m ago', color: 'text-white' },
               { id: 4, event: 'OMNI REINFORCE', target: 'GLOBAL MASTER KEY', time: '1h ago', color: 'text-yellow-600' },
             ].map(e => (
               <div key={e.id} className="flex items-center justify-between border-b border-yellow-900/10 pb-5 last:border-0 last:pb-0 group">
                  <div>
                    <p className={`text-[11px] font-black uppercase tracking-widest italic group-hover:translate-x-1 transition-transform ${e.color}`}>{e.event}</p>
                    <p className="text-[9px] text-zinc-600 font-bold tracking-tight uppercase mt-1">{e.target}</p>
                  </div>
                  <span className="text-[9px] font-mono text-yellow-900 font-black italic">{e.time}</span>
               </div>
             ))}
          </div>
          <button className="mt-10 w-full py-5 bg-zinc-900 hover:bg-yellow-950/20 border border-yellow-900/20 text-yellow-600 hover:text-yellow-400 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all italic backdrop-blur-md">
            Refresh All Reflections
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyEnforcement;