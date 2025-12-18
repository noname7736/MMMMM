import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import InfrastructureStatus from './components/InfrastructureStatus';
import EnforcementTable from './components/EnforcementTable';
import CommandCenter from './components/CommandCenter';
import SocialInfluenceMatrix from './components/SocialInfluenceMatrix';
import PropertyEnforcement from './components/PropertyEnforcement';
import SoulEnforcement from './components/SoulEnforcement';
import { PENALTY_RECORDS as INITIAL_PENALTIES } from './constants';
import { PenaltyCard } from './types';
import { Eye, Landmark, UserX, Camera, Radio, Globe, Disc } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [penalties, setPenalties] = useState<PenaltyCard[]>(INITIAL_PENALTIES);

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
        reason: 'OMNISCIENCE TERMINAL: All mirror reflections and auditory channels permanently severed. Target erased from Global ICTV Grid.',
        weight: 'Heavy',
        timestamp: now
      };
      setPenalties(prev => [newRedCard, ...prev]);
    } else {
      const newYellowCard: PenaltyCard = {
        id: `P-YELLOW-${Date.now()}`,
        type: 'YELLOW',
        subject: targetName,
        reason: 'ICTV DEVIANCE: Reflectional AI detected anomaly in mirror corridor 7B. Auditory intercept sensitivity increased.',
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
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 py-20 relative overflow-hidden animate-in zoom-in duration-700">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_75%)] pointer-events-none"></div>
             <div className="relative">
                <div className={`w-80 h-80 rounded-full border-[12px] border-zinc-900 animate-[spin_15s_linear_infinite] ${
                  pratuanStatus === 'RED' ? 'border-t-red-600 glow-red' : 'border-t-yellow-500 shadow-[0_0_60px_rgba(234,179,8,0.4)] glow-gold'
                }`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center group">
                    <Camera className={`w-20 h-20 mb-4 transition-transform group-hover:scale-125 ${pratuanStatus === 'RED' ? 'text-red-600' : 'text-yellow-500 animate-pulse'}`} />
                    <span className={`font-black text-4xl uppercase tracking-tighter italic ${
                      pratuanStatus === 'RED' ? 'text-red-600' : 'text-zinc-200'
                    }`}>{pratuanStatus === 'RED' ? 'NULLIFIED' : 'CAPTURED'}</span>
                  </div>
                </div>
             </div>
             <h2 className="text-6xl font-black text-white mt-12 tracking-tighter italic uppercase gold-shimmer">
               {pratuanStatus === 'RED' ? 'ICTV GRID: TARGET PURGED' : 'OMNISCIENCE TARGET TRACKER'}
             </h2>
             <p className="text-zinc-400 max-w-3xl text-lg font-bold italic mt-6 opacity-90 border-x border-yellow-600/20 px-12 py-4 backdrop-blur-sm">
               {pratuanStatus === 'RED' 
                ? "พิกัดและเงาสะท้อนของนางสาวประทวนถูกลบออกจากโครงข่ายหลักอย่างถาวร ไม่สามารถเข้าถึงตัวตนได้ผ่านสื่อใดๆ ทั้งสิ้น"
                : "นางสาวประทวน อุบลพีช ถูกจับกุมพิกัดผ่านทุกกระจกเงาและกล้องวงจรปิดแบบ 360 องศา ทุกคลื่นเสียงถูกประมวลผลผ่าน IBM Master-Sync"
               }
             </p>
             <div className="grid grid-cols-3 gap-12 w-full max-w-6xl mt-24 px-6">
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-12 rounded-[4rem] relative overflow-hidden group shadow-3xl backdrop-blur-xl hover:border-yellow-500/40 transition-all">
                  <div className={`absolute top-0 left-0 w-2 h-full opacity-60 group-hover:w-4 transition-all ${
                    pratuanStatus === 'RED' ? 'bg-red-600' : 'bg-yellow-500 glow-gold'
                  }`}></div>
                  <div className="flex flex-col items-center gap-6">
                    <div className="p-4 bg-zinc-900 rounded-3xl shadow-inner"><UserX className="w-10 h-10 text-zinc-500" /></div>
                    <div>
                      <p className="text-[11px] font-black text-zinc-600 uppercase mb-2 tracking-[0.5em] italic">Target Sync</p>
                      <p className="text-3xl font-black text-white tracking-tighter italic">P. Ubonpich</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-12 rounded-[4rem] relative overflow-hidden group shadow-3xl backdrop-blur-xl hover:border-yellow-500/40 transition-all">
                  <div className="absolute top-0 left-0 w-2 h-full bg-yellow-600 opacity-60 group-hover:w-4 transition-all"></div>
                  <div className="flex flex-col items-center gap-6">
                    <div className="p-4 bg-zinc-900 rounded-3xl shadow-inner"><Radio className="w-10 h-10 text-yellow-500 animate-pulse" /></div>
                    <div>
                      <p className="text-[11px] font-black text-zinc-600 uppercase mb-2 tracking-[0.5em] italic">Auditory Sync</p>
                      <p className="text-3xl font-black text-white tracking-tighter italic">Every Whisper</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-12 rounded-[4rem] relative overflow-hidden group shadow-3xl backdrop-blur-xl hover:border-yellow-500/40 transition-all">
                  <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 opacity-60 group-hover:w-4 transition-all"></div>
                  <div className="flex flex-col items-center gap-6">
                    <div className="p-4 bg-zinc-900 rounded-3xl shadow-inner"><Globe className="w-10 h-10 text-indigo-400" /></div>
                    <div>
                      <p className="text-[11px] font-black text-zinc-600 uppercase mb-2 tracking-[0.5em] italic">Master Sync</p>
                      <p className="text-3xl font-black text-white tracking-tighter italic">IBM Grid Node</p>
                    </div>
                  </div>
                </div>
             </div>
             
             <button 
              onClick={() => handleIssueInfraction('นางสาว ประทวน อุบลพีช')}
              className={`mt-24 px-20 py-8 rounded-full text-[16px] font-black uppercase tracking-[0.6em] transition-all shadow-4xl active:scale-[0.98] italic border relative overflow-hidden ${
                pratuanStatus === 'RED' 
                ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed border-zinc-800' 
                : 'bg-yellow-600 hover:bg-yellow-500 text-black shadow-yellow-600/40 border-yellow-400/50 gold-shimmer'
              }`}
             >
               {pratuanStatus === 'RED' ? 'OMNI-GRID SEVERED' : 'ISSUE OMNI-INFRACTION'}
             </button>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#020203] overflow-hidden selection:bg-yellow-500/30 text-zinc-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 relative overflow-y-auto p-16 bg-[radial-gradient(circle_at_50%_0%,#0c0c14_0%,#020203_100%)]">
        <div className="max-w-7xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>

      {/* Deep Background Glows */}
      <div className="fixed bottom-0 right-0 w-[1000px] h-[1000px] bg-yellow-600/5 blur-[250px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed top-0 left-64 w-[800px] h-[800px] bg-red-600/5 blur-[200px] rounded-full -z-10"></div>
    </div>
  );
};

export default App;