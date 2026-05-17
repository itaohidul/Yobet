import { motion } from "motion/react";
import { Gift, Zap, Trophy, Star, ChevronRight, Lock } from "lucide-react";

const REWARDS = [
  { title: "Daily Login Bonus", desc: "Claim your daily ticket to the $1k Freeroll", value: "$5.00 Ticket", active: true },
  { title: "First Deposit Match", desc: "100% Match up to $1,000 on your first deposit", value: "Up to $1k", active: true },
  { title: "Refer-a-Friend", desc: "Get $50 for every verified friend who joins", value: "$50 / friend", active: true },
  { title: "Diamond Tier Unlock", desc: "Gain access to the exclusive high-roller lounge", value: "VIP Access", active: false },
];

export function RewardsView() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase primary-gradient italic tracking-tighter">
          ACTIVE <span className="text-white">REWARDS</span>
        </h1>
        <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold font-mono">Collect your winnings</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {REWARDS.map((reward, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass p-8 rounded-[40px] border-white/5 relative overflow-hidden group ${!reward.active && 'opacity-60'}`}
          >
            {!reward.active && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <div className="bg-white/10 px-6 py-2 rounded-full flex items-center gap-2 border border-white/10">
                  <Lock size={16} className="text-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Rank Restricted</span>
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-start mb-12">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                <Gift className="text-gold" size={32} />
              </div>
              <div className="text-right">
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Total Value</div>
                <div className="text-2xl font-display font-bold primary-gradient">{reward.value}</div>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold mb-4 uppercase italic tracking-tighter">{reward.title}</h3>
            <p className="text-white/40 text-sm mb-8 leading-relaxed max-w-sm">{reward.desc}</p>

            <button className="w-full py-4 bg-white/5 hover:bg-gold hover:text-black rounded-2xl font-bold uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-2 group/btn">
              Claim Now <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-all" />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-gold p-12 rounded-[50px] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Zap size={160} className="text-black" />
        </div>
        <div className="relative z-10 max-w-2xl text-black">
          <h2 className="text-4xl font-display font-bold mb-6 uppercase italic leading-[0.9]">Upgrade to Diamond <br /> for 50% more rakeback</h2>
          <p className="text-black/60 font-medium mb-8 uppercase tracking-widest text-sm">Join the elite 1% of YoPoker players and experience the ultimate reward system.</p>
          <button className="px-10 py-5 bg-black text-white rounded-full font-bold uppercase text-sm tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
