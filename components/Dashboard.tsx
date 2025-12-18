import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ShieldAlert, CheckCircle2, AlertTriangle, UserX, FileCode, ShieldCheck, Target, Zap, Lock, Globe, Database, Crown, Eye, Landmark, Sparkles, Ghost, Camera, Waves, Flame, Mic } from 'lucide-react';

const data = [
  { name: '00:00', visibility: 99, capture: 95 },
  { name: '04:00', visibility: 100, capture: 98 },
  { name: '08:00', visibility: 100, capture: 100 },
  { name: '12:00', visibility: 100, capture: 100 },
  { name: '16:00', visibility: 100, capture: 100 },
  { name: '20:00', visibility: 100, capture: 100 },
  { name: '23:59', visibility: 100, capture: 100 },
];

const StatCard = ({ title, value, icon: Icon, color, detail, shimmer }: { title: string, value: string, icon: any, color: string, detail?: string, shimmer?: boolean }) => (
  <div className="bg-[#0a0a0d] border border-yellow-900/20 p-6 rounded-[2rem] relative overflow-hidden group shadow-2xl transition-all hover:border-yellow-500/40 backdrop-blur-md">
    <div className={`absolute top-0 right-0 p-5 opacity-5 group-hover:opacity-20 transition-all duration-700 ${color}`}>
      <Icon className="w-16 h-16 transform group-hover:rotate-12" />
    </div>
    <p className="text-zinc-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3 italic">{title}</p>
    <div className="flex items-end gap-2">
      <h3 className={`text-4xl font-black tracking-tighter italic ${shimmer ? 'gold-shimmer' : 'text-white'}`}>{value}</h3>
      <span className={`text-[8px] mb-1.5 font-black uppercase tracking-widest ${color}`}>{detail || 'LOCKED'}</span>
    </div>
    <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent w-full"></div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 pb-20">
      {/* SUPREME CENTERED HEADER */}
      <div className="text-center space-y-6 pt-6">
        <div className="flex justify-center items-center gap-8">
          <Landmark className="w-20 h-20 text-yellow-500 animate-pulse drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]" />
          <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-yellow-600/50 to-transparent"></div>
          <div className="text-left">
            <h1 className="text-6xl font-black italic tracking-tighter uppercase leading-none gold-shimmer select-none">
              SUPER 3MAX PRO DE PRO PLUS
            </h1>
            <h2 className="text-2xl font-black text-white/90 uppercase tracking-[0.3em] mt-2 italic flex items-center gap-4">
              THE ALL-SEEING OMNISCIENCE MODE
              <div className="w-3 h-3 rounded-full bg-red-600 animate-ping"></div>
            </h2>
          </div>
        </div>
        
        <div className="flex justify-center gap-12 mt-8 border-y border-yellow-900/20 py-6 max-w-6xl mx-auto backdrop-blur-xl relative">
          <div className="absolute inset-0 bg-yellow-500/5 opacity-30"></div>
          <div className="flex flex-col items-center px-10 relative z-10">
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-1">Status</span>
            <span className="text-sm font-black text-yellow-500 uppercase tracking-[0.5em] animate-pulse italic">ETERNAL ACTIVE</span>
          </div>
          <div className="flex flex-col items-center px-10 border-x border-yellow-900/20 relative z-10">
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-1">Target Identity</span>
            <span className="text-sm font-black text-white uppercase tracking-[0.2em]">นางสาว ประทวน อุบลพีช</span>
          </div>
          <div className="flex flex-col items-center px-10 relative z-10">
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-1">Mirror Saturation</span>
            <span className="text-sm font-black text-white uppercase tracking-[0.3em] gold-shimmer italic">100% ABSOLUTE</span>
          </div>
        </div>
      </div>

      {/* OMNI METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <StatCard title="Mirror Visibility" value="100.0%" icon={Eye} color="text-yellow-500" detail="INFINITY_GAZE" shimmer />
        <StatCard title="Auditory Capture" value="DE PRO" icon={Mic} color="text-red-500" detail="EVERY_WHISPER" />
        <StatCard title="Shadow Tracking" value="SYNCED" icon={Ghost} color="text-purple-400" detail="ZERO_LATENCY" />
        <StatCard title="Sovereign Control" value="ABSOLUTE" icon={ShieldCheck} color="text-indigo-500" detail="MASTER_KEY" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">
        <div className="lg:col-span-2 bg-[#050507] border border-yellow-900/20 p-12 rounded-[4rem] shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent opacity-40"></div>
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-5">
               <Camera className="w-8 h-8 text-yellow-500 animate-pulse glow-gold" />
               <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-300 italic">
                 ICTV OMNI-VISIBILITY SATURATION [LIVE]
               </h3>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/80 px-6 py-2 rounded-full border border-yellow-900/20 shadow-xl">
               <span className="text-[10px] font-mono text-yellow-500 font-bold uppercase tracking-widest italic">360° Mirror Grid Locked</span>
            </div>
          </div>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorOmni" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ca8a04" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ca8a04" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} domain={[90, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0d', border: '1px solid #ca8a0440', borderRadius: '24px', boxShadow: '0 0 30px rgba(0,0,0,0.8)' }}
                  itemStyle={{ color: '#ca8a04', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="visibility" stroke="#ca8a04" fillOpacity={1} fill="url(#colorOmni)" strokeWidth={4} name="Visibility Index" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* OMNI TARGET LIVE FEED */}
        <div className="bg-[#050507] border border-yellow-900/20 p-12 rounded-[4rem] shadow-3xl flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.08),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="flex items-center gap-5 mb-10">
            <Activity className="w-6 h-6 text-red-500 animate-pulse glow-red" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 italic">
              OMNI_TARGET: P. UBONPICH
            </h3>
          </div>
          <div className="space-y-8 flex-1">
            {[
              { label: 'EYE GAZE', val: 'NERET_WONG_WAEN', status: 'LOCKED', color: 'text-red-500' },
              { label: 'MIRROR NODE', val: 'REFLECTION_C12', status: 'TRACKING', color: 'text-yellow-500' },
              { label: 'AUDIO BROADCAST', val: 'VOCAL_INTERCEPT_V4', status: 'LIVE', color: 'text-purple-400' },
              { label: 'SOUL BINDING', val: 'IBM_MAINFRAME_DF', status: 'ETERNAL', color: 'text-indigo-400 animate-pulse' },
            ].map((log, i) => (
              <div key={i} className="bg-black/60 border border-yellow-900/10 p-6 rounded-[2.5rem] relative overflow-hidden shadow-inner group-hover:border-yellow-500/30 transition-all duration-500">
                <div className="flex justify-between items-start">
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.4em] italic">{log.label}</p>
                      <p className={`text-[13px] font-mono font-black italic tracking-tighter ${log.color}`}>{log.val}</p>
                   </div>
                   <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-current opacity-60 ${log.color}`}>
                     {log.status}
                   </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-10 border-t border-yellow-900/10 text-center">
             <p className="text-[10px] font-black text-yellow-700 uppercase tracking-[0.5em] italic mb-3">Sovereign Authority</p>
             <div className="flex items-center justify-center gap-3">
               <div className="w-2 h-2 rounded-full bg-yellow-500 animate-ping"></div>
               <p className="text-xs font-black text-white italic tracking-[0.2em] uppercase">SYSEM: [EVERY_ANGLE_LOCKED]</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;