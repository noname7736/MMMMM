
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ShieldAlert, CheckCircle2, AlertTriangle, UserX, FileCode, ShieldCheck, Target, Zap } from 'lucide-react';

const data = [
  { name: '00:00', compliance: 92, pressure: 45 },
  { name: '04:00', compliance: 95, pressure: 58 },
  { name: '08:00', compliance: 88, pressure: 72 },
  { name: '12:00', compliance: 99, pressure: 85 },
  { name: '16:00', compliance: 100, pressure: 98 },
  { name: '20:00', compliance: 99, pressure: 100 },
  { name: '23:59', compliance: 100, pressure: 100 },
];

const StatCard = ({ title, value, icon: Icon, color, detail }: { title: string, value: string, icon: any, color: string, detail?: string }) => (
  <div className="bg-[#0e0e11] border border-zinc-800 p-6 rounded-[2.5rem] relative overflow-hidden group shadow-2xl transition-all hover:border-indigo-500/30">
    <div className={`absolute top-0 right-0 p-5 opacity-5 group-hover:opacity-10 transition-opacity ${color}`}>
      <Icon className="w-16 h-16" />
    </div>
    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{title}</p>
    <div className="flex items-end gap-2">
      <h3 className="text-3xl font-black text-white tracking-tighter italic">{value}</h3>
      <span className={`text-[9px] mb-1 font-black ${color}`}>{detail || 'SYNCHRONIZED'}</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Absolute Command Dashboard</h2>
          <p className="text-zinc-500 text-sm font-medium">Full Saturation of Employer's Will & Zero-Interference Monitoring.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-5 py-2.5 bg-red-950/20 border border-red-500/30 rounded-2xl text-[10px] font-black text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)] flex items-center gap-2">
            <Zap className="w-3 h-3 animate-pulse" />
            EMPLOYER COMMAND: DOMINANT
          </div>
          <div className="px-5 py-2.5 bg-green-950/20 border border-green-500/30 rounded-2xl text-[10px] font-black text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.1)] flex items-center gap-2">
            <ShieldCheck className="w-3 h-3" />
            ZIP PROTOCOL: ACTIVE
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Command Saturation" value="100%" icon={Target} color="text-red-500" detail="NO_ESCAPE" />
        <StatCard title="Suppression Efficiency" value="99.9%" icon={ShieldAlert} color="text-indigo-500" detail="MAX_PRESSURE" />
        <StatCard title="File Integrity" value="IMMUTABLE" icon={FileCode} color="text-blue-400" detail="UNBREAKABLE" />
        <StatCard title="System Sanctity" value="ABSOLUTE" icon={CheckCircle2} color="text-green-500" detail="VERIFIED" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#0a0a0c] border border-zinc-800 p-8 rounded-[3rem] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20"></div>
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-10 flex items-center gap-2">
            <Activity className="w-4 h-4 text-red-500 animate-pulse" />
            Command-Pressure Propagation
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px' }}
                  labelStyle={{ color: '#a1a1aa', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="compliance" stroke="#ef4444" fillOpacity={1} fill="url(#colorComp)" strokeWidth={4} />
                <Area type="monotone" dataKey="pressure" stroke="#6366f1" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0a0a0c] border border-zinc-800 p-8 rounded-[3rem] shadow-2xl">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-10 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-500" />
            Enforcement Real-Time Log
          </h3>
          <div className="space-y-6">
            {[
              { time: 'ตอนนี้', action: 'Employer Override engaged', target: 'Person B', status: 'FORCED', color: 'text-red-500' },
              { time: '1m ago', action: 'Dissent Neutralized', target: 'P. Ubonpich', status: 'SQUEEZED', color: 'text-indigo-500' },
              { time: '5m ago', action: 'Zero-Interference Check', target: 'Node Cluster', status: 'CLEAN', color: 'text-green-500' },
              { time: '12m ago', action: 'SRI Threshold Alert', target: 'P. Ubonpich', status: 'WARNING', color: 'text-yellow-500' },
            ].map((log, i) => (
              <div key={i} className="flex items-start justify-between border-b border-zinc-800/50 pb-5 last:border-0 last:pb-0 group">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className={`text-[10px] font-black uppercase ${log.color}`}>{log.status}</p>
                    <span className="text-[9px] text-zinc-700 font-mono">• {log.time}</span>
                  </div>
                  <p className="text-sm text-white font-black italic tracking-tighter">{log.action}</p>
                  <p className="text-[10px] text-zinc-500 font-medium">Subject: {log.target}</p>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full mt-2 transition-transform group-hover:scale-150 ${log.color === 'text-red-500' ? 'bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]' : 'bg-zinc-800'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
