import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { FilterSection } from '../components/FilterSection';
import { Pagination } from '../components/Pagination';
import { Product } from '../types';

const ALL_PRODUCTS: Product[] = [
  {
    id: 7,
    name: "Men's Wool Coat",
    price: 299.99,
    description: "Classic wool coat perfect for winter.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
    category: "Men's Outerwear",
    rating: 4.7,
    reviews: []
  },
  {
    id: 8,
    name: "Women's Ankle Boots",
    price: 159.99,
    description: "Stylish leather ankle boots.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
    category: "Footwear",
    rating: 4.5,
    reviews: []
  }
];

const CATEGORIES = [
  "All",
  "Men's Outerwear",
  "Women's Outerwear",
  "Men's Tops",
  "Women's Tops",
  "Footwear",
  "Accessories"
];

const ITEMS_PER_PAGE = 6;

export function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <FilterSection
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <div className="flex-1">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-600">
              Showing {Math.min(startIndex + 1, filteredProducts.length)} - {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}