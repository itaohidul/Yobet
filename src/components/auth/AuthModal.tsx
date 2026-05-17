import React from 'react';
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/src/lib/AuthContext";

export function AuthModal() {
  const { showAuthModal, setShowAuthModal } = useAuth();

  if (!showAuthModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAuthModal(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-sm glass p-8 rounded-[48px] border-white/10 shadow-2xl text-center"
        >
          <button 
            onClick={() => setShowAuthModal(false)}
            className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="w-20 h-20 bg-primary/10 rounded-[32px] flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} className="text-primary" />
          </div>

          <h2 className="text-3xl font-display font-black uppercase italic tracking-tighter mb-2 text-white">AUTHENTICATION <br /> REQUIRED</h2>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-8 leading-relaxed">
            Please sign in or create an account to access this feature and claim your rewards.
          </p>

          <div className="space-y-4">
            <Link 
              to="/login"
              onClick={() => setShowAuthModal(false)}
              className="w-full bg-primary text-white py-5 rounded-3xl font-black uppercase italic tracking-tighter text-lg flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(143,52,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Sign In <LogIn size={20} />
            </Link>
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">— OR —</div>
            <Link 
              to="/register"
              onClick={() => setShowAuthModal(false)}
              className="w-full bg-white/5 text-white/60 py-5 rounded-3xl font-black uppercase italic tracking-tighter text-lg border border-white/10 hover:bg-white/10 hover:text-white transition-all"
            >
              Join Now <UserPlus size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
