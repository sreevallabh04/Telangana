import { Chapter } from '../../../../types';

export const chapter2: Chapter = {
  id: 'math-6-ch2',
  name: 'Chapter 2: Fractions and Decimals',
  description: 'Working with fractions, decimals, and their operations',
  learningObjectives: [
    'Convert between fractions and decimals',
    'Perform operations with fractions',
    'Solve real-world problems using fractions and decimals'
  ],
  questions: [
    {
      id: 1,
      text: 'Convert 3/4 to a decimal',
      options: ['0.75', '0.25', '0.50', '0.80'],
      correctAnswer: '0.75',
      explanation: 'To convert 3/4 to a decimal, divide 3 by 4: 3 ÷ 4 = 0.75',
      difficulty: 'medium',
    },
    {
      id: 2,
      text: 'What is 2/3 + 1/6?',
      options: ['5/6', '3/9', '1/2', '7/6'],
      correctAnswer: '5/6',
      explanation: 'First find a common denominator (6), then add: (4/6) + (1/6) = 5/6',
      difficulty: 'hard',
    },
    {
      id: 3,
      text: 'Which decimal is equal to 1/5?',
      options: ['0.2', '0.5', '0.25', '0.4'],
      correctAnswer: '0.2',
      explanation: 'Divide 1 by 5: 1 ÷ 5 = 0.2',
      difficulty: 'medium',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Fractions and Decimals',
      url: 'https://www.youtube.com/watch?v=example2',
      description: 'Learn how to work with fractions and decimals'
    },
    {
      type: 'document',
      title: 'Practice Problems',
      url: 'https://example.com/worksheets/fractions',
      description: 'Practice converting between fractions and decimals'
    }
  ]
};