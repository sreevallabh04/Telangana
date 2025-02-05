// src/components/GlassCard.tsx

import React from 'react';

interface GlassCardProps extends React.HTMLProps<HTMLDivElement> {
  // Other props for GlassCard, if necessary
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className, onClick, ...props }) => {
  return (
    <div
      className={`bg-white/10 rounded-xl shadow-lg p-6 backdrop-blur-lg ${className}`}
      onClick={onClick}  // This will handle the click event
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
