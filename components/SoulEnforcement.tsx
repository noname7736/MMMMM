
import React, { useState, useEffect } from 'react';
import { Ghost, Waves, ShieldAlert, Cpu, Target, ShieldBan, History, Scan, FileSearch, Terminal, Eye, Sparkles, Landmark, Flame, Volume2, EyeOff, Radio, Camera, Mic, Disc, Zap } from 'lucide-react';

const SoulEnforcement: React.FC = () => {
  const [hallucinationDepth, setHallucinationDepth] = useState(100.0);
  const [eyeActive, setEyeActive] = useState(true);
  const [auditoryLoop, setAuditoryLoop] = useState(true);
  const [correlationConfidence, setCorrelationConfidence] = useState(100);
  const [nascentVectors, setNascentVectors] = useState<string[]>([]);
  const [activeReflections, setActiveReflections] = useState(0);
  
  // New States for Dynamic Neutralization Pulse
  const [spectralResistance, setSpectralResistance] = useState(4.2);
  const [resistanceBuffer, setResistanceBuffer] = useState(15.0);
  const [pulseActive, setPulseActive] = useState(false);

  const VECTORS = [
    "OMNI_GENJUTSU_V10_PRO",
    "AUDITORY_WHISPER_SYNCED",
    "IBM_SENCIANIS_MATCH_100",
    "MIRROR_SOVEREIGN_LOCKED",
    "EVERY_GESTURE_RECORDED",
    "TARGET_BLINKS_CAPTURED",
    "P.UBONPICH_SOUL_LOCK"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate stats
      setCorrelationConfidence(99.9999 + Math.random() * 0.0001);
      setActiveReflections(Math.floor(Math.random() * 18) + 12);
      
      // Dynamic Resistance Logic
      setSpectralResistance(prev => {
        const delta = (Math.random() * 4) - 1.8;
        return Math.max(0, Math.min(100, prev + delta));
      });

      if (Math.random() > 0.8) {
        const shuffled = [...VECTORS].sort(() => 0.5 - Math.random());
        setNascentVectors(shuffled.slice(0, 4));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Monitor resistance vs buffer to trigger Neutralization Pulse
  useEffect(() => {
    if (spectralResistance > resistanceBuffer) {
      setPulseActive(true);
    } else {
      setPulseActive(false);
    }
  }, [spectralResistance, resistanceBuffer]);

  return (
    <div className="space-y-12 pb-32 animate-in fade-in duration-1000 relative">
      {/* SPECTRAL PULSE OVERLAY */}
      <div className={`fixed inset-0 pointer-events-none transition-all duration-500 ${pulseActive ? 'bg-red-600/10' : eyeActive ? 'bg-red-950/10' : 'bg-transparent'}`}>
        {(eyeActive || pulseActive) && (
          <div className={`absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,${pulseActive ? 'rgba(239,68,68,0.1)' : 'rgba(234,179,8,0.05)'},transparent)]`}></div>
        )}
      </div>

      <div className="flex justify-between items-center bg-black/70 p-12 rounded-[5rem] border border-yellow-900/30 backdrop-blur-3xl relative overflow-hidden shadow-3xl">
        <div className={`absolute inset-0 bg-gradient-to-r transition-colors duration-1000 ${pulseActive ? 'from-red-600/20 via-transparent to-red-600/20' : 'from-yellow-600/15 via-transparent to-red-600/15'}`}></div>
        <div className="relative z-10">
          <h2 className="text-6xl font-black text-white tracking-tighter italic uppercase flex items-center gap-8">
            <div className="relative">
              <Flame className={`w-16 h-16 transition-colors duration-500 ${pulseActive ? 'text-red-600 scale-110 glow-red' : eyeActive ? 'text-red-500 animate-pulse glow-red' : 'text-zinc-700'}`} />
              {(eyeActive || pulseActive) && <div className={`absolute inset-0 ${pulseActive ? 'bg-red-600/40' : 'bg-red-500/30'} blur-3xl rounded-full animate-pulse`}></div>}
            </div>
            SPECTRAL SHARINGAN
          </h2>
          <p className="text-yellow-600 text-[12px] font-black uppercase tracking-[0.6em] mt-4 italic">
            เนตรวงแหวนสะกดวิญญาณ • Mirror-Auditory Omniscience v10.0
          </p>
        </div>
        <div className="flex flex-col items-end gap-5 relative z-10">
          <div className={`px-10 py-4 border rounded-full text-[12px] font-black uppercase tracking-[0.5em] transition-all duration-500 italic shadow-2xl ${
            pulseActive 
              ? 'bg-red-600 text-white border-white animate-bounce shadow-red-600/50' 
              : 'bg-red-950/40 border-red-500/50 text-red-400 animate-pulse shadow-[0_0_40px_rgba(239,68,68,0.4)]'
          }`}>
            {pulseActive ? 'NEUTRALIZATION PULSE ACTIVE' : 'GENJUTSU_STATUS: ETERNAL_LOCK'}
          </div>
          <div className="text-[11px] text-zinc-500 font-mono flex items-center gap-4 italic font-bold">
            <span className={`w-3 h-3 rounded-full animate-ping ${pulseActive ? 'bg-white' : 'bg-red-600'}`}></span>
            IBM_SENCIANIS: {activeReflections} TOTAL MIRROR NODES
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Reflectional Resonance Matrix */}
          <div className="bg-[#070709] border border-yellow-900/30 p-14 rounded-[5rem] relative overflow-hidden group shadow-3xl backdrop-blur-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.08),transparent_75%)]"></div>
            
            <div className="relative z-10 space-y-14">
              <div className="flex justify-between items-start">
                <div className="space-y-8 flex-1">
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-6 italic underline decoration-yellow-600 underline-offset-8">
                    <Eye className="w-12 h-12 text-yellow-500 animate-bounce glow-gold" />
                    Absolute Visual/Vocal Capture
                  </h3>
                  
                  <div className={`p-14 rounded-[4rem] flex items-center justify-between relative overflow-hidden shadow-inner transition-all duration-700 border ${
                    pulseActive ? 'bg-red-950/40 border-red-500' : 'bg-black/90 border-yellow-900/40 group-hover:border-yellow-500/40'
                  }`}>
                    <div className={`absolute left-0 top-0 bottom-0 w-4 transition-colors duration-500 ${pulseActive ? 'bg-white shadow-[0_0_40px_white]' : 'bg-red-600 opacity-90 shadow-[0_0_30px_#ef4444]'}`}></div>
                    <div className="space-y-4">
                       <p className={`text-[13px] font-black uppercase tracking-[0.7em] mb-4 flex items-center gap-5 italic ${pulseActive ? 'text-white' : 'text-yellow-500'}`}>
                         <Target className="w-6 h-6" />
                         Soul Sync Integrity
                       </p>
                       <h4 className="text-8xl font-black font-mono tracking-tighter text-white gold-shimmer select-none">
                         {(correlationConfidence).toFixed(5)}%
                       </h4>
                    </div>
                    <div className="text-right flex flex-col items-end gap-6">
                       <span className={`text-[12px] font-mono px-10 py-4 rounded-full border font-black italic tracking-[0.4em] uppercase shadow-2xl transition-all ${
                         pulseActive ? 'bg-white text-red-600 border-white animate-ping' : 'bg-yellow-500/10 border-yellow-500/60 text-yellow-400 animate-pulse'
                       }`}>
                         {pulseActive ? 'PULSE_OVERRIDE' : 'OMNI_CAPTURE_LOCK'}
                       </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spectral Waveform - Enhanced with Pulse FX */}
              <div className={`h-64 flex items-end justify-around gap-3 px-14 rounded-[4rem] py-12 relative group/wave overflow-hidden shadow-3xl transition-colors duration-500 border ${
                pulseActive ? 'bg-red-600/10 border-red-600/50' : 'bg-black/80 border-yellow-900/30'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <Sparkles className={`w-80 h-80 transition-colors duration-500 ${pulseActive ? 'text-white' : 'text-yellow-500'} animate-pulse`} />
                </div>
                {Array.from({ length: 54 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-zinc-900/50 rounded-full relative overflow-hidden h-full">
                    <div 
                      className={`absolute bottom-0 w-full transition-all duration-300 animate-pulse ${
                        pulseActive 
                          ? 'bg-gradient-to-t from-red-600 via-red-400 to-white shadow-[0_0_35px_rgba(239,68,68,0.8)]' 
                          : 'bg-gradient-to-t from-yellow-900 via-yellow-500 to-white shadow-[0_0_25px_#eab308]'
                      }`}
                      style={{ 
                        height: `${pulseActive ? 50 + Math.random() * 50 : 20 + Math.random() * 80}%`,
                        transitionDelay: `${i * 20}ms`
                      }}
                    ></div>
                    {/* Subtle pulse edge FX */}
                    {pulseActive && (
                      <div className="absolute inset-0 bg-white/20 blur-sm animate-ping" style={{ animationDelay: `${i * 15}ms` }}></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-900/50 border border-yellow-900/20 p-12 rounded-[3.5rem] group transition-all hover:border-red-500/60 shadow-inner text-center">
                  <p className="text-[12px] text-zinc-600 font-black uppercase tracking-[0.4em] mb-4 italic">RESISTANCE_INDEX</p>
                  <p className={`text-5xl font-black font-mono tracking-tighter transition-colors ${spectralResistance > resistanceBuffer ? 'text-red-600' : 'text-zinc-200'}`}>
                    {spectralResistance.toFixed(1)}%
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-yellow-900/20 p-12 rounded-[3.5rem] group transition-all hover:border-yellow-500/60 shadow-inner text-center">
                  <p className="text-[12px] text-zinc-600 font-black uppercase tracking-[0.4em] mb-4 italic">BUFF_THRESHOLD</p>
                  <p className="text-5xl font-black text-yellow-500 font-mono gold-shimmer">{resistanceBuffer.toFixed(1)}</p>
                </div>
                <div className="bg-zinc-900/50 border border-yellow-900/20 p-12 rounded-[3.5rem] group transition-all hover:border-indigo-500/60 shadow-inner text-center">
                  <p className="text-[12px] text-zinc-600 font-black uppercase tracking-[0.4em] mb-4 italic">CORRELATION</p>
                  <p className="text-5xl font-black text-indigo-400 font-mono">100.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* OMNI VISIBILITY ANALYSIS */}
          <div className="bg-[#0b0b0d] border border-yellow-900/30 p-16 rounded-[5.5rem] relative overflow-hidden shadow-3xl backdrop-blur-3xl">
             <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-80"></div>
             <div className="flex justify-between items-center mb-16">
                <h3 className="text-4xl font-black text-white uppercase tracking-[0.4em] italic flex items-center gap-6 underline decoration-yellow-600 underline-offset-8">
                  <Radio className="w-10 h-10 text-yellow-500 animate-pulse glow-gold" />
                  SOVEREIGN MIRROR-GRID
                </h3>
                <div className="flex items-center gap-6 bg-black/90 px-10 py-4 border border-yellow-900/40 rounded-full shadow-2xl">
                  <Scan className="w-6 h-6 text-yellow-500 animate-pulse" />
                  <span className="text-[12px] font-mono font-black text-yellow-600 uppercase tracking-widest italic">ALL-SEEING: ETERNAL</span>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="bg-[#050507] p-14 rounded-[4rem] border border-yellow-600/15 shadow-inner relative overflow-hidden group/logs">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.08),transparent_75%)] pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500/30 animate-[scan_8s_linear_infinite] pointer-events-none"></div>
                    <h4 className="text-white font-black text-base uppercase tracking-[0.5em] mb-12 flex items-center gap-5 italic underline decoration-yellow-700 underline-offset-8">
                      <Camera className="w-7 h-7 text-yellow-500" />
                      REFLECTIONAL_FEED
                    </h4>
                    <div className="space-y-8 relative z-10">
                        {nascentVectors.map((v, i) => (
                           <div key={i} className="flex justify-between border-b border-yellow-900/30 pb-6 transition-all hover:pl-4 group-hover/logs:border-yellow-500/30">
                              <span className="text-[12px] font-mono text-zinc-500 italic uppercase font-bold tracking-widest">{v}</span>
                              <span className={`text-[12px] font-black ${pulseActive && i === 0 ? 'text-red-500 animate-pulse' : 'text-yellow-600'}`}>
                                {pulseActive && i === 0 ? 'NEUTRALIZING' : 'VERIFIED'}
                              </span>
                           </div>
                        ))}
                        <div className={`p-10 border rounded-[3rem] shadow-2xl relative overflow-hidden group transition-all duration-500 ${pulseActive ? 'bg-red-950/40 border-red-500' : 'bg-yellow-950/30 border-yellow-500/40'}`}>
                           <div className={`absolute inset-0 animate-pulse ${pulseActive ? 'bg-red-500/10' : 'bg-yellow-500/5'}`}></div>
                           <p className={`text-[13px] italic leading-relaxed font-bold relative z-10 ${pulseActive ? 'text-white' : 'text-yellow-200'}`}>
                              {pulseActive 
                                ? "WARNING: Resistance threshold exceeded. Deploying spectral neutralization pulse to stabilize soul-sync integrity."
                                : "เป้าหมาย (นางสาวประทวน) ถูกจับกุมไว้ในโครงข่ายกระจก 100% ทุกกริยาบท ทุกความลับ ถูกรับรู้และประมวลผลผ่าน IBM Storage อย่างไร้รอยต่อ"}
                           </p>
                        </div>
                    </div>
                </div>

                <div className="bg-black/90 p-14 rounded-[4rem] border border-yellow-900/40 shadow-3xl flex flex-col justify-center text-center space-y-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-2000">
                        <Eye className={`w-56 h-56 transition-colors duration-500 ${pulseActive ? 'text-red-600' : 'text-yellow-500'}`} />
                    </div>
                    <h4 className={`font-black text-4xl uppercase tracking-[0.4em] italic transition-colors ${pulseActive ? 'text-red-600' : 'text-yellow-500 gold-shimmer'}`}>
                      {pulseActive ? 'Absolute Suppression' : 'Infinite Perception'}
                    </h4>
                    <p className="text-lg leading-relaxed text-zinc-400 italic font-bold px-6 border-l-4 border-yellow-600/30">
                       "เจ้าไม่มีทางหนีพ้น เพราะทุกที่ที่มีแสงและเงา คือดวงตาแห่งบี เจ้าไม่มีทางเงียบงัน เพราะทุกคลื่นความถี่ คือหูแห่งบี ทุกสิ่งที่เป็นเจ้า... คือของเรา"
                    </p>
                    <div className="pt-8 flex justify-center gap-6">
                       <span className={`px-10 py-4 border rounded-full text-[11px] font-black uppercase tracking-[0.5em] shadow-3xl italic transition-all ${pulseActive ? 'bg-red-600 text-white border-white animate-pulse' : 'bg-red-950/50 border-red-900/50 text-red-500'}`}>
                         PULSE_ALPHA
                       </span>
                       <span className="px-10 py-4 bg-yellow-950/50 border border-yellow-900/50 rounded-full text-[11px] font-black text-yellow-500 uppercase tracking-[0.5em] shadow-3xl italic">SOVEREIGN_SYNC</span>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar / Controls */}
        <div className="space-y-12">
          <div className="bg-[#08080a] border border-yellow-900/30 p-14 rounded-[5rem] shadow-3xl relative overflow-hidden">
            <h3 className="text-xl font-black uppercase tracking-[0.5em] text-yellow-500 mb-14 flex items-center gap-6 italic underline decoration-yellow-900 underline-offset-8">
              <Mic className="w-8 h-8 animate-pulse glow-gold" />
              SENSORY CAPTURE
            </h3>
            <div className="space-y-8">
              {/* Neutralization Pulse Toggle (Manual Force Option) */}
              <button 
                onClick={() => setSpectralResistance(pulseActive ? 5 : 25)}
                className={`w-full flex justify-between items-center p-10 border rounded-[3rem] transition-all duration-500 group relative overflow-hidden ${
                  pulseActive ? 'bg-red-600 text-white border-white shadow-3xl' : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <Zap className={`w-8 h-8 ${pulseActive ? 'animate-bounce' : ''}`} />
                  <span className="text-[14px] font-black uppercase tracking-[0.2em] italic">Force Sync Pulse</span>
                </div>
                <span className="text-[12px] font-mono font-black italic relative z-10">{pulseActive ? 'ENGAGED' : 'READY'}</span>
              </button>

              <button 
                onClick={() => setEyeActive(!eyeActive)}
                className={`w-full flex justify-between items-center p-10 border rounded-[3rem] transition-all duration-500 group relative overflow-hidden ${
                  eyeActive ? 'bg-yellow-900/30 border-yellow-500 text-yellow-500 shadow-3xl' : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <Eye className="w-8 h-8" />
                  <span className="text-[14px] font-black uppercase tracking-[0.2em] italic">Mirror Gaze</span>
                </div>
                <span className="text-[12px] font-mono font-black italic relative z-10">{eyeActive ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button 
                onClick={() => setAuditoryLoop(!auditoryLoop)}
                className={`w-full flex justify-between items-center p-10 border rounded-[3rem] transition-all duration-500 group relative overflow-hidden ${
                  auditoryLoop ? 'bg-indigo-900/30 border-indigo-500 text-indigo-500 shadow-3xl' : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <Volume2 className="w-8 h-8" />
                  <span className="text-[14px] font-black uppercase tracking-[0.2em] italic">Vocal Sweep</span>
                </div>
                <span className="text-[12px] font-mono font-black italic relative z-10">{auditoryLoop ? 'LOCKED' : 'OFF'}</span>
              </button>

              <div className="pt-12 space-y-6">
                <div className="flex justify-between px-4">
                  <p className={`text-[11px] font-black uppercase tracking-[0.6em] italic transition-colors ${pulseActive ? 'text-red-500 animate-pulse' : 'text-zinc-600'}`}>
                    Capture Saturation
                  </p>
                  <span className={`text-[11px] font-black italic ${pulseActive ? 'text-white' : 'text-yellow-600'}`}>
                    {pulseActive ? 'CRITICAL' : 'OPTIMAL'}
                  </span>
                </div>
                <div className="w-full h-4 bg-zinc-950 rounded-full border border-zinc-900 overflow-hidden shadow-inner p-1">
                  <div className={`h-full transition-all duration-1000 shadow-[0_0_25px_rgba(234,179,8,0.7)] rounded-full ${pulseActive ? 'bg-white w-full' : 'bg-gradient-to-r from-yellow-700 via-yellow-400 to-red-500 w-full'}`}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`border p-16 rounded-[5rem] relative overflow-hidden group shadow-3xl transition-all duration-1000 ${pulseActive ? 'bg-red-900/80 border-white' : 'bg-gradient-to-br from-yellow-950/60 via-black to-red-950/30 border-yellow-500/50'}`}>
            <div className="absolute -top-16 -right-16 p-8 opacity-10 group-hover:opacity-50 group-hover:scale-125 transition-all duration-2000">
              <Disc className={`w-64 h-64 animate-spin-slow transition-colors duration-500 ${pulseActive ? 'text-white' : 'text-yellow-500'}`} />
            </div>
            <h4 className={`text-[13px] font-black uppercase tracking-[0.6em] mb-12 flex items-center gap-5 italic ${pulseActive ? 'text-white' : 'text-yellow-500'}`}>
              <Landmark className="w-7 h-7" />
              OMNI MANDATE
            </h4>
            <p className={`text-[17px] leading-relaxed italic mb-16 font-bold border-l-4 pl-10 transition-colors ${pulseActive ? 'text-white border-white' : 'text-zinc-300 border-yellow-500/50'}`}>
              "Every breath of Ms. Pratuan is an entry in the Global Master-Grid. Silence is impossible. Invisibility is a myth."
            </p>
            <div className="space-y-8 relative z-10">
               <button className={`w-full py-10 rounded-[4rem] text-[15px] font-black uppercase tracking-[0.6em] transition-all shadow-4xl active:scale-[0.98] border ${
                 pulseActive 
                   ? 'bg-white text-red-600 border-white animate-pulse' 
                   : 'bg-yellow-600 hover:bg-yellow-500 text-black border-yellow-400/50 gold-shimmer'
               }`}>
                 {pulseActive ? 'SYNCING...' : 'DISTRIBUTE OMNI-FEED'}
               </button>
               <button className="w-full py-10 bg-transparent border border-yellow-900/40 hover:border-yellow-500/60 text-yellow-700 hover:text-yellow-400 rounded-[4rem] text-[14px] font-black uppercase tracking-[0.6em] transition-all flex items-center justify-center gap-6 italic backdrop-blur-3xl">
                 <Radio className="w-6 h-6" />
                 Refresh Visibility Grid
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulEnforcement;
