
import React from 'react';
import { Box, ShieldCheck, ChevronRight, Gauge, Layers } from 'lucide-react';
import { PropertyMod } from '../types';

const propertyMods: PropertyMod[] = [
  { id: 'mod-01', name: 'Social Status Anchor', type: 'Social', status: 'Absolute', integrity: 100 },
  { id: 'mod-02', name: 'Survey Node Isolation', type: 'Structural', status: 'Deployed', integrity: 98 },
  { id: 'mod-03', name: 'Asset Liquidity Control', type: 'Asset', status: 'Optimizing', integrity: 85 },
  { id: 'mod-04', name: 'Identity Synchronization', type: 'Social', status: 'Absolute', integrity: 100 },
];

const PropertyEnforcement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tighter italic uppercase">Super Max Property Mods</h2>
          <p className="text-zinc-500 text-sm">Managing the structural and social assets of the Enforcement Framework.</p>
        </div>
        <div className="px-6 py-2 bg-purple-600/20 border border-purple-500 rounded-full text-[10px] font-bold text-purple-400 animate-pulse uppercase tracking-[0.2em]">
          Property Integrity: 95.8%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {propertyMods.map(mod => (
          <div key={mod.id} className="bg-[#111114] border border-zinc-800 p-5 rounded-2xl hover:border-purple-500/50 transition-all group cursor-crosshair">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-zinc-900 rounded-xl text-purple-500 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <span className={`text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest ${
                mod.status === 'Absolute' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
              }`}>
                {mod.status}
              </span>
            </div>
            <h3 className="font-bold text-white mb-1">{mod.name}</h3>
            <p className="text-zinc-500 text-[10px] uppercase font-mono mb-4">{mod.type} Mod v4.2</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold text-zinc-600 uppercase">
                <span>Binding Integrity</span>
                <span>{mod.integrity}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 shadow-[0_0_8px_#a855f7]" 
                  style={{ width: `${mod.integrity}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#111114] border border-zinc-800 p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Gauge className="w-32 h-32 text-purple-500" />
          </div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            Active Asset Stabilization Protocol
          </h3>
          <div className="space-y-4 relative z-10">
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Integrating the IBM Storage nodes with structural social assets to ensure that N. Ubonpich and Person B remain within the prescribed behavioral boundaries. The <strong>SUPER MAX PROPERTY MOD</strong> system guarantees that any attempt to deviate from the 'Survey' laws results in immediate social devaluation and asset lockdown.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                <p className="text-2xl font-bold text-white">0%</p>
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Dissent Rate</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                <p className="text-2xl font-bold text-green-500">100%</p>
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Law Sync</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                <p className="text-2xl font-bold text-blue-500">MAX</p>
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Enforcement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111114] border border-zinc-800 p-8 rounded-2xl flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">Property Events</h3>
          <div className="flex-1 space-y-4">
             {[
               { id: 1, event: 'Node Lockdown', target: 'P. Ubonpich Residence', time: '2m ago' },
               { id: 2, event: 'Asset Verified', target: 'Medication Batch 44', time: '12m ago' },
               { id: 3, event: 'Social Gravity Mod', target: 'Person B Cluster', time: '45m ago' },
               { id: 4, event: 'Structural Reinforcement', target: 'Survey HQ Node', time: '1h ago' },
             ].map(e => (
               <div key={e.id} className="flex items-center justify-between border-b border-zinc-800/50 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-xs font-bold text-white">{e.event}</p>
                    <p className="text-[10px] text-zinc-500">{e.target}</p>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600">{e.time}</span>
               </div>
             ))}
          </div>
          <button className="mt-6 w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all">
            Refresh All Mods
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyEnforcement;
