import React from 'react';
import { SubjectCard } from './SubjectCard';
import { Subject, Grade } from '../../types';
import { getSubjectInfo } from '../../utils/subjectUtils';

interface SubjectGridProps {
  grade: Grade;
  onSelectSubject: (subject: Subject) => void;
}

export const SubjectGrid: React.FC<SubjectGridProps> = ({ grade, onSelectSubject }) => {
  const getAvailableSubjects = (grade: Grade): Subject[] => {
    if (grade < 8) {
      return ['Mathematics', 'Science', 'English'];
    }
    return ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
  };

  const subjects = getAvailableSubjects(grade);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject}
          subject={getSubjectInfo(subject)}
          onClick={() => onSelectSubject(subject)}
        />
      ))}
    </div>
  );
};