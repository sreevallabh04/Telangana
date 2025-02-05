import { Chapter } from '../../../../types';

export const chapter1: Chapter = {
  id: 'science-7-ch1',
  name: 'Chapter 1: Motion and Force',
  description: 'Understanding different types of motion and forces',
  learningObjectives: [
    'Understand types of motion',
    'Learn about forces and their effects',
    'Study speed, velocity, and acceleration'
  ],
  questions: [
    {
      id: 1,
      text: 'What is the difference between speed and velocity?',
      options: [
        'Velocity includes direction, speed does not',
        'Speed includes direction, velocity does not',
        'They are the same thing',
        'Speed is always greater than velocity'
      ],
      correctAnswer: 'Velocity includes direction, speed does not',
      explanation: 'Speed is the rate of motion (distance/time), while velocity is speed in a specific direction.',
      difficulty: 'medium',
    },
    {
      id: 2,
      text: 'Which force always acts towards the center of the Earth?',
      options: ['Gravity', 'Friction', 'Air resistance', 'Magnetic force'],
      correctAnswer: 'Gravity',
      explanation: 'Gravitational force always pulls objects towards the center of the Earth.',
      difficulty: 'easy',
    },
    {
      id: 3,
      text: 'What type of motion is a swinging pendulum?',
      options: [
        'Periodic motion',
        'Linear motion',
        'Random motion',
        'Circular motion'
      ],
      correctAnswer: 'Periodic motion',
      explanation: 'A pendulum exhibits periodic motion as it swings back and forth at regular intervals.',
      difficulty: 'medium',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Forces and Motion',
      url: 'https://www.youtube.com/watch?v=example9',
      description: 'Learn about different types of forces and motion'
    },
    {
      type: 'document',
      title: 'Motion Experiments',
      url: 'https://example.com/worksheets/motion',
      description: 'Simple experiments to understand motion'
    }
  ]
};