
import React, { useState, useEffect } from 'react';
import { Share2, Zap, ArrowRight, ShieldCheck, Radio, Sliders, Target } from 'lucide-react';

const SocialInfluenceMatrix: React.FC = () => {
  const [syncLevel, setSyncLevel] = useState(85);
  const [activeBroadcast, setActiveBroadcast] = useState(true);
  const [pressureMultiplier, setPressureMultiplier] = useState(1.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncLevel(prev => Math.min(100, Math.max(80, prev + (Math.random() * 2 - 1) * pressureMultiplier)));
    }, 2000);
    return () => clearInterval(interval);
  }, [pressureMultiplier]);

  const nodes = [
    { id: 'core', label: 'SUPER MAX CORE', x: 200, y: 150, color: 'text-green-500', size: 65, icon: <ShieldCheck className="w-10 h-10" /> },
    { id: 'target_a', label: 'N. UBONPICH', x: 50, y: 50, color: 'text-red-500', size: 45, pressure: 98 },
    { id: 'target_b', label: 'PERSON B', x: 350, y: 50, color: 'text-blue-500', size: 45, pressure: 72 },
    { id: 'staff', label: 'SURVEY STAFF', x: 200, y: 280, color: 'text-zinc-400', size: 50, pressure: 84 },
    { id: 'environment', label: 'SOCIAL CIRCLE', x: 50, y: 250, color: 'text-zinc-500', size: 40, pressure: 91 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Social Gravity Matrix <span className="text-green-500 italic">SUPER MAX</span></h2>
          <p className="text-zinc-500 text-sm">Orchestrating behavioral synchronization across all social assets.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center gap-3">
            <Radio className={`w-5 h-5 ${activeBroadcast ? 'text-red-500 animate-pulse' : 'text-zinc-700'}`} />
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Broadcast State</p>
              <p className="text-sm font-bold text-white">{activeBroadcast ? 'MAX_ENFORCEMENT' : 'IDLE'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Network Map */}
        <div className="lg:col-span-3 bg-[#0a0a0c] border border-zinc-800 rounded-3xl relative overflow-hidden h-[600px] shadow-2xl shadow-green-500/5">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
             <div className="w-full h-full bg-[repeating-linear-gradient(90deg,#22c55e_0px,#22c55e_1px,transparent_1px,transparent_40px)]"></div>
          </div>
          
          <svg viewBox="0 0 400 320" className="w-full h-full p-12">
            {/* Pulsing connections */}
            <circle cx="200" cy="150" r="100" className="fill-none stroke-green-500/5 stroke-1 animate-pulse" />
            
            <line x1="200" y1="150" x2="50" y2="50" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 4" className="animate-[dash_15s_linear_infinite]" />
            <line x1="200" y1="150" x2="350" y2="50" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="200" y1="150" x2="200" y2="280" stroke="#52525b" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="200" y1="150" x2="50" y2="250" stroke="#52525b" strokeWidth="2" strokeDasharray="6 4" />

            {nodes.map(node => (
              <g key={node.id} className="cursor-crosshair group transition-all duration-300 transform-gpu">
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={node.size / 2} 
                  className={`fill-[#050505] stroke-2 ${node.id === 'core' ? 'stroke-green-500 shadow-[0_0_20px_#22c55e]' : 'stroke-zinc-800 group-hover:stroke-green-500'}`}
                />
                {node.id === 'core' && (
                  <>
                    <circle cx={node.x} cy={node.y} r={node.size / 2 + 15} className="stroke-green-500/10 fill-none animate-ping" />
                    <circle cx={node.x} cy={node.y} r={node.size / 2 + 30} className="stroke-green-500/5 fill-none animate-pulse" />
                  </>
                )}
                <foreignObject x={node.x - node.size / 2} y={node.y - node.size / 2} width={node.size} height={node.size}>
                  <div className={`w-full h-full flex items-center justify-center ${node.color}`}>
                    {node.icon || <Target className="w-5 h-5" />}
                  </div>
                </foreignObject>
                <text 
                  x={node.x} 
                  y={node.y + node.size / 2 + 18} 
                  textAnchor="middle" 
                  className="fill-zinc-600 text-[9px] font-bold uppercase tracking-[0.2em]"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="bg-black/80 backdrop-blur-xl border border-zinc-800 p-5 rounded-2xl flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Super Max Sync</span>
                <span className="text-3xl font-bold text-green-400 font-mono tracking-tighter">{syncLevel.toFixed(1)}%</span>
              </div>
              <div className="h-10 w-[1px] bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Pressure Multiplier</span>
                <span className="text-3xl font-bold text-red-500 font-mono tracking-tighter">x{pressureMultiplier.toFixed(1)}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-zinc-600 font-mono italic uppercase tracking-widest">Core Synchronized with IBM storage nodes</p>
              <p className="text-[10px] text-green-500 font-bold uppercase">Awaiting further mods...</p>
            </div>
          </div>
        </div>

        {/* Modulation Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#111114] border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-500" />
              Gravity Controls
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase mb-3">
                  <span>Inertia Resistance</span>
                  <span>{pressureMultiplier > 1.8 ? 'LOW' : 'STABLE'}</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="3.0" 
                  step="0.1" 
                  value={pressureMultiplier}
                  onChange={(e) => setPressureMultiplier(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setActiveBroadcast(!activeBroadcast)}
                  className={`w-full py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeBroadcast ? 'bg-red-600 text-white glow-red' : 'bg-zinc-800 text-zinc-500'
                  }`}
                >
                  {activeBroadcast ? 'Cease Resistance' : 'Engage Broadcast'}
                </button>
                <button className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all">
                  Isolate Alpha Node
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-t from-red-950/20 to-transparent border border-red-900/20 p-6 rounded-2xl">
             <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3">Critical Warning</h4>
             <p className="text-[11px] text-zinc-500 leading-relaxed italic">
               If N. Ubonpich bypasses 'Structural Node Isolation', deploy 'Prison of Orders' mod immediately. IBM Storage persistence ensures no history deletion.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInfluenceMatrix;
