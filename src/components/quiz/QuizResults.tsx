import React from 'react';
import GlassCard from "../GlassCard";
import { Trophy } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  total: number;
  onRetry: () => void;
  onNewSubject: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  total,
  onRetry,
  onNewSubject,
}) => {
  const percentage = (score / total) * 100;

  return (
    <GlassCard className="w-full max-w-md mx-auto text-center">
      <div className="flex justify-center mb-6">
        <Trophy className="w-16 h-16 text-yellow-400" />
      </div>
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
        Quiz Completed!
      </h2>
      <p className="text-xl text-gray-300 mb-6">
        You scored {score} out of {total} ({percentage.toFixed(1)}%)
      </p>
      <div className="space-y-4">
        <button
          onClick={onRetry}
          className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 
            rounded-lg text-white font-semibold transform hover:scale-105 
            transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          Try Again
        </button>
        <button
          onClick={onNewSubject}
          className="w-full px-6 py-3 bg-white/10 border border-white/20 
            rounded-lg text-white font-semibold transform hover:scale-105 
            transition-all duration-300 hover:bg-white/20"
        >
          Choose New Subject
        </button>
      </div>
    </GlassCard>
  );
};