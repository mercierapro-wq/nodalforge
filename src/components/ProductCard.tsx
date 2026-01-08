import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const handleClick = () => {
    window.open(product.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      {/* Status Badge */}
      {product.status && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Sparkles className="w-3 h-3" />
            {product.status === 'new' && 'Nouveau'}
            {product.status === 'popular' && 'Populaire'}
            {product.status === 'updated' && 'Mis à jour'}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-cyan-500/10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23334155" width="400" height="300"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + product.title + '%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {product.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
            Découvrir
          </span>
          <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/10" />
      </div>
    </motion.div>
  );
};
