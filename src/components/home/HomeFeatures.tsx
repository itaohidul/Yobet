import { motion } from "motion/react";
import { Trophy, Gift, Users, Zap, Star, ShieldCheck } from "lucide-react";
import { cn } from "@/src/lib/utils";

const FEATURES = [
  {
    title: "Elite Tournaments",
    desc: "Daily high-stakes tournaments with guaranteed prize pools and global leaderboards.",
    icon: Trophy,
    color: "gold"
  },
  {
    title: "Activity Rewards",
    desc: "Earn points for every hand played. Redeem for tournament tickets or cash bonuses.",
    icon: Gift,
    color: "gold"
  },
  {
    title: "Fair Play Engine",
    desc: "Our proprietary RNG is independently audited for 100% fair and transparent gaming.",
    icon: ShieldCheck,
    color: "gold"
  },
  {
    title: "Fast Withdrawals",
    desc: "Experience lightning-fast payouts on all major payment networks and crypto.",
    icon: Zap,
    color: "gold"
  }
];

export function HomeFeatures() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase italic">
            Elite <span className="primary-gradient">Experience</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold">
            The Gold Standard of Online Poker, Reimagined
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all">
                <feature.icon className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
