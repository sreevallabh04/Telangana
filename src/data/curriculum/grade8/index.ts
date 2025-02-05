import { Subject, Chapter } from '../../../types';
import * as mathematics from './mathematics';
import * as physics from './physics';
import * as chemistry from './chemistry';
import * as biology from './biology';
import * as english from './english';

export const grade8Curriculum: Record<Subject, Chapter[]> = {
  Mathematics: Object.values(mathematics),
  Science: [], // Science splits into Physics, Chemistry, Biology from grade 8
  Physics: Object.values(physics),
  Chemistry: Object.values(chemistry),
  Biology: Object.values(biology),
  English: Object.values(english),
};