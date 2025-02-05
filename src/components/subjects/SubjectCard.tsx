import React from 'react';
import { SubjectInfo } from '../../types';

interface SubjectCardProps {
  subject: SubjectInfo;
  onClick: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  const Icon = subject.icon;

  return (
    <button
      onClick={onClick}
      className={`relative p-6 rounded-xl backdrop-blur-lg bg-white/10 border 
        border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl 
        hover:bg-white/20 group w-full`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${subject.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
          <Icon />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-white mb-1">{subject.name}</h3>
          <p className="text-sm text-gray-300">{subject.description}</p>
        </div>
      </div>
    </button>
  );
};