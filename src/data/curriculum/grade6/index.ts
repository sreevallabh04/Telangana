import { Subject, Chapter } from '../../../types';
import * as mathematics from './mathematics';
import * as science from './science';
import * as english from './english';

export const grade6Curriculum: Record<Subject, Chapter[]> = {
  Mathematics: Object.values(mathematics),
  Science: Object.values(science),
  English: Object.values(english),
  Physics: [], // Not available for grade 6
  Chemistry: [], // Not available for grade 6
  Biology: [], // Not available for grade 6
};