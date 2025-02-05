import { Chapter } from '../../../types';

export const chapter1: Chapter = {
  id: 'math-9-ch1',
  name: 'Chapter 1',
  description: 'Quadratic equations and polynomials',
  questions: [
    {
      id: 1,
      text: 'What is the value of x in x² + 5x + 6 = 0?',
      options: ['x = -2, -3', 'x = 2, 3', 'x = -1, -2', 'x = 1, 2'],
      correctAnswer: 'x = -2, -3',
      explanation: 'Using factorization: x² + 5x + 6 = (x + 2)(x + 3) = 0, therefore x = -2 or x = -3',
    },
  ],
};