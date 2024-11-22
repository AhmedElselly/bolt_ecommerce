import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, ShoppingCart, Search } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Header() {
  const { cart, wishlist } = useStore();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl font-bold">FashionStore</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-black transition-colors">
                Products
              </Link>
            </nav>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-black"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden py-2 border-t border-gray-200">
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-black transition-colors">
              Products
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}