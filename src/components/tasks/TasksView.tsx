import { motion, AnimatePresence } from "motion/react";
import { 
  Trophy, 
  ChevronLeft, 
  CheckCircle2, 
  MessageSquare, 
  Share2, 
  Users, 
  ExternalLink,
  Ticket,
  ArrowRight,
  UserPlus,
  RefreshCw,
  Gift,
  Calendar,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { useAuth } from "@/src/lib/AuthContext";

const TASKS = [
  { id: 1, icon: MessageSquare, title: "Join Community", desc: "Join our official Telegram group", reward: 1, completed: false },
  { id: 2, icon: Share2, title: "Event Sharing", desc: "Share this event on Twitter/X", reward: 1, completed: false },
  { id: 3, icon: Gift, title: "Daily Login", desc: "Log in to YoPoker daily", reward: 1, completed: true },
];

export function TasksView() {
  const { user, updateTickets, setShowAuthModal } = useAuth();
  const [tasks, setTasks] = useState(TASKS);
  const [referralCount, setReferralCount] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const handleTaskComplete = (taskId: number, reward: number) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: true } : t));
    updateTickets(reward);
    setToastMsg(`+${reward} Ticket Earned!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSyncReferrals = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setReferralCount(prev => prev + 1);
    updateTickets(1);
    setToastMsg("+1 Ticket for new referral!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (false) { // Keep view functional but prompt for login on action
    return (
      <div className="pt-32 px-4 max-w-md mx-auto text-center space-y-6 bg-black min-h-screen">
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto opacity-20">
          <Ticket size={40} />
        </div>
        <h2 className="text-2xl font-display font-black uppercase italic tracking-tighter text-white">REWARDS LOCKED</h2>
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Sign in to complete tasks and earn tournament tickets</p>
        <Link to="/login" className="block w-full bg-primary text-white py-5 rounded-[28px] font-black uppercase italic tracking-tighter text-lg shadow-[0_10px_30px_rgba(143,52,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all">Sign In Now</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden pb-32">
      {/* Top Banner Section */}
      <div className="relative h-[320px] md:h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
        <div className="absolute inset-0 flex items-center justify-center">
           {/* Trophy Graphic Container */}
           <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-100">
              <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#00FF00]/10 blur-[100px] rounded-full" />
              <div className="relative z-20 flex flex-col items-center">
                 <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ duration: 1 }}
                   className="relative"
                 >
                   <Trophy size={140} className="md:size-[180px] text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]" />
                   <div className="absolute -top-4 -right-4 w-10 md:w-14 h-10 md:h-14 bg-black border-2 border-[#D4AF37] rounded-xl flex items-center justify-center font-display font-black text-[10px] md:text-sm rotate-12 shadow-2xl">YO</div>
                 </motion.div>
                 
                 <div className="mt-8 text-center px-4">
                    <h1 className="text-4xl md:text-7xl font-display font-black uppercase italic tracking-tighter leading-none">
                      YoPoker
                    </h1>
                    <div className="text-2xl md:text-5xl font-display font-black uppercase italic tracking-tighter text-white mt-1">
                      Friendship Series
                    </div>
                    <p className="text-white/60 text-[8px] md:text-sm font-bold uppercase tracking-[0.3em] mt-4">
                      Free Entry • Share <span className="text-[#D4AF37]">$10,000</span> Pool + Bug Bounty
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Back Button */}
      <Link to="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white/60 hover:text-white transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 uppercase font-black text-[10px] tracking-widest hidden md:flex">
        <ChevronLeft size={16} /> Return
      </Link>
      <Link to="/" className="fixed top-4 left-4 z-50 md:hidden bg-black/60 p-2 rounded-full border border-white/10 text-white leading-none">
        <ChevronLeft size={20} />
      </Link>

      <div className="px-4 max-w-2xl mx-auto -mt-8 md:-mt-16 relative z-20 space-y-10">
        {/* Main Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass p-6 rounded-[32px] text-center border-white/5 bg-white/[0.02]">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Current Prize Pool</div>
            <div className="text-3xl font-display font-black text-[#D4AF37]">$179</div>
          </div>
          <div className="glass p-6 rounded-[32px] text-center border-white/5 bg-white/[0.02]">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Starts In</div>
            <div className="text-xl font-mono font-black text-[#00FF00]">00D 11H 44M</div>
          </div>
        </div>

        {/* Small Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Calendar, text: "7 Days Series 5.18-5.24" },
            { icon: Trophy, text: "Daily 14:00 Start" },
            { icon: Zap, text: "Max $10000 Single Pool" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/5 text-[9px] font-black text-white/60 uppercase tracking-widest">
              <badge.icon size={12} className="text-[#00FF00]" />
              {badge.text}
            </div>
          ))}
        </div>

        {/* Activity Rules */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-[#00FF00] text-sm font-black uppercase tracking-[0.3em]">Activity Rules</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
             {[
               { label: "Starting Chips", val: "20,000" },
               { label: "Blinds", val: "Every 20 Mins" },
               { label: "Re-entry", val: "1 Time" },
               { label: "Payout", val: "Top 10% Pool" }
             ].map((rule, i) => (
               <div key={i} className="glass p-4 rounded-2xl border-white/5 bg-white/[0.02]">
                 <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest mb-1">{rule.label}</div>
                 <div className="text-xs font-black uppercase text-white/80">{rule.val}</div>
               </div>
             ))}
          </div>
          <button className="w-full py-4 glass border-white/5 bg-white/[0.02] rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all">
            View Complete Rules
          </button>
        </section>

        {/* How to Participate */}
        <section className="space-y-6 py-6">
          <div className="text-center">
            <h2 className="text-[#00FF00] text-sm font-black uppercase tracking-[0.3em]">How to Join</h2>
          </div>
          <div className="flex items-start justify-between relative px-2 md:px-4">
             {/* Connecting Lines */}
             <div className="absolute top-5 left-1/4 right-1/4 h-px border-t border-white/20 border-dashed z-0" />
             {[
               { step: 1, title: "Register", desc: "Create YoPoker account" },
               { step: 2, title: "Get Ticket", desc: "Complete tasks below" },
               { step: 3, title: "Sign Up", desc: "Register at 14:00" }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center gap-3 relative z-10 w-1/3">
                 <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black italic shadow-[0_0_15px_rgba(255,255,255,0.3)]">{item.step}</div>
                 <div className="text-center px-1">
                    <div className="text-[10px] font-black uppercase text-white/90 whitespace-nowrap">{item.title}</div>
                    <div className="text-[8px] font-bold uppercase text-white/40 mt-1 leading-tight">{item.desc}</div>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Complete Tasks Section */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-[#00FF00] text-sm font-black uppercase tracking-[0.3em]">Complete Tasks, Get Tickets</h2>
          </div>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className="glass p-5 rounded-3xl border-white/5 bg-white/[0.02] flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                    <task.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase text-white/90">{task.title}</div>
                    <div className="text-[9px] text-white/40 font-bold uppercase tracking-tight mt-0.5">{task.desc}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1.5 h-6 px-2.5 bg-[#00FF00]/10 rounded border border-[#00FF00]/10">
                      <Ticket size={12} className="text-[#00FF00]" />
                      <span className="text-[10px] font-black text-[#00FF00] whitespace-nowrap">REWARD +{task.reward}</span>
                    </div>
                  </div>
                  {task.completed ? (
                    <div className="text-[9px] font-black text-[#00FF00]/40 uppercase italic">Completed</div>
                  ) : (
                    <button 
                      onClick={() => handleTaskComplete(task.id, task.reward)}
                      className="px-4 py-2 bg-[#00FF00] text-black text-[9px] font-black rounded-lg uppercase hover:scale-105 transition-all shadow-[0_5px_15px_rgba(0,255,0,0.2)]"
                    >
                      GO
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Special Invite Friend Component */}
            <div className="glass p-5 rounded-3xl border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                  <UserPlus size={20} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-white/90">Invite Friends</div>
                  <div className="text-[9px] text-white/40 font-bold uppercase tracking-tight mt-0.5">Invite 3 friends for 1 ticket</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-[9px] font-black text-[#00FF00]">INVITED {referralCount}/3</div>
                  <button 
                    onClick={handleSyncReferrals}
                    className="mt-1 px-4 py-2 bg-[#00FF00] text-black text-[9px] font-black rounded-lg uppercase hover:scale-105 transition-all shadow-[0_5px_15px_rgba(0,255,0,0.2)]"
                  >
                    COPY LINK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Ticket Button */}
        <div className="space-y-6 pt-4 pb-12">
          <div className="flex items-center justify-between px-4">
             <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">My Ticket Amount:</div>
             <div className="flex items-center gap-2">
                <Ticket size={24} className="text-[#00FF00]" />
                <span className="text-xl font-display font-black text-white italic">{user?.tickets || 0}</span>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">TICKET</span>
             </div>
          </div>
          <Link 
            to="/contest"
            className="w-full bg-gradient-to-r from-[#00FF00] to-[#00BB00] text-black py-5 rounded-3xl font-black uppercase italic tracking-tighter text-xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,255,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all"
          >
            Immediately Use Ticket To Register <ArrowRight size={24} />
          </Link>
        </div>

        {/* Bug Bounty Table (Matching Screenshot Style) */}
        <section className="space-y-4 pb-20">
          <div className="text-center">
            <h2 className="text-[#00FF00] text-sm font-black uppercase tracking-[0.3em]">Bug Bounty</h2>
            <p className="text-[9px] text-white/40 font-bold uppercase mt-1 tracking-widest">Found a bug? Help us improve</p>
          </div>
          <div className="glass p-6 rounded-[32px] border-white/5 bg-white/[0.02] space-y-4">
             {[
               { level: "P0", label: "Critical Bug", reward: "$100~$200", color: "bg-red-500/20 text-red-500" },
               { level: "P1", label: "High Bug", reward: "$50~$100", color: "bg-orange-500/20 text-orange-500" },
               { level: "P2", label: "Medium Bug", reward: "$10~$50", color: "bg-yellow-500/20 text-yellow-500" },
               { level: "P3", label: "Low Bug/UI", reward: "$1~$10", color: "bg-[#00FF00]/10 text-[#00FF00]" }
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-3">
                    <span className={cn("px-1.5 py-0.5 rounded font-black text-[9px]", item.color)}>{item.level}</span>
                    <span className="font-bold text-white/60 uppercase">{item.label}</span>
                  </div>
                  <div className="font-black italic text-right" style={{ color: item.reward.includes('~') ? '#D4AF37' : '#00FF00'}}>{item.reward}</div>
               </div>
             ))}
             <div className="pt-4 text-center">
                <button className="text-[9px] font-black text-white/20 uppercase hover:text-white transition-colors">View Bug Bounty Rules &gt;</button>
             </div>
             <button className="w-full bg-gradient-to-r from-[#00FF00] to-[#00BB00] text-black py-4 rounded-2xl font-black uppercase italic tracking-tighter text-sm flex items-center justify-center gap-2 mt-4">
               Submit Bug
             </button>
          </div>
          <div className="text-center text-[8px] font-bold text-white/20 uppercase tracking-widest">Final interpretation rights belong to YoPoker.</div>
        </section>
      </div>

      {/* Success Toast / Modal */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-x-4 top-24 z-[100] flex justify-center pointer-events-none"
          >
            <div className="glass bg-black/80 backdrop-blur-xl border border-[#00FF00]/20 p-6 rounded-[32px] flex items-center gap-4 shadow-2xl max-w-sm pointer-events-auto">
              <div className="w-12 h-12 bg-[#00FF00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Ticket size={28} className="text-[#00FF00]" />
              </div>
              <div className="text-white font-bold text-sm leading-tight">{toastMsg}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
