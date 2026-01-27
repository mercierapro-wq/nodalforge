import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
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

      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
