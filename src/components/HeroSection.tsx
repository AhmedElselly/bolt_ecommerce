import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=80"
        alt="Hero fashion"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-6">New Season Arrivals</h1>
          <p className="text-xl mb-8">
            Discover the latest trends in fashion and explore our new collection of premium clothing and accessories.
          </p>
          <button className="btn bg-white text-black hover:bg-gray-100 group">
            Shop Now
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}