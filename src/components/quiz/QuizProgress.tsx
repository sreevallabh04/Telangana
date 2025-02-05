import React from 'react';

interface QuizProgressProps {
  current: number;
  total: number;
  score: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({ current, total, score }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300">
          Question {current + 1} of {total}
        </span>
        <span className="text-sm text-gray-300">
          Score: {score}/{total}
        </span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};