import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Chapter } from '../../types';

interface ChapterListProps {
  chapters: Chapter[];
  onSelectChapter: (chapterId: string) => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelectChapter }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {chapters.map((chapter) => (
        <GlassCard
          key={chapter.id}
          className="cursor-pointer transform hover:scale-105 transition-all duration-300"
          onClick={() => onSelectChapter(chapter.id)}
        >
          <h3 className="text-xl font-semibold text-white mb-2">{chapter.name}</h3>
          <p className="text-gray-300">{chapter.description}</p>
          <div className="mt-4 text-sm text-gray-400">
            {chapter.questions.length} questions
          </div>
        </GlassCard>
      ))}
    </div>
  );
};