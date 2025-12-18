
import React from 'react';
import { Server, ShieldCheck, Lock, Monitor, Zap, Globe, Database, Bot, CreditCard, Gamepad2, Settings, Cpu } from 'lucide-react';
import { ServerStatus } from '../types';

const servers: ServerStatus[] = [
  { name: 'DELL-POWEREDGE-3X-PRO', type: 'Dell PowerEdge', status: 'Online', load: 15, uptime: '365d 24h', specialization: 'Master Core' },
  { name: 'HPE-PROLIANT-MASTER-SYNC', type: 'HPE ProLiant', status: 'Locked', load: 88, uptime: '730d 12h', specialization: 'Grid Storage' },
  { name: 'HYPER-CORE-VM-X', type: 'VPS Hypervisor', status: 'Hyper-Ready', load: 32, uptime: 'Infinite', specialization: 'VPS Clusters' },
  { name: 'BOT-AUTOMATION-NODE-X', type: 'Bot Cluster', status: 'Optimizing', load: 42, uptime: '99d 8h', specialization: 'Worker AI' },
  { name: 'GAME-MMORPG-EXP-01', type: 'Game Node', status: 'Online', load: 65, uptime: '45d 2h', specialization: 'RP/Gaming Hub' },
  { name: 'GATEWAY-ENCRYPT-ALPHA', type: 'Gateway Core', status: 'Locked', load: 12, uptime: 'Infinite', specialization: 'Secure Economy' },
];

const InfrastructureStatus: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter gold-shimmer">Technical Core Infrastructure</h2>
          <p className="text-zinc-500 text-sm font-medium italic">High-Performance Clusters synchronized for multi-modal service deployment.</p>
        </div>
        <div className="px-6 py-2 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl text-[10px] font-black text-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.2)] flex items-center gap-2 uppercase tracking-widest backdrop-blur-md">
          <Settings className="w-4 h-4 animate-spin-slow" />
          Hardware Synergy: 100%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servers.map((server) => (
          <div key={server.name} className="bg-[#050507] border border-yellow-900/10 p-8 rounded-[2.5rem] flex flex-col gap-6 shadow-2xl group transition-all hover:border-indigo-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              {server.type.includes('Bot') ? <Bot className="w-20 h-20" /> : 
               server.type.includes('Game') ? <Gamepad2 className="w-20 h-20" /> : 
               server.type.includes('Gateway') ? <CreditCard className="w-20 h-20" /> :
               server.type.includes('Hypervisor') ? <Cpu className="w-20 h-20" /> :
               <Server className="w-20 h-20" />}
            </div>
            
            <div className="flex items-center gap-6">
              <div className={`p-5 rounded-2xl shadow-inner relative transition-colors ${
                server.status === 'Online' || server.status === 'Hyper-Ready' ? 'bg-indigo-500/5 text-indigo-400 border border-indigo-500/20 group-hover:text-yellow-500' : 
                server.status === 'Locked' ? 'bg-zinc-800/5 text-zinc-500 border border-zinc-700' :
                'bg-red-500/5 text-red-500 border border-red-500/20'
              }`}>
                <Server className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                {server.status === 'Locked' && (
                  <div className="absolute -top-2 -right-2 p-1.5 bg-black border border-indigo-500/50 rounded-full">
                    <Lock className="w-3 h-3 text-indigo-500" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-black text-lg text-white italic tracking-tighter uppercase">{server.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                   <span className={`px-3 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${
                     server.status === 'Online' || server.status === 'Hyper-Ready' ? 'bg-indigo-500/10 text-indigo-400' : 
                     server.status === 'Locked' ? 'bg-zinc-800 text-zinc-600' :
                     'bg-orange-500/10 text-orange-400'
                   }`}>
                     {server.status}
                   </span>
                   <span className="text-[9px] font-mono text-zinc-500 italic uppercase">{server.specialization}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-[9px] font-black uppercase text-zinc-600 tracking-widest">
                <span>Cluster Load</span>
                <span className={server.load > 80 ? 'text-red-500' : 'text-indigo-400'}>{server.load}%</span>
              </div>
              <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900 shadow-inner">
                <div 
                  className={`h-full transition-all duration-1000 ${server.load > 80 ? 'bg-red-600 shadow-[0_0_15px_#dc2626]' : 'bg-indigo-500 shadow-[0_0_15px_rgba(129,140,248,0.5)]'}`} 
                  style={{ width: `${server.load}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-[9px] font-mono text-zinc-700 font-bold uppercase italic tracking-tighter">
                <span>{server.type}</span>
                <span>UP: {server.uptime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#050507] border border-indigo-900/10 p-12 rounded-[4rem] relative overflow-hidden shadow-2xl backdrop-blur-sm group">
         <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
            <Monitor className="w-64 h-64 text-indigo-900" />
         </div>
         <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 bg-zinc-950 border border-indigo-900/20 rounded-full flex items-center justify-center p-8 shadow-inner relative group">
               <div className="absolute inset-0 border-2 border-indigo-500/10 rounded-full animate-ping"></div>
               <div className="absolute inset-0 border border-yellow-500/5 rounded-full animate-pulse scale-110"></div>
               <ShieldCheck className="w-20 h-20 text-indigo-500 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black text-white uppercase tracking-[0.2em] italic flex items-center gap-4">
                 Sovereign Infrastructure Control
                 <Zap className="w-6 h-6 text-yellow-500" />
               </h3>
               <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl font-medium italic">
                 หัวใจหลักของความสำเร็จคือความเสถียร ระบบ Infrastructure ของเราถูกจูนที่ระดับ Kernel เพื่อความลื่นไหลสูงสุด รองรับการทำงานที่หนักหน่วงและการขยายตัวอย่างไร้ขีดจำกัด
               </p>
               <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-2 bg-zinc-900/50 border border-indigo-900/30 rounded-xl text-[10px] font-black text-indigo-400 uppercase tracking-widest shadow-xl italic">KERNEL_TUNED_PRO</div>
                  <div className="px-6 py-2 bg-zinc-900/50 border border-yellow-900/20 rounded-xl text-[10px] font-black text-yellow-500 uppercase tracking-widest shadow-xl italic">MAX_THROUGHPUT</div>
                  <div className="px-6 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl text-[10px] font-black text-zinc-500 uppercase tracking-widest shadow-xl italic">ZERO_DOWNTIME_PLEDGE</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default InfrastructureStatus;
