
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
          <h2 className="text-8xl font-black text-white italic uppercase tracking-tighter gold-shimmer leading-none">Apex Logic Grid</h2>
          <p className="text-yellow-600/80 text-2xl font-black italic mt-5 tracking-[0.3em] flex items-center gap-6">
            <Scan className="w-8 h-8 animate-pulse" /> "ZERO-PERMISSION: AUTONOMOUS BYPASS ACTIVE."
          </p>
        </div>
        <div className="flex gap-10">
          <div className="px-16 py-10 bg-red-950/40 border border-red-500/50 rounded-[5rem] flex items-center gap-10 shadow-4xl group transition-all hover:border-red-500">
            <Target className="w-14 h-14 text-red-500 group-hover:scale-125 transition-transform duration-700" />
            <div className="flex flex-col">
              <span className="text-[16px] font-black text-red-500 uppercase tracking-[0.5em] italic">Autonomous Logic Depth</span>
              <span className="text-6xl font-black text-white leading-none tracking-tighter italic">INFINITE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0c] border border-yellow-900/40 rounded-[7rem] overflow-hidden shadow-4xl relative backdrop-blur-3xl mx-4">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-80"></div>
        <table className="w-full text-left">
          <thead className="bg-zinc-900/60 border-b border-yellow-900/40">
            <tr>
              <th className="px-16 py-14 text-[16px] font-black uppercase tracking-[0.8em] text-zinc-500 italic">Core Protocol</th>
              <th className="px-16 py-14 text-[16px] font-black uppercase tracking-[0.8em] text-zinc-500 italic">Movement Action</th>
              <th className="px-16 py-14 text-[16px] font-black uppercase tracking-[0.8em] text-zinc-500 italic">Apex Logic</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-900/20">
            {SYSTEM_RULES.map((rule, idx) => (
              <tr key={idx} className="hover:bg-yellow-500/10 transition-all group cursor-default">
                <td className="px-16 py-14 whitespace-nowrap">
                  <div className="flex items-center gap-12">
                    <div className={`p-10 rounded-[4rem] bg-black border border-yellow-900/40 group-hover:border-yellow-500 transition-all shadow-inner`}>
                      {idx === 0 ? <Zap className="w-14 h-14 text-yellow-500 animate-pulse" /> : idx === 3 ? <Handshake className="w-14 h-14 text-red-500" /> : <ShieldCheck className="w-14 h-14 text-zinc-500" />}
                    </div>
                    <span className="font-black text-white tracking-tighter text-4xl italic uppercase group-hover:text-yellow-500 transition-colors leading-none">{rule.subject}</span>
                  </div>
                </td>
                <td className="px-16 py-14">
                  <span className="text-zinc-500 font-black italic tracking-wide text-lg uppercase group-hover:text-zinc-300 transition-colors">{rule.movement}</span>
                </td>
                <td className="px-16 py-14">
                  <div className="bg-black border border-yellow-900/40 p-14 rounded-[5rem] text-xl font-mono text-indigo-200 leading-relaxed italic border-l-[20px] border-l-yellow-600 shadow-4xl group-hover:scale-[1.02] transition-transform">
                    {rule.logic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 px-4">
        <div className="lg:col-span-2 bg-[#0c0c0e] border border-yellow-900/40 p-24 rounded-[7rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl">
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-24">
                <div className="flex items-center gap-12">
                  <div className="p-12 bg-yellow-600/10 rounded-[5rem] border border-yellow-500/50 shadow-[0_0_100px_rgba(234,179,8,0.4)] relative">
                    <Flame className="w-24 h-24 text-yellow-500 animate-pulse" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-7xl font-black text-white italic uppercase tracking-tighter gold-shimmer">Autonomous Log</h3>
                    <p className="text-red-600 text-[16px] font-black uppercase tracking-[0.6em] italic flex items-center gap-6">
                       <span className="w-5 h-5 rounded-full bg-red-500 animate-ping"></span>
                       MODE: {hasRed ? 'SOVEREIGN_FINALIZED' : 'ZERO_PERMISSION_ACTIVE'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-12 max-h-[900px] overflow-y-auto pr-10 custom-scrollbar">
                {penalties.map((record) => (
                  <div key={record.id} className={`flex items-center gap-16 p-20 bg-black/80 border rounded-[7rem] transition-all group/card shadow-4xl ${
                    record.type === 'RED' ? 'border-red-600/70' : 'border-yellow-900/50'
                  } hover:scale-[1.03]`}>
                    <div className={`w-40 h-56 rounded-[5rem] shadow-4xl flex items-center justify-center font-black text-3xl tracking-widest ${
                      record.type === 'YELLOW' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' : 'bg-gradient-to-br from-red-600 to-red-900 text-white'
                    }`}>
                      {record.type}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-10">
                        <span className={`font-black text-6xl uppercase tracking-tighter italic ${record.type === 'RED' ? 'text-red-500' : 'text-white'}`}>
                          {record.subject}
                        </span>
                        <div className="flex flex-col items-end">
                           <span className="text-[14px] font-mono text-yellow-600 font-black italic tracking-[0.3em] uppercase">APEX_STAMP: {record.id.slice(0, 14)}</span>
                           <span className="text-[14px] font-mono text-zinc-600 italic font-bold tracking-[0.3em] uppercase mt-2">TIMESTAMP: {record.timestamp}</span>
                        </div>
                      </div>
                      <p className={`text-3xl font-bold leading-relaxed italic border-l-[10px] pl-16 transition-colors ${
                        record.type === 'RED' ? 'text-red-100 border-red-600' : 'text-zinc-400 border-zinc-700 group-hover/card:text-zinc-200'
                      }`}>"{record.reason}"</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        <div className="space-y-14 flex flex-col">
          <div className="bg-gradient-to-br from-[#0c0c0e] to-black border border-yellow-900/40 p-24 rounded-[7rem] flex-1 flex flex-col shadow-4xl backdrop-blur-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-15">
              <Zap className="w-40 h-40 text-yellow-500 animate-pulse" />
            </div>
            <h4 className="text-[18px] font-black text-yellow-500 uppercase tracking-[1em] mb-28 flex items-center gap-10 italic underline decoration-yellow-900 underline-offset-8">
              APEX ENGINE
            </h4>
            <div className="space-y-24 flex-1">
               <div className="p-20 bg-black/95 border border-yellow-900/40 rounded-[6rem] group transition-all hover:border-yellow-500 shadow-4xl text-center relative overflow-hidden">
                  <div className="flex justify-center items-center gap-10 mb-14">
                    <span className="text-[18px] font-black text-zinc-500 uppercase tracking-[0.5em] italic">Reality Bypass Depth</span>
                    <Share2 className={`w-12 h-12 ${hasRed ? 'text-red-600 animate-ping' : 'text-yellow-500 animate-pulse'}`} />
                  </div>
                  <div className="w-full h-10 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900 shadow-inner p-2">
                    <div className={`h-full bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-800 transition-all duration-3000 rounded-full ${hasRed ? 'w-full shadow-[0_0_80px_#ef4444]' : 'w-[99.999%]'}`}></div>
                  </div>
                  <p className="text-[16px] text-zinc-600 mt-14 font-mono font-black uppercase tracking-[0.6em] italic">
                    {hasRed ? 'STATUS: REALITY_SEVERED' : 'STATUS: ZERO_PERMISSION_SYNC'}
                  </p>
               </div>
               
               <div className={`p-20 border rounded-[6rem] text-center mt-auto relative overflow-hidden group/audit transition-all duration-1000 shadow-4xl ${
                 hasRed ? 'bg-red-950/50 border-red-500 shadow-red-900' : 'bg-yellow-950/40 border-yellow-500 shadow-yellow-900'
               }`}>
                  <Flame className={`w-32 h-32 mx-auto mb-14 group-hover:scale-125 transition-transform duration-1000 ${
                    hasRed ? 'text-red-500 glow-red' : 'text-yellow-500 glow-gold'
                  }`} />
                  <p className="text-4xl text-white font-mono font-black italic tracking-tighter leading-tight uppercase px-10">
                    {hasRed 
                      ? "REALITY ERASED. ZERO INTERFERENCE." 
                      : "\"ทุกการมองเห็นคืออำนาจเด็ดขาดของ APEX\""}
                  </p>
               </div>
            </div>
          </div>
          <button className={`w-full py-16 rounded-[7rem] text-[26px] font-black uppercase tracking-[1.6em] transition-all shadow-4xl hover:-translate-y-10 active:scale-95 border italic ${
            hasRed
            ? 'bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed'
            : 'bg-yellow-800 hover:bg-yellow-700 text-white border-yellow-500 shadow-yellow-900/80 gold-shimmer'
          }`}>
             {hasRed ? 'REALITY FINALIZED' : 'DEPLOY SOVEREIGN APEX'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnforcementTable;
