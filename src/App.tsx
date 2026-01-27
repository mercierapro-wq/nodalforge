import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
