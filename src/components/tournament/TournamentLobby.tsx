import { motion } from "motion/react";
import { 
  Trophy, 
  Users, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Search, 
  Filter,
  DollarSign,
  Zap,
  Target
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const TOURNAMENTS = [
  {
    id: "t1",
    name: "YOPOKER Friendship Series",
    prizePool: "$10,000",
    players: "180/500",
    buyIn: "Free / 1 Ticket",
    startTime: "2026-05-18 12:00",
    status: "Registering",
    type: "MTT",
    image: "https://storera.masterpoker.com/file/activity/5085d060-b1eb-4316-adf1-b95ee55a9985.webp"
  },
  {
    id: "t2",
    name: "Sunday Millionaire",
    prizePool: "$50,000",
    players: "45/200",
    buyIn: "$100 + $10",
    startTime: "2026-05-19 20:00",
    status: "Starting Soon",
    type: "Championship",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "t3",
    name: "Quick-Fire Turbo",
    prizePool: "$5,000",
    players: "12/50",
    buyIn: "$50",
    startTime: "In 15 Mins",
    status: "Registering",
    type: "Turbo S&G",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "t4",
    name: "High Roller Bounty",
    prizePool: "$25,000",
    players: "8/20",
    buyIn: "$500 + $25",
    startTime: "2026-05-20 18:00",
    status: "Registering",
    type: "Knockout",
    image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&q=80&w=800"
  }
];

export function TournamentLobby() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="pt-24 pb-32 px-4 max-w-5xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter leading-none text-white">
            TOURNAMENT <span className="primary-gradient">LOBBY</span>
          </h1>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Global Arena • Professional Stakes</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input 
              type="text" 
              placeholder="Search tournaments..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-all font-medium text-sm text-white"
            />
          </div>
          <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white/40 hover:text-white transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Featured Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-80 rounded-[48px] overflow-hidden relative group"
      >
        <img 
          src="https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&q=80&w=1200" 
          alt="Main Banner" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-4 py-1 bg-[#00FF00] text-black text-[10px] font-black uppercase rounded-full">LIVE NOW</div>
            <div className="px-4 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase rounded-full border border-white/10">342 PLAYERS</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tighter text-white mb-2">
            WORLD SERIES <br /> <span className="primary-gradient">GRAND FINAL</span>
          </h2>
          <div className="text-xl font-display font-black text-white/60 mb-6">$1,000,000 GUARANTEED</div>
          <Link 
            to="/contest" 
            className="w-fit px-10 py-5 bg-primary text-white rounded-[28px] font-black uppercase italic tracking-tighter text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(143,52,255,0.4)] hover:scale-105 transition-all"
          >
            Enter Series Arena <Zap size={20} />
          </Link>
        </div>
      </motion.div>

      {/* Tournament List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-4">
          <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Upcoming Events</div>
          <div className="flex gap-4">
            {["All", "MTT", "S&G", "Freeroll"].map(t => (
              <button 
                key={t}
                onClick={() => setFilter(t)}
                className={cn(
                  "text-[10px] font-black uppercase tracking-widest transition-colors",
                  filter === t ? "text-primary" : "text-white/20 hover:text-white"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {TOURNAMENTS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-[32px] group hover:bg-white/[0.05] transition-all border-white/5 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-primary/20 text-primary text-[8px] font-black uppercase rounded border border-primary/20">{t.type}</span>
                      <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{t.startTime}</span>
                    </div>
                    <h3 className="text-xl font-display font-black uppercase italic tracking-tighter text-white group-hover:text-primary transition-colors">{t.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5 text-white/40">
                        <Users size={14} className="text-[#00FF00]" />
                        <span className="text-[10px] font-bold uppercase">{t.players}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/40">
                        <Trophy size={14} className="text-[#D4AF37]" />
                        <span className="text-[10px] font-bold uppercase">{t.prizePool}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                  <div className="flex flex-col items-end">
                    <div className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">BUY-IN</div>
                    <div className="text-lg font-mono font-black text-white tracking-tighter">{t.buyIn}</div>
                  </div>
                  <Link 
                    to="/contest" 
                    className="px-8 py-4 bg-white/5 group-hover:bg-primary text-white/40 group-hover:text-white rounded-2xl font-black uppercase italic tracking-tighter text-sm transition-all border border-white/5 group-hover:border-primary flex items-center gap-2"
                  >
                    Join Tournament
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center py-10 space-y-4">
        <div className="flex justify-center gap-8 text-[10px] font-black text-white/10 uppercase tracking-[0.4em]">
          <span>Institutional Grade</span>
          <span>•</span>
          <span>Verified RNG</span>
          <span>•</span>
          <span>Secure Hub</span>
        </div>
      </div>
    </div>
  );
}
