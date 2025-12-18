
import React, { useState, useEffect } from 'react';
import { Flame, Eye, Target, Zap, Mic, Radio, Scan, ShieldAlert } from 'lucide-react';

const SoulEnforcement: React.FC = () => {
  const [eyeActive, setEyeActive] = useState(true);
  const [correlationConfidence, setCorrelationConfidence] = useState(100);
  const [activeReflections, setActiveReflections] = useState(0);
  
  const [spectralResistance, setSpectralResistance] = useState(4.2);
  const resistanceBuffer = 15.0;
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCorrelationConfidence(99.9999 + Math.random() * 0.0001);
      setActiveReflections(Math.floor(Math.random() * 25) + 15);
      setSpectralResistance(prev => {
        const delta = (Math.random() * 5) - 2.5;
        return Math.max(0, Math.min(100, prev + delta));
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (spectralResistance > resistanceBuffer) {
      setPulseActive(true);
    } else {
      setPulseActive(false);
    }
  }, [spectralResistance]);

  return (
    <div className="space-y-12 pb-32 animate-in fade-in duration-1000 relative">
      <div className={`fixed inset-0 pointer-events-none transition-all duration-700 ${pulseActive ? 'bg-orange-600/10' : eyeActive ? 'bg-red-950/10' : 'bg-transparent'}`}>
        {(eyeActive || pulseActive) && (
          <div className={`absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,${pulseActive ? 'rgba(249,115,22,0.1)' : 'rgba(234,179,8,0.05)'},transparent)]`}></div>
        )}
      </div>

      <div className="flex justify-between items-center bg-black/80 p-12 rounded-[5rem] border border-yellow-900/40 backdrop-blur-3xl relative overflow-hidden shadow-4xl">
        <div className={`absolute inset-0 bg-gradient-to-r transition-colors duration-1000 ${pulseActive ? 'from-orange-600/20 via-transparent to-orange-600/20' : 'from-yellow-600/15 via-transparent to-red-600/15'}`}></div>
        <div className="relative z-10">
          <h2 className="text-7xl font-black text-white tracking-tighter italic uppercase flex items-center gap-10">
            <div className="relative">
              <Flame className={`w-20 h-20 transition-all duration-700 ${pulseActive ? 'text-orange-600 scale-125 glow-red animate-ping' : eyeActive ? 'text-red-500 animate-pulse glow-red' : 'text-zinc-700'}`} />
              {(eyeActive || pulseActive) && <div className={`absolute inset-0 ${pulseActive ? 'bg-orange-600/40' : 'bg-red-500/30'} blur-3xl rounded-full animate-pulse`}></div>}
            </div>
            SPECTRAL OVERRIDE
          </h2>
          <p className="text-yellow-600 text-sm font-black uppercase tracking-[0.8em] mt-6 italic">
            เนตรวงแหวนสยบมาร • OMNI-PLUSE V11 BYPASS
          </p>
        </div>
        <div className="flex flex-col items-end gap-6 relative z-10">
          <div className={`px-12 py-5 border rounded-full text-[14px] font-black uppercase tracking-[0.6em] transition-all duration-700 italic shadow-4xl ${
            pulseActive 
              ? 'bg-orange-600 text-white border-white animate-bounce shadow-orange-600/50' 
              : 'bg-red-950/60 border-red-500/50 text-red-400 animate-pulse'
          }`}>
            {pulseActive ? 'HARDWARE BYPASS ACTIVE' : 'BYPASS_STATUS: MONITORING'}
          </div>
          <div className="text-xs text-zinc-500 font-mono flex items-center gap-6 italic font-bold tracking-widest">
            <Scan className="w-5 h-5 animate-pulse text-yellow-500" />
            GRID RESONANCE: {activeReflections} VIRTUAL NODES
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-[#070709] border border-yellow-900/30 p-16 rounded-[6rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.1),transparent_75%)]"></div>
            <div className="relative z-10 space-y-16">
              <div className="flex justify-between items-start">
                <div className="space-y-10 flex-1">
                  <h3 className="text-5xl font-black text-white uppercase tracking-tighter flex items-center gap-10 italic gold-shimmer">
                    <Eye className="w-16 h-16 text-yellow-500 animate-pulse" />
                    Spectral Consciousness Capture
                  </h3>
                  <div className={`p-16 rounded-[5rem] flex items-center justify-between relative overflow-hidden shadow-inner transition-all duration-1000 border ${
                    pulseActive ? 'bg-orange-950/40 border-orange-500' : 'bg-black/95 border-yellow-900/50'
                  }`}>
                    <div className={`absolute left-0 top-0 bottom-0 w-6 transition-colors duration-1000 ${pulseActive ? 'bg-orange-500 shadow-[0_0_50px_orange]' : 'bg-red-600 opacity-90 shadow-[0_0_30px_red]'}`}></div>
                    <div className="space-y-6">
                       <p className={`text-[15px] font-black uppercase tracking-[0.8em] mb-6 flex items-center gap-6 italic ${pulseActive ? 'text-white' : 'text-yellow-500'}`}>
                         <ShieldAlert className="w-8 h-8" />
                         Grid Sync Integrity
                       </p>
                       <h4 className="text-9xl font-black font-mono tracking-tighter text-white gold-shimmer select-none italic">
                         {(correlationConfidence).toFixed(6)}%
                       </h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Waveform Visualization */}
              <div className={`h-80 flex items-end justify-around gap-4 px-20 rounded-[5rem] py-16 relative overflow-hidden shadow-4xl transition-colors duration-1000 border ${
                pulseActive ? 'bg-orange-600/10 border-orange-600/50' : 'bg-black/90 border-yellow-900/40'
              }`}>
                {Array.from({ length: 60 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-zinc-900/60 rounded-full relative overflow-hidden h-full">
                    <div 
                      className={`absolute bottom-0 w-full transition-all duration-300 ${
                        pulseActive 
                          ? 'bg-gradient-to-t from-orange-600 via-orange-400 to-white' 
                          : 'bg-gradient-to-t from-yellow-900 via-yellow-500 to-white animate-pulse'
                      }`}
                      style={{ 
                        height: `${pulseActive ? 40 + Math.random() * 60 : 10 + Math.random() * 70}%`,
                        transitionDelay: `${i * 15}ms`
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-[#08080a] border border-yellow-900/40 p-16 rounded-[6rem] shadow-4xl relative overflow-hidden flex-1 flex flex-col">
            <h3 className="text-2xl font-black uppercase tracking-[0.6em] text-yellow-500 mb-16 flex items-center gap-8 italic underline decoration-yellow-900 underline-offset-8">
              <Mic className="w-10 h-10 animate-pulse text-yellow-500" />
              SENSORY HUB
            </h3>
            <div className="space-y-10 flex-1">
              <button 
                onClick={() => setSpectralResistance(pulseActive ? 5 : 30)}
                className={`w-full flex justify-between items-center p-12 border rounded-[4rem] transition-all duration-700 group relative overflow-hidden shadow-4xl ${
                  pulseActive ? 'bg-orange-600 text-white border-white' : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-8 relative z-10">
                  <Zap className={`w-10 h-10 ${pulseActive ? 'animate-bounce' : ''}`} />
                  <span className="text-[16px] font-black uppercase tracking-[0.4em] italic">Force Bypass Pulse</span>
                </div>
              </button>
              
              <button 
                onClick={() => setEyeActive(!eyeActive)}
                className={`w-full flex justify-between items-center p-12 border rounded-[4rem] transition-all duration-700 group relative overflow-hidden shadow-4xl ${
                  eyeActive ? 'bg-yellow-950/40 border-yellow-500 text-yellow-500' : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-8 relative z-10">
                  <Eye className="w-10 h-10 animate-pulse" />
                  <span className="text-[16px] font-black uppercase tracking-[0.4em] italic">Mirror Resonance</span>
                </div>
              </button>
              
              <div className="mt-auto p-12 bg-black border border-yellow-900/20 rounded-[4rem] shadow-inner">
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-4 italic">Surround Capture Status</p>
                 <div className="flex items-center gap-4">
                    <div className="flex-1 h-2 bg-zinc-900 rounded-full overflow-hidden">
                       <div className="h-full bg-yellow-500 w-[99.9%]" />
                    </div>
                    <span className="text-xs font-mono font-black text-yellow-600 italic">MAX</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulEnforcement;
