import { motion, AnimatePresence } from "motion/react";
import { 
  Trophy, 
  Timer, 
  Users, 
  Share2, 
  Bug, 
  CheckCircle2, 
  ChevronLeft, 
  ShieldAlert, 
  Zap, 
  ArrowRight, 
  MessageSquare,
  DollarSign,
  HelpCircle,
  X,
  Send,
  Ticket
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import { useAuth } from "@/src/lib/AuthContext";
import { Link } from "react-router-dom";

export function ContestView() {
  const { user, updateTickets, setShowAuthModal } = useAuth();
  const [registered, setRegistered] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showInsufficientToast, setShowInsufficientToast] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupTickets, setSignupTickets] = useState(1);
  const [showBugForm, setShowBugForm] = useState(false);
  const [bugSent, setBugSent] = useState(false);
  const [activeTab, setActiveTab] = useState("hall");

  const handleSignUpClick = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (user.tickets < 1) {
      setShowInsufficientToast(true);
      setTimeout(() => setShowInsufficientToast(false), 3000);
      return;
    }
    setShowSignupForm(true);
  };

  const handleConfirmSignup = () => {
    if (!user || user.tickets < signupTickets) return;
    
    updateTickets(-signupTickets);
    setRegistered(true);
    setShowSignupForm(false);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleCancel = () => {
    if (user && registered) {
      updateTickets(signupTickets);
      setRegistered(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 glass z-50 flex items-center px-4 border-b border-white/5">
        <Link to="/" className="flex items-center gap-1 text-white/60 hover:text-white transition-colors">
          <ChevronLeft size={20} />
          <span className="text-sm font-bold uppercase tracking-widest">return</span>
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2 font-display font-black uppercase text-sm tracking-[0.2em]">Match Details</div>
      </div>

      <div className="pt-20 px-4 max-w-lg mx-auto space-y-6">
        {/* Banner Title */}
        <div className="bg-[#00FF00] text-black py-4 px-6 rounded-xl text-center font-bold text-lg leading-tight uppercase">
          China-Tui Friendship Tournament Day 1
        </div>

        {/* Blind Level & Timer */}
        <div className="text-center space-y-4">
          <div className="text-white font-bold text-xl flex items-center justify-center gap-2">
            Current blind level <span className="text-[#00FF00]">1</span>
          </div>
          
          <div className="bg-white/10 rounded-[60px] py-12 px-8 inline-block w-full border border-white/5 relative overflow-hidden">
            <div className="text-7xl font-mono font-black tracking-tighter text-white">11:27:23</div>
          </div>

          <div className="text-white/40 font-mono font-bold">2026-05-18 12:00</div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-1">
          <div className="text-center space-y-3">
            <div className="text-[#00FF00] text-sm font-bold uppercase">Registered</div>
            <div className="text-white font-black text-xl">{registered ? 181 : 180}</div>
          </div>
          <div className="text-center space-y-3">
            <div className="text-[#00FF00] text-sm font-bold uppercase">Total Pool</div>
            <div className="flex items-center justify-center gap-1.5">
               <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-black text-[10px]">$</div>
               <div className="text-white font-black text-xl">{registered ? 181 : 180}</div>
            </div>
          </div>
          <div className="text-center space-y-3">
            <div className="text-[#00FF00] text-sm font-bold uppercase">Waiting to begin</div>
            <div className="text-white font-black text-xl font-mono">11:27:23</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/5 p-1 rounded-full flex items-center border border-white/5">
          {["hall", "Players", "award"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 py-3 rounded-full text-xs font-black uppercase transition-all",
                activeTab === tab ? "bg-[#00FF00] text-black" : "text-white/40 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="space-y-6">
          {activeTab === "hall" && (
            <div className="space-y-6">
              {/* Details List */}
              <div className="bg-white/[0.03] rounded-3xl border border-white/5 overflow-hidden divide-y divide-white/5">
                {[
                  { label: "Game type", val: "MTT Championship" },
                  { label: "state", val: "Waiting to begin" },
                  { label: "Tickets", val: "China-US Friendship Match 💵" },
                  { label: "Blind Injection Table Structure", val: "conventional", info: true },
                  { label: "Initial Scoreboard", val: "20000" },
                  { label: "Registration deadline for increasing blindness level", val: "6" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-1.5 text-white/40 text-[11px] font-bold uppercase tracking-tight">
                      {item.label}
                      {item.info && <HelpCircle size={14} className="opacity-50" />}
                    </div>
                    <div className="text-white text-xs font-black uppercase tracking-tight">{item.val}</div>
                  </div>
                ))}
              </div>

              {/* International Competition Rules Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#00FF00] font-black uppercase italic tracking-tighter text-sm">
                  <ShieldAlert size={18} />
                  International Competition Rules
                </div>
                <div className="glass p-6 rounded-3xl border-white/5 text-[10px] space-y-4 text-white/60 font-bold uppercase tracking-wider leading-relaxed">
                  <p><span className="text-white">Format:</span> multi-table competition until champion determined at the last table.</p>
                  <p><span className="text-white">Starting chips:</span> 20,000 chips per player.</p>
                  <p><span className="text-white">Blind structure:</span> Fixed blinds, gradually increase over time.</p>
                  <p><span className="text-white">Elimination:</span> Out of chips = eliminated. Last player is champion.</p>
                  <p><span className="text-white">Bonus:</span> Distributed based on final rankings.</p>
                  <p><span className="text-white">Rebuys:</span> Mechanisms allow purchase of more chips during early levels.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Players" && (
            <div className="glass rounded-3xl border-white/5 overflow-hidden">
               <div className="grid grid-cols-3 p-4 text-[10px] font-black text-white/20 uppercase tracking-widest border-b border-white/5">
                 <span>Player</span>
                 <span className="text-center">Chips</span>
                 <span className="text-right">Rank</span>
               </div>
               <div className="divide-y divide-white/5">
                 {[
                   { name: "Ace_Poker", chips: "42,000", rank: "1" },
                   { name: "Shark_Hunter", chips: "38,500", rank: "2" },
                   { name: "BluffMaster", chips: "29,400", rank: "3" },
                   { name: "NoLimitPro", chips: "20,000", rank: "4" },
                   { name: "ZenGamer", chips: "15,200", rank: "5" },
                 ].map((p, i) => (
                   <div key={i} className="grid grid-cols-3 p-5 items-center">
                     <span className="text-xs font-bold text-white uppercase">{p.name}</span>
                     <span className="text-center text-xs font-mono text-[#00FF00]">{p.chips}</span>
                     <span className="text-right text-xs font-black text-white/20 italic">#{p.rank}</span>
                   </div>
                 ))}
               </div>
               <div className="p-4 text-center text-[10px] font-bold text-white/20 uppercase">Showing Top 5 / 180 Registered</div>
            </div>
          )}

          {activeTab === "award" && (
            <div className="space-y-4">
              <div className="glass p-8 rounded-[40px] text-center border-[#00FF00]/20 bg-[#00FF00]/5">
                <div className="text-[10px] font-black text-[#00FF00] uppercase tracking-[0.3em] mb-2">Estimated 1st Prize</div>
                <div className="text-5xl font-display font-black text-white">$ 45.00</div>
              </div>
              <div className="glass rounded-3xl border-white/5 overflow-hidden">
                <div className="divide-y divide-white/5">
                  {[
                    { rank: "1st", share: "25%", val: "$45.00" },
                    { rank: "2nd", share: "18%", val: "$32.40" },
                    { rank: "3rd", share: "12%", val: "$21.60" },
                    { rank: "4th-10th", share: "3.5% avg", val: "$6.30" },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-5">
                      <div className="text-xs font-black text-white uppercase italic">{p.rank}</div>
                      <div className="text-right">
                        <div className="text-xs font-black text-[#00FF00]">{p.val}</div>
                        <div className="text-[8px] font-bold text-white/20 uppercase">{p.share} Pool</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bug Bounty Promo Section */}
        <div className="glass p-6 rounded-[32px] border-primary/20 bg-primary/5 flex items-center justify-between group cursor-pointer" onClick={() => setShowBugForm(true)}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
              <Bug size={24} />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">Bug Bounty Program</div>
              <div className="text-[10px] text-white/40 font-bold uppercase mt-1">Found a bug? Earn up to $200 rewards</div>
            </div>
          </div>
          <ArrowRight size={20} className="text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1" />
        </div>

        {/* Footer Actions */}
        <div className="pt-6">
          {!registered ? (
            <button 
              onClick={handleSignUpClick}
              className="w-full bg-[#00FF00] text-black py-5 rounded-full font-black uppercase italic tracking-tighter text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,255,0,0.2)] flex items-center justify-center gap-3"
            >
              Sign up <Ticket size={24} />
            </button>
          ) : (
            <button 
              onClick={handleCancel}
              className="w-full bg-white/5 text-white/40 py-5 rounded-full font-black uppercase italic tracking-tighter text-xl hover:text-white transition-all"
            >
              Cancel registration
            </button>
          )}
        </div>
      </div>

      {/* Signup Form Modal */}
      <AnimatePresence>
        {showSignupForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSignupForm(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm glass p-8 rounded-[48px] border-white/10 shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ticket size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-display font-black uppercase italic tracking-tighter mb-2">CHOOSE ENTRIES</h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-8">Each ticket = 1 Entry (Max 20,000 Chips each)</p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-6">
                  <button 
                    onClick={() => setSignupTickets(Math.max(1, signupTickets - 1))}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl font-black hover:bg-white/10 transition-colors"
                  >
                    -
                  </button>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-display font-black italic">{signupTickets}</span>
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mt-1">TICKETS</span>
                  </div>
                  <button 
                    onClick={() => setSignupTickets(Math.min(user?.tickets || 1, signupTickets + 1))}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl font-black hover:bg-white/10 transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="text-[10px] font-bold uppercase text-white/20">
                  Total Chips: <span className="text-[#00FF00] font-black">{(signupTickets * 20000).toLocaleString()}</span>
                </div>

                <button 
                  onClick={handleConfirmSignup}
                  className="w-full bg-primary text-white py-5 rounded-3xl font-black uppercase italic tracking-tighter text-lg shadow-[0_10px_30px_rgba(143,52,255,0.4)]"
                >
                  Confirm Registration
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Toast / Modal */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-x-4 top-24 z-[100] flex justify-center pointer-events-none"
          >
            <div className="glass bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-[32px] flex items-center gap-4 shadow-2xl max-w-sm pointer-events-auto">
              <div className="w-12 h-12 bg-[#00FF00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={28} className="text-[#00FF00]" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Congratulations! You have successfully registered for the competition.</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Insufficient Tickets Toast */}
      <AnimatePresence>
        {showInsufficientToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-x-4 top-24 z-[100] flex justify-center pointer-events-none"
          >
            <div className="glass bg-black/80 backdrop-blur-xl border border-red-500/20 p-6 rounded-[32px] flex items-center gap-4 shadow-2xl max-w-sm pointer-events-auto">
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldAlert size={28} className="text-red-500" />
              </div>
              <div className="flex-1">
                <div className="text-white font-bold text-sm leading-tight">Insufficient Tickets</div>
                <Link to="/tasks" className="text-[10px] font-black text-primary uppercase mt-1 inline-block pointer-events-auto hover:underline italic">Earn more in tasks page &gt;</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bug Bounty Form Modal */}
      <AnimatePresence>
        {showBugForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBugForm(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass p-8 rounded-[48px] border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setShowBugForm(false)}
                className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {bugSent ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-20 h-20 bg-[#00FF00]/10 rounded-[32px] flex items-center justify-center mx-auto">
                    <Send size={40} className="text-[#00FF00]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-black uppercase italic italic tracking-tighter">REPORT SUBMITTED</h3>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                      Our tech team will review your report. <br /> Rewards are credited within 24-48h.
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowBugForm(false)}
                    className="w-full bg-primary text-white py-4 rounded-3xl font-black uppercase italic tracking-tighter"
                  >
                    Got it
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Bug size={32} />
                      <h2 className="text-3xl font-display font-black uppercase italic tracking-tighter">SUBMIT BUG</h2>
                    </div>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Help us improve and get paid in Pro Diamonds</p>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setBugSent(true); }}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Bug Category</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-primary/50 text-white font-medium">
                        <option value="ui">UI/Visual Glitch</option>
                        <option value="poker">Gameplay Bug</option>
                        <option value="wallet">Wallet/Transaction</option>
                        <option value="other">Other Issue</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Description</label>
                      <textarea 
                        required
                        placeholder="Explain what happened and how to reproduce it..."
                        className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-4 outline-none focus:border-primary/50 text-white font-medium min-h-[120px] resize-none"
                      />
                    </div>

                    <button className="w-full bg-primary text-white py-5 rounded-3xl font-black uppercase italic tracking-tighter text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(143,52,255,0.4)]">
                      Submit Report <Send size={20} />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
