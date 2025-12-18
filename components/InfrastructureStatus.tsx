
import React from 'react';
import { Server, Cpu, Database, Network, ShieldCheck, Lock, FileCode, Monitor, Zap } from 'lucide-react';
import { ServerStatus } from '../types';

const servers: ServerStatus[] = [
  { name: 'DELL-POWEREDGE-3X-PRO', type: 'Dell PowerEdge', status: 'Online', load: 15, uptime: '365d 24h' },
  { name: 'HPE-PROLIANT-MASTER-SYNC', type: 'HPE ProLiant', status: 'Locked', load: 88, uptime: '730d 12h' },
  { name: 'IBM-MAINFRAME-QUANTUM-H', type: 'IBM Storage', status: 'Online', load: 4, uptime: 'Infinite' },
  { name: 'GLOBAL-GRAVITY-HUB-01', type: 'IBM Storage', status: 'Online', load: 2, uptime: 'Infinite' },
];

const InfrastructureStatus: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter gold-text-shimmer">The Global Master-Grid</h2>
          <p className="text-zinc-500 text-sm font-medium italic">Operating on Dell PowerEdge, HPE ProLiant, and IBM Mainframes across 3 global regions.</p>
        </div>
        <div className="px-6 py-2 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-[10px] font-black text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center gap-2 uppercase tracking-widest backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 shadow-[0_0_8px_#10b981]" />
          Redundancy Cluster: 300%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servers.map((server) => (
          <div key={server.name} className="bg-[#050507] border border-zinc-800/60 p-8 rounded-[2.5rem] flex items-center gap-8 shadow-2xl group transition-all hover:border-emerald-500/30">
            <div className={`p-6 rounded-2xl shadow-inner relative ${
              server.status === 'Online' 
              ? 'bg-emerald-500/5 text-emerald-500 border border-emerald-500/20' 
              : 'bg-indigo-500/5 text-indigo-500 border border-indigo-500/20'
            }`}>
              <Server className="w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
              {server.status === 'Locked' && (
                <div className="absolute -top-2 -right-2 p-1.5 bg-black border border-indigo-500/50 rounded-full">
                  <Lock className="w-3 h-3 text-indigo-500" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-black text-xl text-white italic tracking-tighter uppercase">{server.name}</h3>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                  server.status === 'Online' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-indigo-500/10 text-indigo-400'
                }`}>
                  {server.status}
                </span>
              </div>
              <p className="text-zinc-600 text-[10px] mb-6 font-mono font-bold uppercase tracking-tight">{server.type} • Redundancy: ACTIVE</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-[9px] font-black uppercase text-zinc-600 tracking-widest">
                  <span>Logic Throughput</span>
                  <span>{server.load}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900 shadow-inner">
                  <div 
                    className={`h-full transition-all duration-1000 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]`} 
                    style={{ width: `${server.load}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#050507] border border-zinc-800 p-12 rounded-[4rem] relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 p-8 opacity-5">
            <Monitor className="w-64 h-64 text-zinc-700" />
         </div>
         <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 bg-zinc-950 border border-zinc-900 rounded-full flex items-center justify-center p-8 shadow-inner relative group">
               <div className="absolute inset-0 border-2 border-emerald-500/10 rounded-full animate-ping"></div>
               <div className="absolute inset-0 border border-emerald-500/5 rounded-full animate-pulse scale-110"></div>
               <ShieldCheck className="w-20 h-20 text-emerald-500 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black text-white uppercase tracking-[0.2em] italic flex items-center gap-4">
                 Silicon Root of Trust
                 <Zap className="w-6 h-6 text-yellow-500" />
               </h3>
               <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl font-medium italic">
                 ระบบถูกติดตั้งและล็อคไว้ที่ระดับฮาร์ดแวร์ ป้องกันการแก้ไขใดๆ โดยเด็ดขาด การบงการจิตวิญญาณรันบนโครงสร้าง Enterprise-grade ที่สมบูรณ์แบบที่สุดเท่าที่เคยมีมา
               </p>
               <div className="flex gap-4">
                  <div className="px-6 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl text-[10px] font-black text-emerald-500 uppercase tracking-widest shadow-xl">RHEL_SOVEREIGN_V10</div>
                  <div className="px-6 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl text-[10px] font-black text-yellow-500 uppercase tracking-widest shadow-xl">QUANTUM_LOCKED</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default InfrastructureStatus;