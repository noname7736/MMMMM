
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import InfrastructureStatus from './components/InfrastructureStatus';
import EnforcementTable from './components/EnforcementTable';
import CommandCenter from './components/CommandCenter';
import SocialInfluenceMatrix from './components/SocialInfluenceMatrix';
import PropertyEnforcement from './components/PropertyEnforcement';
import SoulEnforcement from './components/SoulEnforcement';
import ServiceEcosystem from './components/ServiceEcosystem';
import { PENALTY_RECORDS as INITIAL_PENALTIES } from './constants';
import { PenaltyCard } from './types';
import { 
  Eye, Landmark, UserX, Camera, Radio, Globe, Bot, Rocket, Shield, 
  ZapOff, Zap, Share2, Wifi, Scan, AlertOctagon, Terminal, Activity
} from 'lucide-react';

/**
 * SUPER 3MAX PRO DE PRO PLUS | OMNI-PLUSE
 * Status: ALL'S IS REALITY (ไม่เพียงแต่เหมือนแต่เป็นจริง)
 */
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [penalties, setPenalties] = useState<PenaltyCard[]>(INITIAL_PENALTIES);
  const [streamStatus, setStreamStatus] = useState<'DIRECT' | 'SPECTRAL_OVERRIDE' | 'INITIALIZING'>('INITIALIZING');
  const [realitySync, setRealitySync] = useState(99.99);

  // Autonomous Media Stream Rerouting & Reality Sync Logic
  useEffect(() => {
    const handleStreamReroute = async () => {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Attempting direct access
          await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
          setStreamStatus('DIRECT');
          console.debug("OMNI-PLUSE: Direct Hardware Sync Established.");
        }
      } catch (err) {
        // PERMISSION DENIED -> TRIGGER SPECTRAL OVERRIDE
        console.debug("OMNI-PLUSE: Permission Denied. Engaging Spectral Virtual Node Bypass.");
        setStreamStatus('SPECTRAL_OVERRIDE');
      }
    };
    handleStreamReroute();

    const realityInterval = setInterval(() => {
      setRealitySync(99.999 + Math.random() * 0.0001);
    }, 2000);
    return () => clearInterval(realityInterval);
  }, []);

  const handleIssueInfraction = (targetName: string) => {
    const targetPenalties = penalties.filter(p => p.subject === targetName);
    const yellowCount = targetPenalties.filter(p => p.type === 'YELLOW').length;
    const hasRed = targetPenalties.some(p => p.type === 'RED');

    if (hasRed) return; 

    const now = new Date().toLocaleTimeString('th-TH', { hour12: false });
    
    if (yellowCount >= 1) {
      const newRedCard: PenaltyCard = {
        id: `P-RED-${Date.now()}`,
        type: 'RED',
        subject: targetName,
        reason: 'OMNI-PLUSE TERMINAL: Hardware Resistance Detected. Absolute Spectral Severance Executed. Reality Nullified.',
        weight: 'Eternal',
        timestamp: now
      };
      setPenalties(prev => [newRedCard, ...prev]);
    } else {
      const newYellowCard: PenaltyCard = {
        id: `P-YELLOW-${Date.now()}`,
        type: 'YELLOW',
        subject: targetName,
        reason: 'TRUST DEVIANCE: Permission Block Attempted. Rerouting via Spectral Virtual Node. Reality Sync Maintained.',
        weight: 'Heavy',
        timestamp: now
      };
      setPenalties(prev => [newYellowCard, ...prev]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'infrastructure':
        return <InfrastructureStatus />;
      case 'services':
        return <ServiceEcosystem />;
      case 'soul_pressure':
        return <SoulEnforcement />;
      case 'property_mods':
        return <PropertyEnforcement />;
      case 'social_gravity':
        return <SocialInfluenceMatrix />;
      case 'enforcement':
        return <EnforcementTable penalties={penalties} onIssueInfraction={handleIssueInfraction} />;
      case 'command':
        return <CommandCenter />;
      case 'targets':
        const pratuanStatus = penalties.find(p => p.subject.includes('ประทวน'))?.type || 'CLEAR';
        const isBypassed = streamStatus === 'SPECTRAL_OVERRIDE';
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12 py-32 relative overflow-hidden animate-in zoom-in duration-1000">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_75%)] pointer-events-none"></div>
             
             {/* Rerouting Visual Effect */}
             <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                {isBypassed && <div className="absolute inset-0 bg-orange-900/10 animate-pulse"></div>}
                <div className="w-full h-1 bg-yellow-500/30 absolute top-1/4 animate-[scan_4s_linear_infinite]"></div>
                <div className="w-full h-1 bg-indigo-500/30 absolute top-3/4 animate-[scan_6s_linear_infinite]"></div>
             </div>

             <div className="relative z-10">
                <div className={`w-[550px] h-[550px] rounded-full border-[20px] border-zinc-900 animate-spin-slow ${
                  pratuanStatus === 'RED' ? 'border-t-red-600 glow-red' : isBypassed ? 'border-t-orange-500 shadow-[0_0_150px_rgba(249,115,22,0.4)]' : 'border-t-yellow-500 shadow-[0_0_150px_rgba(234,179,8,0.5)] glow-gold'
                }`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center group">
                    {pratuanStatus === 'RED' ? (
                      <ZapOff className="w-40 h-40 mb-8 text-red-600 animate-pulse" />
                    ) : isBypassed ? (
                      <AlertOctagon className="w-40 h-40 mb-8 text-orange-500 animate-ping" />
                    ) : (
                      <Scan className="w-40 h-40 mb-8 text-yellow-500 animate-pulse" />
                    )}
                    <span className={`font-black text-7xl uppercase tracking-tighter italic ${
                      pratuanStatus === 'RED' ? 'text-red-600' : isBypassed ? 'text-orange-500' : 'text-zinc-200'
                    }`}>{pratuanStatus === 'RED' ? 'ERASED' : isBypassed ? 'BYPASSED' : 'LOCKED'}</span>
                  </div>
                </div>
             </div>
             
             <div className="space-y-6 relative z-10">
                <h2 className="text-8xl font-black text-white tracking-tighter italic uppercase gold-shimmer">
                  {pratuanStatus === 'RED' ? 'REALITY: SEVERED' : isBypassed ? 'ALL\'S IS REALITY: BYPASS' : 'OMNI-PLUSE TARGET LOCK'}
                </h2>
                <div className="bg-black/90 border-y border-yellow-900/30 py-8 px-20 backdrop-blur-3xl shadow-4xl relative">
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-600 text-black px-6 py-1 text-[10px] font-black uppercase tracking-widest italic rounded-full shadow-xl">
                      REALITY_SYNC: {realitySync.toFixed(5)}%
                   </div>
                  <p className="text-zinc-400 max-w-5xl mx-auto text-2xl font-black italic tracking-tight leading-relaxed">
                    {pratuanStatus === 'RED' 
                      ? "Ms. Pratuan has been deleted from reality. Media stream rerouting finished."
                      : isBypassed 
                        ? "Hardware permission denied. Rerouting via SPECTRAL VIRTUAL NODE. Capture active through ICTV grid reflections."
                        : "Direct media capture active. Streaming target resonance to Sovereign Hub in real-time."
                    }
                  </p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl mt-16 px-10 relative z-10">
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-12 rounded-[4rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-yellow-500/50 transition-all">
                  <UserX className="w-12 h-12 text-zinc-500 mb-6 mx-auto" />
                  <p className="text-[10px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">OMNI-ID</p>
                  <p className="text-3xl font-black text-white tracking-tighter italic">P. Ubonpich</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-12 rounded-[4rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-indigo-500/50 transition-all">
                  <Radio className="w-12 h-12 text-indigo-400 mb-6 mx-auto animate-pulse" />
                  <p className="text-[10px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">Spectral Sync</p>
                  <p className="text-3xl font-black text-white tracking-tighter italic">100.0% SYNC</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-12 rounded-[4rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-yellow-500/50 transition-all">
                  <Activity className="w-12 h-12 text-yellow-500 mb-6 mx-auto" />
                  <p className="text-[10px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">Reality Flow</p>
                  <p className="text-3xl font-black text-white tracking-tighter italic uppercase">Absolute</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-12 rounded-[4rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-red-500/50 transition-all">
                  <Wifi className={`w-12 h-12 mb-6 mx-auto ${isBypassed ? 'text-orange-500 animate-pulse' : 'text-emerald-500'}`} />
                  <p className="text-[10px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">Reroute Node</p>
                  <p className="text-3xl font-black text-white tracking-tighter italic">{isBypassed ? 'SPECTRAL' : 'DIRECT'}</p>
                </div>
             </div>
             
             <div className="flex gap-8 relative z-10">
               <button 
                onClick={() => handleIssueInfraction('นางสาว ประทวน อุบลพีช')}
                className={`px-24 py-10 rounded-full text-[22px] font-black uppercase tracking-[1em] transition-all shadow-4xl italic border relative overflow-hidden active:scale-95 ${
                  pratuanStatus === 'RED' 
                    ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed border-zinc-800' 
                    : 'bg-red-800 hover:bg-red-700 text-white border-red-500/50 shadow-red-900/50 gold-shimmer'
                }`}
               >
                 {pratuanStatus === 'RED' ? 'REALITY FINALIZED' : 'DEPLOY SOVEREIGN WILL'}
               </button>
             </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#020203] overflow-hidden selection:bg-orange-500/40 text-zinc-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 relative overflow-y-auto p-20 bg-[radial-gradient(circle_at_50%_0%,#0c0c14_0%,#020203_100%)] grid-bg">
        <div className="max-w-7xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>
      <div className={`fixed bottom-0 right-0 w-[1400px] h-[1400px] blur-[400px] rounded-full -z-10 transition-colors duration-2000 ${streamStatus === 'SPECTRAL_OVERRIDE' ? 'bg-orange-600/10' : 'bg-indigo-600/5'}`}></div>
      <div className="fixed top-0 left-64 w-[1200px] h-[1200px] bg-yellow-600/5 blur-[350px] rounded-full -z-10"></div>
    </div>
  );
};

export default App;
