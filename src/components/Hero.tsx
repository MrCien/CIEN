import React from 'react';
import { BookOpen, Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Welcome to SN6 Books</h1>
          <p className="text-xl mb-8">Discover the magic of Indian literature</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="search"
                placeholder="Search for books or authors..."
                className="w-full px-4 py-2 pl-10 rounded-lg text-gray-900"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};