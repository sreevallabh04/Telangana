import React from 'react';
import { BookOpen, Calculator, FlaskRound as Flask, Atom, Brain, Microscope } from 'lucide-react';
import { Subject, SubjectInfo } from '../types';

export const getSubjectInfo = (subject: Subject): SubjectInfo => {
  const subjectMap: Record<Subject, SubjectInfo> = {
    Mathematics: {
      name: 'Mathematics',
      icon: Calculator,
      description: 'Master numbers, algebra, and problem-solving',
      color: 'bg-blue-500',
    },
    Science: {
      name: 'Science',
      icon: Flask,
      description: 'Explore the wonders of the natural world',
      color: 'bg-green-500',
    },
    English: {
      name: 'English',
      icon: BookOpen,
      description: 'Enhance your language and communication skills',
      color: 'bg-yellow-500',
    },
    Physics: {
      name: 'Physics',
      icon: Atom,
      description: 'Understand the fundamental laws of the universe',
      color: 'bg-purple-500',
    },
    Chemistry: {
      name: 'Chemistry',
      icon: Flask,
      description: 'Discover the science of matter and reactions',
      color: 'bg-pink-500',
    },
    Biology: {
      name: 'Biology',
      icon: Microscope,
      description: 'Learn about life and living organisms',
      color: 'bg-emerald-500',
    },
  };

  return subjectMap[subject];
};