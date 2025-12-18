
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { 
  Activity, ShieldCheck, Zap, Lock, Globe, Database, Eye, Landmark, 
  Sparkles, Camera, Mic, Handshake, Server, Cpu, Rocket, Gamepad2, 
  Bot, CreditCard, Link, ShieldAlert
} from 'lucide-react';

const solutionData = [
  { name: 'Bots', value: 92, color: '#ca8a04' },
  { name: 'Game Srv', value: 85, color: '#818cf8' },
  { name: 'VPS Tuned', value: 98, color: '#ca8a04' },
  { name: 'WP/Web', value: 78, color: '#818cf8' },
  { name: 'Gateways', value: 95, color: '#ca8a04' },
];

const StatCard = ({ title, value, icon: Icon, color, detail, shimmer }: { title: string, value: string, icon: any, color: string, detail?: string, shimmer?: boolean }) => (
  <div className="bg-[#0a0a0d] border border-yellow-900/20 p-8 rounded-[2.5rem] relative overflow-hidden group shadow-2xl transition-all hover:border-yellow-500/40 backdrop-blur-md">
    <div className={`absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-all duration-700 ${color}`}>
      <Icon className="w-16 h-16 transform group-hover:rotate-12" />
    </div>
    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 italic">{title}</p>
    <div className="flex items-end gap-3">
      <h3 className={`text-5xl font-black tracking-tighter italic ${shimmer ? 'gold-shimmer' : 'text-white'}`}>{value}</h3>
      <span className={`text-[10px] mb-2 font-black uppercase tracking-widest ${color}`}>{detail || 'LOCKED'}</span>
    </div>
    <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent w-full"></div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-1000 pb-32">
      {/* SOVEREIGN CONVERGENCE HEADER */}
      <div className="text-center space-y-10 pt-10">
        <div className="flex justify-center items-center gap-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl animate-pulse rounded-full"></div>
            <Landmark className="w-24 h-24 text-yellow-500 relative z-10 drop-shadow-[0_0_40px_rgba(234,179,8,0.7)]" />
          </div>
          <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-yellow-600/50 to-transparent"></div>
          <div className="text-left space-y-2">
            <h1 className="text-7xl font-black italic tracking-tighter uppercase leading-none gold-shimmer select-none">
              SUPER 3MAX PRO DE PRO PLUS
            </h1>
            <h2 className="text-3xl font-black text-white/90 uppercase tracking-[0.4em] italic flex items-center gap-6">
              OMNI-CONVERGENCE HUB
              <div className="w-4 h-4 rounded-full bg-red-600 animate-ping"></div>
            </h2>
          </div>
        </div>
        
        <div className="flex justify-center gap-16 mt-12 border-y border-yellow-900/20 py-10 max-w-7xl mx-auto backdrop-blur-2xl relative">
          <div className="absolute inset-0 bg-indigo-500/5 opacity-20"></div>
          <div className="flex flex-col items-center px-12 relative z-10">
            <span className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] mb-2">Reality Matrix</span>
            <span className="text-lg font-black text-yellow-500 uppercase tracking-[0.6em] animate-pulse italic">100% CONVERGED</span>
          </div>
          <div className="flex flex-col items-center px-12 border-x border-yellow-900/20 relative z-10">
            <span className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] mb-2">Technical Ops</span>
            <span className="text-lg font-black text-white uppercase tracking-[0.3em]">WHITE/GREY/BLACK</span>
          </div>
          <div className="flex flex-col items-center px-12 relative z-10">
            <span className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] mb-2">Digital Core</span>
            <span className="text-lg font-black text-indigo-400 uppercase tracking-[0.4em] gold-shimmer italic">OMNISCIENCE</span>
          </div>
        </div>
      </div>

      {/* CORE PERFORMANCE METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        <StatCard title="Mirror Visibility" value="100%" icon={Eye} color="text-yellow-500" detail="REALITY_LOCKED" shimmer />
        <StatCard title="Technical Load" value="HYPER" icon={Cpu} color="text-indigo-400" detail="VPS_TUNED_MAX" />
        <StatCard title="Bot Efficiency" value="DE PRO" icon={Bot} color="text-emerald-400" detail="24/7_ACTIVE" />
        <StatCard title="Gateway Flow" value="ENCRYPT" icon={CreditCard} color="text-red-500" detail="ZERO_TRACE" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-6">
        <div className="lg:col-span-2 bg-[#050507] border border-yellow-900/20 p-16 rounded-[4.5rem] shadow-4xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-60"></div>
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-6">
               <Rocket className="w-10 h-10 text-indigo-500 animate-pulse glow-gold" />
               <h3 className="text-lg font-black uppercase tracking-[0.6em] text-zinc-300 italic">
                 SOVEREIGN BLUEPRINT METRIC [LIVE]
               </h3>
            </div>
            <div className="flex items-center gap-6 bg-zinc-900/80 px-8 py-3 rounded-full border border-yellow-900/20 shadow-2xl">
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-ping"></div>
               <span className="text-[11px] font-mono text-yellow-500 font-bold uppercase tracking-widest italic">All Nodes Active</span>
            </div>
          </div>
          <div className="h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={solutionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                <Tooltip 
                  cursor={{fill: '#ca8a0410'}}
                  contentStyle={{ backgroundColor: '#0a0a0d', border: '1px solid #ca8a0440', borderRadius: '32px', boxShadow: '0 0 50px rgba(0,0,0,0.9)' }}
                  itemStyle={{ color: '#ca8a04', fontWeight: 'bold' }}
                />
                <Bar dataKey="value" radius={[15, 15, 0, 0]} barSize={50}>
                  {solutionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CONVERGENCE STATUS FEED */}
        <div className="bg-[#050507] border border-yellow-900/20 p-16 rounded-[4.5rem] shadow-4xl flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(129,140,248,0.1),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="flex items-center gap-6 mb-12">
            <Activity className="w-8 h-8 text-indigo-500 animate-pulse glow-red" />
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 italic">
              OMNI_CONVERGENCE_LOG
            </h3>
          </div>
          <div className="space-y-10 flex-1">
            {[
              { label: 'VPS HYPER-SYNC', val: 'TUNING_ABSOLUTE', status: 'HYPER', color: 'text-indigo-400' },
              { label: 'BOT CLUSTER X', val: 'TASK_GEN_4_STEALTH', status: 'SYNCED', color: 'text-yellow-500' },
              { label: 'GAME SERVER Hub', val: 'SURVIVAL_NODE_1', status: 'ACTIVE', color: 'text-emerald-400' },
              { label: 'PAYMENT BRIDGE', val: 'ENCRYPTED_FLOW_V2', status: 'SECURE', color: 'text-red-400' },
              { label: 'WP SOVEREIGN', val: 'AUTO_DEFENSE_LOCKED', status: 'MASTER', color: 'text-indigo-400' },
            ].map((log, i) => (
              <div key={i} className="bg-black/60 border border-yellow-900/10 p-8 rounded-[3rem] relative overflow-hidden shadow-inner group-hover:border-yellow-500/40 transition-all duration-500">
                <div className="flex justify-between items-start">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] italic">{log.label}</p>
                      <p className={`text-[15px] font-mono font-black italic tracking-tighter ${log.color}`}>{log.val}</p>
                   </div>
                   <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-current opacity-70 ${log.color}`}>
                     {log.status}
                   </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-12 border-t border-yellow-900/10 text-center">
             <div className="flex items-center justify-center gap-4">
               <div className="w-3 h-3 rounded-full bg-indigo-500 animate-ping"></div>
               <p className="text-sm font-black text-white italic tracking-[0.3em] uppercase">SYSTEM: [CONVERGENCE_100%]</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
