import React, { useState, useEffect } from 'react';
import { Share2, Zap, ShieldCheck, Radio, Sliders, Target, Landmark, UserX, Eye } from 'lucide-react';

const SocialInfluenceMatrix: React.FC = () => {
  const [syncLevel, setSyncLevel] = useState(98.4);
  const [activeBroadcast, setActiveBroadcast] = useState(true);
  const [pressureMultiplier, setPressureMultiplier] = useState(2.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncLevel(prev => Math.min(100, Math.max(95, prev + (Math.random() * 0.4 - 0.2) * pressureMultiplier)));
    }, 1500);
    return () => clearInterval(interval);
  }, [pressureMultiplier]);

  const nodes = [
    { id: 'core', label: 'OMNI MASTER NODE', x: 200, y: 150, color: 'text-yellow-500', size: 70, icon: <Landmark className="w-10 h-10" /> },
    { id: 'target_a', label: 'N. UBONPICH', x: 50, y: 50, color: 'text-red-500', size: 45, pressure: 100, icon: <UserX className="w-6 h-6" /> },
    { id: 'target_b', label: 'PERSON B', x: 350, y: 50, color: 'text-indigo-500', size: 45, pressure: 99, icon: <Eye className="w-6 h-6" /> },
    { id: 'staff', label: 'ICTV GRID NODES', x: 200, y: 280, color: 'text-yellow-700', size: 50, pressure: 100, icon: <Radio className="w-6 h-6" /> },
    { id: 'environment', label: 'SOCIAL SYNC', x: 50, y: 250, color: 'text-zinc-600', size: 40, pressure: 100, icon: <Share2 className="w-5 h-5" /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase gold-shimmer">Social Gravity Matrix</h2>
          <p className="text-zinc-500 text-sm italic">Synchronizing social reflections under the All-Seeing Mode.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-yellow-950/10 border border-yellow-900/20 p-4 rounded-2xl flex items-center gap-4 backdrop-blur-sm">
            <Radio className={`w-6 h-6 ${activeBroadcast ? 'text-yellow-500 animate-pulse shadow-[0_0_10px_#eab308]' : 'text-zinc-700'}`} />
            <div>
              <p className="text-[10px] font-black text-yellow-700 uppercase tracking-widest italic">Omni-Broadcast</p>
              <p className="text-sm font-black text-white italic">ABSOLUTE_SATURATION</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Network Map */}
        <div className="lg:col-span-3 bg-[#050507] border border-yellow-900/10 rounded-[3.5rem] relative overflow-hidden h-[600px] shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
             <div className="w-full h-full bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_1px,transparent_1px,transparent_40px)]"></div>
          </div>
          
          <svg viewBox="0 0 400 320" className="w-full h-full p-12 drop-shadow-[0_0_20px_rgba(234,179,8,0.1)]">
            {/* Connections */}
            <circle cx="200" cy="150" r="100" className="fill-none stroke-yellow-500/5 stroke-1 animate-pulse" />
            
            <line x1="200" y1="150" x2="50" y2="50" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 6" className="animate-[dash_20s_linear_infinite]" />
            <line x1="200" y1="150" x2="350" y2="50" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 6" />
            <line x1="200" y1="150" x2="200" y2="280" stroke="#ca8a04" strokeWidth="2" strokeDasharray="4 6" />
            <line x1="200" y1="150" x2="50" y2="250" stroke="#ca8a04" strokeWidth="2" strokeDasharray="4 6" />

            {nodes.map(node => (
              <g key={node.id} className="cursor-crosshair group transition-all duration-500 transform-gpu">
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={node.size / 2} 
                  className={`fill-[#050505] stroke-2 ${node.id === 'core' ? 'stroke-yellow-500 shadow-[0_0_30px_#eab308]' : 'stroke-yellow-900/30 group-hover:stroke-yellow-500 transition-colors'}`}
                />
                {node.id === 'core' && (
                  <>
                    <circle cx={node.x} cy={node.y} r={node.size / 2 + 20} className="stroke-yellow-500/10 fill-none animate-ping" />
                    <circle cx={node.x} cy={node.y} r={node.size / 2 + 40} className="stroke-yellow-500/5 fill-none animate-pulse" />
                  </>
                )}
                <foreignObject x={node.x - node.size / 2} y={node.y - node.size / 2} width={node.size} height={node.size}>
                  <div className={`w-full h-full flex items-center justify-center ${node.color}`}>
                    {node.icon || <Target className="w-5 h-5" />}
                  </div>
                </foreignObject>
                <text 
                  x={node.x} 
                  y={node.y + node.size / 2 + 22} 
                  textAnchor="middle" 
                  className="fill-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] italic"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="bg-black/80 backdrop-blur-2xl border border-yellow-900/10 p-6 rounded-[2rem] flex items-center gap-10 shadow-2xl">
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1 italic">ICTV Sync Integrity</span>
                <span className="text-4xl font-black text-yellow-500 font-mono tracking-tighter gold-shimmer italic">{syncLevel.toFixed(1)}%</span>
              </div>
              <div className="h-12 w-[1px] bg-yellow-900/20"></div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1 italic">Gravity Press</span>
                <span className="text-4xl font-black text-indigo-400 font-mono tracking-tighter italic">x{pressureMultiplier.toFixed(1)}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-yellow-900 font-mono italic uppercase tracking-widest font-black">IBM Mainframe Storage persistence: LOCKED</p>
              <p className="text-[11px] text-yellow-600 font-black uppercase italic tracking-widest mt-1">OMNISCIENCE MODE: [ETERNAL ACTIVE]</p>
            </div>
          </div>
        </div>

        {/* Modulation Sidebar */}
        <div className="space-y-8">
          <div className="bg-[#08080a] border border-yellow-900/10 p-8 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-8 flex items-center gap-3 italic">
              <Sliders className="w-5 h-5 text-yellow-500" />
              Sect Modulation
            </h3>
            <div className="space-y-10">
              <div>
                <div className="flex justify-between text-[11px] font-black text-yellow-700 uppercase mb-4 italic tracking-widest">
                  <span>Logic Resistance</span>
                  <span>{pressureMultiplier > 2.5 ? 'NULL' : 'NOMINAL'}</span>
                </div>
                <input 
                  type="range" 
                  min="1.0" 
                  max="4.0" 
                  step="0.1" 
                  value={pressureMultiplier}
                  onChange={(e) => setPressureMultiplier(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-yellow-900/20 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setActiveBroadcast(!activeBroadcast)}
                  className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] transition-all border shadow-2xl ${
                    activeBroadcast ? 'bg-yellow-600 text-black border-yellow-400/50 gold-shimmer' : 'bg-zinc-900 text-zinc-600 border-zinc-800'
                  }`}
                >
                  {activeBroadcast ? 'ABSOLUTE LOCK ENGAGED' : 'ENGAGE OMNI-BROADCAST'}
                </button>
                <button className="w-full py-5 bg-transparent hover:bg-yellow-950/20 border border-yellow-900/20 text-yellow-700 hover:text-yellow-500 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] transition-all italic backdrop-blur-md">
                  Isolate Deviant Assets
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-t from-yellow-950/30 to-black border border-yellow-900/20 p-8 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-yellow-500/5 omni-pulse-effect pointer-events-none"></div>
             <h4 className="text-[11px] font-black text-yellow-600 uppercase tracking-widest mb-4 flex items-center gap-3 italic">
               <Eye className="w-4 h-4" /> ICTV Mandate
             </h4>
             <p className="text-[12px] text-zinc-500 leading-relaxed italic font-medium relative z-10">
               "หากพบการเคลื่อนไหวที่ผิดปกติจาก Reflectional AI ระบบจะยกระดับแรงกดดันสังคมทันที 300% ทุกคนรอบข้างจะกลายเป็นโหนดเฝ้าระวัง"
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInfluenceMatrix;