
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import InfrastructureStatus from './components/InfrastructureStatus';
import EnforcementTable from './components/EnforcementTable';
import CommandCenter from './components/CommandCenter';
import SocialInfluenceMatrix from './components/SocialInfluenceMatrix';
import PropertyEnforcement from './components/PropertyEnforcement';
import SoulEnforcement from './components/SoulEnforcement';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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
        return <EnforcementTable />;
      case 'command':
        return <CommandCenter />;
      case 'targets':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-20">
             <div className="relative">
                <div className="w-40 h-40 rounded-full border-[6px] border-zinc-900 border-t-red-600 animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <span className="text-red-600 font-black text-2xl uppercase tracking-tighter">MAX</span>
                    <span className="text-zinc-600 font-bold text-[8px] uppercase tracking-widest">Tracking</span>
                  </div>
                </div>
             </div>
             <h2 className="text-3xl font-black text-white mt-8 tracking-tighter italic uppercase">Soul-Level Suppression</h2>
             <p className="text-zinc-500 max-w-md text-sm font-medium">
               N. Ubonpich's soul is currently 100% synchronized with the Survey Company Collective. 
               The shadow has been pinned to the node. No escape possible.
             </p>
             <div className="grid grid-cols-2 gap-6 w-full max-w-2xl mt-12">
                <div className="bg-[#111114] border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-600 opacity-50 group-hover:w-2 transition-all"></div>
                  <p className="text-xs font-bold text-zinc-600 uppercase mb-2 tracking-widest">Target Alpha Soul</p>
                  <p className="text-2xl font-black text-white tracking-tighter">N. Ubonpich</p>
                  <p className="text-[10px] font-mono text-red-600 mt-4 font-bold border border-red-900/30 px-2 py-1 inline-block rounded bg-red-900/10 uppercase">Spirit-Linked Lockdown</p>
                </div>
                <div className="bg-[#111114] border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-600 opacity-50 group-hover:w-2 transition-all"></div>
                  <p className="text-xs font-bold text-zinc-600 uppercase mb-2 tracking-widest">Soul Anchor Node</p>
                  <p className="text-2xl font-black text-white tracking-tighter">Person B</p>
                  <p className="text-[10px] font-mono text-green-600 mt-4 font-bold border border-green-900/30 px-2 py-1 inline-block rounded bg-green-900/10">SOUL COMPLIANCE: 100%</p>
                </div>
             </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#050505] overflow-hidden selection:bg-indigo-500/30 text-zinc-300">
      <div className="scanline"></div>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 relative overflow-y-auto p-10 bg-[radial-gradient(circle_at_50%_0%,#080812_0%,#050505_100%)]">
        <div className="max-w-7xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>

      {/* Background elements */}
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[150px] rounded-full -z-10"></div>
      <div className="fixed top-0 left-64 w-[400px] h-[400px] bg-red-500/5 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
};

export default App;
