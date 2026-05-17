/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <div className="min-h-screen bg-black overflow-x-hidden selection:bg-gold/30 selection:text-gold">
          <Navbar />
          <AuthModal />
          
          <main>
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

        <footer className="border-t border-white/5 py-12 bg-surface mb-20 md:mb-0">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-4">
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

