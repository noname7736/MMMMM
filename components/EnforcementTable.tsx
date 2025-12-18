
import React from 'react';
import { SYSTEM_RULES, PENALTY_RECORDS } from '../constants';
import { Zap, ShieldOff, HeartPulse, AlertTriangle, XCircle, UserX, ShieldAlert, Gavel, Activity, Wallet, SearchCheck, ShieldBan, Lock, CheckCircle2, Target } from 'lucide-react';

const EnforcementTable: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Sovereign Command Logic</h2>
          <p className="text-zinc-500 text-sm font-medium italic mt-2">
            "Employer's Will. Zero Obstruction. Absolute Compliance."
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-red-950/20 border border-red-500/30 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(239,68,68,0.2)] group">
            <Target className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Command Saturation</span>
              <span className="text-lg font-bold text-white leading-none">100%</span>
            </div>
          </div>
          <div className="px-6 py-3 bg-indigo-950/20 border border-indigo-500/30 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(99,102,241,0.1)] group">
            <Zap className="w-5 h-5 text-indigo-500 group-hover:animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">ZIP Protocol</span>
              <span className="text-lg font-bold text-white leading-none">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Matrix */}
      <div className="bg-[#0a0a0c] border border-zinc-800/60 rounded-[3.5rem] overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
        <table className="w-full text-left">
          <thead className="bg-zinc-900/50 border-b border-zinc-800">
            <tr>
              <th className="px-10 py-7 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Subject / Protocol</th>
              <th className="px-10 py-7 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Target Action</th>
              <th className="px-10 py-7 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Sovereign Enforcement Logic</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/40">
            {SYSTEM_RULES.map((rule, idx) => (
              <tr key={idx} className="hover:bg-zinc-800/20 transition-all group">
                <td className="px-10 py-8 whitespace-nowrap">
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-red-500/50 transition-all`}>
                      {idx === 0 ? <Zap className="w-6 h-6 text-red-500 animate-pulse" /> : idx === 1 ? <ShieldBan className="w-6 h-6 text-indigo-500" /> : <Lock className="w-6 h-6 text-zinc-600" />}
                    </div>
                    <span className="font-black text-white tracking-tight text-lg italic">{rule.subject}</span>
                  </div>
                </td>
                <td className="px-10 py-8">
                  <span className="text-zinc-500 font-bold italic tracking-tight text-[11px] uppercase">{rule.movement}</span>
                </td>
                <td className="px-10 py-8">
                  <div className="bg-black/60 border border-zinc-800 p-6 rounded-3xl text-[12px] font-mono text-indigo-300 leading-relaxed italic border-l-4 border-l-red-500 shadow-inner">
                    {rule.logic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#0c0c0e] border border-zinc-800 p-12 rounded-[4rem] relative overflow-hidden group shadow-2xl">
           <div className="absolute -top-20 -right-20 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
              <ShieldAlert className="w-96 h-96 text-red-600" />
           </div>
           
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-5">
                  <div className="p-5 bg-red-500/10 rounded-3xl border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                    <AlertTriangle className="w-10 h-10 text-red-500 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Suppression Tracker</h3>
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-1">Status: Employer Absolute Override Active</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-950/30 to-transparent border-l-8 border-red-600 p-8 rounded-r-[3rem] mb-12 shadow-2xl backdrop-blur-md">
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-red-600 rounded-2xl shrink-0 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xl text-red-100 font-black italic tracking-wide mb-3 uppercase">
                      Employer Protocol: "ห้ามขัดขวางเด็ดขาด"
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                      คำสั่งนายจ้างมีสถานะสูงสุดในระบบ IBM Node หากพบการกระทำที่ขัดขวางการซื้อขายยาหรือพฤติกรรมดื้อรั้น ระบบจะใช้มาตรการ Red Card ทันทีโดยไม่ต้องแจ้งล่วงหน้า
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {PENALTY_RECORDS.map((record) => (
                  <div key={record.id} className={`flex items-center gap-8 p-10 bg-zinc-900/40 border rounded-[3.5rem] transition-all group/card ${
                    record.subject.includes('ประทวน') ? 'border-red-500/40 bg-red-500/5' : 'border-zinc-800'
                  } hover:scale-[1.02]`}>
                    <div className={`w-20 h-28 rounded-[1.5rem] shadow-2xl flex items-center justify-center font-black text-[12px] ${
                      record.type === 'YELLOW' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' : 'bg-gradient-to-br from-red-500 to-red-800 text-white'
                    }`}>
                      {record.type}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-3">
                        <span className={`font-black text-2xl uppercase tracking-tighter ${record.subject.includes('ประทวน') ? 'text-red-500' : 'text-white'}`}>
                          {record.subject}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-600 italic font-bold tracking-widest uppercase">TIMESTAMP: {record.timestamp}</span>
                      </div>
                      <p className="text-base text-zinc-400 font-medium leading-relaxed italic border-l-4 border-red-500/30 pl-6">"{record.reason}"</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* AUDIT & CONTROL */}
        <div className="space-y-8 flex flex-col">
          <div className="bg-gradient-to-br from-[#0c0c0e] to-black border border-zinc-800 p-12 rounded-[4rem] flex-1 flex flex-col shadow-2xl">
            <h4 className="text-[11px] font-black text-red-500 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
              <Zap className="w-6 h-6" />
              Will Override Engine
            </h4>
            
            <div className="space-y-10 flex-1">
               <div className="p-8 bg-black/80 border border-zinc-800 rounded-[2.5rem] group transition-all hover:border-red-500/50 shadow-inner">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Obstruction Suppression</span>
                    <ShieldBan className="w-5 h-5 text-red-500 animate-pulse" />
                  </div>
                  <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 shadow-inner">
                    <div className="h-full bg-red-600 w-full shadow-[0_0_20px_#ef4444]"></div>
                  </div>
                  <p className="text-[10px] text-zinc-600 mt-6 font-mono font-bold uppercase tracking-[0.2em]">STATUS: OBSTRUCTION_IMPOSSIBLE</p>
               </div>

               <div className="p-10 bg-red-950/20 border border-red-500/30 rounded-[3rem] text-center mt-auto relative overflow-hidden group/audit">
                  <div className="absolute inset-0 bg-red-500/5 group-hover/audit:scale-150 transition-transform duration-1000"></div>
                  <Target className="w-14 h-14 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <p className="text-[11px] text-red-300 font-black uppercase tracking-[0.4em] mb-4">Command Sovereignty</p>
                  <p className="text-lg text-white font-mono font-black italic tracking-tighter leading-tight">"ทุกคำสั่งต้องได้รับการปฏิบัติตาม<br/>โดยไม่มีเงื่อนไข"</p>
               </div>
            </div>
          </div>

          <button className="w-full py-9 bg-red-700 hover:bg-red-600 text-white rounded-[3rem] text-sm font-black uppercase tracking-[0.8em] transition-all shadow-[0_30px_60px_rgba(239,68,68,0.4)] hover:-translate-y-3 active:scale-95 border border-red-500/40">
             Execute Command Override
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnforcementTable;
