
import React, { useState, useEffect } from 'react';
import { Ghost, Waves, ShieldAlert, Cpu, Target, ShieldBan, History, Scan, FileSearch, Terminal, Eye, Sparkles, Landmark, Flame, Volume2, EyeOff } from 'lucide-react';

const SoulEnforcement: React.FC = () => {
  const [hallucinationDepth, setHallucinationDepth] = useState(100.0);
  const [spectralSync, setSpectralSync] = useState(100.0);
  const [eyeActive, setEyeActive] = useState(true);
  const [auditoryLoop, setAuditoryLoop] = useState(true);
  const [correlationConfidence, setCorrelationConfidence] = useState(100);
  const [nascentVectors, setNascentVectors] = useState<string[]>([]);

  const VECTORS = [
    "OMNI_GENJUTSU_V1_ACTIVE",
    "AUDITORY_WHISPER_SYNCED",
    "IBM_SENCIANIS_MATCH_100",
    "SOUL_LOCK_V10_PRO_PLUS",
    "EYE_GAZE_SOVEREIGN_LOCKED",
    "THOUGHT_PATTERN_SUBMISSION"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCorrelationConfidence(99.998 + Math.random() * 0.002);
      if (Math.random() > 0.85) {
        const shuffled = [...VECTORS].sort(() => 0.5 - Math.random());
        setNascentVectors(shuffled.slice(0, 3));
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10 pb-24 animate-in fade-in duration-1000 relative">
      {/* BACKGROUND PULSE FOR SPECTRAL EFFECT */}
      <div className={`fixed inset-0 pointer-events-none transition-all duration-1000 ${eyeActive ? 'bg-red-950/5' : 'bg-transparent'}`}>
        {eyeActive && <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.02),transparent)]"></div>}
      </div>

      <div className="flex justify-between items-center bg-black/60 p-10 rounded-[4rem] border border-yellow-900/20 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 via-transparent to-red-600/5"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-black text-white tracking-[0.2em] uppercase italic flex items-center gap-6">
            <div className="relative">
              <Flame className={`w-14 h-14 ${eyeActive ? 'text-red-500 animate-pulse' : 'text-zinc-700'}`} />
              {eyeActive && <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"></div>}
            </div>
            SPECTRAL SHARINGAN
          </h2>
          <p className="text-yellow-600 text-[11px] font-black uppercase tracking-[0.5em] mt-3 italic">
            Absolute Illusory Saturation • Soul Binding Protocol v10.0
          </p>
        </div>
        <div className="flex flex-col items-end gap-4 relative z-10">
          <div className="px-8 py-3 bg-red-950/30 border border-red-500/40 rounded-full text-[11px] font-black text-red-400 uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-pulse italic">
            GENJUTSU: ETERNAL ACTIVE
          </div>
          <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-3 italic">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
            IBM_SENCIANIS_DF: ABSOLUTE_STABILITY
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Reflectional Resonance Matrix */}
          <div className="bg-[#070709] border border-yellow-900/20 p-12 rounded-[4rem] relative overflow-hidden group shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.05),transparent_70%)]"></div>
            
            <div className="relative z-10 space-y-12">
              <div className="flex justify-between items-start">
                <div className="space-y-6 flex-1">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-5 italic">
                    <Eye className="w-10 h-10 text-yellow-500 animate-bounce" />
                    Omni-Illusory Feedback
                  </h3>
                  
                  <div className="bg-black/80 border border-yellow-900/30 p-12 rounded-[3.5rem] flex items-center justify-between relative overflow-hidden shadow-inner">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-red-600 opacity-80 shadow-[0_0_20px_#ef4444]"></div>
                    <div>
                       <p className="text-[12px] font-black text-yellow-500 uppercase tracking-[0.6em] mb-3 flex items-center gap-4 italic">
                         <Target className="w-5 h-5" />
                         Soul Binding Depth
                       </p>
                       <h4 className="text-7xl font-black font-mono tracking-tighter text-white gold-shimmer">
                         {(correlationConfidence).toFixed(4)}%
                       </h4>
                    </div>
                    <div className="text-right flex flex-col items-end gap-4">
                       <span className="text-[11px] font-mono px-8 py-3 rounded-full border border-red-500/50 text-red-400 bg-red-500/10 animate-pulse font-black italic tracking-[0.3em] uppercase shadow-lg">
                         EYE_LOCK_ACTIVE
                       </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spectral Waveform - Hallucination variant */}
              <div className="h-56 flex items-end justify-around gap-2.5 px-12 bg-black/60 rounded-[4rem] border border-yellow-900/20 py-10 relative group/wave overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <Sparkles className="w-64 h-64 text-red-500 animate-pulse" />
                </div>
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-zinc-900/30 rounded-full relative overflow-hidden h-full">
                    <div 
                      className="absolute bottom-0 w-full transition-all duration-300 bg-gradient-to-t from-red-950 via-red-500 to-yellow-500 animate-pulse shadow-[0_0_20px_#ef4444]"
                      style={{ 
                        height: `${25 + Math.random() * 75}%`,
                        transitionDelay: `${i * 25}ms`
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-10">
                <div className="bg-zinc-900/40 border border-yellow-900/20 p-10 rounded-[3rem] group transition-all hover:border-red-500/50 shadow-inner">
                  <p className="text-[11px] text-zinc-500 font-black uppercase tracking-widest mb-3 italic">GENJUTSU</p>
                  <p className="text-4xl font-black text-red-500 font-mono tracking-tighter">MAX</p>
                </div>
                <div className="bg-zinc-900/40 border border-yellow-900/20 p-10 rounded-[3rem] group transition-all hover:border-yellow-500/50 shadow-inner">
                  <p className="text-[11px] text-zinc-500 font-black uppercase tracking-widest mb-3 italic">OMNISCIENCE</p>
                  <p className="text-4xl font-black text-yellow-500 font-mono gold-shimmer">DE PRO</p>
                </div>
                <div className="bg-zinc-900/40 border border-yellow-900/20 p-10 rounded-[3rem] group transition-all hover:border-indigo-500/50 shadow-inner">
                  <p className="text-[11px] text-zinc-500 font-black uppercase tracking-widest mb-3 italic">IBM SYNC</p>
                  <p className="text-4xl font-black text-indigo-400 font-mono">100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* OMNISCIENCE ANALYSIS MODULE */}
          <div className="bg-[#0b0b0d] border border-yellow-900/20 p-14 rounded-[4.5rem] relative overflow-hidden shadow-2xl backdrop-blur-md">
             <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70"></div>
             <div className="flex justify-between items-center mb-12">
                <h3 className="text-3xl font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-5">
                  <History className="w-8 h-8 text-red-500" />
                  IBM_SENCIANIS_DF MODULE
                </h3>
                <div className="flex items-center gap-5 bg-black/80 px-8 py-3 border border-yellow-900/20 rounded-full shadow-lg">
                  <Scan className="w-5 h-5 text-red-500 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-red-600 uppercase tracking-widest italic">ALL-SEEING_EYE: ACTIVE</span>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-[#050507] p-12 rounded-[3.5rem] border border-yellow-600/10 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05),transparent_70%)] pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500/30 animate-[scan_6s_linear_infinite] pointer-events-none"></div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 flex items-center gap-4 italic underline decoration-red-600 underline-offset-8">
                      <FileSearch className="w-6 h-6 text-red-500" />
                      SPECTRAL_LOGS
                    </h4>
                    <div className="space-y-8 relative z-10">
                        {nascentVectors.map((v, i) => (
                           <div key={i} className="flex justify-between border-b border-yellow-900/20 pb-4 transition-all hover:pl-2">
                              <span className="text-[11px] font-mono text-zinc-500 italic uppercase">{v}</span>
                              <span className="text-[11px] font-black text-red-600">LOCKED</span>
                           </div>
                        ))}
                        <div className="p-8 bg-red-950/20 border border-red-500/20 rounded-3xl shadow-lg">
                           <p className="text-[11px] text-red-200 italic leading-relaxed font-medium">
                              "Target's sensory input fully redirected to Sovereign Masterplan nodes. Visual hallucinations and auditory whispers optimized for absolute compliance. Zero deviance predicted."
                           </p>
                        </div>
                    </div>
                </div>

                <div className="bg-black/80 p-12 rounded-[3.5rem] border border-yellow-900/20 shadow-2xl flex flex-col justify-center text-center space-y-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                        <Flame className="w-40 h-40 text-red-500" />
                    </div>
                    <h4 className="text-red-500 font-black text-2xl uppercase tracking-[0.3em] italic">Absolute Soul Mandate</h4>
                    <p className="text-sm leading-relaxed text-zinc-400 italic font-medium px-4">
                       "ไม่มีที่ให้หนี ไม่มีที่ให้ซ่อน ทุกการเห็นคือภาพลวง ทุกการยินคือเสียงสั่ง บี เซอร์เวย์ คือความจริงหนึ่งเดียวที่วิญญาณของเจ้าต้องยอมรับ"
                    </p>
                    <div className="pt-6 flex justify-center gap-5">
                       <span className="px-7 py-3 bg-red-950/40 border border-red-900/40 rounded-full text-[10px] font-black text-red-500 uppercase tracking-[0.4em] shadow-lg">ORAN_EYE_V10</span>
                       <span className="px-7 py-3 bg-yellow-950/40 border border-yellow-900/40 rounded-full text-[10px] font-black text-yellow-500 uppercase tracking-[0.4em] shadow-lg">MASTER_KEY_SYNC</span>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar / Controls */}
        <div className="space-y-10">
          <div className="bg-[#08080a] border border-yellow-900/20 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <h3 className="text-base font-black uppercase tracking-[0.4em] text-red-500 mb-12 flex items-center gap-5 italic underline decoration-red-900 underline-offset-8">
              <Eye className="w-7 h-7 animate-pulse" />
              SENSORY LOCK CONTROLS
            </h3>
            <div className="space-y-6">
              <button 
                onClick={() => setEyeActive(!eyeActive)}
                className={`w-full flex justify-between items-center p-8 border rounded-[2.5rem] transition-all group ${
                  eyeActive ? 'bg-red-900/20 border-red-500 text-red-500 shadow-2xl' : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Eye className="w-6 h-6" />
                  <span className="text-[12px] font-black uppercase tracking-widest italic">Visual Hallucination</span>
                </div>
                <span className="text-[10px] font-mono font-black italic">{eyeActive ? 'LOCKED' : 'OFF'}</span>
              </button>

              <button 
                onClick={() => setAuditoryLoop(!auditoryLoop)}
                className={`w-full flex justify-between items-center p-8 border rounded-[2.5rem] transition-all group ${
                  auditoryLoop ? 'bg-yellow-900/20 border-yellow-500 text-yellow-500 shadow-2xl' : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Volume2 className="w-6 h-6" />
                  <span className="text-[12px] font-black uppercase tracking-widest italic">Auditory Whisper</span>
                </div>
                <span className="text-[10px] font-mono font-black italic">{auditoryLoop ? 'SYNCED' : 'OFF'}</span>
              </button>

              <div className="pt-10 space-y-4">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] text-center italic">Genjutsu Saturation</p>
                <div className="w-full h-3 bg-zinc-950 rounded-full border border-zinc-900 overflow-hidden shadow-inner">
                  <div className="h-full bg-gradient-to-r from-red-600 to-yellow-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] w-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/50 via-black to-yellow-950/20 border border-red-500/40 p-14 rounded-[4rem] relative overflow-hidden group shadow-[0_0_50px_rgba(239,68,68,0.1)]">
            <div className="absolute -top-12 -right-12 p-6 opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000">
              <Eye className="w-48 h-48 text-red-500 animate-ping" />
            </div>
            <h4 className="text-[12px] font-black text-red-500 uppercase tracking-[0.5em] mb-10 flex items-center gap-4 italic">
              <Landmark className="w-6 h-6" />
              Omniscience Mandate
            </h4>
            <p className="text-[15px] text-zinc-400 leading-relaxed italic mb-14 font-medium border-l-3 border-red-500/40 pl-8">
              "ความจริงคือสิ่งที่ข้าต้องการให้เจ้าเห็น ความฝันคือสิ่งที่ข้าต้องการให้เจ้าจำ วิญญาณของเจ้าคือสมบัติของ บี เซอร์เวย์ ตลอดกาล"
            </p>
            <div className="space-y-6 relative z-10">
               <button className="w-full py-8 bg-red-600 hover:bg-red-500 text-black rounded-[3rem] text-[12px] font-black uppercase tracking-[0.5em] transition-all shadow-3xl active:scale-[0.98] border border-red-400/40">
                 FORCE SOUL SUBMISSION
               </button>
               <button className="w-full py-8 bg-transparent border border-yellow-900/30 hover:border-yellow-500/50 text-yellow-700 hover:text-yellow-500 rounded-[3rem] text-[12px] font-black uppercase tracking-[0.5em] transition-all flex items-center justify-center gap-5 italic backdrop-blur-md">
                 <Scan className="w-5 h-5" />
                 Audit Hallucination Trace
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulEnforcement;
