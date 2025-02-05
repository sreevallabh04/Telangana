import React from 'react';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingHero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/user-form');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.15,
            }}
          />
        ))}
      </div>

      {/* Positioning text and button at top-center with more horizontal and futuristic design */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center text-white max-w-4xl w-full">
        <div className="flex justify-center mb-6">
          <Brain className="w-24 h-24 text-indigo-400 animate-spin-slow" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
          AI-Powered Learning
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          Experience the future of education with our immersive, interactive quiz platform
        </p>
        <button
          onClick={handleGetStarted}
          className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-semibold text-lg uppercase tracking-wide 
            transform hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-indigo-500/30 focus:outline-none"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
