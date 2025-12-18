
import React, { useState } from 'react';
import { 
  Server, ShieldCheck, Code, Bot, Gamepad2, CreditCard, Palette, Globe, 
  Zap, ArrowRight, Layers, Cpu, Database, Search, Target, Rocket, Settings,
  Briefcase, Check
} from 'lucide-react';
import { TECH_SERVICES } from '../constants';

const categoryIcons: Record<string, any> = {
  Infrastructure: <Server className="w-8 h-8" />,
  Development: <Code className="w-8 h-8" />,
  Automation: <Bot className="w-8 h-8" />,
  Design: <Palette className="w-8 h-8" />,
  Special: <Gamepad2 className="w-8 h-8" />,
  Economy: <CreditCard className="w-8 h-8" />,
};

const ServiceEcosystem: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Infrastructure', 'Development', 'Automation', 'Design', 'Special', 'Economy'];

  const filteredServices = activeFilter === 'All' 
    ? TECH_SERVICES 
    : TECH_SERVICES.filter(s => s.category === activeFilter);

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-32">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter gold-shimmer">Strategic Solution Hub</h2>
          <p className="text-zinc-500 text-lg font-medium italic border-l-4 border-indigo-600/30 pl-6 max-w-3xl">
            "ยกระดับการบริหารจัดการเทคโนโลยีระดับสูงสุด ตั้งแต่โครงสร้างพื้นฐานจนถึงระบบอัตโนมัติ งัดทุกกลยุทธ์สายขาว สายเทา และสายดำ"
          </p>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="px-10 py-4 bg-indigo-950/20 border border-indigo-500/30 rounded-3xl text-[12px] font-black text-indigo-400 shadow-3xl animate-pulse uppercase tracking-[0.4em] italic backdrop-blur-md">
            ECOSYSTEM: OMNI_PERFECTED
          </div>
        </div>
      </div>

      {/* Filter Navigation */}
      <div className="flex flex-wrap gap-3 pb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all italic border ${
              activeFilter === cat 
              ? 'bg-yellow-600 text-black border-yellow-400 shadow-xl' 
              : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-[#050507] border border-yellow-900/20 p-10 rounded-[3.5rem] hover:border-yellow-500/50 transition-all group relative overflow-hidden flex flex-col shadow-2xl backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
            
            <div className="flex justify-between items-start mb-10">
              <div className="p-6 bg-zinc-950 border border-indigo-900/10 rounded-[2rem] text-indigo-400 group-hover:scale-110 group-hover:text-yellow-500 transition-all duration-500 shadow-inner">
                {categoryIcons[service.category] || <Layers className="w-8 h-8" />}
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest italic">{service.category}</span>
                <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic border ${
                  service.status === 'Absolute' ? 'border-yellow-500/40 text-yellow-500 bg-yellow-500/5' : 
                  service.status === 'Exclusive' ? 'border-indigo-500/40 text-indigo-400 bg-indigo-500/5' :
                  'border-zinc-700 text-zinc-400 bg-zinc-900/50'
                }`}>
                  {service.status}
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-6 uppercase gold-shimmer group-hover:translate-x-2 transition-transform">{service.title}</h3>
            
            <ul className="space-y-4 mb-10 flex-1">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-400 font-bold italic text-sm group-hover:text-zinc-200 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_8px_#818cf8] group-hover:bg-yellow-500 group-hover:shadow-yellow-500"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-6 bg-zinc-900 group-hover:bg-indigo-600 text-zinc-600 group-hover:text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 italic border border-zinc-800 group-hover:border-indigo-400/50 shadow-2xl active:scale-95">
              DEPLOY SOLUTION
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Full Support Section */}
      <div className="bg-gradient-to-br from-[#0c0c0e] via-black to-indigo-950/20 border border-indigo-500/40 p-16 rounded-[5rem] relative overflow-hidden shadow-3xl">
         <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Rocket className="w-80 h-80 text-indigo-500 animate-pulse" />
         </div>
         <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-64 h-64 bg-zinc-950 border border-indigo-900/20 rounded-full flex items-center justify-center p-12 shadow-inner relative group shrink-0">
               <div className="absolute inset-0 border-4 border-indigo-500/10 rounded-full animate-ping"></div>
               <div className="absolute inset-0 border-2 border-yellow-500/5 rounded-full animate-pulse scale-125"></div>
               <ShieldCheck className="w-24 h-24 text-indigo-500 glow-gold group-hover:scale-110 transition-transform" />
            </div>
            <div className="space-y-8 flex-1">
               <h3 className="text-4xl font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-6 underline decoration-indigo-600 underline-offset-8">
                 COMPLETE TECHNICAL DOMINANCE
                 <Zap className="w-8 h-8 text-yellow-500 animate-bounce" />
               </h3>
               <p className="text-zinc-400 text-lg leading-relaxed italic font-bold">
                 ระบบนิเวศของเราถูกสร้างมาเพื่อรองรับทุกความต้องการ ไม่ว่าจะเป็นการเปิดเซิร์ฟเกมแนว Survival/MMORPG, การติดตั้ง Bot ช่วยงานเฉพาะทาง, หรือการปรับจูน VPS เพื่อให้ได้ประสิทธิภาพสูงสุด ทุกโซลูชั่นถูกรวมไว้ภายใต้การควบคุมแบบเบ็ดเสร็จ
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                  {[
                    { label: 'High-Uptime', icon: <Server className="w-4 h-4" /> },
                    { label: 'Security-First', icon: <ShieldCheck className="w-4 h-4" /> },
                    { label: 'Hyper-Tuned', icon: <Settings className="w-4 h-4" /> },
                    { label: 'Global-Sync', icon: <Globe className="w-4 h-4" /> }
                  ].map((feat, i) => (
                    <div key={i} className="px-6 py-4 bg-zinc-900/80 border border-indigo-900/30 rounded-2xl text-[10px] font-black text-indigo-300 uppercase tracking-widest shadow-2xl italic flex items-center gap-3">
                      {feat.icon}
                      {feat.label}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ServiceEcosystem;
