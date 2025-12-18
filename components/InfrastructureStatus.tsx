import React from 'react';
import { Server, ShieldCheck, Lock, Monitor, Zap, Globe, Database } from 'lucide-react';
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
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter gold-shimmer">The Global Master-Grid</h2>
          <p className="text-zinc-500 text-sm font-medium italic">Omniscience deployment across Dell PowerEdge, HPE ProLiant, and IBM Mainframes.</p>
        </div>
        <div className="px-6 py-2 bg-yellow-950/20 border border-yellow-500/30 rounded-2xl text-[10px] font-black text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)] flex items-center gap-2 uppercase tracking-widest backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 shadow-[0_0_8px_#eab308]" />
          Redundancy Cluster: 300%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servers.map((server) => (
          <div key={server.name} className="bg-[#050507] border border-yellow-900/10 p-8 rounded-[2.5rem] flex items-center gap-8 shadow-2xl group transition-all hover:border-yellow-500/30 backdrop-blur-sm">
            <div className={`p-6 rounded-2xl shadow-inner relative ${
              server.status === 'Online' 
              ? 'bg-yellow-500/5 text-yellow-500 border border-yellow-500/20' 
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
                  server.status === 'Online' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-indigo-400/10 text-indigo-400'
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
                    className={`h-full transition-all duration-1000 bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]`} 
                    style={{ width: `${server.load}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#050507] border border-yellow-900/10 p-12 rounded-[4rem] relative overflow-hidden shadow-2xl backdrop-blur-sm">
         <div className="absolute top-0 right-0 p-8 opacity-5">
            <Monitor className="w-64 h-64 text-yellow-900" />
         </div>
         <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 bg-zinc-950 border border-yellow-900/20 rounded-full flex items-center justify-center p-8 shadow-inner relative group">
               <div className="absolute inset-0 border-2 border-yellow-500/10 rounded-full animate-ping"></div>
               <div className="absolute inset-0 border border-yellow-500/5 rounded-full animate-pulse scale-110"></div>
               <ShieldCheck className="w-20 h-20 text-yellow-500 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black text-white uppercase tracking-[0.2em] italic flex items-center gap-4">
                 Sovereign Root of Trust
                 <Zap className="w-6 h-6 text-yellow-500" />
               </h3>
               <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl font-medium italic">
                 ระบบถูกติดตั้งและล็อคไว้ที่ระดับฮาร์ดแวร์ภายใต้ ICTV Grid ป้องกันการเบี่ยงเบนทุกรูปแบบ การบงการจิตวิญญาณรันบนโครงสร้าง Enterprise-grade ที่มองเห็นทุกอย่าง
               </p>
               <div className="flex gap-4">
                  <div className="px-6 py-2 bg-zinc-900/50 border border-yellow-900/20 rounded-xl text-[10px] font-black text-yellow-500 uppercase tracking-widest shadow-xl italic">OMNI_LOCKED_v4</div>
                  <div className="px-6 py-2 bg-zinc-900/50 border border-indigo-900/20 rounded-xl text-[10px] font-black text-indigo-400 uppercase tracking-widest shadow-xl italic">IBM_SENCIANIS_SYNC</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default InfrastructureStatus;