import { Question } from '../types';

export const questions: Record<string, Question[]> = {
  Mathematics: [
    {
      id: 1,
      text: 'What is the value of π (pi) to two decimal places?',
      options: ['3.14', '3.16', '3.12', '3.18'],
      correctAnswer: '3.14',
      explanation: 'Pi (π) is approximately equal to 3.14159..., which rounds to 3.14.',
    },
    {
      id: 2,
      text: 'Solve for x: 2x + 5 = 13',
      options: ['x = 4', 'x = 6', 'x = 8', 'x = 3'],
      correctAnswer: 'x = 4',
      explanation: 'Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4',
    },
  ],
  Science: [
    {
      id: 1,
      text: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 'Au',
      explanation: 'Au comes from the Latin word for gold, "aurum".',
    },
    {
      id: 2,
      text: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      correctAnswer: 'Mars',
      explanation: 'Mars appears red due to iron oxide (rust) on its surface.',
    },
  ],
  Physics: [
    {
      id: 1,
      text: 'What is the SI unit of force?',
      options: ['Newton', 'Joule', 'Watt', 'Pascal'],
      correctAnswer: 'Newton',
      explanation: 'The Newton (N) is the SI unit of force, equal to 1 kg⋅m/s².',
    },
  ],
  Chemistry: [
    {
      id: 1,
      text: 'What is the atomic number of Carbon?',
      options: ['6', '12', '8', '14'],
      correctAnswer: '6',
      explanation: 'Carbon has 6 protons in its nucleus, giving it an atomic number of 6.',
    },
  ],
  Biology: [
    {
      id: 1,
      text: 'What is the powerhouse of the cell?',
      options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi Body'],
      correctAnswer: 'Mitochondria',
      explanation: 'Mitochondria are responsible for cellular respiration and energy production.',
    },
  ],
  English: [
    {
      id: 1,
      text: 'Which of these is a proper noun?',
      options: ['London', 'city', 'building', 'street'],
      correctAnswer: 'London',
      explanation: 'London is a proper noun as it names a specific city.',
    },
  ],
};