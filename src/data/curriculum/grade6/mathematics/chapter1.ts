import { Chapter } from '../../../../types';

export const chapter1: Chapter = {
  id: 'math-6-ch1',
  name: 'Chapter 1: Numbers and Operations',
  description: 'Understanding whole numbers, integers, and basic operations',
  learningObjectives: [
    'Understand place values and number systems',
    'Master basic arithmetic operations',
    'Solve problems involving integers'
  ],
  questions: [
    {
      id: 1,
      text: 'What is the value of (-8) × (-7)?',
      options: ['56', '-56', '15', '-15'],
      correctAnswer: '56',
      explanation: 'When multiplying two negative numbers, the result is positive. (-8) × (-7) = 56',
      difficulty: 'medium',
    },
    {
      id: 2,
      text: 'Which of these numbers is divisible by both 3 and 4?',
      options: ['12', '15', '20', '25'],
      correctAnswer: '12',
      explanation: '12 is divisible by both 3 (12 ÷ 3 = 4) and 4 (12 ÷ 4 = 3)',
      difficulty: 'easy',
    },
    {
      id: 3,
      text: 'What is the absolute value of -15?',
      options: ['15', '-15', '0', '1'],
      correctAnswer: '15',
      explanation: 'The absolute value of a number is its distance from zero on a number line, regardless of direction.',
      difficulty: 'easy',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Understanding Integer Operations',
      url: 'https://www.youtube.com/watch?v=example1',
      description: 'Learn how to add, subtract, multiply, and divide integers'
    },
    {
      type: 'document',
      title: 'Practice Worksheets',
      url: 'https://example.com/worksheets/integers',
      description: 'Additional practice problems with solutions'
    }
  ]
};