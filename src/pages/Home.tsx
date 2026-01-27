import React from 'react';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nos Produits
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Découvrez notre sélection de produits digitaux conçus avec passion
          </p>
        </div>
        
        <ProductGrid />
      </section>
    </main>
  );
};
