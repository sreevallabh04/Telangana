import { Grade, Subject, Chapter } from '../../types';

// Import grade-specific curricula
import { grade6Curriculum } from './grade6';
import { grade7Curriculum } from './grade7';
import { grade8Curriculum } from './grade8';
import { grade9Curriculum } from './grade9';
import { grade10Curriculum } from './grade10';

export const curriculum: Record<Grade, Record<Subject, Chapter[]>> = {
  6: grade6Curriculum,
  7: grade7Curriculum,
  8: grade8Curriculum,
  9: grade9Curriculum,
  10: grade10Curriculum,
};