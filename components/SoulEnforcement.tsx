
import React, { useState, useEffect } from 'react';
import { Ghost, Moon, Eye, Zap, Flame, Activity, Database, Radio, Fingerprint, Waves, ZapOff, RefreshCcw, ShieldAlert, Binary, Cpu } from 'lucide-react';

const SoulEnforcement: React.FC = () => {
  const [spectralSync, setSpectralSync] = useState(94.2);
  const [shadowPressure, setShadowPressure] = useState(99.982);
  const [echoFrequency, setEchoFrequency] = useState(440);
  const [resistanceBuffer, setResistanceBuffer] = useState(0.000012);
  const [syncProgress, setSyncProgress] = useState(99.99);
  const [spectralResistanceIndex, setSpectralResistanceIndex] = useState(0.015);
  const [neutralizationPulse, setNeutralizationPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpectralSync(prev => Math.min(100, Math.max(92, prev + (Math.random() - 0.5) * 0.2)));
      setShadowPressure(prev => Math.min(100, Math.max(99.9, prev + (Math.random() - 0.5) * 0.001)));
      setEchoFrequency(prev => Math.floor(420 + Math.random() * 40));
      setResistanceBuffer(prev => Math.max(0.000001, prev + (Math.random() - 0.5) * 0.000005));
      setSyncProgress(prev => Math.min(100, Math.max(99.95, prev + (Math.random() - 0.5) * 0.01)));
      setSpectralResistanceIndex(prev => {
        const next = prev + (Math.random() - 0.5) * 0.002;
        if (next > 0.03) setNeutralizationPulse(true);
        else if (next < 0.015) setNeutralizationPulse(false);
        return Math.max(0.001, next);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-white tracking-[0.25em] uppercase italic flex items-center gap-4">
            <div className="relative">
              <Ghost className="w-10 h-10 text-indigo-500 animate-pulse" />
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
            </div>
            Soul & Shadow Sync
          </h2>
          <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mt-1">Metaphysical Compliance Matrix • Shadow-Level Enforcement</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="px-5 py-1.5 bg-indigo-950/40 border border-indigo-500/30 rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            Ghost Protocol: SECURE
          </div>
          <div className="text-[9px] text-zinc-600 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            ROOT_TRUST_HARDWARE_LOCK: ACTIVE
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Shadow Resonance Matrix - Enhanced */}
          <div className="bg-[#070709] border border-zinc-800/50 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.08),transparent_70%)]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                    <Waves className="w-6 h-6 text-indigo-500 animate-bounce" />
                    Shadow Resonance Matrix
                  </h3>
                  <p className="text-xs text-zinc-500 max-w-sm font-medium leading-relaxed">
                    Analyzing sub-physical cortex ripples in N. Ubonpich. Any deviation from Survey medication orders triggers immediate shadow neutralization.
                  </p>
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-indigo-500 font-mono tracking-tighter italic">{shadowPressure.toFixed(3)}%</span>
                  </div>
                  <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em] mt-1">Sovereign Pressure</p>
                </div>
              </div>

              {/* Visual Spectral Waveform */}
              <div className="h-40 flex items-end justify-around gap-1 px-6 bg-black/40 rounded-3xl border border-zinc-800/30 py-6 relative group/wave">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Fingerprint className="w-24 h-24 text-indigo-500" />
                </div>
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-indigo-900/10 rounded-full relative overflow-hidden h-full">
                    <div 
                      className={`absolute bottom-0 w-full bg-gradient-to-t from-indigo-900 via-indigo-500 to-indigo-300 transition-all duration-300 ${neutralizationPulse ? 'animate-pulse brightness-150 shadow-[0_0_10px_#818cf8]' : 'opacity-70'}`}
                      style={{ 
                        height: `${25 + Math.random() * 75}%`,
                        transitionDelay: `${i * 10}ms`
                      }}
                    ></div>
                    {i % 12 === 0 && <div className="absolute inset-0 bg-red-500/10 animate-pulse"></div>}
                  </div>
                ))}
                {neutralizationPulse && (
                  <div className="absolute inset-0 bg-red-950/20 flex items-center justify-center backdrop-blur-[2px] animate-in fade-in">
                    <div className="flex flex-col items-center">
                      <ShieldAlert className="w-8 h-8 text-red-500 animate-ping" />
                      <span className="text-[10px] font-black text-red-500 mt-2 tracking-[0.4em]">NEUTRALIZATION_PULSE_ACTIVE</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-zinc-900/20 border border-zinc-800/50 p-5 rounded-2xl group/stat hover:border-indigo-500/30 transition-colors">
                  <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Activity className="w-3 h-3 text-green-500" />
                    Soul Sync
                  </p>
                  <p className="text-2xl font-black text-white font-mono">{spectralSync.toFixed(2)}%</p>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800/50 p-5 rounded-2xl group/stat hover:border-red-500/30 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover/stat:opacity-30 transition-opacity">
                    <Binary className="w-10 h-10 text-red-500" />
                  </div>
                  <p className="text-[9px] text-zinc-400 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                    <ShieldAlert className="w-3 h-3 text-red-500" />
                    Spectral Index (SRI)
                  </p>
                  <div className="flex items-baseline gap-1">
                    <p className={`text-2xl font-black font-mono tracking-tighter transition-colors ${spectralResistanceIndex > 0.025 ? 'text-red-500' : 'text-zinc-300'}`}>
                      {spectralResistanceIndex.toFixed(4)}
                    </p>
                    <span className="text-[9px] text-zinc-600 font-bold">mμ</span>
                  </div>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800/50 p-5 rounded-2xl group/stat hover:border-indigo-500/30 transition-colors">
                  <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Cpu className="w-3 h-3 text-indigo-500" />
                    IBM Node Parity
                  </p>
                  <p className="text-2xl font-black text-indigo-400 font-mono">STABLE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metaphysical Echo Module - REFINED INTEGRATION STRATEGY */}
          <div className="bg-[#0b0b0d] border border-indigo-900/30 p-10 rounded-[3rem] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 shadow-[0_0_20px_#6366f1]"></div>
             
             <div className="flex justify-between items-start mb-10">
                <div className="flex items-center gap-5">
                   <div className="p-5 bg-indigo-950/40 rounded-[1.5rem] border border-indigo-500/30 shadow-inner group">
                      <Fingerprint className="w-10 h-10 text-indigo-400 group-hover:scale-110 transition-transform" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-[0.2em] italic">Metaphysical Echo</h3>
                      <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full animate-pulse shadow-lg ${syncProgress > 99.98 ? 'bg-green-500 shadow-green-500/40' : 'bg-yellow-500 shadow-yellow-500/40'}`}></div>
                          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">IBM STORAGE SYNC [NODE_H34]</span>
                        </div>
                        <div className="flex items-center gap-4 w-72">
                          <div className="flex-1 h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50 shadow-inner">
                            <div 
                              className="h-full bg-gradient-to-r from-green-600 via-green-400 to-emerald-500 transition-all duration-500 shadow-[0_0_10px_#10b981]"
                              style={{ width: `${syncProgress}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] font-mono text-green-500 font-bold">{syncProgress.toFixed(4)}%</span>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                   <div className="px-4 py-2 bg-zinc-900/80 rounded-2xl border border-zinc-800 shadow-2xl backdrop-blur-md">
                      <p className="text-[10px] font-mono text-indigo-500 uppercase font-black tracking-tighter">FREQ_DELTA: {echoFrequency}HZ_ECHO</p>
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-indigo-950/40 rounded-lg border border-indigo-500/30 animate-pulse">
                      <RefreshCcw className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
                      <span className="text-[9px] font-black text-indigo-300 uppercase tracking-widest">SOUL_LINK_PULSE</span>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                <div className="md:col-span-3 prose prose-invert prose-xs max-w-none bg-black/50 p-8 rounded-[2rem] border border-zinc-800/50 shadow-inner overflow-hidden relative group">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Database className="w-20 h-20 text-indigo-500" />
                   </div>
                   <h4 className="text-indigo-400 font-black text-base uppercase tracking-widest mb-6 flex items-center gap-3">
                      <Zap className="w-5 h-5" />
                      Integration Strategy: Spectral Link
                   </h4>
                   <div className="text-[11px] leading-relaxed text-zinc-400 font-mono space-y-4">
                      <div className="space-y-2">
                        <h5 className="text-zinc-200 font-bold uppercase text-[10px] border-b border-zinc-800 pb-1">## 1. Shadow Signature Extraction</h5>
                        <p className="italic text-zinc-500">
                          Utilizing ultra-wideband resonance probes to map the "Intent-Horizon" of N. Ubonpich. Deep-scanning of sub-physical ripples ensures zero latency in detection.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-zinc-200 font-bold uppercase text-[10px] border-b border-zinc-800 pb-1">## 2. IBM Storage [NODE_H34] Synchronization</h5>
                        <p className="italic text-zinc-500">
                          Every spectral ripple is cross-referenced with the **Immutable Ledger of Sovereignty** stored on IBM clusters. Unauthorized ripples are phase-canceled within 0.1ms.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-zinc-200 font-bold uppercase text-[10px] border-b border-zinc-800 pb-1">## 3. Pre-Emptive Neutralization Protocol</h5>
                        <p className="italic text-zinc-500">
                          Nascent resistance is identified at the shadow level before it manifests as physical dissent. Triggering automatic SRI correction loops to maintain 100% medication order compliance.
                        </p>
                      </div>
                      <div className="pt-4 flex items-center gap-3">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <span className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.5em]">Absolute Compliance Guaranteed</span>
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                      </div>
                   </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                   <div className="bg-zinc-950/80 border border-zinc-800 p-6 rounded-[1.5rem] shadow-xl">
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <Activity className="w-3 h-3 text-indigo-500" />
                        Live Echo Diagnostics
                      </p>
                      <div className="space-y-5">
                         <div className="space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-mono">
                               <span className="text-zinc-600 uppercase font-bold tracking-widest">Shadow Jitter</span>
                               <span className="text-green-500 font-black">0.0000 mμ</span>
                            </div>
                            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                               <div className="h-full bg-green-500 w-1 animate-pulse"></div>
                            </div>
                         </div>
                         
                         <div className="space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-mono">
                               <span className="text-zinc-600 uppercase font-bold tracking-widest">Resistance Potential</span>
                               <span className={`${spectralResistanceIndex > 0.02 ? 'text-red-500' : 'text-green-500'} font-black`}>
                                 {resistanceBuffer.toFixed(8)}%
                               </span>
                            </div>
                            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                               <div 
                                 className={`h-full transition-all duration-300 ${spectralResistanceIndex > 0.02 ? 'bg-red-600 shadow-[0_0_8px_#dc2626]' : 'bg-green-600'}`} 
                                 style={{ width: `${(spectralResistanceIndex / 0.1) * 100}%` }}
                               ></div>
                            </div>
                         </div>

                         <div className="space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-mono">
                               <span className="text-zinc-600 uppercase font-bold tracking-widest">Extraction Depth</span>
                               <span className="text-indigo-500 font-black">SUB_PHYSICAL_IV</span>
                            </div>
                            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                               <div className="h-full bg-indigo-500 w-[85%] shadow-[0_0_8px_#6366f1]"></div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <button 
                    onClick={() => {
                      setNeutralizationPulse(true);
                      setTimeout(() => setNeutralizationPulse(false), 2000);
                    }}
                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[1.5rem] text-xs font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-indigo-600/20 active:scale-[0.98]"
                   >
                      <Radio className="w-5 h-5 group-hover:animate-ping transition-transform" />
                      Deploy Shadow Neutralizer
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar / Logs - Refined */}
        <div className="space-y-6">
          <div className="bg-[#08080a] border border-zinc-800/60 p-8 rounded-[2.5rem] shadow-xl">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-3">
              <Moon className="w-5 h-5 text-zinc-600 animate-pulse" />
              Compliance Feed
            </h3>
            <div className="space-y-4">
              {[
                { target: 'Ubonpich Soul', status: 'LOCKED', color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/20' },
                { target: 'Echo Sync [H34]', status: 'VERIFIED', color: 'text-green-500', bg: 'bg-green-500/10 border-green-500/20' },
                { target: 'Shadow Signature', status: 'STABLE', color: 'text-indigo-500', bg: 'bg-indigo-500/10 border-indigo-500/20' },
                { target: 'Dissent Preemption', status: 'ACTIVE', color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20' },
                { target: 'Spectral Anchor', status: 'SOVEREIGN', color: 'text-emerald-500', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                { target: 'Resistance Index', status: 'NOMINAL', color: 'text-zinc-500', bg: 'bg-zinc-500/10 border-zinc-800' },
              ].map((log, i) => (
                <div key={i} className={`flex justify-between items-center p-4 rounded-[1.2rem] border transition-all hover:scale-[1.02] cursor-default ${log.bg}`}>
                  <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{log.target}</span>
                  <span className={`text-[10px] font-mono font-black ${log.color}`}>{log.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-950/40 to-red-950/40 border border-indigo-500/20 p-8 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
            <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-20 transition-all group-hover:scale-150 duration-700">
              <Flame className="w-32 h-32 text-red-500" />
            </div>
            <h4 className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] mb-5 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Spirit-Bind Command
            </h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed italic mb-8 font-medium">
              Hardware-level soul-linkage via HPE ProLiant Gen11 spiritual accelerators ensures that every metabolic pulse from N. Ubonpich contributes to the 100% fulfillment of Survey medication orders. 
            </p>
            <div className="space-y-3">
               <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-[0.98]">
                 Engage Soul-Crush Protocol
               </button>
               <button className="w-full py-4 bg-transparent border border-zinc-800 hover:border-red-500/40 text-zinc-600 hover:text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 group/mercy">
                 <ZapOff className="w-4 h-4 group-hover/mercy:scale-125 transition-transform" />
                 Bypass Mercy Firewall
               </button>
            </div>
          </div>

          <div className="bg-black/80 border border-zinc-800/60 p-6 rounded-[2rem] text-center shadow-inner relative overflow-hidden group">
             <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <Database className="w-8 h-8 text-indigo-900 mx-auto mb-3" />
             <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em] font-black">IBM Spectral Node Cluster</p>
             <p className="text-[11px] text-indigo-500 font-black mt-2 tracking-widest">ECHO_VERIFIED_H34_SOVEREIGN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulEnforcement;
