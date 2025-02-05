import { Chapter } from '../../../../types';

export const chapter1: Chapter = {
  id: 'science-6-ch1',
  name: 'Chapter 1: Living World',
  description: 'Introduction to living organisms and their characteristics',
  learningObjectives: [
    'Understand the characteristics of living things',
    'Learn about different types of cells',
    'Explore basic life processes'
  ],
  questions: [
    {
      id: 1,
      text: 'What is the basic unit of life?',
      options: ['Cell', 'Atom', 'Molecule', 'Tissue'],
      correctAnswer: 'Cell',
      explanation: 'The cell is the basic structural and functional unit of all living organisms.',
      difficulty: 'easy',
    },
    {
      id: 2,
      text: 'Which of these is NOT a characteristic of living things?',
      options: [
        'Conducting electricity',
        'Growth',
        'Reproduction',
        'Response to stimuli'
      ],
      correctAnswer: 'Conducting electricity',
      explanation: 'While some living things may conduct electricity, it is not a defining characteristic of life. The other options are all basic life processes.',
      difficulty: 'medium',
    },
    {
      id: 3,
      text: 'What type of cell has a nucleus?',
      options: ['Eukaryotic', 'Prokaryotic', 'Both', 'Neither'],
      correctAnswer: 'Eukaryotic',
      explanation: 'Eukaryotic cells have a true nucleus containing genetic material, while prokaryotic cells do not.',
      difficulty: 'medium',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Introduction to Cells',
      url: 'https://www.youtube.com/watch?v=example3',
      description: 'Learn about different types of cells and their functions'
    },
    {
      type: 'document',
      title: 'Cell Diagrams',
      url: 'https://example.com/worksheets/cells',
      description: 'Detailed diagrams of plant and animal cells'
    }
  ]
};