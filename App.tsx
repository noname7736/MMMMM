
import React, { useState } from 'react';
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
// Added missing UserX import
import { Eye, Landmark, UserX } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [penalties, setPenalties] = useState<PenaltyCard[]>(INITIAL_PENALTIES);

  const handleIssueInfraction = (targetName: string) => {
    const targetPenalties = penalties.filter(p => p.subject === targetName);
    const yellowCount = targetPenalties.filter(p => p.type === 'YELLOW').length;
    const hasRed = targetPenalties.some(p => p.type === 'RED');

    if (hasRed) return; // Already at max penalty

    const now = new Date().toLocaleTimeString('th-TH', { hour12: false });
    
    if (yellowCount >= 1) {
      // Escalate to RED CARD
      const newRedCard: PenaltyCard = {
        id: `P-RED-${Date.now()}`,
        type: 'RED',
        subject: targetName,
        reason: 'OMNISCIENCE TERMINAL: Total Reflectional Severance. Target removed from All-Seeing Grid. Absolute Silence enforced.',
        weight: 'Heavy',
        timestamp: now
      };
      setPenalties(prev => [newRedCard, ...prev]);
    } else {
      // First (or another) YELLOW CARD
      const newYellowCard: PenaltyCard = {
        id: `P-YELLOW-${Date.now()}`,
        type: 'YELLOW',
        subject: targetName,
        reason: 'ICTV DEVIANCE: Reflectional AI detected non-compliant behavioral patterns. Eternal monitoring increased.',
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
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.02),transparent_70%)] pointer-events-none"></div>
             <div className="relative">
                <div className={`w-48 h-48 rounded-full border-[8px] border-zinc-900 animate-[spin_8s_linear_infinite] ${
                  pratuanStatus === 'RED' ? 'border-t-red-600' : 'border-t-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]'
                }`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Eye className={`w-12 h-12 mb-2 ${pratuanStatus === 'RED' ? 'text-red-600' : 'text-yellow-500 animate-pulse'}`} />
                    <span className={`font-black text-2xl uppercase tracking-tighter ${
                      pratuanStatus === 'RED' ? 'text-red-600' : 'text-zinc-200'
                    }`}>{pratuanStatus === 'RED' ? 'NULL' : 'WATCHED'}</span>
                  </div>
                </div>
             </div>
             <h2 className="text-4xl font-black text-white mt-8 tracking-tighter italic uppercase gold-shimmer">
               {pratuanStatus === 'RED' ? 'ICTV GRID: TARGET DELETED' : 'OMNISCIENCE TRACKING'}
             </h2>
             <p className="text-zinc-500 max-w-xl text-sm font-medium italic mt-2">
               {pratuanStatus === 'RED' 
                ? "N. Ubonpich's reflection has been purged from the global grid. Total behavioral isolation complete."
                : "Every movement of N. Ubonpich is mirrored in the Reflectional AI. All-Seeing Mode ensures zero-latency correction."
               }
             </p>
             <div className="grid grid-cols-2 gap-8 w-full max-w-3xl mt-16 px-4">
                <div className="bg-[#0a0a0c] border border-yellow-900/10 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl backdrop-blur-md">
                  <div className={`absolute top-0 left-0 w-1.5 h-full opacity-50 group-hover:w-3 transition-all ${
                    pratuanStatus === 'RED' ? 'bg-red-600' : 'bg-yellow-500 shadow-[0_0_15px_#eab308]'
                  }`}></div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase mb-3 tracking-widest italic flex items-center gap-2">
                    <UserX className="w-3 h-3" /> Target Alpha Reflection
                  </p>
                  <p className="text-2xl font-black text-white tracking-tighter italic">N. Ubonpich</p>
                  <p className={`text-[9px] font-mono mt-6 font-black border px-3 py-1.5 inline-block rounded-full uppercase tracking-widest ${
                    pratuanStatus === 'RED' ? 'text-red-600 border-red-900/30 bg-red-900/10' : 'text-yellow-500 border-yellow-900/30 bg-yellow-900/10'
                  }`}>
                    {pratuanStatus === 'RED' ? 'GRID_SEVERANCE' : 'OMNI_WATCH_ENGAGED'}
                  </p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/10 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl backdrop-blur-md">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-600 opacity-50 group-hover:w-3 transition-all"></div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase mb-3 tracking-widest italic flex items-center gap-2">
                    <Landmark className="w-3 h-3" /> Logic Sovereign Node
                  </p>
                  <p className="text-2xl font-black text-white tracking-tighter italic">Person B</p>
                  <p className="text-[9px] font-mono text-yellow-500 mt-6 font-black border border-yellow-900/30 px-3 py-1.5 inline-block rounded-full bg-yellow-900/10 uppercase tracking-widest">ETERNAL_SYNC_ASSET</p>
                </div>
             </div>
             
             <button 
              onClick={() => handleIssueInfraction('นางสาว ประทวน อุบลพีช')}
              className={`mt-16 px-14 py-5 rounded-full text-xs font-black uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-[0.98] ${
                pratuanStatus === 'RED' 
                ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed border border-zinc-800' 
                : 'bg-yellow-600 hover:bg-yellow-500 text-black shadow-yellow-600/20'
              }`}
             >
               {pratuanStatus === 'RED' ? 'GRID DISCONNECTED' : 'Issue Omni-Infraction'}
             </button>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#020203] overflow-hidden selection:bg-yellow-500/30 text-zinc-300">
      <div className="scanline"></div>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 relative overflow-y-auto p-12 bg-[radial-gradient(circle_at_50%_0%,#0c0c14_0%,#020203_100%)]">
        <div className="max-w-7xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>

      {/* Background Omniscience Glows */}
      <div className="fixed bottom-0 right-0 w-[700px] h-[700px] bg-yellow-600/5 blur-[180px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed top-0 left-64 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full -z-10"></div>
    </div>
  );
};

export default App;
