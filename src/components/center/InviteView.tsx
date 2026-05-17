import { motion } from "motion/react";
import { Share2, Users, Trophy, Gift, Copy, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function InviteView() {
  const inviteCode = "YOP-888-PRO";

  return (
    <div className="pt-24 pb-32 px-4 max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-primary/10 rounded-[32px] flex items-center justify-center mx-auto border border-primary/20">
          <Users size={40} className="text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tighter">
          INVITE <span className="primary-gradient">FRIENDS</span>
        </h1>
        <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Build your crew and earn rewards</p>
      </div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 md:p-12 rounded-[48px] border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Trophy size={120} />
        </div>

        <div className="relative z-10 space-y-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Commission Earnings</div>
                <div className="text-4xl font-display font-black primary-gradient">UP TO 50%</div>
              </div>
              <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider font-medium">
                Get lifetime commissions from every hand your friends play. The more they play, the more you earn.
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Referral Bonus</div>
                <div className="text-4xl font-display font-black">$500.00</div>
              </div>
              <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider font-medium">
                Instant bonus credited for every qualified referral who completes their first deposit.
              </p>
            </div>
          </div>

          <div className="h-px bg-white/5 w-full" />

          {/* Code Section */}
          <div className="space-y-4">
            <div className="text-[10px] font-black text-white/20 uppercase tracking-widest text-center">Your Exclusive Invite Link</div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 glass bg-white/[0.02] p-5 rounded-3xl flex items-center justify-between border-white/[0.05]">
                <span className="font-mono font-black text-lg text-white/80">{inviteCode}</span>
                <button className="flex items-center gap-2 px-6 py-2 bg-primary/20 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary/30 transition-all">
                  <Copy size={14} /> Copy Code
                </button>
              </div>
              <button className="px-8 py-5 bg-primary text-white rounded-3xl font-black uppercase italic tracking-tighter text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(143,52,255,0.4)]">
                Share Link <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Rules/Steps */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Users, title: "1. SHARE LINK", desc: "Send your link to friends" },
          { icon: Gift, title: "2. THEY JOIN", desc: "Rewards for registration" },
          { icon: Trophy, title: "3. EARN PROS", desc: "Daily commissions paid" },
        ].map((step, i) => (
          <div key={i} className="glass p-6 rounded-[32px] text-center border-white/5">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <step.icon size={20} className="text-primary" />
            </div>
            <div className="text-xs font-black uppercase tracking-tight mb-1">{step.title}</div>
            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
