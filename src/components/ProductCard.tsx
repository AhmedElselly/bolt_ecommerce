import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, addToCart, wishlist } = useStore();
  const isWishlisted = wishlist.some((item) => item.productId === product.id);

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {product.name}
          </h3>
          <button
            onClick={() => addToWishlist(product.id)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'
              }`}
            />
          </button>
        </div>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating
                  ? 'fill-yellow-400 stroke-yellow-400'
                  : 'stroke-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">
            ({product.reviews.length})
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product.id)}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}