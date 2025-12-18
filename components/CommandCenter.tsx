
import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Loader2, Info } from 'lucide-react';
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

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Command Center</h2>
          <p className="text-zinc-500 text-sm">Direct interface for Absolute Sovereign Intelligence.</p>
        </div>
        <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">AI Core Online</span>
        </div>
      </div>

      <div className="flex-1 bg-black border border-zinc-800 rounded-xl flex flex-col overflow-hidden">
        <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-zinc-500" />
            <span className="text-xs font-mono text-zinc-500">ENFORCEMENT_SHELL_V2_4.SH</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          {history.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-40">
              <Terminal className="w-12 h-12 text-zinc-600" />
              <p className="text-sm font-mono max-w-xs uppercase tracking-widest text-zinc-400">
                Awaiting Command Entry...<br/>
                Deploy Absolute Will Protocol.
              </p>
            </div>
          )}
          {history.map((item, i) => (
            <div key={i} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-xl font-mono text-sm leading-relaxed ${
                item.type === 'user' 
                ? 'bg-zinc-800 text-zinc-200 border border-zinc-700' 
                : 'bg-green-950/20 text-green-400 border border-green-900/30 prose prose-invert prose-xs'
              }`}>
                {item.type === 'system' && <div className="mb-2 text-[10px] font-bold text-green-600 uppercase tracking-[0.2em]">[SYSTEM OUTPUT]</div>}
                <div className="whitespace-pre-wrap">{item.content}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center gap-3">
                <Loader2 className="w-4 h-4 text-green-500 animate-spin" />
                <span className="text-xs font-mono text-zinc-500 animate-pulse">SYNCHRONIZING WITH SOVEREIGN CORE...</span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleDeploy} className="p-4 bg-zinc-900/50 border-t border-zinc-800">
          <div className="relative group">
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Enter enforcement objective..."
              className="w-full bg-black border border-zinc-700 rounded-lg py-4 px-6 pr-16 text-sm font-mono focus:outline-none focus:border-green-500 transition-colors placeholder:text-zinc-600"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-green-600 rounded-lg hover:bg-green-500 disabled:bg-zinc-800 disabled:text-zinc-600 transition-all glow-green group-hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5 text-black" />
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-zinc-600 font-bold uppercase tracking-widest px-1">
            <Info className="w-3 h-3" />
            <span>AI processing active • Zero-interference protocol engaged</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommandCenter;
