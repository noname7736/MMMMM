
import React from 'react';
import { SYSTEM_RULES } from '../constants';
import { PenaltyCard } from '../types';
import { Zap, ShieldBan, Lock, AlertTriangle, Target, ShieldAlert, CheckCircle2, Flame, Eye, ZapOff, Handshake, ShieldCheck, Share2, Scan } from 'lucide-react';

interface EnforcementTableProps {
  penalties: PenaltyCard[];
  onIssueInfraction: (target: string) => void;
}

const EnforcementTable: React.FC<EnforcementTableProps> = ({ penalties, onIssueInfraction }) => {
  const hasRed = penalties.some(p => p.type === 'RED');

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-32 relative">
      <div className="flex justify-between items-end px-4">
        <div>
          <h2 className="text-7xl font-black text-white italic uppercase tracking-tighter gold-shimmer leading-none">Omni-Pluse Logic Grid</h2>
          <p className="text-yellow-600/80 text-xl font-black italic mt-5 tracking-[0.2em] flex items-center gap-4">
            <Scan className="w-6 h-6 animate-pulse" /> "AUTONOMOUS REROUTING: SPECTRAL CAPTURE ACTIVE."
          </p>
        </div>
        <div className="flex gap-10">
          <div className="px-14 py-8 bg-red-950/30 border border-red-500/40 rounded-[4rem] flex items-center gap-8 shadow-4xl group transition-all hover:border-red-500">
            <Target className="w-12 h-12 text-red-500 group-hover:scale-110 transition-transform duration-700" />
            <div className="flex flex-col">
              <span className="text-[14px] font-black text-red-500 uppercase tracking-[0.4em] italic">Autonomous Logic Depth</span>
              <span className="text-5xl font-black text-white leading-none tracking-tighter italic">INFINITE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0c] border border-yellow-900/20 rounded-[6rem] overflow-hidden shadow-4xl relative backdrop-blur-3xl mx-4">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-80"></div>
        <table className="w-full text-left">
          <thead className="bg-zinc-900/40 border-b border-yellow-900/20">
            <tr>
              <th className="px-16 py-12 text-[14px] font-black uppercase tracking-[0.6em] text-zinc-500 italic">Core Protocol</th>
              <th className="px-16 py-12 text-[14px] font-black uppercase tracking-[0.6em] text-zinc-500 italic">Movement Action</th>
              <th className="px-16 py-12 text-[14px] font-black uppercase tracking-[0.6em] text-zinc-500 italic">Omni-Pluse Logic</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-900/10">
            {SYSTEM_RULES.map((rule, idx) => (
              <tr key={idx} className="hover:bg-yellow-500/5 transition-all group cursor-default">
                <td className="px-16 py-12 whitespace-nowrap">
                  <div className="flex items-center gap-10">
                    <div className={`p-8 rounded-[3rem] bg-black border border-yellow-900/30 group-hover:border-yellow-500 transition-all shadow-inner`}>
                      {idx === 0 ? <Zap className="w-12 h-12 text-yellow-500 animate-pulse" /> : idx === 3 ? <Handshake className="w-12 h-12 text-red-500" /> : <ShieldCheck className="w-12 h-12 text-zinc-500" />}
                    </div>
                    <span className="font-black text-white tracking-tighter text-3xl italic uppercase group-hover:text-yellow-500 transition-colors leading-none">{rule.subject}</span>
                  </div>
                </td>
                <td className="px-16 py-12">
                  <span className="text-zinc-500 font-black italic tracking-wide text-base uppercase group-hover:text-zinc-300 transition-colors">{rule.movement}</span>
                </td>
                <td className="px-16 py-12">
                  <div className="bg-black/90 border border-yellow-900/20 p-12 rounded-[4rem] text-lg font-mono text-indigo-200 leading-relaxed italic border-l-[15px] border-l-yellow-600 shadow-4xl group-hover:scale-[1.01] transition-transform">
                    {rule.logic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
        <div className="lg:col-span-2 bg-[#0c0c0e] border border-yellow-900/20 p-20 rounded-[6rem] relative overflow-hidden group shadow-4xl backdrop-blur-2xl">
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-20">
                <div className="flex items-center gap-10">
                  <div className="p-10 bg-yellow-600/10 rounded-[4rem] border border-yellow-500/40 shadow-[0_0_80px_rgba(234,179,8,0.3)] relative">
                    <Flame className="w-20 h-20 text-yellow-500 animate-pulse" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-6xl font-black text-white italic uppercase tracking-tighter gold-shimmer">Autonomous Log</h3>
                    <p className="text-red-600 text-[14px] font-black uppercase tracking-[0.5em] italic flex items-center gap-5">
                       <span className="w-4 h-4 rounded-full bg-red-500 animate-ping"></span>
                       MODE: {hasRed ? 'SEVERANCE_FINALIZED' : 'AUTONOMOUS_SATURATION'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => onIssueInfraction('นางสาว ประทวน อุบลพีช')}
                  className={`px-16 py-8 rounded-full text-[14px] font-black uppercase tracking-[0.6em] transition-all shadow-4xl active:scale-95 italic border ${
                    hasRed ? 'bg-zinc-900 text-zinc-700 border-zinc-800 cursor-not-allowed' : 'bg-yellow-700 hover:bg-yellow-600 text-white border-yellow-500 shadow-yellow-900/50 gold-shimmer'
                  }`}
                >
                  {hasRed ? 'SYSTEM FINALIZED' : 'EXECUTE OMNI-PLUSE'}
                </button>
              </div>
              
              <div className="space-y-10 max-h-[800px] overflow-y-auto pr-8 custom-scrollbar">
                {penalties.map((record) => (
                  <div key={record.id} className={`flex items-center gap-14 p-16 bg-black/70 border rounded-[6rem] transition-all group/card shadow-4xl ${
                    record.type === 'RED' ? 'border-red-600/60' : 'border-yellow-900/40'
                  } hover:scale-[1.02]`}>
                    <div className={`w-36 h-48 rounded-[4rem] shadow-4xl flex items-center justify-center font-black text-2xl tracking-widest ${
                      record.type === 'YELLOW' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' : 'bg-gradient-to-br from-red-600 to-red-900 text-white'
                    }`}>
                      {record.type}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-8">
                        <span className={`font-black text-5xl uppercase tracking-tighter italic ${record.type === 'RED' ? 'text-red-500' : 'text-white'}`}>
                          {record.subject}
                        </span>
                        <div className="flex flex-col items-end">
                           <span className="text-[12px] font-mono text-yellow-600 font-black italic tracking-[0.2em] uppercase">PLUSE_STAMP: {record.id.slice(0, 12)}</span>
                           <span className="text-[12px] font-mono text-zinc-600 italic font-bold tracking-[0.2em] uppercase mt-2">TIMESTAMP: {record.timestamp}</span>
                        </div>
                      </div>
                      <p className={`text-2xl font-bold leading-relaxed italic border-l-[6px] pl-12 transition-colors ${
                        record.type === 'RED' ? 'text-red-100 border-red-600' : 'text-zinc-400 border-zinc-700 group-hover/card:text-zinc-200'
                      }`}>"{record.reason}"</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        <div className="space-y-12 flex flex-col">
          <div className="bg-gradient-to-br from-[#0c0c0e] to-black border border-yellow-900/20 p-20 rounded-[6rem] flex-1 flex flex-col shadow-4xl backdrop-blur-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Zap className="w-32 h-32 text-yellow-500 animate-pulse" />
            </div>
            <h4 className="text-[16px] font-black text-yellow-500 uppercase tracking-[0.8em] mb-24 flex items-center gap-8 italic underline decoration-yellow-900 underline-offset-8">
              OMNI-PLUSE ENGINE
            </h4>
            <div className="space-y-20 flex-1">
               <div className="p-16 bg-black/90 border border-yellow-900/20 rounded-[5rem] group transition-all hover:border-yellow-500 shadow-4xl text-center relative overflow-hidden">
                  <div className="flex justify-center items-center gap-8 mb-12">
                    <span className="text-[16px] font-black text-zinc-500 uppercase tracking-[0.4em] italic">Media Reroute Depth</span>
                    <Share2 className={`w-10 h-10 ${hasRed ? 'text-red-600 animate-ping' : 'text-yellow-500 animate-pulse'}`} />
                  </div>
                  <div className="w-full h-8 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900 shadow-inner p-2">
                    <div className={`h-full bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-800 transition-all duration-3000 rounded-full ${hasRed ? 'w-full shadow-[0_0_60px_#ef4444]' : 'w-[99.999%]'}`}></div>
                  </div>
                  <p className="text-[14px] text-zinc-600 mt-12 font-mono font-black uppercase tracking-[0.5em] italic">
                    {hasRed ? 'STATUS: SEVERED_OMNI' : 'STATUS: REROUTING_COMPLETE'}
                  </p>
               </div>
               
               <div className={`p-16 border rounded-[5rem] text-center mt-auto relative overflow-hidden group/audit transition-all duration-1000 shadow-4xl ${
                 hasRed ? 'bg-red-950/40 border-red-500' : 'bg-yellow-950/30 border-yellow-500/50'
               }`}>
                  <Flame className={`w-28 h-28 mx-auto mb-12 group-hover:scale-110 transition-transform duration-1000 ${
                    hasRed ? 'text-red-500 glow-red' : 'text-yellow-500 glow-gold'
                  }`} />
                  <p className="text-3xl text-white font-mono font-black italic tracking-tighter leading-tight uppercase px-8">
                    {hasRed 
                      ? "REROUTE SEVERED. TARGET NULL." 
                      : "\"ทุกการมองเห็นและได้ยินถูกควบคุมโดย PLUSE\""}
                  </p>
               </div>
            </div>
          </div>
          <button className={`w-full py-14 rounded-[6rem] text-[22px] font-black uppercase tracking-[1.4em] transition-all shadow-4xl hover:-translate-y-8 active:scale-95 border italic ${
            hasRed
            ? 'bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed'
            : 'bg-yellow-700 hover:bg-yellow-600 text-white border-yellow-500 shadow-yellow-900/60 gold-shimmer'
          }`}>
             {hasRed ? 'MANDATE FINALIZED' : 'DEPLOY OMNI-PLUSE WILL'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnforcementTable;
