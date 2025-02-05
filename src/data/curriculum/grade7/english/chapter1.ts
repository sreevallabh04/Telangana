import { Chapter } from '../../../../types';

export const chapter1: Chapter = {
  id: 'english-7-ch1',
  name: 'Chapter 1: Advanced Grammar',
  description: 'Complex sentence structures and advanced grammar concepts',
  learningObjectives: [
    'Master complex sentence structures',
    'Understand verb tenses',
    'Use advanced punctuation correctly'
  ],
  questions: [
    {
      id: 1,
      text: 'Which sentence uses the past perfect tense?',
      options: [
        'I had finished my homework before dinner',
        'I finished my homework before dinner',
        'I am finishing my homework before dinner',
        'I will finish my homework before dinner'
      ],
      correctAnswer: 'I had finished my homework before dinner',
      explanation: 'The past perfect tense uses "had" + past participle to show an action completed before another past action.',
      difficulty: 'medium',
    },
    {
      id: 2,
      text: 'Identify the type of clause in "while I was sleeping"',
      options: [
        'Dependent clause',
        'Independent clause',
        'Main clause',
        'Noun clause'
      ],
      correctAnswer: 'Dependent clause',
      explanation: 'This is a dependent clause because it cannot stand alone as a complete sentence and begins with a subordinating conjunction (while).',
      difficulty: 'hard',
    },
    {
      id: 3,
      text: 'Which sentence uses a semicolon correctly?',
      options: [
        'I love reading; my sister prefers sports',
        'I love reading, my sister prefers sports',
        'I love reading; and my sister prefers sports',
        'I love reading; but, my sister prefers sports'
      ],
      correctAnswer: 'I love reading; my sister prefers sports',
      explanation: 'A semicolon correctly joins two related independent clauses without a coordinating conjunction.',
      difficulty: 'medium',
    }
  ],
  resources: [
    {
      type: 'video',
      title: 'Advanced Grammar Concepts',
      url: 'https://www.youtube.com/watch?v=example11',
      description: 'Learn about complex grammar structures'
    },
    {
      type: 'document',
      title: 'Grammar Practice',
      url: 'https://example.com/worksheets/advanced-grammar',
      description: 'Advanced grammar exercises'
    }
  ]
};