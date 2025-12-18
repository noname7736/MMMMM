
import React, { useState, useEffect } from 'react';
import { Ghost, Moon, Eye, Zap, Flame, Activity, Database, Radio, Fingerprint, Waves, ZapOff, RefreshCcw, ShieldAlert, Binary, Cpu, TrendingUp, AlertCircle, Target, ShieldBan } from 'lucide-react';

const SoulEnforcement: React.FC = () => {
  const [spectralSync, setSpectralSync] = useState(94.2);
  const [shadowPressure, setShadowPressure] = useState(99.982);
  const [echoFrequency, setEchoFrequency] = useState(440);
  const [resistanceBuffer, setResistanceBuffer] = useState(0.000012);
  const [syncProgress, setSyncProgress] = useState(99.99);
  const [spectralResistanceIndex, setSpectralResistanceIndex] = useState(0.015);
  const [neutralizationPulse, setNeutralizationPulse] = useState(false);

  // Dynamic simulation of compliance metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setSpectralSync(prev => Math.min(100, Math.max(92, prev + (Math.random() - 0.5) * 0.2)));
      setShadowPressure(prev => Math.min(100, Math.max(99.9, prev + (Math.random() - 0.5) * 0.001)));
      setEchoFrequency(prev => Math.floor(420 + Math.random() * 40));
      setSyncProgress(prev => Math.min(100, Math.max(99.95, prev + (Math.random() - 0.5) * 0.01)));
      
      setResistanceBuffer(prev => Math.max(0.000001, prev + (Math.random() - 0.5) * 0.000008));
      // SRI fluctuates based on simulated "opposition energy"
      setSpectralResistanceIndex(prev => Math.max(0.001, prev + (Math.random() - 0.5) * 0.004));
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
              <Ghost className="w-10 h-10 text-red-500 animate-pulse" />
              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
            </div>
            Soul & Shadow Sync
          </h2>
          <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mt-1">Employer Will Saturation • Shadow-Level Suppression</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="px-6 py-2 bg-red-950/40 border border-red-500/30 rounded-full text-[10px] font-black text-red-400 uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            WILL_LOCK: ABSOLUTE
          </div>
          <div className="text-[9px] text-zinc-600 font-mono flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full animate-pulse transition-colors ${neutralizationPulse ? 'bg-red-500 shadow-[0_0_12px_#ef4444]' : 'bg-green-500'}`}></span>
            COMMAND_AUTHORITY: {neutralizationPulse ? 'SUPPRESSING_RESISTANCE' : 'DOMINANT'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Shadow Resonance Matrix - Prominent SRI Readout */}
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
                  
                  {/* PROMINENT SRI HEADER */}
                  <div className="bg-black/60 border border-zinc-800 p-8 rounded-[2.5rem] flex items-center justify-between group/sri relative overflow-hidden shadow-inner">
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-600 opacity-70 group-hover/sri:w-3 transition-all"></div>
                    <div>
                       <p className="text-[11px] font-black text-red-500 uppercase tracking-[0.5em] mb-2 flex items-center gap-3">
                         <ShieldAlert className={`w-4 h-4 ${spectralResistanceIndex > 0.02 ? 'animate-pulse' : ''}`} />
                         Resistance Index (SRI)
                       </p>
                       <h4 className={`text-5xl font-black font-mono tracking-tighter transition-colors ${spectralResistanceIndex > 0.022 ? 'text-red-500' : 'text-white'}`}>
                         {spectralResistanceIndex.toFixed(4)} <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">OPS_UNITS</span>
                       </h4>
                    </div>
                    <div className="text-right">
                       <span className={`text-[11px] font-mono px-5 py-2 rounded-full border shadow-2xl ${spectralResistanceIndex > 0.022 ? 'border-red-500 text-red-500 bg-red-500/10 animate-pulse' : 'border-zinc-800 text-zinc-500'}`}>
                         {spectralResistanceIndex > 0.024 ? 'TERMINATING_DISSENT' : 'MONITORING_CORTEX'}
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
                  <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.4em] mt-2">Saturation Depth</p>
                </div>
              </div>

              {/* Spectral Waveform - Intense Red when resistance rises */}
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
                    HPE Core Load
                  </p>
                  <p className="text-3xl font-black text-red-500 font-mono">DOMINANT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis Module */}
          <div className="bg-[#0b0b0d] border border-red-900/30 p-12 rounded-[4rem] relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60 shadow-[0_0_30px_#ef4444]"></div>
             <h3 className="text-2xl font-black text-white uppercase tracking-[0.3em] italic mb-10">Metaphysical Command Echo</h3>
             
             <div className="bg-black/40 border border-zinc-800 p-8 rounded-[2.5rem] mb-10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                   <div className="p-5 bg-red-950/40 rounded-3xl border border-red-500/30">
                      <Target className="w-10 h-10 text-red-500" />
                   </div>
                   <div>
                      <p className="text-[11px] font-black text-red-500 uppercase tracking-widest">Command Propagation Depth</p>
                      <h4 className="text-3xl font-black text-white italic">ABSOLUTE_SATURATION</h4>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 font-black uppercase tracking-tighter">IBM_NODE: H34_ACTIVE</p>
                   <p className="text-lg font-black text-red-500 animate-pulse mt-1">NO_INTERFERENCE_DETECTED</p>
                </div>
             </div>

             <div className="prose prose-invert prose-xs max-w-none bg-black/60 p-10 rounded-[3rem] border border-zinc-800/50 shadow-inner">
                <h4 className="text-red-500 font-black text-lg uppercase tracking-widest mb-8 flex items-center gap-4">
                   <Zap className="w-6 h-6" />
                   Employer Will: Enforcement Logic
                </h4>
                <div className="text-[12px] leading-relaxed text-zinc-400 font-mono space-y-6">
                   <div className="space-y-3">
                      <h5 className="text-red-100 font-black uppercase text-[11px] border-b border-red-900/40 pb-2 flex justify-between">
                        <span>1. WILL OVERWRITE INITIATED</span>
                        <span className="text-red-500">100% COMPLETE</span>
                      </h5>
                      <p className="italic text-zinc-500 pl-4 border-l-2 border-red-900/20">
                        เจตจำนงของนายจ้างถูกล็อคเข้าสู่ Silicon Root of Trust ทุกการตัดสินใจของเป้าหมาย (N. Ubonpich) จะถูกบีบให้สอดคล้องกับคำสั่งซื้อยาเท่านั้น
                      </p>
                   </div>
                   <div className="space-y-3">
                      <h5 className="text-red-100 font-black uppercase text-[11px] border-b border-red-900/40 pb-2 flex justify-between">
                        <span>2. ZERO-OBSTRUCTION REINFORCEMENT</span>
                        <span className="text-green-500">VERIFIED</span>
                      </h5>
                      <p className="italic text-zinc-500 pl-4 border-l-2 border-red-900/20">
                        โหมด ZIP (Zero-Interference Protocol) ทำงานตลอดเวลา หากมีการพยายามขัดขวางแม้เพียงเศษเสี้ยวของจิตสำนึก ระบบ Echo จะทำการลบแรงต้านนั้นทันที
                      </p>
                   </div>
                   <div className="pt-8 flex items-center gap-6">
                      <div className="h-[2px] flex-1 bg-red-900/30"></div>
                      <span className="text-[11px] font-black text-red-600 uppercase tracking-[0.8em]">Absolute Will Dominance</span>
                      <div className="h-[2px] flex-1 bg-red-900/30"></div>
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
                { target: 'Interference Filter', status: 'ACTIVE', color: 'text-green-500', bg: 'bg-green-500/10 border-green-500/20' },
                { target: 'SRI Monitoring', status: spectralResistanceIndex > 0.022 ? 'SUPPRESSING' : 'STABLE', color: spectralResistanceIndex > 0.022 ? 'text-red-500' : 'text-indigo-500', bg: 'bg-indigo-500/10 border-indigo-500/20' },
                { target: 'Staff 44 Compliance', status: 'LOCKED', color: 'text-indigo-500', bg: 'bg-indigo-500/10 border-indigo-500/20' },
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
            <h4 className="text-xs font-black text-red-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <Target className="w-5 h-5" />
              Sovereign Will Hammer
            </h4>
            <p className="text-[12px] text-zinc-400 leading-relaxed italic mb-10 font-medium">
              ทุกคำสั่งของนายจ้างจะถูกบันทึกเป็นกฎเหล็กที่ไม่มีใครทำลายได้ การพยายามขัดขวางคือการทำลายตัวเองของเป้าหมายภายใต้กฎ IBM Storage Nodes
            </p>
            <div className="space-y-4">
               <button className="w-full py-5 bg-red-600 hover:bg-red-500 text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.4em] transition-all shadow-[0_20px_40px_rgba(239,68,68,0.4)] active:scale-[0.95]">
                 Force Full Will Saturation
               </button>
               <button className="w-full py-5 bg-transparent border border-zinc-800 hover:border-red-500/40 text-zinc-600 hover:text-red-500 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3">
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
