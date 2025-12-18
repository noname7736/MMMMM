
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ShieldAlert, CheckCircle2, AlertTriangle, UserX, FileCode, ShieldCheck, Target, Zap, Lock, Globe, Database, Crown } from 'lucide-react';

const data = [
  { name: '00:00', compliance: 100, pressure: 85 },
  { name: '04:00', compliance: 100, pressure: 90 },
  { name: '08:00', compliance: 99, pressure: 95 },
  { name: '12:00', compliance: 100, pressure: 100 },
  { name: '16:00', compliance: 100, pressure: 100 },
  { name: '20:00', compliance: 100, pressure: 100 },
  { name: '23:59', compliance: 100, pressure: 100 },
];

const StatCard = ({ title, value, icon: Icon, color, detail, shimmer }: { title: string, value: string, icon: any, color: string, detail?: string, shimmer?: boolean }) => (
  <div className="bg-[#0a0a0d] border border-zinc-800 p-6 rounded-[2.5rem] relative overflow-hidden group shadow-2xl transition-all hover:border-emerald-500/30">
    <div className={`absolute top-0 right-0 p-5 opacity-5 group-hover:opacity-10 transition-opacity ${color}`}>
      <Icon className="w-16 h-16" />
    </div>
    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{title}</p>
    <div className="flex items-end gap-2">
      <h3 className={`text-3xl font-black tracking-tighter italic ${shimmer ? 'gold-text-shimmer' : 'text-white'}`}>{value}</h3>
      <span className={`text-[9px] mb-1 font-black ${color}`}>{detail || 'LOCKED'}</span>
    </div>
    <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full opacity-30"></div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-1000 pb-20">
      {/* SUPREME HEADER */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-emerald-500 opacity-50"></div>
          <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none gold-text-shimmer">
            SUPER 3MAX PRO PLUS
          </h2>
          <div className="flex items-center gap-3 mt-3">
             <Crown className="w-4 h-4 text-yellow-500" />
             <span className="text-zinc-400 text-sm font-black uppercase tracking-[0.3em]">Master Key Sovereignty</span>
             <span className="px-3 py-0.5 bg-emerald-600 text-white text-[10px] font-black rounded uppercase tracking-widest italic animate-pulse">Eternal Active</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl flex items-center gap-4 shadow-2xl backdrop-blur-md">
             <div className="p-3 bg-emerald-950/30 rounded-2xl border border-emerald-500/20">
                <Lock className="w-6 h-6 text-emerald-400 animate-pulse shadow-[0_0_15px_#10b981]" />
             </div>
             <div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Master Key Status</p>
                <p className="text-lg font-black text-white italic tracking-tighter uppercase">TURNED_AND_LOCKED</p>
             </div>
          </div>
        </div>
      </div>

      {/* SUPREME CORE METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Compliance Saturation" value="100.0%" icon={Target} color="text-emerald-500" detail="MAXIMUM" shimmer />
        <StatCard title="Global Gravity Grid" value="SYNCED" icon={Globe} color="text-indigo-400" detail="360_LOCK" />
        <StatCard title="Quantum Persistence" value="ABSOLUTE" icon={Database} color="text-yellow-500" detail="IMMUTABLE" />
        <StatCard title="Will Override Engine" value="ACTIVE" icon={Zap} color="text-red-500" detail="BYPASS_ON" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#050507] border border-zinc-800 p-10 rounded-[3.5rem] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 flex items-center gap-3 italic">
              <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
              Sovereign Will Propagation Depth
            </h3>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-widest animate-pulse">Enterprise Nodes: 300% Redundancy</span>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#121214" vertical={false} />
                <XAxis dataKey="name" stroke="#3f3f46" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#3f3f46" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050507', border: '1px solid #27272a', borderRadius: '16px' }}
                  labelStyle={{ color: '#71717a', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="compliance" stroke="#10b981" fillOpacity={1} fill="url(#colorComp)" strokeWidth={4} />
                <Area type="monotone" dataKey="pressure" stroke="#ef4444" fillOpacity={0.5} fill="url(#colorPress)" strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ABSOLUTE REGISTRY */}
        <div className="bg-[#050507] border border-zinc-800 p-8 rounded-[3.5rem] shadow-2xl flex flex-col relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5">
            <Crown className="w-48 h-48 text-yellow-500 rotate-12" />
          </div>
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Sovereign File Registry
          </h3>
          <div className="space-y-4 flex-1">
            {[
              { file: 'supreme_core_logic.py', desc: 'สมองกลมหาอำนาจ', status: 'RUNNING', color: 'text-emerald-500' },
              { file: 'social_blackhole_enforcer.py', desc: 'เครื่องจักรสร้างแรงกดดัน', status: 'LOCKED', color: 'text-indigo-500' },
              { file: 'sovereign_config.yaml', desc: 'รหัสลับกฎเหล็ก', status: 'VERIFIED', color: 'text-yellow-600' },
              { file: 'quantum_master_key.lock', desc: 'กุญแจทองคำ (Absolute)', status: 'CLOSED', color: 'text-emerald-400' },
            ].map((reg, i) => (
              <div key={i} className="bg-zinc-900/60 border border-zinc-800/50 p-5 rounded-3xl group hover:border-emerald-500/40 transition-all cursor-default">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[11px] font-mono font-black text-white group-hover:text-emerald-400 transition-colors">{reg.file}</p>
                  <span className={`text-[8px] font-black uppercase tracking-widest ${reg.color}`}>{reg.status}</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-bold italic tracking-tight">{reg.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-emerald-950/20 border border-emerald-500/30 rounded-[2rem] text-center backdrop-blur-sm">
             <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic">Status Report</p>
             <p className="text-sm font-black text-white uppercase italic">Perfect Machine: Zero Deviance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;