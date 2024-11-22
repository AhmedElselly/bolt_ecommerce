import React from 'react';
import { Send } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in Touch</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections,
          special offers, and exclusive events.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button type="submit" className="btn">
            Subscribe
            <Send className="ml-2 w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}