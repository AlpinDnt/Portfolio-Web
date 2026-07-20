import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App Component: Komponen utama pembungkus seluruh struktur aplikasi portofolio.
 * Dibungkus dengan <LanguageProvider> untuk menyediakan state multi-bahasa global (ID ⇄ EN).
 */
export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 font-sans selection:bg-sky-500 selection:text-zinc-950">
        
        {/* Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer Section */}
        <Footer />
        
      </div>
    </LanguageProvider>
  );
}

export default App;
