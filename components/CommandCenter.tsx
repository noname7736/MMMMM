import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Loader2, Info, Trash2 } from 'lucide-react';
import { generateSovereignStrategy } from '../services/geminiService';

const CommandCenter: React.FC = () => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<{ type: 'user' | 'system', content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleDeploy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim() || loading) return;

    const currentCommand = command;
    setCommand('');
    setHistory(prev => [...prev, { type: 'user', content: currentCommand }]);
    setLoading(true);

    const result = await generateSovereignStrategy(currentCommand);
    setHistory(prev => [...prev, { type: 'system', content: result || '' }]);
    setLoading(false);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="h-full flex flex-col space-y-4 animate-in fade-in duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-white italic uppercase gold-shimmer tracking-tight">Command Core</h2>
          <p className="text-zinc-500 text-sm italic">Direct interface for All-Seeing Omniscience Mode Intelligence.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={clearHistory}
            className="p-2 text-zinc-600 hover:text-red-500 transition-colors bg-zinc-900/50 border border-zinc-800 rounded-lg"
            title="Clear Terminal"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 bg-yellow-950/20 px-4 py-2 rounded-xl border border-yellow-900/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308] animate-pulse"></div>
            <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest italic">Omni Core Online</span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-black/80 backdrop-blur-md border border-yellow-900/10 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-yellow-900/10 bg-zinc-900/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-yellow-600" />
            <span className="text-xs font-mono text-zinc-500 font-bold tracking-widest">OMNI_SHELL_V4_9.EXE</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-900/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-900/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-900/30"></div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth custom-scrollbar">
          {history.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-30">
              <Terminal className="w-16 h-16 text-yellow-900" />
              <p className="text-sm font-mono max-w-sm uppercase tracking-[0.2em] text-yellow-800 font-black italic">
                Awaiting Enforcement Target...<br/>
                Deploy Sovereign Will Protocol.
              </p>
            </div>
          )}
          {history.map((item, i) => (
            <div key={i} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-6 rounded-[2rem] font-mono text-sm leading-relaxed ${
                item.type === 'user' 
                ? 'bg-zinc-900/80 text-zinc-200 border border-zinc-800' 
                : 'bg-yellow-950/10 text-yellow-400 border border-yellow-900/20 prose prose-invert prose-xs italic'
              }`}>
                {item.type === 'system' && <div className="mb-3 text-[10px] font-black text-yellow-600 uppercase tracking-[0.3em] italic underline decoration-yellow-900 underline-offset-4">[OMNI OUTPUT]</div>}
                <div className="whitespace-pre-wrap">{item.content}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-yellow-950/10 border border-yellow-900/20 p-5 rounded-2xl flex items-center gap-4">
                <Loader2 className="w-4 h-4 text-yellow-500 animate-spin" />
                <span className="text-[10px] font-mono font-black text-yellow-700 animate-pulse tracking-widest italic uppercase">Syncing with All-Seeing Core...</span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleDeploy} className="p-6 bg-zinc-900/20 border-t border-yellow-900/10">
          <div className="relative group">
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Enter enforcement mandate..."
              className="w-full bg-black border border-yellow-900/20 rounded-[1.5rem] py-5 px-8 pr-20 text-sm font-mono focus:outline-none focus:border-yellow-500/50 transition-all placeholder:text-zinc-700 italic"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-4 bg-yellow-600 rounded-2xl hover:bg-yellow-500 disabled:bg-zinc-800 disabled:text-zinc-600 transition-all group-hover:scale-105 active:scale-95 shadow-xl border border-yellow-400/30"
            >
              <Send className="w-5 h-5 text-black" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-3 text-[9px] text-zinc-600 font-black uppercase tracking-[0.3em] px-2 italic">
            <Info className="w-3.5 h-3.5" />
            <span>ICTV Grid Processing Active • No deviance possible</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommandCenter;