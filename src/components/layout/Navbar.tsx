import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Gamepad2, 
  Gift, 
  Wallet, 
  User, 
  Bell, 
  Menu, 
  X,
  CreditCard,
  History,
  Diamond,
  LogIn
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import { useAuth } from "@/src/lib/AuthContext";

const BOTTOM_NAV_LINKS = [
  { name: "Home", path: "/", icon: Home },
  { name: "Games", path: "/games", icon: Gamepad2 },
  { name: "Rewards", path: "/rewards", icon: Gift },
  { name: "Wallet", path: "/wallet", icon: Wallet },
  { name: "Me", path: "/profile", icon: User },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const handleMeClick = (e: React.MouseEvent) => {
    // On mobile, the "Me" link in bottom nav handles navigation
  };

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="https://www.yopoker.vip/logo.svg?v=2" alt="YoPoker Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-display font-black tracking-tighter">
              YO<span className="primary-gradient">POKER</span>
            </span>
          </Link>

          {/* Desktop Nav - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-1">
            {BOTTOM_NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon size={16} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            
            {/* User Profile / Balance Pill */}
            {user ? (
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-3 pr-1 py-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Wallet size={12} className="text-primary" />
                    <span className="text-[10px] font-bold font-mono">${user.balance.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1 border-l border-white/10 pl-3">
                    <Diamond size={12} className="text-cyan-400" />
                    <span className="text-[10px] font-bold font-mono text-cyan-400">{user.diamonds.toLocaleString()}</span>
                  </div>
                </div>
                <Link to="/profile" className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                  <User size={16} className="text-primary" />
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all">Sign In</Link>
                <Link to="/register" className="px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all">Join Now</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Bottom Navigation - Fixed on Mobile, Hidden on Desktop */}
      <nav className="md:hidden nav-bottom px-2">
        <div className="flex items-center justify-around h-16">
          {BOTTOM_NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full gap-1 transition-all",
                  isActive ? "text-primary" : "text-white/40"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-xl transition-all",
                  isActive && "bg-primary/10 shadow-[0_0_20px_rgba(143,52,255,0.2)]"
                )}>
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
