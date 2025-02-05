import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative backdrop-blur-md bg-white/10 rounded-2xl shadow-xl 
      border border-white/20 p-6 overflow-hidden transition-all duration-500 
      hover:shadow-2xl hover:bg-white/20 ${className}`}
    >
      {children}
    </div>
  );
};