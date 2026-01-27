import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center"
          >
            <img src="/nodalforge_navbar.png" alt="NodalForge" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center gap-6">
            <a href="/#products" className="text-slate-300 hover:text-white transition-colors">
              Produits
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
