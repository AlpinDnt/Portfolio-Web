import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { personalData, translations } from './data/translations';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './components/SocialIcons';
import { Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import useCanvasCursor from './hooks/useCanvasCursor';

import Hero from './components/Hero';
import Loader from './components/Loader';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const t = translations.en;

const CanvasCursor = () => {
  useCanvasCursor('glass-cursor');
  return <canvas id="glass-cursor" aria-hidden="true" />;
};

const GlassNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: 'Top 3', href: '#projects', id: 'projects' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 px-3 sm:px-6">
      <nav
        aria-label="Primary"
        className={`glass-nav relative mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled ? 'shadow-xl' : ''
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute top-1.5 left-5 right-5 h-[2px] rounded-full bg-slate-900/10 dark:bg-white/10 overflow-hidden"
        >
          <span
            className="block h-full rounded-full bg-sky-500 transition-[width] duration-150"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </span>

        <div className="flex items-center justify-between gap-3 pl-3 pr-2 sm:pl-4 sm:pr-2.5 pt-3 pb-2">
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group min-h-10" aria-label="AlpinDnt — home">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-sky-500 text-white font-display font-bold text-base shadow-md shadow-sky-500/40 group-hover:scale-105 transition-transform">
              A
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#17171f]" />
            </span>
            <span className="block leading-tight min-w-0">
              <span className="block font-display text-sm font-bold tracking-tight text-slate-900 dark:text-white truncate">
                {personalData.nickName}
                <span className="text-sky-500">.</span>
              </span>
              <span className="block text-[9px] font-semibold tracking-wider text-slate-500 dark:text-zinc-400 truncate">
                JUNIOR WEB DEVELOPER
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className="relative px-3.5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 group/link"
                >
                  <span className={isActive ? 'text-sky-600 dark:text-sky-300' : 'text-slate-500 dark:text-zinc-400 group-hover/link:text-slate-900 dark:group-hover/link:text-white'}>
                    {link.name}
                  </span>
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-px h-0.5 rounded-full bg-sky-500 origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-50'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Open to work
            </span>
            <ThemeToggle compact />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 h-10 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-all duration-300 shadow-md shadow-sky-500/30 hover:shadow-lg hover:shadow-sky-500/40"
            >
              <span>Hire Me</span>
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              className="md:hidden grid place-items-center w-10 h-10 rounded-xl text-slate-600 dark:text-zinc-200 hover:bg-sky-500/10 hover:text-sky-500 transition"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="glass-nav md:hidden mx-auto max-w-6xl mt-2 rounded-2xl p-2 space-y-1">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? 'true' : undefined}
                className={`flex items-center justify-between px-4 min-h-11 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? 'bg-sky-500/15 text-sky-600 dark:text-sky-300'
                    : 'text-slate-700 dark:text-zinc-100 hover:bg-sky-500/10'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 px-4 min-h-11 rounded-xl bg-sky-500 text-white text-sm font-bold"
          >
            <span>Hire Me</span>
            <Mail className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

const SocialDock = () => (
  <div className="fixed left-3 bottom-4 z-30 hidden lg:flex flex-col gap-2 glass rounded-2xl p-2">
    <a href={personalData.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-xl text-slate-500 dark:text-zinc-400 hover:text-sky-500 transition">
      <GithubIcon className="w-4 h-4" />
    </a>
    <a href={personalData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-xl text-slate-500 dark:text-zinc-400 hover:text-sky-500 transition">
      <LinkedinIcon className="w-4 h-4" />
    </a>
    <a href={personalData.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-xl text-slate-500 dark:text-zinc-400 hover:text-sky-500 transition">
      <InstagramIcon className="w-4 h-4" />
    </a>
    <a href={`mailto:${personalData.email}`} aria-label="Email" className="p-2 rounded-xl text-slate-500 dark:text-zinc-400 hover:text-sky-500 transition">
      <Mail className="w-4 h-4" />
    </a>
  </div>
);

function PortfolioPage() {
  return (
    <div className="min-h-screen font-sans relative">
      <div className="aurora-field" aria-hidden="true">
        <div className="aurora-blob aurora-blob-a" />
        <div className="aurora-blob aurora-blob-b" />
        <div className="aurora-blob aurora-blob-c" />
      </div>
      <CanvasCursor />
      <GlassNav />
      <SocialDock />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export function App() {
  const [loading, setLoading] = useState(
    () =>
      typeof window !== 'undefined' &&
      !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (!loading) return undefined;
    document.body.style.overflow = 'hidden';
    const startedAt = Date.now();
    const MIN_MS = 1400;
    const MAX_MS = 2600;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      document.body.style.overflow = '';
      setLoading(false);
    };
    const finishAfterMin = () => {
      const elapsed = Date.now() - startedAt;
      setTimeout(finish, Math.max(0, MIN_MS - elapsed));
    };
    if (document.readyState === 'complete') {
      finishAfterMin();
    } else {
      window.addEventListener('load', finishAfterMin, { once: true });
    }
    const cap = setTimeout(finish, MAX_MS);
    return () => {
      clearTimeout(cap);
      window.removeEventListener('load', finishAfterMin);
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <Loader key="boot-loader" />}</AnimatePresence>
      <PortfolioPage />
    </ThemeProvider>
  );
}

export default App;
