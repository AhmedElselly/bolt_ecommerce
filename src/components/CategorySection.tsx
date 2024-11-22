import React from 'react';

const categories = [
  {
    id: 1,
    name: "Women's Collection",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    itemCount: 243
  },
  {
    id: 2,
    name: "Men's Collection",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    itemCount: 156
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=800&q=80",
    itemCount: 89
  }
];

export function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-200">{category.itemCount} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}