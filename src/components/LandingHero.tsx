import React from 'react';
import { Brain } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const LandingHero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-30" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>

      <GlassCard className="max-w-2xl mx-auto text-center z-10">
        <div className="flex justify-center mb-6">
          <Brain className="w-16 h-16 text-indigo-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          AI-Powered Learning
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Experience the future of education with our interactive quiz platform
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full 
          text-white font-semibold transform hover:scale-105 transition-all duration-300
          hover:shadow-lg hover:shadow-indigo-500/25">
          Get Started
        </button>
      </GlassCard>
    </div>
  );
};