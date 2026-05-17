import { motion } from "motion/react";
import { Trophy, Medal, Crown, TrendingUp, Search } from "lucide-react";
import { cn } from "@/src/lib/utils";

const PLAYERS = [
  { rank: 1, name: "Vanish_Poker", winnings: "$542,000", profit: "+$12k", avatar: "VP", icon: Crown, color: "text-primary" },
  { rank: 2, name: "Ace_High_Master", winnings: "$410,200", profit: "+$8k", avatar: "AH", icon: Medal, color: "text-zinc-300" },
  { rank: 3, name: "SharkLover_88", winnings: "$390,000", profit: "+$15k", avatar: "SL", icon: Medal, color: "text-amber-600" },
  { rank: 4, name: "TheBluffGod", winnings: "$310,000", profit: "-$2k", avatar: "BG", icon: null, color: "text-white/20" },
  { rank: 5, name: "AllIn_Alice", winnings: "$280,500", profit: "+$4k", avatar: "AA", icon: null, color: "text-white/20" },
  { rank: 6, name: "RoyalFlush_Pro", winnings: "$210,000", profit: "+$1k", avatar: "RP", icon: null, color: "text-white/20" },
];

export function LeaderboardView() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-2 uppercase italic tracking-tighter">
            GLOBAL <span className="primary-gradient">LEGENDS</span>
          </h1>
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">The elite 1% of YoPoker</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <input 
            type="text" 
            placeholder="Search players..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-gold/30 transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Top 3 Podium (Mobile Only or Smaller View) */}
        <div className="lg:col-span-3 grid md:grid-cols-3 gap-6 mb-8">
          {PLAYERS.slice(0, 3).map((player, i) => {
            const Icon = player.icon || Trophy;
            return (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-8 rounded-[40px] text-center relative overflow-hidden group",
                  i === 0 ? "glass bg-gold/5 border-gold/20" : "glass border-white/5"
                )}
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon size={120} />
                </div>
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 relative">
                  <div className={cn("absolute -top-2 -right-2 p-2 rounded-full bg-black border border-white/10", player.color)}>
                    <Icon size={16} />
                  </div>
                  <span className="text-2xl font-display font-bold text-white/80">{player.avatar}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-1 uppercase tracking-tight">{player.name}</h3>
                <div className="text-lg font-bold primary-gradient mb-4">{player.winnings}</div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-green-500">
                  <TrendingUp size={12} /> {player.profit} 24h
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* List View */}
        <div className="lg:col-span-3 glass rounded-[32px] md:rounded-[40px] overflow-hidden border-white/5">
          <div className="grid grid-cols-[60px_1fr_80px] md:grid-cols-[80px_1fr_1fr_1fr_1fr] px-6 md:px-8 py-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/5 bg-white/[0.02]">
            <span>Rank</span>
            <span>Player</span>
            <span className="hidden md:block">Lifetime Wins</span>
            <span className="hidden md:block">Win Rate</span>
            <span className="text-right">Action</span>
          </div>
          <div className="divide-y divide-white/5">
            {PLAYERS.map((player) => (
              <div key={player.rank} className="grid grid-cols-[60px_1fr_80px] md:grid-cols-[80px_1fr_minmax(100px,1fr)_minmax(100px,1fr)_minmax(100px,1fr)] px-6 md:px-8 py-6 items-center hover:bg-white/[0.02] transition-colors group">
                <span className="font-display font-bold text-base md:text-lg text-white/40 group-hover:text-gold transition-colors italic">#{player.rank}</span>
                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/5 rounded-xl flex items-center justify-center text-[10px] md:text-xs font-bold text-white/60 flex-shrink-0">
                    {player.avatar}
                  </div>
                  <span className="font-bold text-xs md:text-sm uppercase tracking-tight truncate">{player.name}</span>
                </div>
                <span className="hidden md:block font-mono text-xs font-bold text-white/60">{player.winnings}</span>
                <span className="hidden md:block font-mono text-xs font-bold text-green-500/80">68.4%</span>
                <div className="text-right">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-gold hover:underline">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
