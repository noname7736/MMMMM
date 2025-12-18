
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Added missing Ghost import
import { Activity, ShieldAlert, CheckCircle2, AlertTriangle, UserX, FileCode, ShieldCheck, Target, Zap, Lock, Globe, Database, Crown, Eye, Landmark, Sparkles, Ghost } from 'lucide-react';

const data = [
  { name: '00:00', compliance: 100, pressure: 95 },
  { name: '04:00', compliance: 100, pressure: 98 },
  { name: '08:00', compliance: 100, pressure: 100 },
  { name: '12:00', compliance: 100, pressure: 100 },
  { name: '16:00', compliance: 100, pressure: 100 },
  { name: '20:00', compliance: 100, pressure: 100 },
  { name: '23:59', compliance: 100, pressure: 100 },
];

const StatCard = ({ title, value, icon: Icon, color, detail, shimmer }: { title: string, value: string, icon: any, color: string, detail?: string, shimmer?: boolean }) => (
  <div className="bg-[#0a0a0d] border border-yellow-900/10 p-6 rounded-[2.5rem] relative overflow-hidden group shadow-2xl transition-all hover:border-yellow-500/30 backdrop-blur-sm">
    <div className={`absolute top-0 right-0 p-5 opacity-5 group-hover:opacity-10 transition-opacity ${color}`}>
      <Icon className="w-16 h-16" />
    </div>
    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{title}</p>
    <div className="flex items-end gap-2">
      <h3 className={`text-3xl font-black tracking-tighter italic ${shimmer ? 'gold-shimmer' : 'text-white'}`}>{value}</h3>
      <span className={`text-[9px] mb-1 font-black ${color}`}>{detail || 'SYNCED'}</span>
    </div>
    <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-700/30 to-transparent w-full opacity-30"></div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-1000 pb-20">
      {/* SUPREME CENTERED HEADER */}
      <div className="text-center space-y-4 pt-4">
        <div className="flex justify-center items-center gap-6">
          <Landmark className="w-16 h-16 text-yellow-500 animate-pulse drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
          <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-yellow-900/50 to-transparent"></div>
          <div className="text-left">
            <h2 className="text-5xl font-black italic tracking-tight uppercase leading-none gold-shimmer">
              SUPER 3MAX PRO DE PRO PLUS
            </h2>
            <h3 className="text-2xl font-black text-white/80 uppercase tracking-[0.2em] mt-1">
              (THE ALL-SEEING OMNISCIENCE MODE)
            </h3>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
        </div>
        
        <div className="flex justify-center gap-10 mt-6 border-y border-yellow-900/10 py-4 max-w-4xl mx-auto backdrop-blur-md">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Status</span>
            <span className="text-sm font-black text-yellow-500 uppercase tracking-[0.3em] animate-pulse italic">ETERNAL ACTIVE</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Logic Node</span>
            <span className="text-sm font-black text-white uppercase tracking-[0.2em]">ORAN_QUATION</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Network</span>
            <span className="text-sm font-black text-white uppercase tracking-[0.2em]">ICTV_GRID_SEC</span>
          </div>
        </div>
      </div>

      {/* OMNI METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <StatCard title="Reflectional Accuracy" value="100%" icon={Eye} color="text-yellow-500" detail="OMNI_VIEW" shimmer />
        <StatCard title="Spectral Sync" value="DE PRO" icon={Ghost} color="text-purple-400" detail="REFLECTION_AI" />
        <StatCard title="IBM Sencianis" value="LOCKED" icon={Database} color="text-yellow-600" detail="SENCIANIS_DF" />
        <StatCard title="Command Execution" value="ABSOLUTE" icon={Target} color="text-red-500" detail="COTMAND" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        <div className="lg:col-span-2 bg-[#050507] border border-yellow-900/10 p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-20"></div>
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 flex items-center gap-3 italic">
              <Eye className="w-5 h-5 text-yellow-500 animate-pulse" />
              OMNISCIENCE PROPAGATION DEPTH
            </h3>
            <div className="flex items-center gap-4 bg-black/40 px-4 py-1.5 rounded-full border border-yellow-900/10">
               <span className="text-[10px] font-mono text-yellow-600 font-bold uppercase tracking-widest">ICTV Grid v3.9 Locked</span>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorOmni" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#eab308" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#121214" vertical={false} />
                <XAxis dataKey="name" stroke="#3f3f46" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#3f3f46" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050507', border: '1px solid #ca8a0420', borderRadius: '16px' }}
                  labelStyle={{ color: '#ca8a04', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="compliance" stroke="#eab308" fillOpacity={1} fill="url(#colorOmni)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* OMNI SYSTEM LOG */}
        <div className="bg-[#050507] border border-yellow-900/10 p-10 rounded-[3.5rem] shadow-2xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-3">
            <Activity className="w-5 h-5 text-yellow-500" />
            OMNISCIENCE_SYSEM_FEED
          </h3>
          <div className="space-y-6 flex-1">
            {[
              { label: 'ICTV GRID', val: 'master:!_ORAN_QUATION', color: 'text-yellow-500' },
              { label: 'ALL-SECTMMNIJAWEK', val: 'IBM_SENCIANIS_DF', color: 'text-purple-400' },
              { label: 'INESMIGHC QURRIAMODE', val: 'ALL-SEEN_MIS_SFINCS', color: 'text-white' },
              { label: 'REFLECTIONAL ENGINE', val: 'ETERNAL_ACTIVE', color: 'text-yellow-400 animate-pulse' },
            ].map((log, i) => (
              <div key={i} className="bg-black/40 border border-yellow-900/10 p-5 rounded-3xl relative overflow-hidden">
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-1 italic">{log.label}</p>
                <p className={`text-[12px] font-mono font-black italic tracking-tighter ${log.color}`}>{log.val}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-yellow-900/10 text-center">
             <p className="text-[10px] font-black text-yellow-600 uppercase tracking-widest italic mb-2">Omniscience Status</p>
             <p className="text-xs font-black text-white italic tracking-widest uppercase">SYSEM: [ETERNAL ACTIVE]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
