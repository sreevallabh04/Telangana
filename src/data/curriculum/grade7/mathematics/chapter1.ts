import { Chapter } from '../../../../types';

export const chapter1: Chapter = {
  id: 'math-7-ch1',
  name: 'Chapter 1: Integers and Their Operations',
  description: 'Advanced operations with integers and their applications',
  learningObjectives: [
    'Master operations with positive and negative integers',
    'Understand properties of integers',
    'Apply integer operations to real-world problems'
  ],
  questions: [
    {
      id: 1,
      text: 'What is the result of (-5) × (-3) × 2?',
      options: ['30', '-30', '15', '-15'],
      correctAnswer: '30',
      explanation: 'First multiply (-5) × (-3) = 15, then multiply by 2: 15 × 2 = 30',
      difficulty: 'medium',
    },
    {
      id: 2,
      text: 'Which property is shown by: (-2 × 3) × 4 = -2 × (3 × 4)?',
      options: [
        'Associative property',
        'Commutative property',
        'Distributive property',
        'Identity property'
      ],
      correctAnswer: 'Associative property',
      explanation: 'The associative property states that the grouping of factors does not affect the product.',
      difficulty: 'hard',
    },
    {
      id: 3,
      text: 'Simplify: -8 + 5 - (-3)',
      options: ['0', '-16', '-6', '0'],
      correctAnswer: '0',
      explanation: 'First, subtract (-3) which means add 3: -8 + 5 + 3 = 0',
      difficulty: 'medium',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Integer Operations',
      url: 'https://www.youtube.com/watch?v=example7',
      description: 'Comprehensive guide to integer operations'
    },
    {
      type: 'document',
      title: 'Practice Problems',
      url: 'https://example.com/worksheets/integers-advanced',
      description: 'Advanced integer operation practice'
    }
  ]
};