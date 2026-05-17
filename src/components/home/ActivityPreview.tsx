import { motion } from "motion/react";
import { Timer, Trophy, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ACTIVITIES = [
  {
    title: "Weekend High Roller",
    prize: "$50,000 GTD",
    startsIn: "02:14:45",
    players: 124,
    id: "tourney-1"
  },
  {
    title: "Midnight Speed Blitz",
    prize: "$5,000 GTD",
    startsIn: "00:45:12",
    players: 48,
    id: "tourney-2"
  },
  {
    title: "Crypto Bounty Bash",
    prize: "2.5 BTC GTD",
    startsIn: "05:10:00",
    players: 890,
    id: "tourney-3"
  }
];

export function ActivityPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              CURRENT <span className="primary-gradient italic">ACTIVITIES</span>
            </h2>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
              Join the action across the globe
            </p>
          </div>
          <Link 
            to="/games"
            className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
          >
            All Tournaments <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[40px] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Trophy size={80} className="text-gold" />
              </div>

              <div className="flex items-center gap-2 text-gold mb-4">
                <Timer size={16} />
                <span className="text-xs font-mono font-bold tracking-widest">{activity.startsIn}</span>
              </div>

              <h3 className="text-2xl font-display font-bold mb-2">{activity.title}</h3>
              <div className="text-3xl font-bold primary-gradient mb-8">{activity.prize}</div>

              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase">
                  <Users size={14} />
                  {activity.players} Registered
                </div>
                <button className="px-6 py-2 bg-white/10 hover:bg-gold hover:text-black rounded-full text-xs font-bold uppercase transition-all">
                  Join Room
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
