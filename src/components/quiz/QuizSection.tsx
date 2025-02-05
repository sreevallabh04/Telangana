import React from 'react';
import { QuizProgress } from "./QuizProgress";
import { QuizCard } from './QuizCard';

interface QuizSectionProps {
  selectedChapter: any;
  quizState: any;
  handleAnswerSelect: (answer: string) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ selectedChapter, quizState, handleAnswerSelect }) => {
  if (!selectedChapter) return null;

  const currentQuestion = selectedChapter.questions[quizState.currentQuestionIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <QuizProgress
        current={quizState.currentQuestionIndex}
        total={selectedChapter.questions.length}
        score={quizState.score}
      />
      <QuizCard
        question={currentQuestion}
        selectedAnswer={quizState.answers[currentQuestion.id]}
        onSelectAnswer={handleAnswerSelect}
        showExplanation={quizState.answers[currentQuestion.id] !== undefined}
      />
    </div>
  );
};
