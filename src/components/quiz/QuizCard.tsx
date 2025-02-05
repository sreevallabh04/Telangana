import React from 'react';
import { Question } from '../../types';
import { GlassCard } from '../ui/GlassCard';

interface QuizCardProps {
  question: Question;
  selectedAnswer?: string;
  onSelectAnswer: (answer: string) => void;
  showExplanation?: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showExplanation,
}) => {
  return (
    <GlassCard className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">{question.text}</h3>
        
        {question.imageUrl && (
          <img
            src={question.imageUrl}
            alt="Question illustration"
            className="w-full rounded-lg object-cover mb-4"
          />
        )}

        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = showExplanation && option === question.correctAnswer;
            const isWrong = showExplanation && isSelected && option !== question.correctAnswer;

            return (
              <button
                key={option}
                onClick={() => !showExplanation && onSelectAnswer(option)}
                disabled={showExplanation}
                className={`w-full p-4 rounded-lg border transition-all duration-300
                  ${isSelected ? 'border-indigo-500' : 'border-white/20'}
                  ${isCorrect ? 'bg-green-500/20 border-green-500' : ''}
                  ${isWrong ? 'bg-red-500/20 border-red-500' : ''}
                  ${!showExplanation ? 'hover:bg-white/20 hover:border-indigo-500' : ''}
                  ${!isSelected && !isCorrect ? 'bg-white/10' : ''}`}
              >
                <span className="text-white">{option}</span>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-4 p-4 rounded-lg bg-indigo-500/20 border border-indigo-500">
            <p className="text-white">{question.explanation}</p>
          </div>
        )}
      </div>
    </GlassCard>
  );
};