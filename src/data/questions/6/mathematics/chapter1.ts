import { Chapter } from '../../../types';

export const chapter1: Chapter = {
  id: 'math-6-ch1',
  name: 'Chapter 1',
  description: 'Basic algebraic expressions and equations',
  questions: [
    {
      id: 1,
      text: 'Solve for x: 2x + 5 = 13',
      options: ['x = 4', 'x = 6', 'x = 8', 'x = 3'],
      correctAnswer: 'x = 4',
      explanation: 'Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4',
    },
    {
      id: 2,
      text: 'What is the value of y in y + 3 = 10?',
      options: ['7', '13', '6', '4'],
      correctAnswer: '7',
      explanation: 'Subtract 3 from both sides: y = 10 - 3 = 7',
    },
  ],
};