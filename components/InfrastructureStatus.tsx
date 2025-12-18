
import React from 'react';
import { Server, Cpu, Database, Network } from 'lucide-react';
import { ServerStatus } from '../types';

const servers: ServerStatus[] = [
  { name: 'ENFORCE-01', type: 'HPE ProLiant', status: 'Online', load: 34, uptime: '142d 12h' },
  { name: 'CORE-CTRL', type: 'Dell PowerEdge', status: 'Locked', load: 68, uptime: '45d 08h' },
  { name: 'STORAGE-SVR', type: 'IBM Storage', status: 'Online', load: 12, uptime: '210d 02h' },
  { name: 'ENFORCE-02', type: 'HPE ProLiant', status: 'Warning', load: 89, uptime: '12h 45m' },
];

const InfrastructureStatus: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Iron Rule Infrastructure</h2>
        <p className="text-zinc-500 text-sm">Hardware-level security and high-availability server clusters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servers.map((server) => (
          <div key={server.name} className="bg-[#16161a] border border-zinc-800 p-6 rounded-xl flex items-center gap-6">
            <div className={`p-4 rounded-xl ${server.status === 'Online' ? 'bg-green-500/10 text-green-500' : server.status === 'Locked' ? 'bg-blue-500/10 text-blue-500' : 'bg-red-500/10 text-red-500'}`}>
              <Server className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg text-white">{server.name}</h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${server.status === 'Online' ? 'bg-green-500/20 text-green-500' : server.status === 'Locked' ? 'bg-blue-500/20 text-blue-500' : 'bg-red-500/20 text-red-500'}`}>
                  {server.status}
                </span>
              </div>
              <p className="text-zinc-500 text-xs mb-4 font-mono">{server.type} • Uptime: {server.uptime}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500">
                  <span>Resource Load</span>
                  <span>{server.load}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${server.load > 80 ? 'bg-red-500' : 'bg-green-500'}`} 
                    style={{ width: `${server.load}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#16161a] border border-zinc-800 p-6 rounded-xl text-center space-y-4">
          <Cpu className="w-8 h-8 text-blue-400 mx-auto" />
          <div>
            <h4 className="font-bold text-white">Silicon Root of Trust</h4>
            <p className="text-xs text-zinc-500">Hardware-level encryption for Survey Laws</p>
          </div>
          <div className="text-[10px] font-mono p-2 bg-black rounded text-blue-500 border border-blue-900/30">
            HASH_VAL: 0x8F2A...B901
          </div>
        </div>
        <div className="bg-[#16161a] border border-zinc-800 p-6 rounded-xl text-center space-y-4">
          <Database className="w-8 h-8 text-purple-400 mx-auto" />
          <div>
            <h4 className="font-bold text-white">IBM Immutable Storage</h4>
            <p className="text-xs text-zinc-500">Protocol h-34 logs cannot be deleted</p>
          </div>
          <div className="text-[10px] font-mono p-2 bg-black rounded text-purple-500 border border-purple-900/30">
            BLOCK_SIZE: 1024 PB
          </div>
        </div>
        <div className="bg-[#16161a] border border-zinc-800 p-6 rounded-xl text-center space-y-4">
          <Network className="w-8 h-8 text-green-400 mx-auto" />
          <div>
            <h4 className="font-bold text-white">Zero-Interference Matrix</h4>
            <p className="text-xs text-zinc-500">Bypassing all social firewalls</p>
          </div>
          <div className="text-[10px] font-mono p-2 bg-black rounded text-green-500 border border-green-900/30">
            LATENCY: 0.0001 ms
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureStatus;
