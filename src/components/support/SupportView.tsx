import { motion } from "motion/react";
import { HelpCircle, MessageCircle, Shield, FileText, ChevronRight, Search, Mail, Phone, LifeBuoy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const FAQS = [
  {
    category: "Games & Fairness",
    questions: [
      { q: "How do I know the games are fair?", a: "YoPoker uses a certified Random Number Generator (RNG) that is independently audited every quarter. You can view our latest certificate in the Fair Play section." },
      { q: "What is the rake structure?", a: "We offer some of the most competitive rake structures in the industry, ranging from 2% to 5% depending on the stakes and game type." }
    ]
  },
  {
    category: "Wallet & Security",
    questions: [
      { q: "How long do withdrawals take?", a: "Most withdrawals are processed instantly and reach your account within 5-15 minutes. High-value withdrawals may take up to 24 hours for security verification." },
      { q: "Is my personal data safe?", a: "Absolutely. We use bank-grade HSTS encryption and all sensitive data is stored in cold-storage vaults with strict HPS protocols." }
    ]
  }
];

export function SupportView() {
  const [search, setSearch] = useState("");

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase gold-gradient italic tracking-tighter">
          TRUST <span className="text-white">CENTER</span>
        </h1>
        <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold mb-12">How can we assist you today?</p>
        
        <div className="max-w-2xl mx-auto relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" size={24} />
          <input 
            type="text"
            placeholder="Search for answers..."
            className="w-full bg-white/5 border border-white/10 rounded-[32px] py-6 pl-16 pr-8 outline-none focus:border-gold/50 focus:bg-white/10 transition-all font-medium text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Support Channels */}
        <div className="space-y-4">
          <div className="glass p-8 rounded-[40px] border-gold/10 bg-gold/5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-6">Direct Support</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-gold" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold uppercase tracking-tight">Live Chat</div>
                    <div className="text-[10px] text-green-500 uppercase font-bold">Online Now</div>
                  </div>
                </div>
                <ChevronRight size={18} className="text-white/20 group-hover:translate-x-1 group-hover:text-gold transition-all" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                    <Mail className="text-white/40" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold uppercase tracking-tight">Email Support</div>
                    <div className="text-[10px] text-white/40 uppercase">Typical reply: 2h</div>
                  </div>
                </div>
                <ChevronRight size={18} className="text-white/20 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

          <div className="glass p-8 rounded-[40px]">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Legal & Fair Play</h3>
            <div className="space-y-2">
              {['Fair Play Policy', 'Anti-Fraud Policy', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <a key={item} href="#" className="flex items-center justify-between p-3 hover:text-gold transition-colors text-sm font-bold uppercase tracking-tight">
                  {item} <ChevronRight size={14} className="opacity-20" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="lg:col-span-2 space-y-8">
          {FAQS.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-white/30 ml-4">{category.category}</h2>
              <div className="grid gap-4">
                {category.questions.map((faq, fidx) => (
                  <motion.div
                    key={fidx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-[40px] hover:border-white/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-display font-bold mb-4 group-hover:text-gold transition-colors">{faq.q}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold/30 transition-all shadow-inner">
                        <HelpCircle size={14} className="text-white/20 group-hover:text-gold transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="glass p-12 rounded-[40px] text-center bg-white/[0.02]">
            <LifeBuoy className="text-gold mx-auto mb-6" size={48} />
            <h3 className="text-2xl font-display font-bold mb-4 uppercase italic">Still need help?</h3>
            <p className="text-white/40 text-sm mb-8 uppercase tracking-widest max-w-sm mx-auto">Our specialist team is available 24/7 to resolve any issues you may encounter.</p>
            <button className="px-12 py-4 bg-white/5 hover:bg-gold hover:text-black hover:scale-105 rounded-2xl font-bold uppercase tracking-widest transition-all border border-white/10">
              Open Support Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
