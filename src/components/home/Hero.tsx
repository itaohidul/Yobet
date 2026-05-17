import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Globe, Trophy, Users, Star, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/src/lib/AuthContext";

export function Hero() {
  const { user } = useAuth();

  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-32 overflow-hidden px-4">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 md:h-96 bg-primary/10 blur-[100px] md:blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8"
        >
          <ShieldCheck size={12} md:size={14} />
          Safe, Secure & Certified
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-6 md:mb-8 text-center max-w-4xl"
        >
          THE NEXT GEN <br />
          <span className="primary-gradient italic uppercase">POKER WORLD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xs md:text-lg text-white/40 mb-10 md:mb-12 text-center font-medium leading-relaxed px-4 uppercase tracking-widest"
        >
          Premium tournaments, instant withdrawals, and real-time rewards. 
          The gold standard for serious poker enthusiasts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xs md:max-w-md glass p-1.5 rounded-[28px] md:rounded-[32px] flex items-center mb-16 md:mb-20 border-white/[0.08]"
        >
          {user ? (
            <Link
              to="/games"
              className="flex-1 px-6 py-4 md:px-8 md:py-5 bg-primary text-white rounded-[24px] md:rounded-[28px] font-black uppercase italic tracking-tighter text-base md:text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(143,52,255,0.4)]"
            >
              Enter Games
              <Gamepad2 size={18} md:size={20} />
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="flex-1 px-6 py-4 md:px-8 md:py-5 bg-primary text-white rounded-[24px] md:rounded-[28px] font-black uppercase italic tracking-tighter text-base md:text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(143,52,255,0.4)]"
              >
                Start Playing
                <ArrowRight size={18} md:size={20} strokeWidth={3} />
              </Link>
              <Link
                to="/login"
                className="px-6 py-4 md:px-8 md:py-5 text-white/60 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-white transition-colors"
              >
                Sign In
              </Link>
            </>
          )}
        </motion.div>

        {/* Feature Grid - App Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
          {[
            { icon: Trophy, title: "Global Events", desc: "$2M+ Weekly GTD" },
            { icon: Star, title: "VIP Rewards", desc: "Up to 50% Rakeback" },
            { icon: Users, title: "Fair Play", desc: "RNG GLI Certified" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass p-6 md:p-8 rounded-[32px] md:rounded-[40px] flex items-center gap-4 md:gap-6 border-white/5 hover:bg-white/[0.05] transition-all group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <item.icon className="text-primary" size={24} md:size={28} />
              </div>
              <div className="text-left">
                <div className="text-xs md:text-sm font-display font-black uppercase tracking-tight">{item.title}</div>
                <div className="text-[10px] text-white/40 font-medium uppercase tracking-widest mt-1">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
