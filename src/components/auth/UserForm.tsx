import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { User, Grade } from '../../types';

interface UserFormProps {
  onSubmit: (user: User) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState<Grade>(6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit({ name, grade });
    }
  };

  return (
    <GlassCard className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 
              focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Select Grade
          </label>
          <select
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value) as Grade)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
              text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 
              focus:border-transparent transition-all duration-300"
          >
            {[6, 7, 8, 9, 10].map((g) => (
              <option key={g} value={g} className="bg-slate-800">
                Grade {g}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 
            rounded-lg text-white font-semibold transform hover:scale-105 
            transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          Continue
        </button>
      </form>
    </GlassCard>
  );
};