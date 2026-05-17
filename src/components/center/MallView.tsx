import { motion } from "motion/react";
import { ShoppingBag, Star, Zap, Gift, Shield, ChevronRight, Search, Diamond, Crown, Ticket } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { useAuth } from "@/src/lib/AuthContext";

const CATEGORIES = ["ALL", "PRIVILEGE", "TICKET", "THEME", "DECOR"];

const ITEMS = [
  { id: 1, name: "VIP Grade 1 Upgrade", cost: "5,000", category: "PRIVILEGE", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&q=80", tag: "RECOMMENDED", icon: Crown },
  { id: 2, name: "$10 Trial Cashout", cost: "10,000", category: "PRIVILEGE", image: "https://images.unsplash.com/photo-1580519542121-b10c79a1de85?w=400&q=80", tag: "HOT", icon: Gift },
  { id: 3, name: "Master Series Ticket", cost: "2,500", category: "TICKET", image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=400&q=80", icon: Ticket },
  { id: 4, name: "Cyberpunk Table Skin", cost: "8,500", category: "THEME", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&q=80" },
  { id: 5, name: "Golden Shark Avatar", cost: "3,000", category: "DECOR", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=80" },
  { id: 6, name: "Phoenix Frame", cost: "5,500", category: "DECOR", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&q=80" },
];

export function MallView() {
  const [activeTab, setActiveTab] = useState("ALL");
  const { user, setShowAuthModal } = useAuth();

  const handleRedeem = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
  };

  return (
    <div className="pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
              <ShoppingBag size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-display font-black uppercase italic tracking-tighter leading-none">VIP <span className="primary-gradient">MALL</span></h1>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Exchange diamonds for elite gaming sets</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-3xl border border-white/5">
          <div className="px-6 py-2">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">My Balance</div>
            <div className="flex items-center gap-2">
              <Diamond size={16} className="text-cyan-400" />
              <div className="text-xl font-display font-black text-cyan-400">8,240</div>
            </div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <button className="px-6 py-2 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-primary/30 transition-all">
            History
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={cn(
              "px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border whitespace-nowrap",
              activeTab === cat 
                ? "bg-primary border-primary text-white shadow-[0_10px_20px_rgba(143,52,255,0.3)]" 
                : "bg-white/[0.03] border-white/5 text-white/40 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.filter(i => activeTab === "ALL" || i.category === activeTab).map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="group glass rounded-[40px] overflow-hidden border-white/5 hover:bg-white/[0.06] transition-all"
          >
            <div className="h-48 relative overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              {item.tag && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded-lg">
                  {item.tag}
                </div>
              )}
              <div className="absolute bottom-4 right-4 text-white p-3 glass rounded-2xl">
                {item.icon ? <item.icon size={16} className="text-primary" /> : <Zap size={16} className="text-primary" />}
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">{item.category}</div>
                <h3 className="text-xl font-display font-black uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.name}</h3>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">DIAMONDS</div>
                  <div className="flex items-center gap-1.5 font-mono font-black text-xl text-cyan-400">
                    <Diamond size={14} />
                    {item.cost}
                  </div>
                </div>
                <button 
                  onClick={handleRedeem}
                  className="px-6 py-3 bg-white/5 hover:bg-primary rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 group-hover:border-primary/50 group-hover:text-white"
                >
                  REDEEM
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
