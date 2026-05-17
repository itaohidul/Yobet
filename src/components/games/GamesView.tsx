import { motion } from "motion/react";
import { Play, Users, Trophy, Star, Filter, Search, ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const GAME_TYPES = ["All", "Texas", "Omaha", "Tourney", "Sit & Go", "Blitz"];

const GAMES = [
  { id: 1, type: "Texas", name: "Premium Alpha", stakes: "$5/$10", players: "8/9", minBuy: "$400", speed: "Normal", hot: true },
  { id: 2, type: "Texas", name: "Speed Blitz 500", stakes: "$1/$2", players: "4/6", minBuy: "$100", speed: "Fast", hot: true },
  { id: 3, type: "Omaha", name: "High Roller PLO", stakes: "$25/$50", players: "2/6", minBuy: "$2,000", speed: "Normal", hot: false },
  { id: 4, type: "Texas", name: "No-Limit Newbie", stakes: "$0.10/$0.25", players: "9/9", minBuy: "$10", speed: "Normal", hot: false },
  { id: 5, type: "Sit & Go", name: "Quick Fire Turbo", stakes: "$20 Entry", players: "5/6", minBuy: "$20", speed: "Hyper", hot: true },
  { id: 6, type: "Tourney", name: "Midnight Major", stakes: "$100 Entry", players: "482", minBuy: "$100", speed: "Normal", hot: true },
];

export function GamesView() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="pt-20 pb-24 md:pt-24 px-4 max-w-7xl mx-auto space-y-6">
      {/* Banner Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-40 md:h-64 rounded-3xl overflow-hidden relative group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&q=80&w=1200" 
          alt="Banner" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-display font-black uppercase italic tracking-tighter mb-2 leading-none">
            WEEKEND <br /> <span className="text-white">MEGA SERIES</span>
          </h2>
          <div className="text-sm md:text-xl font-bold primary-gradient uppercase">$2,500,000 GUARANTEED</div>
          <Link to="/lobby" className="mt-4 md:mt-6 px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full w-fit hover:scale-105 transition-all flex items-center justify-center">
            View Tournaments
          </Link>
        </div>
      </motion.div>

      {/* Category Horizontal Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {GAME_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={cn(
              "px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border",
              activeTab === type 
                ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(143,52,255,0.4)]" 
                : "bg-white/[0.03] border-white/[0.05] text-white/40 hover:text-white"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Game List */}
      <div className="grid gap-3">
        {GAMES.filter(g => activeTab === "All" || g.type === activeTab).map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass p-4 rounded-[28px] flex items-center justify-between gap-4 group hover:bg-white/[0.06] transition-all border-white/[0.03]"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/30 transition-colors">
                <Trophy className={cn("transition-colors", game.hot ? "text-primary" : "text-white/20")} size={24} />
              </div>
              <div>
                <div className="text-base font-display font-black uppercase italic tracking-tighter leading-tight group-hover:text-primary transition-colors">
                  {game.name}
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-white/40 uppercase">
                    <Users size={12} /> {game.players}
                  </div>
                  <div className="text-[10px] font-black text-primary uppercase tracking-widest">{game.stakes}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex flex-col items-end">
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">MIN BUY-IN</div>
                <div className="text-xs font-mono font-bold text-white/60">{game.minBuy}</div>
              </div>
              <Link to={game.type === "Tourney" ? "/lobby" : "/games"} className="w-12 h-12 md:w-auto md:px-8 bg-white/5 hover:bg-primary rounded-2xl flex items-center justify-center gap-2 transition-all border border-white/5 group/btn">
                <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] group-hover/btn:text-white">{game.type === "Tourney" ? "Check Lobby" : "Play Room"}</span>
                <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
