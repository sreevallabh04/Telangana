import { Chapter } from '../../../../types';

export const chapter2: Chapter = {
  id: 'math-7-ch2',
  name: 'Chapter 2: Algebraic Expressions',
  description: 'Introduction to algebraic expressions and equations',
  learningObjectives: [
    'Understand variables and constants',
    'Simplify algebraic expressions',
    'Solve linear equations'
  ],
  questions: [
    {
      id: 1,
      text: 'Simplify: 3x + 2x - x',
      options: ['4x', '6x', '2x', 'x'],
      correctAnswer: '4x',
      explanation: 'Combine like terms: 3x + 2x - x = (3 + 2 - 1)x = 4x',
      difficulty: 'medium',
    },
    {
      id: 2,
      text: 'Solve for x: 2x + 5 = 13',
      options: ['4', '6', '8', '3'],
      correctAnswer: '4',
      explanation: 'Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4',
      difficulty: 'medium',
    },
    {
      id: 3,
      text: 'What is the coefficient of x in 5x + 3?',
      options: ['5', '3', '8', '0'],
      correctAnswer: '5',
      explanation: 'The coefficient is the number multiplied by the variable. In 5x + 3, the coefficient of x is 5.',
      difficulty: 'easy',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Introduction to Algebra',
      url: 'https://www.youtube.com/watch?v=example8',
      description: 'Learn the basics of algebraic expressions'
    },
    {
      type: 'document',
      title: 'Algebra Worksheets',
      url: 'https://example.com/worksheets/algebra-basics',
      description: 'Practice with algebraic expressions'
    }
  ]
};