import { Chapter } from '../../../../types';

export const chapter2: Chapter = {
  id: 'science-7-ch2',
  name: 'Chapter 2: Heat and Temperature',
  description: 'Understanding thermal energy and its effects',
  learningObjectives: [
    'Differentiate between heat and temperature',
    'Understand thermal expansion',
    'Learn about heat transfer methods'
  ],
  questions: [
    {
      id: 1,
      text: 'What are the three methods of heat transfer?',
      options: [
        'Conduction, convection, radiation',
        'Evaporation, condensation, boiling',
        'Solid, liquid, gas',
        'Hot, warm, cold'
      ],
      correctAnswer: 'Conduction, convection, radiation',
      explanation: 'Heat can transfer through direct contact (conduction), fluid movement (convection), or electromagnetic waves (radiation).',
      difficulty: 'medium',
    },
    {
      id: 2,
      text: 'Which is an example of conduction?',
      options: [
        'A metal spoon getting hot in hot water',
        'Hot air rising from a radiator',
        'Feeling the heat of the sun',
        'Wind blowing on a hot day'
      ],
      correctAnswer: 'A metal spoon getting hot in hot water',
      explanation: 'Conduction occurs when heat transfers through direct contact, like the hot water heating the metal spoon.',
      difficulty: 'easy',
    },
    {
      id: 3,
      text: 'What happens to most materials when they are heated?',
      options: [
        'They expand',
        'They contract',
        'They stay the same size',
        'They disappear'
      ],
      correctAnswer: 'They expand',
      explanation: 'Most materials expand when heated due to increased molecular motion and spacing.',
      difficulty: 'easy',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Heat Transfer',
      url: 'https://www.youtube.com/watch?v=example10',
      description: 'Learn about different methods of heat transfer'
    },
    {
      type: 'document',
      title: 'Temperature Experiments',
      url: 'https://example.com/worksheets/heat',
      description: 'Experiments demonstrating heat transfer'
    }
  ]
};