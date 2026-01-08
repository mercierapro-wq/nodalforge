import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center mb-4 inline-flex"
            >
              <img src="/nodalforge_navbar.png" alt="NodalForge" className="h-12 w-auto" />
            </a>
            <p className="text-slate-400 mb-4">
              Créateur de produits digitaux innovants pour simplifier votre quotidien.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mercierapro-wq" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
             
              <a href="https://www.linkedin.com/in/alexis-mercier-54284792/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produits</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://cardify.nodalforge.cloud/" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Cardify
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} NodalForge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
