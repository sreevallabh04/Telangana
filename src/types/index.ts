export type Grade = 6 | 7 | 8 | 9 | 10;
export type Subject = 'Mathematics' | 'Science' | 'English' | 'Physics' | 'Chemistry' | 'Biology';

// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  grade: Grade;
  progress?: UserProgress;
}

export interface UserProgress {
  completedChapters: string[];
  quizScores: Record<string, number>;
  lastAccessedSubject?: Subject;
  lastAccessedChapter?: string;
}

// Quiz related types
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  imageUrl?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  tags?: string[];
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
  prerequisites?: string[];
  learningObjectives?: string[];
  resources?: Resource[];
}

export interface Resource {
  type: 'video' | 'document' | 'link';
  title: string;
  url: string;
  description?: string;
}

// UI related types
export interface Theme {
  isDark: boolean;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  score: number;
  completed: boolean;
  timeSpent?: number;
  startedAt?: Date;
}

export interface SubjectInfo {
  name: Subject;
  icon: React.FC;
  description: string;
  color: string;
  availableGrades: Grade[];
}