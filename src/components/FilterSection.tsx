import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterSectionProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export function FilterSection({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  showFilters,
  setShowFilters
}: FilterSectionProps) {
  return (
    <div className="md:w-64 flex-shrink-0">
      <div className="sticky top-24">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <button 
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className={`space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">Min Price: ${priceRange.min}</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Max Price: ${priceRange.max}</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}