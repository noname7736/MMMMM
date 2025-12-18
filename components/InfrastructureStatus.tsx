
import React from 'react';
import { Server, Cpu, Database, Network, ShieldCheck, Lock, FileCode } from 'lucide-react';
import { ServerStatus } from '../types';

const servers: ServerStatus[] = [
  { name: 'ENFORCE-01', type: 'HPE ProLiant', status: 'Online', load: 34, uptime: '142d 12h' },
  { name: 'CORE-CTRL', type: 'Dell PowerEdge', status: 'Locked', load: 68, uptime: '45d 08h' },
  { name: 'STORAGE-SVR', type: 'IBM Storage', status: 'Online', load: 12, uptime: '210d 02h' },
  { name: 'INTEGRITY-VAULT', type: 'IBM Storage', status: 'Online', load: 5, uptime: 'Infinite' },
];

const InfrastructureStatus: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Iron Rule Infrastructure</h2>
          <p className="text-zinc-500 text-sm font-medium">Enterprise-grade hardware clusters with Silicon Root of Trust.</p>
        </div>
        <div className="px-6 py-2 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl text-[10px] font-black text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)] flex items-center gap-2 uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4" />
          Undeletable Ledger Active
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servers.map((server) => (
          <div key={server.name} className="bg-[#0a0a0c] border border-zinc-800/60 p-8 rounded-[2.5rem] flex items-center gap-8 shadow-2xl group transition-all hover:border-indigo-500/30">
            <div className={`p-6 rounded-2xl shadow-inner ${server.status === 'Online' ? 'bg-green-500/5 text-green-500 border border-green-500/20' : server.status === 'Locked' ? 'bg-indigo-500/5 text-indigo-500 border border-indigo-500/20' : 'bg-red-500/5 text-red-500 border border-red-500/20'}`}>
              <Server className="w-12 h-12 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-black text-xl text-white italic tracking-tighter uppercase">{server.name}</h3>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${server.status === 'Online' ? 'bg-green-500/10 text-green-500' : server.status === 'Locked' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-red-500/10 text-red-500'}`}>
                  {server.status}
                </span>
              </div>
              <p className="text-zinc-500 text-[10px] mb-6 font-mono font-bold uppercase tracking-tight">{server.type} • Uptime: {server.uptime}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-[9px] font-black uppercase text-zinc-600 tracking-widest">
                  <span>Resource Saturation</span>
                  <span>{server.load}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50 shadow-inner">
                  <div 
                    className={`h-full transition-all duration-1000 ${server.load > 80 ? 'bg-red-500' : 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]'}`} 
                    style={{ width: `${server.load}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0a0a0c] border border-zinc-800/60 p-8 rounded-[2.5rem] text-center space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Cpu className="w-10 h-10 text-indigo-400 mx-auto group-hover:animate-spin-slow" />
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm italic">Silicon Root of Trust</h4>
            <p className="text-[10px] text-zinc-500 font-medium leading-relaxed mt-2 uppercase">Hardware-level encryption ensuring the "No Destruction" mandate.</p>
          </div>
          <div className="text-[10px] font-mono p-3 bg-black rounded-2xl text-indigo-500 border border-indigo-900/40 shadow-inner">
            HASH_VERIFIED: 0x8F2A...B901
          </div>
        </div>
        
        <div className="bg-[#0a0a0c] border border-zinc-800/60 p-8 rounded-[2.5rem] text-center space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Database className="w-10 h-10 text-purple-400 mx-auto group-hover:scale-110 transition-transform" />
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm italic">Immutable Ledger</h4>
            <p className="text-[10px] text-zinc-500 font-medium leading-relaxed mt-2 uppercase">Protocol logs and code logic stored in unerasable IBM nodes.</p>
          </div>
          <div className="text-[10px] font-mono p-3 bg-black rounded-2xl text-purple-500 border border-purple-900/40 shadow-inner">
            STATE: READ_ONLY_IMMUTABLE
          </div>
        </div>

        <div className="bg-[#0a0a0c] border border-zinc-800/60 p-8 rounded-[2.5rem] text-center space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <FileCode className="w-10 h-10 text-green-400 mx-auto group-hover:animate-pulse" />
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm italic">Undeletable Node</h4>
            <p className="text-[10px] text-zinc-500 font-medium leading-relaxed mt-2 uppercase">Bypassing all deletion attempts. The code is sovereign and eternal.</p>
          </div>
          <div className="text-[10px] font-mono p-3 bg-black rounded-2xl text-green-500 border border-green-900/40 shadow-inner">
            SANCTITY_LVL: ABSOLUTE_MAX
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureStatus;
