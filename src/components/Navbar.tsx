import React from 'react';
import { motion } from 'framer-motion';
import { Boxes } from 'lucide-react';

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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Boxes className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">NodalForge</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#products" className="text-slate-300 hover:text-white transition-colors">
              Produits
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              À propos
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
