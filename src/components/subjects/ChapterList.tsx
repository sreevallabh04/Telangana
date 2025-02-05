import React, { useState } from 'react';
import GlassCard from "../GlassCard";
import { Chapter } from '../../types';

interface ChapterListProps {
  chapters: Chapter[];
  onSelectChapter: (chapterId: string) => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelectChapter }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  // Handle selecting a chapter and displaying its questions
  const handleSelectChapter = (chapterId: string) => {
    setSelectedChapterId(chapterId);  // Set the selected chapter id
    onSelectChapter(chapterId);  // Trigger the parent callback
  };

  // Find the selected chapter's questions to display
  const selectedChapter = chapters.find(chapter => chapter.id === selectedChapterId);

  return (
    <div>
      {/* Display Chapter List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <GlassCard
            key={chapter.id}
            className="cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={() => handleSelectChapter(chapter.id)}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{chapter.name}</h3>
            <p className="text-gray-300">{chapter.description}</p>
            <div className="mt-4 text-sm text-gray-400">
              {chapter.questions.length} questions
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Display Selected Chapter's Questions */}
      {selectedChapter && (
        <div className="mt-8 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Questions from {selectedChapter.name}</h2>
          <ul className="space-y-4">
            {selectedChapter.questions.map((question, index) => (
              <li key={index} className="text-gray-300">
                <p className="font-semibold">{question.text}</p>
                {/* Display other question details, if necessary */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
