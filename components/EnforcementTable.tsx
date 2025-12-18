
import React from 'react';
import { SYSTEM_RULES } from '../constants';
import { Zap, ShieldOff, HeartPulse } from 'lucide-react';

const EnforcementTable: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Enforcement Logic Matrix</h2>
        <p className="text-zinc-500 text-sm">Behavioral response mapping for organizational control.</p>
      </div>

      <div className="bg-[#16161a] border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-900 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-400">Target Subject</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-400">Detected Movement</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-400">Enterprise Logic Response</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {SYSTEM_RULES.map((rule, idx) => (
              <tr key={idx} className="hover:bg-zinc-800/20 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded bg-zinc-800 text-zinc-400 group-hover:text-green-500 transition-colors`}>
                      {idx === 0 ? <Zap className="w-4 h-4" /> : idx === 1 ? <ShieldOff className="w-4 h-4" /> : <HeartPulse className="w-4 h-4" />}
                    </div>
                    <span className="font-bold text-white">{rule.subject}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-zinc-300 font-medium">{rule.movement}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="bg-black/50 border border-zinc-800 p-3 rounded-lg text-xs font-mono text-green-500 leading-relaxed italic">
                    {rule.logic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-950/10 border border-red-900/30 p-6 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <ShieldOff className="w-12 h-12 text-red-900/20" />
        </div>
        <h3 className="font-bold text-red-500 mb-2 uppercase tracking-widest text-sm">Social Enforcement Gravity</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          The system broadcasts "Survey Company Rules" into the recognition network of all surrounding targets. 
          This creates a "Prison of Orders" where environmental pressure ensures 100% compliance.
        </p>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-red-900/20 rounded border border-red-900/50 text-[10px] font-bold text-red-500 uppercase">Status: Broadcasting</div>
          <div className="px-3 py-1 bg-zinc-800 rounded text-[10px] font-bold text-zinc-400 uppercase">Frequency: 14.5GHz</div>
        </div>
      </div>
    </div>
  );
};

export default EnforcementTable;
