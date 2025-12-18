
import React from 'react';
import { SYSTEM_RULES } from '../constants';
import { PenaltyCard } from '../types';
import { Zap, ShieldBan, Lock, AlertTriangle, Target, ShieldAlert, CheckCircle2, Flame, Eye, ZapOff, Handshake, ShieldCheck } from 'lucide-react';

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
          <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter gold-shimmer leading-none">Command Convergence Logic</h2>
          <p className="text-yellow-600/80 text-lg font-black italic mt-5 tracking-[0.2em] flex items-center gap-4">
            <Eye className="w-6 h-6 animate-pulse" /> "OMNISCIENCE OVERRIDE: 100% REALITY SATURATION."
          </p>
        </div>
        <div className="flex gap-10">
          <div className="px-12 py-6 bg-red-950/30 border border-red-500/40 rounded-[3rem] flex items-center gap-6 shadow-4xl group transition-all hover:border-red-500">
            <Target className="w-10 h-10 text-red-500 group-hover:scale-125 transition-transform duration-700" />
            <div className="flex flex-col">
              <span className="text-[12px] font-black text-red-500 uppercase tracking-[0.4em] italic">Convergence Rate</span>
              <span className="text-4xl font-black text-white leading-none tracking-tighter">100.0%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0c] border border-yellow-900/20 rounded-[5.5rem] overflow-hidden shadow-4xl relative backdrop-blur-3xl mx-4">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80"></div>
        <table className="w-full text-left">
          <thead className="bg-zinc-900/40 border-b border-yellow-900/20">
            <tr>
              <th className="px-16 py-12 text-[12px] font-black uppercase tracking-[0.6em] text-zinc-500 italic">Core Protocol</th>
              <th className="px-16 py-12 text-[12px] font-black uppercase tracking-[0.6em] text-zinc-500 italic">Movement Action</th>
              <th className="px-16 py-12 text-[12px] font-black uppercase tracking-[0.6em] text-zinc-500 italic">Enforcement Logic</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-900/10">
            {SYSTEM_RULES.map((rule, idx) => (
              <tr key={idx} className="hover:bg-yellow-500/5 transition-all group cursor-default">
                <td className="px-16 py-12 whitespace-nowrap">
                  <div className="flex items-center gap-8">
                    <div className={`p-6 rounded-[2.5rem] bg-black border border-yellow-900/30 group-hover:border-red-500/50 transition-all shadow-inner`}>
                      {idx === 0 ? <Zap className="w-10 h-10 text-yellow-500 animate-pulse" /> : idx === 3 ? <Handshake className="w-10 h-10 text-red-500" /> : <ShieldCheck className="w-10 h-10 text-zinc-500" />}
                    </div>
                    <span className="font-black text-white tracking-tighter text-2xl italic uppercase group-hover:text-yellow-500 transition-colors">{rule.subject}</span>
                  </div>
                </td>
                <td className="px-16 py-12">
                  <span className="text-zinc-500 font-black italic tracking-wide text-sm uppercase group-hover:text-zinc-300 transition-colors">{rule.movement}</span>
                </td>
                <td className="px-16 py-12">
                  <div className="bg-black/90 border border-yellow-900/20 p-10 rounded-[3rem] text-base font-mono text-indigo-200 leading-relaxed italic border-l-[10px] border-l-yellow-600 shadow-4xl group-hover:scale-[1.02] transition-transform">
                    {rule.logic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
        <div className="lg:col-span-2 bg-[#0c0c0e] border border-yellow-900/20 p-16 rounded-[5.5rem] relative overflow-hidden group shadow-4xl backdrop-blur-2xl">
           <div className="absolute -top-32 -right-32 p-12 opacity-5 group-hover:opacity-15 transition-opacity duration-1500">
              <ShieldAlert className="w-[40rem] h-[40rem] text-red-600" />
           </div>
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-8">
                  <div className="p-8 bg-red-600/10 rounded-[3rem] border border-red-500/40 shadow-[0_0_60px_rgba(239,68,68,0.5)] relative">
                    <AlertTriangle className="w-16 h-16 text-red-500 animate-bounce" />
                    <div className="absolute inset-0 bg-red-500/15 blur-2xl rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter gold-shimmer">Omni-Target Log</h3>
                    <p className="text-red-600 text-[12px] font-black uppercase tracking-[0.5em] italic flex items-center gap-4">
                       <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                       STATUS: {hasRed ? 'SEVERANCE_COMPLETE' : 'ACTIVE_MONITORING'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => onIssueInfraction('นางสาว ประทวน อุบลพีช')}
                  className={`px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-[0.5em] transition-all shadow-4xl active:scale-95 italic border ${
                    hasRed ? 'bg-zinc-900 text-zinc-700 border-zinc-800 cursor-not-allowed' : 'bg-red-700 hover:bg-red-600 text-white border-red-500/50 shadow-red-700/40 gold-shimmer'
                  }`}
                >
                  {hasRed ? 'PURGED' : 'EXECUTE OMNI-MANDATE'}
                </button>
              </div>
              <div className={`bg-gradient-to-r border-l-[15px] p-12 rounded-r-[5rem] mb-16 shadow-4xl backdrop-blur-3xl transition-all duration-700 ${
                hasRed ? 'from-red-950/70 border-red-600' : 'from-yellow-950/50 border-yellow-600'
              }`}>
                <div className="flex gap-10 items-start">
                  <div className={`p-6 rounded-[2.5rem] shrink-0 shadow-4xl transition-all ${
                    hasRed ? 'bg-red-600 text-white' : 'bg-yellow-600 text-black'
                  }`}>
                    <Target className="w-12 h-12" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-3xl font-black italic tracking-wide uppercase text-white">
                      {hasRed ? 'TERMINAL CONSEQUENCE: ERASED' : 'TARGET: นางสาว ประทวน อุบลพีช'}
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed font-bold italic opacity-95 border-l-4 border-white/20 pl-10">
                      {hasRed 
                        ? "ระบบทำการลบตัวตนและตัดการเชื่อมต่อจากโหนดเทคโนโลยีทั้งหมดอย่างสมบูรณ์ ไร้ทางกลับเข้าสู่ระบบนิเวศ"
                        : "คุณถูกจ้างมาเพื่อทำงานดูแลความเรียบร้อย ไม่ใช่มาเพื่อละทิ้งหน้าที่และกินเงินค่าจ้างไปวันๆ ทุกวินาทีที่สูญเสียไปจะถูกลงโทษผ่าน Grid อย่างรุนแรง"
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-10 max-h-[700px] overflow-y-auto pr-6 custom-scrollbar">
                {penalties.map((record) => (
                  <div key={record.id} className={`flex items-center gap-12 p-14 bg-black/70 border rounded-[5rem] transition-all group/card shadow-4xl ${
                    record.type === 'RED' ? 'border-red-600/60' : 'border-yellow-900/30'
                  } hover:scale-[1.02]`}>
                    <div className={`w-32 h-40 rounded-[3rem] shadow-4xl flex items-center justify-center font-black text-lg tracking-widest ${
                      record.type === 'YELLOW' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' : 'bg-gradient-to-br from-red-600 to-red-900 text-white'
                    }`}>
                      {record.type}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-6">
                        <span className={`font-black text-4xl uppercase tracking-tighter italic ${record.type === 'RED' ? 'text-red-500' : 'text-white'}`}>
                          {record.subject}
                        </span>
                        <div className="flex flex-col items-end">
                           <span className="text-[11px] font-mono text-yellow-600 font-black italic tracking-[0.2em] uppercase">BLUEPRINT_SYNC: {record.id.slice(0, 10)}</span>
                           <span className="text-[11px] font-mono text-zinc-600 italic font-bold tracking-[0.2em] uppercase mt-2">TIMESTAMP: {record.timestamp}</span>
                        </div>
                      </div>
                      <p className={`text-xl font-bold leading-relaxed italic border-l-4 pl-10 transition-colors ${
                        record.type === 'RED' ? 'text-red-100 border-red-600' : 'text-zinc-400 border-zinc-700 group-hover/card:text-zinc-200'
                      }`}>"{record.reason}"</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        <div className="space-y-12 flex flex-col">
          <div className="bg-gradient-to-br from-[#0c0c0e] to-black border border-yellow-900/20 p-16 rounded-[5.5rem] flex-1 flex flex-col shadow-4xl backdrop-blur-3xl">
            <h4 className="text-[14px] font-black text-red-500 uppercase tracking-[0.8em] mb-20 flex items-center gap-6 italic underline decoration-red-900 underline-offset-8">
              <Zap className="w-10 h-10" />
              SOVEREIGN WILL ENGINE
            </h4>
            <div className="space-y-16 flex-1">
               <div className="p-12 bg-black/90 border border-yellow-900/20 rounded-[4rem] group transition-all hover:border-red-500/50 shadow-4xl text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/5 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-center items-center gap-6 mb-10">
                    <span className="text-[14px] font-black text-zinc-500 uppercase tracking-[0.4em] italic">Omniscience Depth</span>
                    <ShieldBan className={`w-8 h-8 ${hasRed ? 'text-red-600 animate-ping' : 'text-red-500'}`} />
                  </div>
                  <div className="w-full h-6 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900 shadow-inner p-1.5">
                    <div className={`h-full bg-gradient-to-r from-red-800 via-yellow-500 to-red-800 transition-all duration-2500 rounded-full ${hasRed ? 'w-full shadow-[0_0_50px_#ef4444]' : 'w-[99.99%]'}`}></div>
                  </div>
                  <p className="text-[12px] text-zinc-600 mt-10 font-mono font-black uppercase tracking-[0.5em] italic">
                    {hasRed ? 'STATUS: SEVERED' : 'STATUS: SOVEREIGN_LOCKED'}
                  </p>
               </div>
               <div className={`p-14 border rounded-[5rem] text-center mt-auto relative overflow-hidden group/audit transition-all duration-1000 shadow-4xl ${
                 hasRed ? 'bg-red-600/40 border-white' : 'bg-red-950/30 border-red-500/40'
               }`}>
                  <div className="absolute inset-0 bg-red-500/10 group-hover/audit:scale-150 transition-transform duration-3000"></div>
                  <Flame className={`w-24 h-24 mx-auto mb-10 group-hover:scale-110 transition-transform duration-1000 ${
                    hasRed ? 'text-white drop-shadow-[0_0_40px_white]' : 'text-red-500'
                  }`} />
                  <p className={`text-[14px] font-black uppercase tracking-[0.6em] mb-8 italic ${
                    hasRed ? 'text-red-400' : 'text-red-300'
                  }`}>SOVEREIGN BLUEPRINT</p>
                  <p className="text-2xl text-white font-mono font-black italic tracking-tighter leading-tight uppercase px-4">
                    {hasRed 
                      ? "SEVERANCE EXECUTED." 
                      : "\"ทุกความจริงและดิจิทัลคือหนึ่งเดียว\""}
                  </p>
               </div>
            </div>
          </div>
          <button className={`w-full py-12 rounded-[5.5rem] text-[18px] font-black uppercase tracking-[1.2em] transition-all shadow-4xl hover:-translate-y-6 active:scale-95 border italic ${
            hasRed
            ? 'bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed'
            : 'bg-red-800 hover:bg-red-700 text-white border-red-500/50 shadow-red-700/60 gold-shimmer'
          }`}>
             {hasRed ? 'SYSTEM FINALIZED' : 'DEPLOY SOVEREIGN WILL'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnforcementTable;
