import { motion } from "motion/react";
import { 
  User, 
  Shield, 
  Settings, 
  Bell, 
  ChevronRight, 
  LogOut, 
  CreditCard, 
  Lock, 
  HelpCircle,
  Smartphone,
  Users,
  ShoppingBag,
  Trophy,
  Diamond
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { useAuth } from "@/src/lib/AuthContext";

const MENU_ITEMS = [
  { group: "Gaming Hub", items: [
    { label: "Invite Friends", icon: Users, status: "50% Comm", color: "text-primary", path: "/center/invite" },
    { label: "Rewards Mall", icon: ShoppingBag, status: "New Items", color: "text-gold", path: "/center/mall" },
    { label: "Active Contests", icon: Trophy, status: "Live", color: "text-green-500", path: "/contest" },
  ]},
  { group: "Account", items: [
    { label: "Identity Verification", icon: Shield, status: "Verified", color: "text-green-500", path: "#" },
    { label: "Payment Methods", icon: CreditCard, status: "2 Added", color: "text-white/40", path: "#" },
  ]},
  { group: "Security", items: [
    { label: "Login Password", icon: Lock, status: "Changed 3d ago", color: "text-white/40", path: "#" },
    { label: "Two-Factor Auth", icon: Smartphone, status: "On", color: "text-primary", path: "#" },
  ]},
  { group: "Preferences", items: [
    { label: "Notification Settings", icon: Bell, status: "", color: "text-white/40", path: "#" },
    { label: "Help & Support", icon: HelpCircle, status: "", color: "text-white/40", path: "/support" },
  ]}
];

export function ProfileView() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="pt-32 px-4 max-w-md mx-auto text-center space-y-6">
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto opacity-20">
          <User size={40} />
        </div>
        <h2 className="text-2xl font-display font-black uppercase italic tracking-tighter text-white">NOT SIGNED IN</h2>
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Sign in to view your profile, track stats, and manage rewards</p>
        <Link to="/login" className="block w-full bg-primary text-white py-5 rounded-[28px] font-black uppercase italic tracking-tighter text-lg shadow-[0_10px_30px_rgba(143,52,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all">Sign In Now</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 px-4 max-w-2xl mx-auto space-y-6">
      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-[40px] flex items-center gap-6"
      >
        <div className="w-20 h-20 rounded-3xl bg-primary/20 border border-primary/20 flex items-center justify-center relative">
          <User size={32} className="text-primary" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-black rounded-full" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-display font-black uppercase italic tracking-tighter text-white">{user.email.split('@')[0]}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">ID: {user.id}</span>
            <div className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] font-black uppercase rounded-md border border-primary/10">VIP 4</div>
          </div>
        </div>
        <Link to="/support">
          <Settings size={20} className="text-white/20 hover:text-white transition-colors" />
        </Link>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass p-6 rounded-[32px] text-center border-white/5 bg-white/[0.02]">
          <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Total Profits</div>
          <div className="text-xl font-display font-black primary-gradient">+${user.balance.toLocaleString()}</div>
        </div>
        <div className="glass p-6 rounded-[32px] text-center border-cyan-500/20 bg-cyan-500/5">
          <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Diamond Balance</div>
          <div className="flex items-center justify-center gap-2">
            <Diamond size={18} className="text-cyan-400" />
            <div className="text-xl font-display font-black text-cyan-400">{user.diamonds.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Menu Groups */}
      <div className="space-y-6">
        {MENU_ITEMS.map((group, i) => (
          <div key={i} className="space-y-3">
            <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] ml-4">{group.group}</h3>
            <div className="glass rounded-[32px] overflow-hidden border-white/5 divide-y divide-white/[0.03]">
              {group.items.map((item, j) => (
                <Link 
                  key={j} 
                  to={item.path}
                  className="flex items-center justify-between p-5 hover:bg-white/[0.03] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-white/40 group-hover:text-primary transition-all">
                      <item.icon size={20} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-tight text-white/80">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={cn("text-[10px] font-bold uppercase", item.color)}>{item.status}</span>
                    <ChevronRight size={16} className="text-white/10 group-hover:text-white transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout */}
      <button 
        onClick={handleLogout}
        className="w-full py-5 bg-red-500/10 text-red-500 rounded-[32px] border border-red-500/10 font-black uppercase italic tracking-tighter text-sm flex items-center justify-center gap-2 hover:bg-red-500/20 transition-all shadow-[0_10px_20px_rgba(239,68,68,0.1)] active:scale-95"
      >
        <LogOut size={18} /> Logout Account
      </button>

      <div className="text-center py-4">
        <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em]">YoPoker Build v2.4.0</p>
      </div>
    </div>
  );
}
