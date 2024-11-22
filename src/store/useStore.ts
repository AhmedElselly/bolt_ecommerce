import { create } from 'zustand';
import { Product, WishlistItem } from '../types';

interface StoreState {
  wishlist: WishlistItem[];
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  cart: { productId: number; quantity: number }[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  wishlist: [],
  addToWishlist: (productId) =>
    set((state) => ({
      wishlist: [...state.wishlist, { productId, dateAdded: new Date().toISOString() }],
    })),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.productId !== productId),
    })),
  cart: [],
  addToCart: (productId) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.productId === productId);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { productId, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    })),
}));