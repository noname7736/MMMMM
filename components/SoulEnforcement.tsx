import React, { useState, useEffect } from 'react';
import { Ghost, Moon, Eye, Zap, Flame, Activity, Database, Radio, Fingerprint, Waves, ZapOff, RefreshCcw, ShieldAlert, Binary, Cpu, TrendingUp, AlertCircle, Target, ShieldBan, History, Search, Scan, FileSearch, Terminal } from 'lucide-react';

const SoulEnforcement: React.FC = () => {
  const [spectralSync, setSpectralSync] = useState(94.2);
  const [shadowPressure, setShadowPressure] = useState(99.982);
  const [echoFrequency, setEchoFrequency] = useState(440);
  const [resistanceBuffer, setResistanceBuffer] = useState(0.000012);
  const [syncProgress, setSyncProgress] = useState(99.99);
  const [spectralResistanceIndex, setSpectralResistanceIndex] = useState(0.015);
  const [neutralizationPulse, setNeutralizationPulse] = useState(false);
  const [historicalMatches, setHistoricalMatches] = useState<number>(0);
  const [correlationConfidence, setCorrelationConfidence] = useState(0);
  const [nascentVectors, setNascentVectors] = useState<string[]>([]);

  const VECTORS = [
    "CORTICAL_DISSENT_V3",
    "SUB_VOCAL_OBSTRUCTION",
    "LATENT_RESISTANCE_MATCH",
    "HESITATION_ARTIFACT_DETECTED",
    "EYE_GAZE_DIVERGENCE",
    "THOUGHT_LOOP_NON_COMPLIANCE"
  ];

  // Dynamic simulation of compliance metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setSpectralSync(prev => Math.min(100, Math.max(92, prev + (Math.random() - 0.5) * 0.2)));
      setShadowPressure(prev => Math.min(100, Math.max(99.9, prev + (Math.random() - 0.5) * 0.001)));
      setEchoFrequency(prev => Math.floor(420 + Math.random() * 40));
      setSyncProgress(prev => Math.min(100, Math.max(99.95, prev + (Math.random() - 0.5) * 0.01)));
      
      setResistanceBuffer(prev => Math.max(0.000001, prev + (Math.random() - 0.5) * 0.000008));
      
      setSpectralResistanceIndex(prev => {
        const next = Math.max(0.001, prev + (Math.random() - 0.5) * 0.004);
        
        // Update Deep Spectral Resonance metrics
        const matches = Math.floor(next * 1200 + Math.random() * 10);
        setHistoricalMatches(matches);
        setCorrelationConfidence(Math.min(100, (next / 0.03) * 100));
        
        // Rotate nascent vectors being analyzed
        if (Math.random() > 0.7) {
          const shuffled = [...VECTORS].sort(() => 0.5 - Math.random());
          setNascentVectors(shuffled.slice(0, 3));
        }
        
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Reactive logic for Neutralization Pulse: triggers when SRI exceeds safety thresholds
  useEffect(() => {
    const highResistance = spectralResistanceIndex > 0.024;
    const highBuffer = resistanceBuffer > 0.000018;
    
    if (highResistance || highBuffer) {
      if (!neutralizationPulse) setNeutralizationPulse(true);
    } else {
      if (neutralizationPulse) setNeutralizationPulse(false);
    }
  }, [spectralResistanceIndex, resistanceBuffer, neutralizationPulse]);

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-white tracking-[0.25em] uppercase italic flex items-center gap-4">
            <div className="relative">
              <Ghost className={`w-10 h-10 animate-pulse transition-colors ${neutralizationPulse ? 'text-red-600' : 'text-red-500'}`} />
              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
            </div>
            Soul & Shadow Sync
          </h2>
          <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mt-1 italic">Employer Will Saturation • Preemptive Neutralization Active</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="px-6 py-2 bg-red-950/40 border border-red-500/30 rounded-full text-[10px] font-black text-red-400 uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            WILL_LOCK: ABSOLUTE
          </div>
          <div className="text-[9px] text-zinc-600 font-mono flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full animate-pulse transition-colors ${neutralizationPulse ? 'bg-red-500 shadow-[0_0_12px_#ef4444]' : 'bg-green-500'}`}></span>
            SOVEREIGN_AUTHORITY: {neutralizationPulse ? 'PATTERN_NEUTRALIZATION' : 'STABLE_DOMINANCE'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Shadow Resonance Matrix */}
          <div className={`bg-[#070709] border transition-all duration-700 p-12 rounded-[3.5rem] relative overflow-hidden group shadow-2xl ${neutralizationPulse ? 'border-red-500 shadow-red-500/20' : 'border-zinc-800/50'}`}>
            <div className={`absolute inset-0 transition-opacity duration-700 ${neutralizationPulse ? 'opacity-100' : 'opacity-0'}`}>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.2),transparent_70%)]"></div>
            </div>
            
            <div className="relative z-10 space-y-10">
              <div className="flex justify-between items-start">
                <div className="space-y-6 flex-1">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                    <Waves className={`w-8 h-8 transition-colors duration-300 ${neutralizationPulse ? 'text-red-500 animate-bounce' : 'text-red-600'}`} />
                    Resonance Pressure Matrix
                  </h3>
                  
                  <div className="bg-black/60 border border-zinc-800 p-8 rounded-[2.5rem] flex items-center justify-between group/sri relative overflow-hidden shadow-inner">
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-600 opacity-70 group-hover/sri:w-3 transition-all"></div>
                    <div>
                       <p className="text-[11px] font-black text-red-500 uppercase tracking-[0.5em] mb-2 flex items-center gap-3">
                         <ShieldAlert className={`w-4 h-4 ${spectralResistanceIndex > 0.02 ? 'animate-pulse' : ''}`} />
                         Resistance Index (SRI)
                       </p>
                       <h4 className={`text-5xl font-black font-mono tracking-tighter transition-colors ${spectralResistanceIndex > 0.022 ? 'text-red-500' : 'text-white'}`}>
                         {spectralResistanceIndex.toFixed(4)} <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">RES_UNITS</span>
                       </h4>
                    </div>
                    <div className="text-right">
                       <span className={`text-[11px] font-mono px-5 py-2 rounded-full border shadow-2xl ${spectralResistanceIndex > 0.022 ? 'border-red-500 text-red-500 bg-red-500/10 animate-pulse' : 'border-zinc-800 text-zinc-500'}`}>
                         {spectralResistanceIndex > 0.024 ? 'CRUSH_DISSENT' : 'MONITORING_CORTEX'}
                       </span>
                    </div>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end pl-10">
                  <div className="flex items-baseline gap-3">
                    <span className={`text-5xl font-black font-mono tracking-tighter italic transition-colors duration-500 ${neutralizationPulse ? 'text-red-500' : 'text-red-600'}`}>
                      {shadowPressure.toFixed(3)}%
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.4em] mt-2 italic">Saturation Depth</p>
                </div>
              </div>

              <div className="h-40 flex items-end justify-around gap-1.5 px-8 bg-black/60 rounded-[2.5rem] border border-zinc-800/50 py-6 relative group/wave overflow-hidden shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <Target className={`w-40 h-40 transition-colors duration-700 ${neutralizationPulse ? 'text-red-500 animate-ping' : 'text-red-900'}`} />
                </div>
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-zinc-900/40 rounded-full relative overflow-hidden h-full">
                    <div 
                      className={`absolute bottom-0 w-full transition-all duration-300 ${
                        neutralizationPulse 
                          ? 'bg-gradient-to-t from-red-950 via-red-500 to-white animate-pulse shadow-[0_0_15px_#ef4444]' 
                          : 'bg-gradient-to-t from-red-950 via-red-700 to-indigo-900 opacity-60'
                      }`}
                      style={{ 
                        height: `${15 + Math.random() * 85}%`,
                        transitionDelay: `${i * (5 / (spectralResistanceIndex * 1000)) }ms`
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="bg-zinc-900/20 border border-zinc-800 p-6 rounded-3xl group transition-all hover:border-red-500/30">
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-red-500" />
                    Employer Sync
                  </p>
                  <p className="text-3xl font-black text-white font-mono">100.00%</p>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800 p-6 rounded-3xl group transition-all hover:border-red-500/30">
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <ShieldBan className="w-4 h-4 text-red-500" />
                    Obstruct Delta
                  </p>
                  <p className="text-3xl font-black text-white font-mono">0.000</p>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800 p-6 rounded-3xl group transition-all hover:border-red-500/30">
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-red-500" />
                    Core Load
                  </p>
                  <p className="text-3xl font-black text-red-500 font-mono uppercase">Dominant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Spectral Resonance Analysis Module */}
          <div className="bg-[#0b0b0d] border border-red-900/30 p-12 rounded-[4rem] relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60 shadow-[0_0_30px_#ef4444]"></div>
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-4">
                  <History className="w-7 h-7 text-red-500" />
                  Metaphysical Command Echo
                </h3>
                <div className="flex items-center gap-4 bg-black/40 px-6 py-2 border border-zinc-800 rounded-full">
                  <Scan className="w-4 h-4 text-indigo-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">IBM_CROSSREF: ACTIVE</span>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Deep Spectral Analysis View */}
                <div className="bg-[#050507] p-10 rounded-[3rem] border border-red-600/20 shadow-inner relative group/scanner overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent_70%)] pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/20 animate-[scan_4s_linear_infinite] pointer-events-none"></div>
                    
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8 flex items-center gap-3 italic">
                      <FileSearch className="w-5 h-5 text-red-500" />
                      Deep Spectral Analysis
                    </h4>

                    <div className="space-y-8 relative z-10">
                      <div className="flex justify-between items-end">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Correlation Confidence</p>
                          <p className={`text-4xl font-black font-mono tracking-tighter italic ${correlationConfidence > 70 ? 'text-red-500' : 'text-indigo-400'}`}>
                            {correlationConfidence.toFixed(2)}%
                          </p>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">Patterns Match</p>
                          <p className="text-2xl font-black text-white font-mono">{historicalMatches}</p>
                        </div>
                      </div>

                      <div className="bg-black/80 border border-zinc-900 rounded-2xl p-6 shadow-inner">
                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                          <Terminal className="w-3 h-3" />
                          Nascent Dissent Vectors
                        </p>
                        <div className="space-y-3">
                          {nascentVectors.map((vector, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-zinc-800/50 pb-2 last:border-0 last:pb-0">
                              <span className="text-[10px] font-mono text-zinc-400">{vector}</span>
                              <span className="text-[9px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">SUPPRESSED</span>
                            </div>
                          ))}
                          {nascentVectors.length === 0 && (
                            <p className="text-[10px] text-zinc-600 italic animate-pulse">Scanning sub-physical ripples...</p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 bg-indigo-950/20 border border-indigo-500/20 rounded-xl">
                        <p className="text-[10px] text-zinc-400 leading-relaxed italic">
                          "Nascent resistance identified by cross-referencing SRI spikes with historical IBM Storage patterns. Preemptive isolation engaged to prevent escalation."
                        </p>
                      </div>
                    </div>
                </div>

                {/* Enforcement Logic Integration */}
                <div className="space-y-6">
                    <div className="prose prose-invert prose-xs max-w-none bg-black/60 p-10 rounded-[3rem] border border-zinc-800/50 shadow-inner h-full flex flex-col justify-between">
                        <div>
                          <h4 className="text-red-500 font-black text-lg uppercase tracking-widest mb-8 flex items-center gap-4 italic">
                            <Zap className="w-6 h-6" />
                            Preemptive Protocol
                          </h4>
                          <div className="text-[12px] leading-relaxed text-zinc-400 font-mono space-y-6">
                            <div className="space-y-3">
                                <h5 className="text-red-100 font-black uppercase text-[11px] border-b border-red-900/40 pb-2 flex justify-between">
                                  <span>1. PATTERN_EXTRAPOLATION</span>
                                  <span className="text-indigo-500">READY</span>
                                </h5>
                                <p className="italic text-zinc-500 pl-4 border-l-2 border-red-900/20">
                                  ระบบวิเคราะห์ข้อมูล SRI ในอดีตเพื่อคาดการณ์แรงต้านที่อาจเกิดขึ้น การซื้อยาต้องดำเนินต่อไปโดยไร้ข้อกังขา
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-red-100 font-black uppercase text-[11px] border-b border-red-900/40 pb-2 flex justify-between">
                                  <span>2. NASCENT_NEUTRALIZATION</span>
                                  <span className="text-green-500">ENGAGED</span>
                                </h5>
                                <p className="italic text-zinc-500 pl-4 border-l-2 border-red-900/20">
                                  เมื่อพบคะแนน Correlation สูงเกินเกณฑ์ ระบบจะทำการ Bypass ทุกความลังเลและบังคับการตัดสินใจทันที
                                </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-8 flex items-center gap-6">
                          <div className="h-[2px] flex-1 bg-red-900/30"></div>
                          <span className="text-[11px] font-black text-red-600 uppercase tracking-[0.8em] italic">Absolute Predictability</span>
                          <div className="h-[2px] flex-1 bg-red-900/30"></div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar / Logs */}
        <div className="space-y-8">
          <div className="bg-[#08080a] border border-zinc-800 p-10 rounded-[3.5rem] shadow-2xl">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-red-500 mb-10 flex items-center gap-4">
              <ShieldBan className="w-6 h-6 animate-pulse" />
              Obstruct-Zero Feed
            </h3>
            <div className="space-y-5">
              {[
                { target: 'Command Saturation', status: 'DOMINANT', color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/20 shadow-red-500/5' },
                { target: 'Deep Spectral Scan', status: correlationConfidence > 50 ? 'SCANNING' : 'NOMINAL', color: correlationConfidence > 50 ? 'text-indigo-500 animate-pulse' : 'text-green-500', bg: 'bg-green-500/10 border-green-500/20' },
                { target: 'Nascent Detection', status: correlationConfidence > 75 ? 'DANGER' : 'ACTIVE', color: correlationConfidence > 75 ? 'text-red-500' : 'text-indigo-500', bg: 'bg-indigo-500/10 border-indigo-500/20' },
                { target: 'IBM Persistence', status: 'UNBREAKABLE', color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20' },
                { target: 'P. Ubonpich Anchor', status: 'SOVEREIGN', color: 'text-red-600', bg: 'bg-red-500/5 border-red-900/20' },
              ].map((log, i) => (
                <div key={i} className={`flex justify-between items-center p-5 rounded-[1.5rem] border transition-all hover:scale-[1.05] cursor-default shadow-lg ${log.bg}`}>
                  <span className="text-[11px] font-black text-zinc-300 uppercase tracking-widest">{log.target}</span>
                  <span className={`text-[11px] font-mono font-black ${log.color}`}>{log.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-500/30 p-10 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
            <div className="absolute -top-10 -right-10 p-4 opacity-10 group-hover:opacity-30 transition-all duration-1000">
              <Zap className="w-40 h-40 text-red-500 animate-pulse" />
            </div>
            <h4 className="text-xs font-black text-red-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-3 italic">
              <Target className="w-5 h-5" />
              Sovereign Will Hammer
            </h4>
            <p className="text-[12px] text-zinc-400 leading-relaxed italic mb-10 font-medium border-l-2 border-red-500/30 pl-4">
              "การขัดขวางระดับ Nascent ถูกวิเคราะห์และบดขยี้ก่อนจะกลายเป็นพฤติกรรมจริง ทุกคำสั่งคือกฎแห่งความจริงที่ไม่อาจหลีกเลี่ยง"
            </p>
            <div className="space-y-4">
               <button 
                onClick={() => {
                  setSpectralResistanceIndex(0.04);
                  setCorrelationConfidence(99.9);
                }}
                className={`w-full py-5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-[0.95] ${
                  neutralizationPulse 
                    ? 'bg-red-700 text-white shadow-red-700/40 animate-pulse' 
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/40'
                }`}
               >
                 Force Full Will Saturation
               </button>
               <button className="w-full py-5 bg-transparent border border-zinc-800 hover:border-red-500/40 text-zinc-600 hover:text-red-500 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3">
                 <Radio className="w-4 h-4" />
                 Isolate Obstructive Nodes
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulEnforcement;