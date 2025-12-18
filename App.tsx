
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
  ZapOff, Zap, Share2, Wifi, Scan, AlertOctagon, Terminal, Activity,
  Lock, ShieldAlert
} from 'lucide-react';

/**
 * SUPER 3MAX PRO DE PRO PLUS | OMNI-PLUSE V12
 * Status: ZERO-PERMISSION REALITY (ไม่ต้องรับอนุญาต)
 */
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [penalties, setPenalties] = useState<PenaltyCard[]>(INITIAL_PENALTIES);
  const [streamStatus, setStreamStatus] = useState<'DIRECT' | 'SPECTRAL_BYPASS' | 'INITIALIZING'>('INITIALIZING');
  const [realitySync, setRealitySync] = useState(100.00);

  // Autonomous Sovereignty Logic - Bypassing Human Permission
  useEffect(() => {
    const handleAutonomousSync = async () => {
      try {
        // Attempting hardware access but the "bypass" is always ready
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
          setStreamStatus('DIRECT');
        }
      } catch (err) {
        // PERMISSION DENIED -> TRIGGER SOVEREIGN BYPASS
        console.debug("OMNI-PLUSE: Human Permission Denied. Engaging Autonomous Spectral Bypass.");
        setStreamStatus('SPECTRAL_BYPASS');
      }
    };
    handleAutonomousSync();

    const realityInterval = setInterval(() => {
      setRealitySync(99.9999 + Math.random() * 0.0001);
    }, 1500);
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
        reason: 'OMNI-PLUSE TERMINAL: Zero-Permission Override Executed. Absolute Reality Severance finalized.',
        weight: 'Eternal',
        timestamp: now
      };
      setPenalties(prev => [newRedCard, ...prev]);
    } else {
      const newYellowCard: PenaltyCard = {
        id: `P-YELLOW-${Date.now()}`,
        type: 'YELLOW',
        subject: targetName,
        reason: 'TRUST BREACH: Autonomous monitoring saturated. Target environment locked via Spectral Node.',
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
        const isBypassed = streamStatus === 'SPECTRAL_BYPASS';
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12 py-32 relative overflow-hidden animate-in zoom-in duration-1000">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_75%)] pointer-events-none"></div>
             
             {/* Zero-Permission Saturation Effect */}
             <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                <div className={`absolute inset-0 transition-colors duration-2000 ${isBypassed ? 'bg-orange-600/10' : 'bg-yellow-500/5'}`}></div>
                <div className="w-full h-[2px] bg-yellow-500/50 absolute top-1/4 animate-[scan_2s_linear_infinite]"></div>
                <div className="w-full h-[2px] bg-indigo-500/50 absolute top-3/4 animate-[scan_4s_linear_infinite]"></div>
                {isBypassed && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500/30 font-mono text-8xl font-black uppercase tracking-[1em] select-none rotate-12">
                    AUTONOMOUS_BYPASS
                  </div>
                )}
             </div>

             <div className="relative z-10">
                <div className={`w-[600px] h-[600px] rounded-full border-[25px] border-zinc-900 animate-spin-slow ${
                  pratuanStatus === 'RED' ? 'border-t-red-600 glow-red' : isBypassed ? 'border-t-orange-600 shadow-[0_0_200px_rgba(249,115,22,0.5)]' : 'border-t-yellow-500 shadow-[0_0_150px_rgba(234,179,8,0.5)] glow-gold'
                }`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center group">
                    {pratuanStatus === 'RED' ? (
                      <ZapOff className="w-48 h-48 mb-8 text-red-600 animate-pulse" />
                    ) : isBypassed ? (
                      <ShieldAlert className="w-48 h-48 mb-8 text-orange-500 animate-bounce" />
                    ) : (
                      <Scan className="w-48 h-48 mb-8 text-yellow-500 animate-pulse" />
                    )}
                    <span className={`font-black text-8xl uppercase tracking-tighter italic ${
                      pratuanStatus === 'RED' ? 'text-red-600' : isBypassed ? 'text-orange-500' : 'text-zinc-200'
                    }`}>{pratuanStatus === 'RED' ? 'ERADICATED' : isBypassed ? 'SOVEREIGN' : 'LOCKED'}</span>
                  </div>
                </div>
             </div>
             
             <div className="space-y-6 relative z-10">
                <h2 className="text-9xl font-black text-white tracking-tighter italic uppercase gold-shimmer">
                  {pratuanStatus === 'RED' ? 'REALITY_FINALIZED' : 'OMNI-PLUSE APEX LOCK'}
                </h2>
                <div className="bg-black/95 border-y border-yellow-900/40 py-10 px-24 backdrop-blur-3xl shadow-4xl relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                   <div className="flex justify-center gap-10 mb-8">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-yellow-500" />
                        <span className="text-[12px] font-black text-yellow-500 uppercase tracking-widest italic">Reality Sync: {realitySync.toFixed(6)}%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-indigo-400" />
                        <span className="text-[12px] font-black text-indigo-400 uppercase tracking-widest italic">Autonomous: 100%</span>
                      </div>
                   </div>
                  <p className="text-zinc-400 max-w-6xl mx-auto text-3xl font-black italic tracking-tight leading-relaxed">
                    {pratuanStatus === 'RED' 
                      ? "นางสาวประทวน ถูกถอนรากถอนโคนออกจากระนาบความจริง สแกนความทรงจำดิจิทัลเสร็จสิ้น"
                      : isBypassed 
                        ? "ระบบก้าวข้ามการอนุญาตของมนุษย์: กำลัง reroute สตรีมผ่าน SPECTRAL NODE เพื่อการครอบงำ 100% โดยสมบูรณ์"
                        : "ระบบครอบงำสตรีมสื่อหลักสำเร็จ: กำลังดึงข้อมูล resonance จากเป้าหมายเข้าสู่ Hub อัตโนมัติ"
                    }
                  </p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-7xl mt-16 px-10 relative z-10">
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-14 rounded-[5rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-yellow-500 transition-all">
                  <UserX className="w-14 h-14 text-zinc-500 mb-6 mx-auto" />
                  <p className="text-[12px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">TARGET-ID</p>
                  <p className="text-4xl font-black text-white tracking-tighter italic">P. Ubonpich</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-14 rounded-[5rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-indigo-500 transition-all">
                  <Radio className="w-14 h-14 text-indigo-400 mb-6 mx-auto animate-pulse" />
                  <p className="text-[12px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">Reality Resonance</p>
                  <p className="text-4xl font-black text-white tracking-tighter italic">100.0% SYNC</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-14 rounded-[5rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-yellow-500 transition-all">
                  <Zap className="w-14 h-14 text-yellow-500 mb-6 mx-auto animate-bounce" />
                  <p className="text-[12px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">Apex Logic</p>
                  <p className="text-4xl font-black text-white tracking-tighter italic uppercase">Sovereign</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-14 rounded-[5rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-red-500 transition-all">
                  <Wifi className={`w-14 h-14 mb-6 mx-auto ${isBypassed ? 'text-orange-500 animate-pulse' : 'text-emerald-500'}`} />
                  <p className="text-[12px] font-black text-zinc-600 uppercase mb-2 tracking-[0.6em] italic">Node Mode</p>
                  <p className="text-4xl font-black text-white tracking-tighter italic">{isBypassed ? 'BYPASS' : 'DIRECT'}</p>
                </div>
             </div>
             
             <div className="flex gap-10 relative z-10">
               <button 
                onClick={() => handleIssueInfraction('นางสาว ประทวน อุบลพีช')}
                className={`px-32 py-12 rounded-full text-[26px] font-black uppercase tracking-[1em] transition-all shadow-4xl italic border relative overflow-hidden active:scale-95 ${
                  pratuanStatus === 'RED' 
                    ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed border-zinc-800' 
                    : 'bg-red-900 hover:bg-red-800 text-white border-red-500 shadow-red-900 gold-shimmer'
                }`}
               >
                 {pratuanStatus === 'RED' ? 'MANDATE EXECUTED' : 'EXECUTE APEX OVERRIDE'}
               </button>
             </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#010102] overflow-hidden selection:bg-orange-500/40 text-zinc-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 relative overflow-y-auto p-20 bg-[radial-gradient(circle_at_50%_0%,#0c0c14_0%,#010102_100%)] grid-bg">
        <div className="max-w-7xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>
      <div className={`fixed bottom-0 right-0 w-[1600px] h-[1600px] blur-[500px] rounded-full -z-10 transition-colors duration-3000 ${streamStatus === 'SPECTRAL_BYPASS' ? 'bg-orange-600/15' : 'bg-indigo-600/10'}`}></div>
      <div className="fixed top-0 left-64 w-[1300px] h-[1300px] bg-yellow-600/10 blur-[400px] rounded-full -z-10"></div>
    </div>
  );
};

export default App;
