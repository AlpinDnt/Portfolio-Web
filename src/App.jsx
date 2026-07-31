import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { personalData } from './data/translations';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './components/SocialIcons';
import { Mail, Globe } from 'lucide-react';
import LanguageToggle from './components/LanguageToggle';

// Right Panel Sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * MainLayout: Mengatur tata letak Split-Screen (Kiri Fixed, Kanan Scrollable)
 * serta mengimplementasikan Scroll Spy untuk mencocokkan navigasi aktif.
 */
function MainLayout() {
  const { t, lang } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  // Efek Scroll Spy untuk melacak posisi scroll dan memperbarui menu aktif di kiri
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250; // Offset deteksi aktif

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 font-sans selection:bg-sky-500 selection:text-zinc-950 relative">
      
      {/* Container Utama Grid 12 Kolom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ==========================================
              KOLOM KIRI: FIXED PANEL (Desktop Only)
              ========================================== */}
          <aside className="lg:col-span-5 lg:sticky lg:top-0 lg:h-screen lg:py-24 py-12 flex flex-col justify-between border-b lg:border-b-0 border-zinc-900 z-20">
            
            {/* Header & Bio Singkat */}
            <div className="space-y-4">
              {/* Logo / Nama */}
              <a href="#home" className="text-2xl font-extrabold tracking-tight text-white hover:text-sky-400 transition-colors">
                {personalData.nickName}
                <span className="text-sky-400">.</span>
              </a>
              
              {/* Peran Pekerjaan */}
              <div className="space-y-2 pt-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {personalData.name}
                </h1>
                <h2 className="text-lg sm:text-xl font-semibold text-sky-400">
                  {t.hero.role}
                </h2>
              </div>
              
              {/* Deskripsi Singkat */}
              <p className="text-zinc-400 text-sm sm:text-base max-w-sm leading-relaxed">
                {t.hero.tagline}
              </p>

              {/* Language Selector Indicator */}
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </div>

            {/* Navigasi Vertikal Pintar (Scroll Spy) - Tersembunyi di Mobile */}
            <nav className="hidden lg:flex flex-col gap-4 py-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className="flex items-center gap-4 group py-1.5 w-fit"
                  >
                    {/* Garis Indikator Aktif */}
                    <span className={`h-px transition-all duration-300 ${
                      isActive 
                        ? 'w-16 bg-sky-400' 
                        : 'w-8 bg-zinc-700 group-hover:w-16 group-hover:bg-zinc-300'
                    }`} />
                    
                    {/* Teks Link */}
                    <span className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive 
                        ? 'text-white translate-x-1' 
                        : 'text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-1'
                    }`}>
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Sosial Media & Kontak Info di Bagian Bawah */}
            <div className="space-y-6 pt-6 lg:pt-0">
              <div className="flex items-center gap-4 text-zinc-400">
                <a href={personalData.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href={personalData.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href={`mailto:${personalData.email}`} className="p-2 rounded-xl bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </aside>

          {/* ==========================================
              KOLOM KANAN: SCROLLABLE CONTENT PANEL
              ========================================== */}
          <main className="lg:col-span-7 lg:py-24 py-6 space-y-24 lg:space-y-32">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </main>

        </div>
      </div>

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

export default App;
