import { Grade, Subject, Chapter } from '../../types';

// Import chapters for grade 6
import { chapter1 as math6Ch1 } from './6/mathematics/chapter1';
import { chapter2 as math6Ch2 } from './6/mathematics/chapter2';
import { chapter1 as science6Ch1 } from './6/science/chapter1';
import { chapter2 as science6Ch2 } from './6/science/chapter2';

// Import chapters for grade 7
import { chapter1 as math7Ch1 } from './7/mathematics/chapter1';
import { chapter2 as math7Ch2 } from './7/mathematics/chapter2';
import { chapter1 as science7Ch1 } from './7/science/chapter1';
import { chapter2 as science7Ch2 } from './7/science/chapter2';

// Import chapters for grade 8
import { chapter1 as math8Ch1 } from './8/mathematics/chapter1';
import { chapter1 as physics8Ch1 } from './8/physics/chapter1';
import { chapter1 as chemistry8Ch1 } from './8/chemistry/chapter1';
import { chapter1 as biology8Ch1 } from './8/biology/chapter1';

// Import chapters for grade 9
import { chapter1 as math9Ch1 } from './9/mathematics/chapter1';
import { chapter1 as physics9Ch1 } from './9/physics/chapter1';
import { chapter1 as chemistry9Ch1 } from './9/chemistry/chapter1';
import { chapter1 as biology9Ch1 } from './9/biology/chapter1';

// Import chapters for grade 10
import { chapter1 as math10Ch1 } from './10/mathematics/chapter1';
import { chapter1 as physics10Ch1 } from './10/physics/chapter1';
import { chapter1 as chemistry10Ch1 } from './10/chemistry/chapter1';
import { chapter1 as biology10Ch1 } from './10/biology/chapter1';

export const curriculum: Record<Grade, Record<Subject, Chapter[]>> = {
  6: {
    Mathematics: [math6Ch1, math6Ch2],
    Science: [science6Ch1, science6Ch2],
    English: [],
    Physics: [], // Not available for grade 6
    Chemistry: [], // Not available for grade 6
    Biology: [], // Not available for grade 6
  },
  7: {
    Mathematics: [math7Ch1, math7Ch2],
    Science: [science7Ch1, science7Ch2],
    English: [],
    Physics: [], // Not available for grade 7
    Chemistry: [], // Not available for grade 7
    Biology: [], // Not available for grade 7
  },
  8: {
    Mathematics: [math8Ch1],
    Science: [], // Science splits into Physics, Chemistry, Biology from grade 8
    English: [],
    Physics: [physics8Ch1],
    Chemistry: [chemistry8Ch1],
    Biology: [biology8Ch1],
  },
  9: {
    Mathematics: [math9Ch1],
    Science: [], // Science splits into Physics, Chemistry, Biology
    English: [],
    Physics: [physics9Ch1],
    Chemistry: [chemistry9Ch1],
    Biology: [biology9Ch1],
  },
  10: {
    Mathematics: [math10Ch1],
    Science: [], // Science splits into Physics, Chemistry, Biology
    English: [],
    Physics: [physics10Ch1],
    Chemistry: [chemistry10Ch1],
    Biology: [biology10Ch1],
  },
};