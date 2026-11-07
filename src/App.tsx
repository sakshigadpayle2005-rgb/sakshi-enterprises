import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MosquitoNets } from './pages/MosquitoNets';
import { Aluminium } from './pages/Aluminium';
import { SteelFabrication } from './pages/SteelFabrication';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A] text-[#333333]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-[#FF6B35] focus:text-white focus:font-heading focus:font-bold focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mosquito-net-solutions" element={<MosquitoNets />} />
          <Route path="/aluminium-solutions" element={<Aluminium />} />
          <Route path="/steel-fabrication" element={<SteelFabrication />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* Vercel Web Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
