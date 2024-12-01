import React from 'react';
import { categories } from '../data/books';
import { SearchFilters } from '../types';

interface FiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Filters</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
          className="w-full p-2 border rounded-md"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
            placeholder="Min"
            className="w-1/2 p-2 border rounded-md"
          />
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
            placeholder="Max"
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
      </div>
    </div>
  );
};