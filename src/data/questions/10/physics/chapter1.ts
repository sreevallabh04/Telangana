import { Chapter } from '../../../types';

export const chapter1: Chapter = {
  id: 'physics-10-ch1',
  name: 'Chapter 1',
  description: 'Electricity and Magnetism',
  questions: [
    {
      id: 1,
      text: 'What is Ohm\'s Law?',
      options: [
        'V = IR',
        'F = ma',
        'E = mc²',
        'P = VI'
      ],
      correctAnswer: 'V = IR',
      explanation: 'Ohm\'s Law states that the current (I) flowing through a conductor is directly proportional to the voltage (V) and inversely proportional to the resistance (R), expressed as V = IR.',
    },
  ],
};