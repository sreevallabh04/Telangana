import { Chapter } from '../../../../types';

export const chapter2: Chapter = {
  id: 'science-6-ch2',
  name: 'Chapter 2: Matter and Materials',
  description: 'Understanding matter, its properties, and states',
  learningObjectives: [
    'Identify different states of matter',
    'Understand physical and chemical changes',
    'Learn about properties of materials'
  ],
  questions: [
    {
      id: 1,
      text: 'What are the three main states of matter?',
      options: [
        'Solid, liquid, gas',
        'Hot, cold, warm',
        'Big, medium, small',
        'Hard, soft, medium'
      ],
      correctAnswer: 'Solid, liquid, gas',
      explanation: 'Matter exists in three main states: solid (fixed shape and volume), liquid (fixed volume but takes container shape), and gas (no fixed shape or volume).',
      difficulty: 'easy',
    },
    {
      id: 2,
      text: 'Which change is a chemical change?',
      options: [
        'Rusting of iron',
        'Melting of ice',
        'Boiling of water',
        'Breaking a glass'
      ],
      correctAnswer: 'Rusting of iron',
      explanation: 'Rusting is a chemical change because it creates a new substance (iron oxide) with different properties from the original iron.',
      difficulty: 'medium',
    },
    {
      id: 3,
      text: 'What happens to particles during heating?',
      options: [
        'They move faster',
        'They move slower',
        'They disappear',
        'They stay still'
      ],
      correctAnswer: 'They move faster',
      explanation: 'When matter is heated, its particles gain energy and move faster, increasing their kinetic energy.',
      difficulty: 'medium',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'States of Matter',
      url: 'https://www.youtube.com/watch?v=example4',
      description: 'Visual explanation of different states of matter'
    },
    {
      type: 'document',
      title: 'Matter Experiments',
      url: 'https://example.com/worksheets/matter',
      description: 'Simple experiments to understand properties of matter'
    }
  ]
};