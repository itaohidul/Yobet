import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
  balance: number;
  diamonds: number;
  tickets: number;
  id: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  updateBalance: (amount: number) => void;
  updateDiamonds: (amount: number) => void;
  updateTickets: (amount: number) => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('yopoker_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string) => {
    const newUser = {
      email,
      balance: 1000, // Initial welcome balance
      diamonds: 100,
      tickets: 0,
      id: 'ID' + Math.floor(Math.random() * 90000000 + 10000000),
    };
    setUser(newUser);
    localStorage.setItem('yopoker_user', JSON.stringify(newUser));
    setShowAuthModal(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('yopoker_user');
  };

  const updateBalance = (amount: number) => {
    if (user) {
      const updatedUser = { ...user, balance: user.balance + amount };
      setUser(updatedUser);
      localStorage.setItem('yopoker_user', JSON.stringify(updatedUser));
    }
  };

  const updateDiamonds = (amount: number) => {
    if (user) {
      const updatedUser = { ...user, diamonds: user.diamonds + amount };
      setUser(updatedUser);
      localStorage.setItem('yopoker_user', JSON.stringify(updatedUser));
    }
  };

  const updateTickets = (amount: number) => {
    if (user) {
      const currentTickets = user.tickets || 0;
      const updatedUser = { ...user, tickets: Math.max(0, currentTickets + amount) };
      setUser(updatedUser);
      localStorage.setItem('yopoker_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      updateBalance, 
      updateDiamonds, 
      updateTickets,
      showAuthModal,
      setShowAuthModal
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
