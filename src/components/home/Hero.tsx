import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Globe, Trophy, Users, Star, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/src/lib/AuthContext";

export function Hero() {
  const { user } = useAuth();

  return (
    <div className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden px-4">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-widest mb-8"
        >
          <ShieldCheck size={14} />
          Safe, Secure & Certified
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter mb-8 text-center max-w-4xl"
        >
          THE NEXT GEN <br />
          <span className="primary-gradient italic uppercase">POKER WORLD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm md:text-lg text-white/40 mb-12 text-center font-medium leading-relaxed px-4 uppercase tracking-wider"
        >
          Premium tournaments, instant withdrawals, and real-time rewards. 
          The gold standard for serious poker enthusiasts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-md glass p-1.5 rounded-[32px] flex items-center mb-20 border-white/[0.08]"
        >
          {user ? (
            <Link
              to="/games"
              className="flex-1 px-8 py-5 bg-primary text-white rounded-[28px] font-black uppercase italic tracking-tighter text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(143,52,255,0.4)]"
            >
              Enter Games
              <Gamepad2 size={20} />
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="flex-1 px-8 py-5 bg-primary text-white rounded-[28px] font-black uppercase italic tracking-tighter text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(143,52,255,0.4)]"
              >
                Start Playing
                <ArrowRight size={20} strokeWidth={3} />
              </Link>
              <Link
                to="/login"
                className="px-8 py-5 text-white/60 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
              >
                Sign In
              </Link>
            </>
          )}
        </motion.div>

        {/* Feature Grid - App Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { icon: Trophy, title: "Global Events", desc: "$2M+ in Weekly GTD" },
            { icon: Star, title: "VIP Rewards", desc: "Up to 50% Rakeback" },
            { icon: Users, title: "Fair Play", desc: "RNG GLI Certified" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass p-8 rounded-[40px] flex items-center gap-6 border-white/5 hover:bg-white/[0.05] transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <item.icon className="text-primary" size={28} />
              </div>
              <div className="text-left">
                <div className="text-sm font-display font-black uppercase tracking-tight">{item.title}</div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-widest mt-1">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
