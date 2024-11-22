import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Women's Casual Denim Jacket",
    price: 89.99,
    description: "Classic denim jacket with a modern twist. Perfect for layering in any season.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
    category: "Women's Outerwear",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userId: 1,
        rating: 5,
        comment: "Love this jacket! Perfect fit and great quality.",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: 2,
    name: "Men's Premium Cotton T-Shirt",
    price: 29.99,
    description: "Ultra-soft premium cotton t-shirt with a comfortable fit.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80",
    category: "Men's Tops",
    rating: 4.8,
    reviews: [
      {
        id: 2,
        userId: 2,
        rating: 5,
        comment: "Best t-shirt I've ever owned. Buying more colors!",
        date: "2024-03-09"
      }
    ]
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    price: 129.99,
    description: "Elegant leather crossbody bag with multiple compartments.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
    category: "Accessories",
    rating: 4.6,
    reviews: [
      {
        id: 3,
        userId: 3,
        rating: 4,
        comment: "Beautiful bag, very practical for daily use.",
        date: "2024-03-08"
      }
    ]
  }
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {SAMPLE_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}