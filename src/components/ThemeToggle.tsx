import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed top-4 right-4 p-2 rounded-full transition-all duration-500 ${
        isDark ? 'bg-slate-800 text-yellow-400' : 'bg-white text-slate-800'
      } hover:scale-110 shadow-lg backdrop-blur-sm`}
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};