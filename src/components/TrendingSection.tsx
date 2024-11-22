import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

const TRENDING_PRODUCTS: Product[] = [
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 199.99,
    description: "Premium UV protection sunglasses with a timeless design.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    rating: 4.9,
    reviews: [
      {
        id: 4,
        userId: 4,
        rating: 5,
        comment: "Excellent quality and style!",
        date: "2024-03-11"
      }
    ]
  },
  {
    id: 5,
    name: "Leather Weekend Bag",
    price: 299.99,
    description: "Handcrafted leather travel bag, perfect for short trips.",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    rating: 4.7,
    reviews: [
      {
        id: 5,
        userId: 5,
        rating: 5,
        comment: "Amazing quality, worth every penny!",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: 6,
    name: "Silk Summer Dress",
    price: 159.99,
    description: "Elegant silk dress perfect for summer occasions.",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80",
    category: "Women's Dresses",
    rating: 4.8,
    reviews: [
      {
        id: 6,
        userId: 6,
        rating: 5,
        comment: "Beautiful dress, fits perfectly!",
        date: "2024-03-09"
      }
    ]
  }
];

export function TrendingSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRENDING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}