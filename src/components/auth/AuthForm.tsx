import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, UserPlus, LogIn } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useAuth } from "@/src/lib/AuthContext";

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      login(email);
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass p-8 md:p-12 rounded-[40px] border-white/5 relative">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {mode === 'login' ? <LogIn className="text-primary" size={32} /> : <UserPlus className="text-primary" size={32} />}
            </div>
            <h1 className="text-3xl font-display font-black mb-2 uppercase italic tracking-tighter">
              {mode === 'login' ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
            </h1>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              {mode === 'login' 
                ? 'Secure access to your pro dashboard' 
                : 'Join the next generation of players'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 ml-4">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 ml-4">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {mode === 'register' && (
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 ml-4 transition-all">Invite Code (Optional)</label>
                <input
                  type="text"
                  placeholder="XXXX-XXXX"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10 uppercase tracking-widest"
                />
              </div>
            )}

            <button 
              disabled={loading}
              className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase italic tracking-tighter text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(143,52,255,0.3)] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Processing...
                </div>
              ) : mode === 'login' ? 'Secure Login' : 'Launch Account'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/40 text-xs font-bold uppercase tracking-wider">
              {mode === 'login' ? "Don't have an account?" : "Already playing?"} {' '}
              <Link 
                to={mode === 'login' ? '/register' : '/login'} 
                className="text-primary hover:underline ml-1"
              >
                {mode === 'login' ? 'Register' : 'Sign In'}
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-white/20 uppercase tracking-[0.2em] font-bold text-[10px]">
          <ShieldCheck size={14} />
          SSL Secure & Protected
        </div>
      </motion.div>
    </div>
  );
}
