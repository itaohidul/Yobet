import { motion } from "motion/react";
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  RefreshCw, 
  Trophy, 
  ShieldCheck, 
  History, 
  CreditCard,
  Diamond 
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { EventSlider } from "../shared/EventSlider";
import { useAuth } from "@/src/lib/AuthContext";
import { Link } from "react-router-dom";

const TRANSACTIONS = [
  { id: '1', type: 'deposit', amount: '+ $500.00', date: 'May 15, 2026', status: 'completed' },
  { id: '2', type: 'withdrawal', amount: '- $120.00', date: 'May 14, 2026', status: 'pending' },
  { id: '3', type: 'reward', amount: '+ $25.00', date: 'May 12, 2026', status: 'completed' },
  { id: '4', type: 'game_win', amount: '+ $2,450.00', date: 'May 10, 2026', status: 'completed' },
];

export function WalletView() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="pt-32 px-4 max-w-md mx-auto text-center space-y-6">
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto opacity-20">
          <Wallet size={40} />
        </div>
        <h2 className="text-2xl font-display font-black uppercase italic tracking-tighter text-white">WALLET SECURED</h2>
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Sign in to access your pro wallet, manage funds, and view game assets</p>
        <Link to="/login" className="block w-full bg-primary text-white py-5 rounded-[28px] font-black uppercase italic tracking-tighter text-lg shadow-[0_10px_30px_rgba(143,52,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all">Unlock Wallet</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto space-y-12">
      <EventSlider />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-2 uppercase italic tracking-tighter text-white">
            PRO <span className="primary-gradient">WALLET</span>
          </h1>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Institutional Grade Assets • Secured Hub</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all font-black text-[10px] uppercase tracking-widest flex items-center gap-2 text-white/60 hover:text-white">
            <RefreshCw size={14} /> Refresh
          </button>
          <button className="px-8 py-4 bg-primary text-white rounded-2xl transition-all font-black text-xs uppercase italic tracking-tighter shadow-[0_10px_30px_rgba(143,52,255,0.3)] hover:scale-105 active:scale-95">
            Add Funds
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Balance Cards */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid md:grid-cols-2 gap-6 text-white">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="premium-gradient glass p-8 rounded-[40px] relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Wallet size={80} />
              </div>
              <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Total Balance (USD)</div>
              <div className="text-5xl font-display font-black mb-8 italic tracking-tighter">${user.balance.toLocaleString()}</div>
              <div className="flex items-center gap-4">
                <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                  <ArrowDownLeft size={16} /> Withdraw
                </button>
                <button className="flex-1 py-3 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                  <ArrowUpRight size={16} /> Deposit
                </button>
              </div>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-[40px] relative overflow-hidden group border-cyan-500/20 bg-cyan-500/5 shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-cyan-400">
                <Diamond size={80} />
              </div>
              <div className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Diamond Assets</div>
              <div className="flex items-center gap-3 mb-8">
                <Diamond size={40} className="text-cyan-400" />
                <div className="text-5xl font-display font-black text-cyan-400 tracking-tighter">{user.diamonds.toLocaleString()}</div>
              </div>
              <div className="flex items-center justify-between text-cyan-400/40 text-[10px] font-bold uppercase tracking-wider">
                <span>Value: Premium Items</span>
                <span>Tradable: Yes</span>
              </div>
              <div className="w-full h-1 bg-cyan-400/10 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-cyan-400 w-1/2" />
              </div>
            </motion.div>
          </div>

          {/* Transaction History */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[40px] overflow-hidden"
          >
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <History className="text-gold" size={20} />
                <h3 className="text-lg font-display font-bold uppercase tracking-tight">Recent Activity</h3>
              </div>
              <button className="text-white/40 text-xs font-bold uppercase hover:text-white transition-colors">See All</button>
            </div>
            <div className="divide-y divide-white/5">
              {TRANSACTIONS.map((tx) => (
                <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      tx.type === 'deposit' || tx.type === 'game_win' ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    )}>
                      {tx.type === 'transfer' ? <RefreshCw size={18} /> : (tx.amount.startsWith('+') ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />)}
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase italic tracking-tight">{tx.type.replace('_', ' ')}</div>
                      <div className="text-[10px] text-white/40 font-bold uppercase">{tx.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={cn(
                      "font-mono font-bold text-sm",
                      tx.amount.startsWith('+') ? "text-green-500" : "text-white"
                    )}>
                      {tx.amount}
                    </div>
                    <div className={cn(
                      "text-[10px] font-bold uppercase tracking-tighter",
                      tx.status === 'completed' ? "text-white/20" : "text-gold"
                    )}>
                      {tx.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-[40px]">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Security Center</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                <ShieldCheck className="text-gold" size={20} />
                <div>
                  <div className="text-xs font-bold uppercase">2FA Active</div>
                  <div className="text-[10px] text-white/40 uppercase">Maximum Protection</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl opacity-50">
                <CreditCard className="text-white/40" size={20} />
                <div>
                  <div className="text-xs font-bold uppercase">Identity Verified</div>
                  <div className="text-[10px] text-white/40 uppercase">Level 3 Access</div>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all">
              Security Settings
            </button>
          </div>

          <div className="glass p-8 rounded-[40px] bg-primary/5 border-primary/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Pro Tip</h3>
            <p className="text-white/60 text-xs leading-relaxed uppercase tracking-tight">
              Higher loyalty tiers unlock instant withdrawals and 0% transaction fees. Play more to grow your rank.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
