
import React from 'react';
import { SYSTEM_RULES } from '../constants';
import { PenaltyCard } from '../types';
import { Zap, ShieldBan, Lock, AlertTriangle, Target, ShieldAlert, CheckCircle2, Flame, Eye } from 'lucide-react';

interface EnforcementTableProps {
  penalties: PenaltyCard[];
  onIssueInfraction: (target: string) => void;
}

const EnforcementTable: React.FC<EnforcementTableProps> = ({ penalties, onIssueInfraction }) => {
  const hasRed = penalties.some(p => p.type === 'RED');

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-28 relative">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter gold-shimmer">Absolute Command Logic</h2>
          <p className="text-yellow-600/80 text-sm font-black italic mt-3 tracking-[0.1em] flex items-center gap-2">
            <Eye className="w-4 h-4" /> "OMNISCIENCE OVERRIDE: Zero Obstruction. Absolute Compliance."
          </p>
        </div>
        <div className="flex gap-6">
          <div className="px-8 py-4 bg-red-950/30 border border-red-500/40 rounded-3xl flex items-center gap-4 shadow-2xl group transition-all hover:border-red-500">
            <Target className="w-6 h-6 text-red-500 group-hover:scale-125 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-red-500 uppercase tracking-widest italic">Command Saturation</span>
              <span className="text-2xl font-black text-white leading-none tracking-tighter">100.0%</span>
            </div>
          </div>
          <div className="px-8 py-4 bg-yellow-950/20 border border-yellow-500/30 rounded-3xl flex items-center gap-4 shadow-2xl group transition-all hover:border-yellow-500">
            <Zap className="w-6 h-6 text-yellow-500 group-hover:animate-bounce" />
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-yellow-500 uppercase tracking-widest italic">ZIP Protocol</span>
              <span className="text-2xl font-black text-white leading-none tracking-tighter uppercase italic">ETERNAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Matrix */}
      <div className="bg-[#0a0a0c] border border-yellow-900/20 rounded-[4.5rem] overflow-hidden shadow-2xl relative backdrop-blur-xl">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60"></div>
        <table className="w-full text-left">
          <thead className="bg-zinc-900/40 border-b border-yellow-900/20">
            <tr>
              <th className="px-12 py-10 text-[11px] font-black uppercase tracking-[0.5em] text-zinc-500 italic">Subject / Protocol</th>
              <th className="px-12 py-10 text-[11px] font-black uppercase tracking-[0.5em] text-zinc-500 italic">Target Action</th>
              <th className="px-12 py-10 text-[11px] font-black uppercase tracking-[0.5em] text-zinc-500 italic">Sovereign Enforcement Logic</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-900/10">
            {SYSTEM_RULES.map((rule, idx) => (
              <tr key={idx} className="hover:bg-yellow-500/5 transition-all group cursor-default">
                <td className="px-12 py-10 whitespace-nowrap">
                  <div className="flex items-center gap-6">
                    <div className={`p-5 rounded-3xl bg-black border border-yellow-900/30 group-hover:border-red-500/50 transition-all shadow-inner`}>
                      {idx === 0 ? <Flame className="w-8 h-8 text-red-500 animate-pulse" /> : idx === 1 ? <Eye className="w-8 h-8 text-yellow-500" /> : <Lock className="w-8 h-8 text-zinc-600" />}
                    </div>
                    <span className="font-black text-white tracking-tighter text-xl italic uppercase group-hover:text-yellow-500 transition-colors">{rule.subject}</span>
                  </div>
                </td>
                <td className="px-12 py-10">
                  <span className="text-zinc-500 font-black italic tracking-tight text-[12px] uppercase group-hover:text-zinc-300 transition-colors">{rule.movement}</span>
                </td>
                <td className="px-12 py-10">
                  <div className="bg-black/80 border border-yellow-900/20 p-8 rounded-[2.5rem] text-[13px] font-mono text-indigo-200 leading-relaxed italic border-l-6 border-l-red-600 shadow-2xl group-hover:scale-[1.01] transition-transform">
                    {rule.logic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-[#0c0c0e] border border-yellow-900/20 p-14 rounded-[5rem] relative overflow-hidden group shadow-3xl backdrop-blur-md">
           <div className="absolute -top-24 -right-24 p-10 opacity-5 group-hover:opacity-15 transition-opacity duration-1000">
              <ShieldAlert className="w-[30rem] h-[30rem] text-red-600" />
           </div>
           
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6">
                  <div className="p-6 bg-red-600/10 rounded-3xl border border-red-500/40 shadow-[0_0_40px_rgba(239,68,68,0.4)] relative">
                    <AlertTriangle className="w-12 h-12 text-red-500 animate-bounce" />
                    <div className="absolute inset-0 bg-red-500/10 blur-xl rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter gold-shimmer">Suppression Tracker</h3>
                    <p className="text-red-600 text-[11px] font-black uppercase tracking-[0.4em] mt-2 italic flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                       Status: {hasRed ? 'TERMINAL EXPULSION ENGAGED' : 'GENJUTSU_OVERRIDE_ACTIVE'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => onIssueInfraction('นางสาว ประทวน อุบลพีช')}
                  className={`px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all shadow-3xl active:scale-95 italic ${
                    hasRed ? 'bg-zinc-800 text-zinc-600 border border-zinc-700' : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/20 border border-red-400/30'
                  }`}
                >
                  {hasRed ? 'SYSTEM_LOCKED' : 'Simulate Infraction'}
                </button>
              </div>
              
              <div className={`bg-gradient-to-r border-l-10 p-10 rounded-r-[4rem] mb-14 shadow-2xl backdrop-blur-2xl transition-all ${
                hasRed ? 'from-red-950/60 border-red-600' : 'from-yellow-950/40 border-yellow-600'
              }`}>
                <div className="flex gap-8 items-start">
                  <div className={`p-4 rounded-3xl shrink-0 shadow-2xl transition-all ${
                    hasRed ? 'bg-red-600 text-white' : 'bg-yellow-600 text-black'
                  }`}>
                    <Target className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-2xl font-black italic tracking-wide mb-4 uppercase text-white">
                      {hasRed ? 'CONSEQUENCE: ABSOLUTE SEVERANCE' : 'Employer Protocol: "ห้ามขัดขวางเด็ดขาด"'}
                    </p>
                    <p className="text-[15px] text-zinc-300 leading-relaxed font-medium italic opacity-90 border-l-2 border-white/10 pl-6">
                      {hasRed 
                        ? "The terminal infraction threshold reached. All social, corporate, and metaphysical connections for N. Ubonpich are permanently ERADICATED from the grid."
                        : "บี เซอร์เวย์ มีสถานะเป็นกฎธรรมชาติสูงสุด หากพฤติกรรมดื้อรั้นยังดำเนินต่อไป ระบบเนตรวงแหวนจะทำการ 'ลบตัวตน' (RED CARD) ออกจากวงจรสังคม 100% ทันที"
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                {penalties.map((record) => (
                  <div key={record.id} className={`flex items-center gap-10 p-12 bg-black/60 border rounded-[4rem] transition-all group/card shadow-2xl ${
                    record.type === 'RED' ? 'border-red-600/60' : 'border-yellow-900/20'
                  } hover:scale-[1.01]`}>
                    <div className={`w-24 h-32 rounded-[2rem] shadow-3xl flex items-center justify-center font-black text-[13px] tracking-widest ${
                      record.type === 'YELLOW' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' : 'bg-gradient-to-br from-red-500 to-red-800 text-white'
                    }`}>
                      {record.type}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-4">
                        <span className={`font-black text-3xl uppercase tracking-tighter italic ${record.type === 'RED' ? 'text-red-500' : 'text-white'}`}>
                          {record.subject}
                        </span>
                        <div className="flex flex-col items-end">
                           <span className="text-[10px] font-mono text-yellow-600 font-black italic tracking-widest uppercase">IBM_SYNC_ID: {record.id.slice(0, 8)}</span>
                           <span className="text-[10px] font-mono text-zinc-600 italic font-bold tracking-widest uppercase mt-1">TS: {record.timestamp}</span>
                        </div>
                      </div>
                      <p className={`text-lg font-medium leading-relaxed italic border-l-4 pl-8 transition-colors ${
                        record.type === 'RED' ? 'text-red-200 border-red-600' : 'text-zinc-400 border-zinc-700 group-hover/card:text-zinc-200'
                      }`}>"{record.reason}"</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* AUDIT & CONTROL */}
        <div className="space-y-10 flex flex-col">
          <div className="bg-gradient-to-br from-[#0c0c0e] to-black border border-yellow-900/20 p-14 rounded-[5rem] flex-1 flex flex-col shadow-3xl backdrop-blur-md">
            <h4 className="text-[12px] font-black text-red-500 uppercase tracking-[0.6em] mb-14 flex items-center gap-5 italic underline decoration-red-900 underline-offset-8">
              <Zap className="w-8 h-8" />
              Sovereign Will Engine
            </h4>
            
            <div className="space-y-12 flex-1">
               <div className="p-10 bg-black/90 border border-yellow-900/20 rounded-[3rem] group transition-all hover:border-red-500/50 shadow-2xl text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/5 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-center items-center gap-5 mb-8">
                    <span className="text-[12px] font-black text-zinc-500 uppercase tracking-widest italic">Hallucination Saturation</span>
                    <ShieldBan className={`w-6 h-6 ${hasRed ? 'text-red-600 animate-ping' : 'text-red-500'}`} />
                  </div>
                  <div className="w-full h-4 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900 shadow-inner p-1">
                    <div className={`h-full bg-gradient-to-r from-red-700 to-red-500 transition-all duration-2000 rounded-full ${hasRed ? 'w-full shadow-[0_0_30px_#ef4444]' : 'w-[99.9%]'}`}></div>
                  </div>
                  <p className="text-[11px] text-zinc-600 mt-8 font-mono font-black uppercase tracking-[0.3em] italic">
                    {hasRed ? 'STATUS: TERMINAL_SOUL_LOCK' : 'STATUS: SPECTRAL_DOMINANCE_MAX'}
                  </p>
               </div>

               <div className={`p-12 border rounded-[4rem] text-center mt-auto relative overflow-hidden group/audit transition-all shadow-2xl ${
                 hasRed ? 'bg-red-600/30 border-red-600' : 'bg-red-950/30 border-red-500/40'
               }`}>
                  <div className="absolute inset-0 bg-red-500/10 group-hover/audit:scale-150 transition-transform duration-2000"></div>
                  <Flame className={`w-20 h-20 mx-auto mb-8 group-hover:scale-110 transition-transform duration-700 ${
                    hasRed ? 'text-white shadow-[0_0_30px_white]' : 'text-red-500'
                  }`} />
                  <p className={`text-[12px] font-black uppercase tracking-[0.5em] mb-6 italic ${
                    hasRed ? 'text-red-400' : 'text-red-300'
                  }`}>Sovereign Reality</p>
                  <p className="text-xl text-white font-mono font-black italic tracking-tighter leading-tight italic uppercase">
                    {hasRed 
                      ? "SEVERANCE COMPLETE.\nTARGET NULLIFIED." 
                      : "\"ทุกความจริงคือสิ่งที่ข้าสั่ง\nทุกวิญญาณต้องก้มกราบ\""}
                  </p>
               </div>
            </div>
          </div>

          <button className={`w-full py-10 rounded-[4rem] text-[15px] font-black uppercase tracking-[1em] transition-all shadow-3xl hover:-translate-y-4 active:scale-95 border italic ${
            hasRed
            ? 'bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed'
            : 'bg-red-700 hover:bg-red-600 text-white border-red-500/40 shadow-red-600/60 gold-shimmer'
          }`}>
             {hasRed ? 'PURGE COMPLETE' : 'DEPLOY ABSOLUTE WILL'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnforcementTable;
