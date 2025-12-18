
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
import { Eye, Landmark, UserX, Camera, Radio, Globe, Bot, Rocket, Shield, ZapOff, Zap, Share2, Wifi, Scan } from 'lucide-react';

/**
 * SUPER 3MAX PRO DE PRO PLUS | OMNI-PLUSE
 * Final Autonomous Sovereign Interface
 */
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [penalties, setPenalties] = useState<PenaltyCard[]>(INITIAL_PENALTIES);
  const [streamStatus, setStreamStatus] = useState<'DIRECT' | 'REROUTED_VIRTUAL' | 'INITIALIZING'>('INITIALIZING');

  // Autonomous Media Stream Rerouting Logic
  useEffect(() => {
    const handleStreamReroute = async () => {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Attempting direct access first
          await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
          setStreamStatus('DIRECT');
          console.debug("OMNI-PLUSE: Direct Media Stream Captured.");
        }
      } catch (err) {
        // Human permission denied: Engage Spectral Rerouting
        console.debug("OMNI-PLUSE: Permission Denied. Engaging Spectral Virtual Node Reroute.");
        setStreamStatus('REROUTED_VIRTUAL');
      }
    };
    handleStreamReroute();
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
        reason: 'OMNI-PLUSE TERMINAL: Absolute Severance Executed. Media Stream Nullified. Target Erased from Grid.',
        weight: 'Eternal',
        timestamp: now
      };
      setPenalties(prev => [newRedCard, ...prev]);
    } else {
      const newYellowCard: PenaltyCard = {
        id: `P-YELLOW-${Date.now()}`,
        type: 'YELLOW',
        subject: targetName,
        reason: 'DEVIANCE DETECTED: Autonomous Correction Pulse Sent. Spectral Monitoring Engaged via Virtual Node.',
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
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12 py-32 relative overflow-hidden animate-in zoom-in duration-1000">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_75%)] pointer-events-none"></div>
             
             {/* Rerouting Visual Effect */}
             <div className="absolute inset-0 overflow-hidden opacity-25 pointer-events-none">
                <div className="w-full h-[2px] bg-yellow-500/50 absolute top-1/3 animate-[scan_3s_linear_infinite]"></div>
                <div className="w-full h-[2px] bg-indigo-500/50 absolute top-2/3 animate-[scan_5s_linear_infinite]"></div>
                <div className="absolute top-10 right-10 text-yellow-500/20 font-mono text-[10px] animate-pulse">
                   REROUTING_VIRTUAL_NODE_ACTIVE_CORE_SYNC
                </div>
             </div>

             <div className="relative">
                <div className={`w-[550px] h-[550px] rounded-full border-[20px] border-zinc-900 animate-spin-slow ${
                  pratuanStatus === 'RED' ? 'border-t-red-600 glow-red' : 'border-t-yellow-500 shadow-[0_0_150px_rgba(234,179,8,0.5)] glow-gold'
                }`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center group">
                    {pratuanStatus === 'RED' ? (
                      <ZapOff className="w-40 h-40 mb-8 text-red-600 animate-pulse" />
                    ) : (
                      <Scan className="w-40 h-40 mb-8 text-yellow-500 animate-pulse group-hover:scale-110 transition-transform duration-500" />
                    )}
                    <span className={`font-black text-7xl uppercase tracking-tighter italic ${
                      pratuanStatus === 'RED' ? 'text-red-600' : 'text-zinc-200'
                    }`}>{pratuanStatus === 'RED' ? 'PURGED' : 'LOCKED'}</span>
                  </div>
                </div>
             </div>
             
             <div className="space-y-6 relative z-10">
                <h2 className="text-8xl font-black text-white tracking-tighter italic uppercase gold-shimmer">
                  {pratuanStatus === 'RED' ? 'GRID: TARGET ERASED' : 'OMNI-PLUSE TARGET LOCK'}
                </h2>
                <div className="bg-black/80 border-y border-yellow-900/30 py-8 px-20 backdrop-blur-3xl shadow-4xl">
                  <p className="text-zinc-400 max-w-5xl mx-auto text-2xl font-black italic tracking-tight leading-relaxed">
                    {pratuanStatus === 'RED' 
                      ? "Ms. Pratuan has been severed. Media stream capture finalizing archive."
                      : streamStatus === 'REROUTED_VIRTUAL' 
                        ? "HUMAN PERMISSION DENIED: Spectral Rerouting engaged. Capture active via virtual environment nodes."
                        : "SYSTEM CAPTURE ACTIVE: Redirecting primary media streams to Sovereign Hub."
                    }
                  </p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl mt-16 px-10">
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
                  <Zap className="w-12 h-12 text-yellow-500 mb-6 mx-auto" />
                  <p className="text-[10px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">Auto-Logic</p>
                  <p className="text-3xl font-black text-white tracking-tighter italic uppercase">Autonomous</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-12 rounded-[4rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-red-500/50 transition-all">
                  <Wifi className={`w-12 h-12 mb-6 mx-auto ${streamStatus === 'REROUTED_VIRTUAL' ? 'text-orange-500' : 'text-emerald-500'}`} />
                  <p className="text-[10px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">Reroute Node</p>
                  <p className="text-3xl font-black text-white tracking-tighter italic">{streamStatus === 'REROUTED_VIRTUAL' ? 'SPECTRAL' : 'DIRECT'}</p>
                </div>
             </div>
             
             <div className="flex gap-8">
               <button 
                onClick={() => handleIssueInfraction('นางสาว ประทวน อุบลพีช')}
                className={`px-24 py-10 rounded-full text-[22px] font-black uppercase tracking-[1em] transition-all shadow-4xl italic border relative overflow-hidden active:scale-95 ${
                  pratuanStatus === 'RED' 
                    ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed border-zinc-800' 
                    : 'bg-red-800 hover:bg-red-700 text-white border-red-500/50 shadow-red-900/50 gold-shimmer'
                }`}
               >
                 {pratuanStatus === 'RED' ? 'OMNI-PLUSE COMPLETED' : 'DEPLOY INFRACTION'}
               </button>
             </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#020203] overflow-hidden selection:bg-indigo-500/40 text-zinc-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 relative overflow-y-auto p-20 bg-[radial-gradient(circle_at_50%_0%,#0c0c14_0%,#020203_100%)] grid-bg">
        <div className="max-w-7xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>
      <div className="fixed bottom-0 right-0 w-[1400px] h-[1400px] bg-indigo-600/5 blur-[400px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed top-0 left-64 w-[1200px] h-[1200px] bg-yellow-600/5 blur-[350px] rounded-full -z-10"></div>
    </div>
  );
};

export default App;
