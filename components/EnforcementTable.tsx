
import React from 'react';
import { SYSTEM_RULES, PENALTY_RECORDS } from '../constants';
import { Zap, ShieldOff, HeartPulse, AlertTriangle, XCircle, UserX, ShieldAlert, Gavel, Activity, Wallet, SearchCheck, ShieldBan, Lock, CheckCircle2 } from 'lucide-react';

const EnforcementTable: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Sovereign Command Logic</h2>
          <p className="text-zinc-500 text-sm font-medium italic mt-2">
            "One Topic. Zero Bullying. Audit Before Pay." — The Survey Standard.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-yellow-950/20 border border-yellow-500/30 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(234,179,8,0.1)] group">
            <AlertTriangle className="w-5 h-5 text-yellow-500 group-hover:animate-bounce" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Active Yellow</span>
              <span className="text-lg font-bold text-white leading-none">05</span>
            </div>
          </div>
          <div className="px-6 py-3 bg-red-950/20 border border-red-500/30 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(239,68,68,0.1)] group">
            <XCircle className="w-5 h-5 text-red-500 group-hover:animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Terminal Red</span>
              <span className="text-lg font-bold text-white leading-none">01</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Matrix */}
      <div className="bg-[#0a0a0c] border border-zinc-800/60 rounded-[3rem] overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20"></div>
        <table className="w-full text-left">
          <thead className="bg-zinc-900/50 border-b border-zinc-800">
            <tr>
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Subject / Constraint</th>
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Target Action</th>
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Sovereign Enforcement Logic</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/40">
            {SYSTEM_RULES.map((rule, idx) => (
              <tr key={idx} className="hover:bg-zinc-800/20 transition-all group">
                <td className="px-10 py-8 whitespace-nowrap">
                  <div className="flex items-center gap-5">
                    <div className={`p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all`}>
                      {idx === 0 ? <Lock className="w-5 h-5 text-indigo-500" /> : idx === 1 ? <ShieldBan className="w-5 h-5 text-red-500" /> : idx === 2 ? <SearchCheck className="w-5 h-5 text-green-500" /> : <Gavel className="w-5 h-5 text-yellow-500" />}
                    </div>
                    <span className="font-black text-white tracking-tight text-base">{rule.subject}</span>
                  </div>
                </td>
                <td className="px-10 py-8">
                  <span className="text-zinc-400 font-bold italic tracking-tight text-xs uppercase">{rule.movement}</span>
                </td>
                <td className="px-10 py-8">
                  <div className="bg-black/60 border border-zinc-800 p-5 rounded-2xl text-[11px] font-mono text-indigo-300 leading-relaxed italic shadow-inner border-l-4 border-l-indigo-500/50">
                    {rule.logic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* MONITORING HUB */}
        <div className="lg:col-span-2 bg-[#0c0c0e] border border-zinc-800 p-12 rounded-[4rem] relative overflow-hidden group shadow-2xl">
           <div className="absolute -top-20 -right-20 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
              <ShieldAlert className="w-96 h-96 text-yellow-600" />
           </div>
           
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-yellow-500/10 rounded-3xl border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <AlertTriangle className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Disciplinary Tracker</h3>
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-1">Pratuan Cluster: Warning Phase</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <div className="px-4 py-1.5 bg-black border border-yellow-500/20 rounded-full text-[10px] font-black text-yellow-500 uppercase tracking-widest shadow-[0_0_10px_rgba(234,179,8,0.1)]">
                     STATUS: YELLOW_WARNING
                   </div>
                   <span className="text-[9px] text-zinc-700 font-mono mt-2">ID: PRATUAN-UBON-009</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-950/20 to-transparent border-l-8 border-yellow-600 p-8 rounded-r-3xl mb-12 shadow-2xl backdrop-blur-md">
                <div className="flex gap-6 items-start">
                  <div className="p-2 bg-yellow-500 rounded-lg shrink-0 shadow-lg">
                    <SearchCheck className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-base text-yellow-100 font-black italic tracking-wide mb-3 uppercase">
                      Mandatory Protocol: "ตรวจสอบทุกอย่างก่อนจ่าย"
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      ระบบได้รับคำสั่งเด็ดขาด: ห้ามมีการกลั่นแกล้งเพื่อขอเงิน และการสนทนาต้องจำกัดเพียงเรื่องการขายยาให้ บี เซอร์เวย์ เท่านั้น หากพบการละเมิด กฎ Red Card จะถูกใช้ทันที
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {PENALTY_RECORDS.map((record) => (
                  <div key={record.id} className={`flex items-center gap-8 p-8 bg-zinc-900/30 border rounded-[2.5rem] transition-all group/card ${
                    record.subject.includes('ประทวน') ? 'border-yellow-500/40 bg-yellow-500/5' : 'border-zinc-800'
                  } hover:scale-[1.02] hover:shadow-2xl`}>
                    <div className={`w-16 h-24 rounded-2xl shadow-2xl flex items-center justify-center font-black text-[11px] transition-all group-hover/card:rotate-12 ${
                      record.type === 'YELLOW' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black shadow-yellow-500/40' : 'bg-gradient-to-br from-red-500 to-red-800 text-white shadow-red-600/30'
                    }`}>
                      {record.type}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-black text-lg uppercase tracking-tighter ${record.subject.includes('ประทวน') ? 'text-yellow-500' : 'text-white'}`}>
                          {record.subject}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-600 tracking-tighter italic font-bold">LOG: {record.timestamp}</span>
                      </div>
                      <p className="text-sm text-zinc-400 font-medium leading-relaxed italic border-l-2 border-zinc-800 pl-4">"{record.reason}"</p>
                      <div className="mt-6 flex items-center gap-4">
                         <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                           record.weight === 'Heavy' ? 'border-red-500/50 text-red-500 bg-red-500/10' : 'border-yellow-500/50 text-yellow-500 bg-yellow-500/10'
                         }`}>
                           THRESHOLD: {record.weight}
                         </div>
                         <div className="h-[1px] flex-1 bg-zinc-800/60"></div>
                         {record.subject.includes('ประทวน') && (
                           <div className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                             <span className="text-[9px] font-black text-red-500 uppercase italic tracking-widest">Awaiting Red Escalation</span>
                           </div>
                         )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* AUDIT & CONTROL */}
        <div className="space-y-8 flex flex-col">
          <div className="bg-gradient-to-br from-[#0c0c0e] to-black border border-zinc-800 p-10 rounded-[3.5rem] flex-1 flex flex-col shadow-2xl shadow-indigo-500/5">
            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-10 flex items-center gap-3">
              <SearchCheck className="w-5 h-5" />
              Pre-Payment Audit Core
            </h4>
            
            <div className="space-y-8 flex-1">
               <div className="p-6 bg-black/80 border border-zinc-800 rounded-3xl group transition-all hover:border-red-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Anti-Bullying Lock</span>
                    <ShieldBan className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 shadow-inner">
                    <div className="h-full bg-red-600 w-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                  </div>
                  <p className="text-[10px] text-zinc-600 mt-4 font-mono font-bold uppercase tracking-tight">STATUS: EXTORTION_PREVENTED</p>
               </div>

               <div className="p-6 bg-black/80 border border-zinc-800 rounded-3xl group transition-all hover:border-green-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Topic Focus Sensor</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 shadow-inner">
                    <div className="h-full bg-green-500 w-full shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                  </div>
                  <p className="text-[10px] text-zinc-600 mt-4 font-mono font-bold uppercase tracking-tight">MODE: MEDICINE_SALES_ONLY</p>
               </div>

               <div className="p-6 bg-indigo-950/20 border border-indigo-500/30 rounded-[2rem] text-center mt-12 relative overflow-hidden group/audit">
                  <div className="absolute inset-0 bg-indigo-500/5 group-hover/audit:scale-150 transition-transform duration-1000"></div>
                  <Wallet className="w-10 h-10 text-indigo-400 mx-auto mb-4 group-hover/audit:scale-110 transition-transform" />
                  <p className="text-[10px] text-indigo-300 font-black uppercase tracking-[0.4em] mb-2">Audit Mandate</p>
                  <p className="text-sm text-white font-mono font-bold italic tracking-tighter leading-tight">"ตรวจสอบความประพฤติ<br/>ทุกอย่างก่อนจ่ายเงิน"</p>
               </div>
            </div>
          </div>

          <button className="w-full py-7 bg-indigo-700 hover:bg-indigo-600 text-white rounded-[2.5rem] text-xs font-black uppercase tracking-[0.6em] transition-all shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:-translate-y-2 active:scale-95 border border-indigo-500/40 relative overflow-hidden">
             <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
             Run Payment Audit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnforcementTable;
