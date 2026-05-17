/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Trophy, ArrowRight } from "lucide-react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { EventSlider } from "./components/shared/EventSlider";
import { HomeFeatures } from "./components/home/HomeFeatures";
import { ActivityPreview } from "./components/home/ActivityPreview";
import { AuthForm } from "./components/auth/AuthForm";
import { WalletView } from "./components/wallet/WalletView";
import { SupportView } from "./components/support/SupportView";
import { GamesView } from "./components/games/GamesView";
import { RewardsView } from "./components/rewards/RewardsView";
import { LeaderboardView } from "./components/leaderboard/LeaderboardView";
import { ProfileView } from "./components/profile/ProfileView";
import { MallView } from "./components/center/MallView";
import { InviteView } from "./components/center/InviteView";
import { ContestView } from "./components/contest/ContestView";
import { TournamentLobby } from "./components/tournament/TournamentLobby";
import { TasksView } from "./components/tasks/TasksView";
import { motion, AnimatePresence } from "motion/react";

const HomeView = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero />
    
    {/* Featured Event Banner */}
    <div className="max-w-7xl mx-auto px-4 mt-[-20px] mb-12 relative z-30">
      <Link to="/tasks" className="block group">
        <div className="glass p-6 md:p-8 rounded-[40px] border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-primary/10 transition-all overflow-hidden relative">
          <div className="absolute top-0 right-[10%] opacity-5 group-hover:scale-110 transition-transform">
             <Trophy size={160} />
          </div>
          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-[32px] flex items-center justify-center text-primary shadow-[0_0_30px_rgba(143,52,255,0.2)]">
                <Trophy size={32} md:size={40} />
             </div>
             <div>
                <div className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.3em] mb-1">Featured Event</div>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase italic italic tracking-tighter text-white">YoPoker Friendship Series</h3>
                <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase mt-1 tracking-widest">$10,000 Prize Pool • Daily 14:00 Start</p>
             </div>
          </div>
          <div className="w-full md:w-auto relative z-10">
            <div className="flex items-center justify-center gap-3 bg-[#00FF00] text-black px-8 py-4 rounded-full font-black uppercase italic tracking-tighter text-sm shadow-[0_10px_30px_rgba(0,255,0,0.2)] group-hover:scale-105 transition-all w-full">
              Join Activity Center <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="max-w-7xl mx-auto px-4 pb-12">
      <EventSlider />
    </div>
    <HomeFeatures />
    <ActivityPreview />
  </motion.div>
);

// Placeholder Components for now
const GamesPage = () => <div className="pt-24 px-4 text-center h-[200vh]">Games Page coming soon...</div>;
const WalletPage = () => <div className="pt-24 px-4 text-center">Wallet Page coming soon...</div>;
const SupportPage = () => <div className="pt-24 px-4 text-center">Support Page coming soon...</div>;
const RewardsPage = () => <div className="pt-24 px-4 text-center">Rewards Page coming soon...</div>;
const LeaderboardPage = () => <div className="pt-24 px-4 text-center">Leaderboard Page coming soon...</div>;
const LoginPage = () => <AuthForm mode="login" />;
const RegisterPage = () => <AuthForm mode="register" />;

import { AuthProvider } from "./lib/AuthContext";
import { AuthModal } from "./components/auth/AuthModal";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 selection:text-white pb-safe relative flex flex-col">
          <Navbar />
          <AuthModal />
          
          <main className="flex-1 relative">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/games" element={<GamesView />} />
                <Route path="/rewards" element={<RewardsView />} />
                <Route path="/leaderboard" element={<LeaderboardView />} />
                <Route path="/wallet" element={<WalletView />} />
                <Route path="/support" element={<SupportView />} />
                <Route path="/profile" element={<ProfileView />} />
                <Route path="/center/mall" element={<MallView />} />
                <Route path="/center/invite" element={<InviteView />} />
                <Route path="/contest" element={<ContestView />} />
                <Route path="/lobby" element={<TournamentLobby />} />
                <Route path="/tasks" element={<TasksView />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </AnimatePresence>
          </main>

        <footer className="border-t border-white/5 py-16 bg-white/[0.01] mt-auto">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <img src="https://www.yopoker.vip/logo.svg?v=2" alt="YoPoker Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="text-xl font-display font-black tracking-tighter mb-4">
              YO<span className="primary-gradient">POKER</span>
            </div>
            <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
              The premier destination for secure online poker. Certified fair play, 
              responsible gaming, and instant rewards.
            </p>
            <div className="flex justify-center gap-6 text-white/60 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-gold transition-colors">Fair Play</a>
              <a href="#" className="hover:text-gold transition-colors">Rules</a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-[0.2em]">
              © 2026 YoPoker Global. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
    </AuthProvider>
  );
}

