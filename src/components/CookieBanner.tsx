import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GA_MEASUREMENT_ID = 'G-MSDMJ85N5W';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  const loadGA = () => {
    if (window.document.getElementById('google-analytics')) return;

    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script1.async = true;
    script1.id = 'google-analytics';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    
    if (!consent) {
      // Petit délai pour l'animation d'entrée
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      loadGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
    loadGA();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-1">
                Nous respectons votre vie privée
              </h3>
              <p className="text-slate-300 text-sm">
                Nous utilisons des cookies pour analyser notre trafic et améliorer votre expérience. 
                En cliquant sur "Accepter", vous consentez à l'utilisation de Google Analytics. 
                Consultez notre <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Politique de confidentialité</a>.
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-lg shadow-blue-900/20"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
