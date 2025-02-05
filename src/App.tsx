import React, { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { LandingHero } from './components/LandingHero';
import { UserForm } from './components/auth/UserForm';
import { SubjectGrid } from './components/subjects/SubjectGrid';
import { ChapterList } from './components/subjects/ChapterList';
import { QuizCard } from './components/quiz/QuizCard';
import { QuizProgress } from './components/quiz/QuizProgress';
import { QuizResults } from './components/quiz/QuizResults';
import { curriculum } from './data/questions/index';
import type { Theme, User, Subject, QuizState, Chapter } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>({
    isDark: true,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    accentColor: 'pink'
  });

  const [user, setUser] = useState<User | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
    completed: false,
  });

  const toggleTheme = () => {
    setTheme(prev => ({ ...prev, isDark: !prev.isDark }));
  };

  const handleUserSubmit = (userData: User) => {
    setUser(userData);
  };

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
    resetQuiz();
  };

  const handleChapterSelect = (chapterId: string) => {
    if (!user || !selectedSubject) return;
    
    const chapter = curriculum[user.grade][selectedSubject]
      .find(ch => ch.id === chapterId);
    
    if (chapter) {
      setSelectedChapter(chapter);
      resetQuiz();
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (!selectedChapter) return;

    const currentQuestion = selectedChapter.questions[quizState.currentQuestionIndex];

    setQuizState(prev => {
      const newAnswers = { ...prev.answers, [currentQuestion.id]: answer };
      const newScore = Object.entries(newAnswers).reduce((score, [id, ans]) => {
        const q = selectedChapter.questions.find(q => q.id === Number(id));
        return score + (q?.correctAnswer === ans ? 1 : 0);
      }, 0);

      const isLastQuestion = quizState.currentQuestionIndex === selectedChapter.questions.length - 1;

      return {
        ...prev,
        answers: newAnswers,
        score: newScore,
        currentQuestionIndex: isLastQuestion ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
        completed: isLastQuestion,
      };
    });
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: {},
      score: 0,
      completed: false,
    });
  };

  const renderContent = () => {
    if (!user) {
      return (
        <>
          <LandingHero />
          <div className="fixed bottom-0 left-0 right-0 p-6">
            <UserForm onSubmit={handleUserSubmit} />
          </div>
        </>
      );
    }

    if (!selectedSubject) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Welcome, {user.name}! Choose your subject:
          </h2>
          <SubjectGrid grade={user.grade} onSelectSubject={handleSubjectSelect} />
        </div>
      );
    }

    if (!selectedChapter) {
      const chapters = curriculum[user.grade][selectedSubject];
      return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Select a chapter in {selectedSubject}:
          </h2>
          <ChapterList chapters={chapters} onSelectChapter={handleChapterSelect} />
          <button
            onClick={() => setSelectedSubject(null)}
            className="mt-8 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white 
              font-semibold transform hover:scale-105 transition-all duration-300 hover:bg-white/20"
          >
            Back to Subjects
          </button>
        </div>
      );
    }

    if (quizState.completed) {
      return (
        <div className="container mx-auto px-4 py-8">
          <QuizResults
            score={quizState.score}
            total={selectedChapter.questions.length}
            onRetry={resetQuiz}
            onNewSubject={() => {
              setSelectedChapter(null);
              setSelectedSubject(null);
            }}
          />
        </div>
      );
    }

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

  return (
    <div className={`${theme.isDark ? 'dark bg-slate-900' : 'bg-white'} min-h-screen text-white transition-colors duration-500`}>

      {renderContent()}
    </div>
  );
}

export default App;