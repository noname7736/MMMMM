
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';

const data = [
  { name: '00:00', compliance: 92, load: 45 },
  { name: '04:00', compliance: 95, load: 38 },
  { name: '08:00', compliance: 88, load: 72 },
  { name: '12:00', compliance: 99, load: 60 },
  { name: '16:00', compliance: 100, load: 55 },
  { name: '20:00', compliance: 97, load: 50 },
  { name: '23:59', compliance: 100, load: 42 },
];

const StatCard = ({ title, value, icon: Icon, color }: { title: string, value: string, icon: any, color: string }) => (
  <div className="bg-[#16161a] border border-zinc-800 p-6 rounded-xl relative overflow-hidden group">
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
      <Icon className="w-16 h-16" />
    </div>
    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">{title}</p>
    <div className="flex items-end gap-2">
      <h3 className="text-3xl font-bold text-white">{value}</h3>
      <span className={`text-[10px] mb-1 font-bold ${color}`}>+12% VERIFIED</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white">System Command Overview</h2>
          <p className="text-zinc-500 text-sm">Real-time monitoring of Absolute Enforcement Framework stability.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-xs font-bold text-green-400">
            HPE ENFORCEMENT: ACTIVE
          </div>
          <div className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-xs font-bold text-blue-400">
            DELL POWEREDGE: OPTIMAL
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Overall Compliance" value="99.8%" icon={CheckCircle2} color="text-green-500" />
        <StatCard title="Enforcement Pressure" value="MAX" icon={Activity} color="text-red-500" />
        <StatCard title="Resistance Level" value="0.02%" icon={ShieldAlert} color="text-orange-500" />
        <StatCard title="Infrastructure Load" value="42.5%" icon={AlertTriangle} color="text-blue-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#16161a] border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Compliance & Power Metrics</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1e', border: '1px solid #3f3f46', borderRadius: '8px' }}
                  labelStyle={{ color: '#a1a1aa' }}
                />
                <Area type="monotone" dataKey="compliance" stroke="#22c55e" fillOpacity={1} fill="url(#colorComp)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#16161a] border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Target Activity Log</h3>
          <div className="space-y-4">
            {[
              { time: '12:45', action: 'Rule Synchronization', target: 'P. Ubonpich', status: 'LOCKED' },
              { time: '12:30', action: 'Medication Order', target: 'Person B', status: 'VERIFIED' },
              { time: '11:15', action: 'Social Pressure Protocol', target: 'Survey Staff', status: 'DEPLOYED' },
              { time: '10:00', action: 'Sovereign Will Broadcast', target: 'Global', status: 'ACTIVE' },
            ].map((log, i) => (
              <div key={i} className="flex items-start justify-between border-b border-zinc-800 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-xs font-mono text-green-500">{log.time} - {log.status}</p>
                  <p className="text-sm text-white font-bold">{log.action}</p>
                  <p className="text-[10px] text-zinc-500">Subject: {log.target}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
