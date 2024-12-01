import React from 'react';
import { categories } from '../data/videos';

interface CategoryBarProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex gap-3 overflow-x-auto py-3 px-4 no-scrollbar">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-1.5 rounded-full whitespace-nowrap ${
            selectedCategory === category.id
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};