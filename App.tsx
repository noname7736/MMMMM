
import React, { useState } from 'react';
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
import { Eye, Landmark, UserX, Camera, Radio, Globe, Bot, Rocket, Shield, ZapOff } from 'lucide-react';

/**
 * SUPER 3MAX PRO DE PRO PLUS
 * Master Control Interface - 100% Final Real-World Integration
 */
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
        reason: 'OMNISCIENCE TERMINAL: Absolute Breach of Professional Integrity. Grid Severance Engaged.',
        weight: 'Eternal',
        timestamp: now
      };
      setPenalties(prev => [newRedCard, ...prev]);
    } else {
      const newYellowCard: PenaltyCard = {
        id: `P-YELLOW-${Date.now()}`,
        type: 'YELLOW',
        subject: targetName,
        reason: 'TRUST DEVIANCE: ตรวจพบพฤติกรรมจงใจละทิ้งหน้าที่เพื่อกินเงินเดือนฟรี ระบบสั่งควบคุมความประพฤติขั้นสูงสุด',
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
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_75%)] pointer-events-none"></div>
             <div className="relative">
                <div className={`w-[500px] h-[500px] rounded-full border-[15px] border-zinc-900 animate-[spin_30s_linear_infinite] ${
                  pratuanStatus === 'RED' ? 'border-t-red-600 glow-red' : 'border-t-yellow-500 shadow-[0_0_100px_rgba(234,179,8,0.4)] glow-gold'
                }`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center group">
                    {pratuanStatus === 'RED' ? (
                      <ZapOff className="w-32 h-32 mb-8 text-red-600 animate-pulse" />
                    ) : (
                      <Camera className="w-32 h-32 mb-8 text-yellow-500 animate-pulse group-hover:scale-125 transition-transform duration-500" />
                    )}
                    <span className={`font-black text-6xl uppercase tracking-tighter italic ${
                      pratuanStatus === 'RED' ? 'text-red-600' : 'text-zinc-200'
                    }`}>{pratuanStatus === 'RED' ? 'ERASED' : 'LOCKED'}</span>
                  </div>
                </div>
             </div>
             
             <div className="space-y-6 relative z-10">
                <h2 className="text-7xl font-black text-white tracking-tighter italic uppercase gold-shimmer">
                  {pratuanStatus === 'RED' ? 'GRID: SOUL SEVERED' : 'OMNISCIENCE TARGET LOCK'}
                </h2>
                <p className="text-zinc-400 max-w-4xl mx-auto text-xl font-bold italic border-x-4 border-yellow-600/30 px-16 py-6 backdrop-blur-xl">
                  {pratuanStatus === 'RED' 
                    ? "นางสาวประทวน ถูกลบออกจากระนาบการทำงานและเทคโนโลยีทั้งหมดถาวร ทุกความพยายามในการเอาเปรียบสิ้นสุดลงแล้ว"
                    : "คำเตือน: คุณถูกจับตามองผ่านทุกเงาสะท้อนและคลื่นเสียง หน้าที่คือการทำงานดูแลผู้ว่าจ้างให้ดีที่สุด หากละทิ้งหน้าที่คุณจะสูญเสียทุกอย่างในโลกดิจิทัล"
                  }
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl mt-24 px-10">
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-16 rounded-[5rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-yellow-500/50 transition-all">
                  <div className={`absolute top-0 left-0 w-3 h-full opacity-70 group-hover:w-6 transition-all ${pratuanStatus === 'RED' ? 'bg-red-600' : 'bg-yellow-500'}`}></div>
                  <UserX className="w-16 h-16 text-zinc-500 mb-10 mx-auto" />
                  <p className="text-[12px] font-black text-zinc-600 uppercase mb-4 tracking-[0.6em] italic">Omni-ID Sync</p>
                  <p className="text-4xl font-black text-white tracking-tighter italic">P. Ubonpich</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-16 rounded-[5rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-yellow-500/50 transition-all">
                  <Radio className="w-16 h-16 text-yellow-500 mb-10 mx-auto animate-pulse" />
                  <p className="text-[12px] font-black text-zinc-600 uppercase mb-4 tracking-[0.6em] italic">Vocal Capture</p>
                  <p className="text-4xl font-black text-white tracking-tighter italic">{pratuanStatus === 'RED' ? 'OFFLINE' : 'ACTIVE'}</p>
                </div>
                <div className="bg-[#0a0a0c] border border-yellow-900/30 p-16 rounded-[5rem] relative overflow-hidden group shadow-4xl backdrop-blur-3xl hover:border-yellow-500/50 transition-all">
                  <Globe className="w-16 h-16 text-indigo-400 mb-10 mx-auto" />
                  <p className="text-[12px] font-black text-zinc-600 uppercase mb-4 tracking-[0.6em] italic">Grid Persistence</p>
                  <p className="text-4xl font-black text-white tracking-tighter italic">MASTER_NODE_01</p>
                </div>
             </div>
             
             <button 
              onClick={() => handleIssueInfraction('นางสาว ประทวน อุบลพีช')}
              className={`mt-24 px-24 py-10 rounded-full text-[20px] font-black uppercase tracking-[0.8em] transition-all shadow-4xl italic border relative overflow-hidden active:scale-95 ${
                pratuanStatus === 'RED' 
                  ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed border-zinc-800' 
                  : 'bg-red-700 hover:bg-red-600 text-white border-red-500/50 shadow-red-700/50 gold-shimmer'
              }`}
             >
               {pratuanStatus === 'RED' ? 'SEVERANCE COMPLETE' : 'EXECUTE INFRACTION'}
             </button>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#020203] overflow-hidden selection:bg-indigo-500/40 text-zinc-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 relative overflow-y-auto p-20 bg-[radial-gradient(circle_at_50%_0%,#0c0c14_0%,#020203_100%)]">
        <div className="max-w-7xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>
      <div className="fixed bottom-0 right-0 w-[1200px] h-[1200px] bg-indigo-600/5 blur-[300px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed top-0 left-64 w-[1000px] h-[1000px] bg-yellow-600/5 blur-[250px] rounded-full -z-10"></div>
    </div>
  );
};

export default App;
