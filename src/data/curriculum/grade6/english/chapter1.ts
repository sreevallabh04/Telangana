import { Chapter } from '../../../../types';

export const chapter1: Chapter = {
  id: 'english-6-ch1',
  name: 'Chapter 1: Grammar Fundamentals',
  description: 'Basic grammar concepts and sentence structure',
  learningObjectives: [
    'Identify parts of speech',
    'Understand sentence structure',
    'Use proper punctuation'
  ],
  questions: [
    {
      id: 1,
      text: 'Which of these is a proper noun?',
      options: ['London', 'city', 'building', 'street'],
      correctAnswer: 'London',
      explanation: 'London is a proper noun because it names a specific city. Proper nouns are always capitalized.',
      difficulty: 'easy',
    },
    {
      id: 2,
      text: 'What type of sentence is "How beautiful the sunset is!"?',
      options: [
        'Exclamatory',
        'Declarative',
        'Interrogative',
        'Imperative'
      ],
      correctAnswer: 'Exclamatory',
      explanation: 'This sentence expresses strong emotion and ends with an exclamation mark, making it an exclamatory sentence.',
      difficulty: 'medium',
    },
    {
      id: 3,
      text: 'Which word is a verb in "The cat sleeps on the mat"?',
      options: ['sleeps', 'cat', 'on', 'mat'],
      correctAnswer: 'sleeps',
      explanation: 'Sleeps is a verb because it shows the action being performed by the subject (cat).',
      difficulty: 'easy',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Parts of Speech',
      url: 'https://www.youtube.com/watch?v=example5',
      description: 'Learn about different parts of speech with examples'
    },
    {
      type: 'document',
      title: 'Grammar Exercises',
      url: 'https://example.com/worksheets/grammar',
      description: 'Practice exercises for basic grammar concepts'
    }
  ]
};