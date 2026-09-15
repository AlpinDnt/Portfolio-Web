import React from 'react';
import { personalData, translations } from '../data/translations';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import GlassCube3D from './Cube3D';
import Reveal from './Reveal';

const t = translations.en;

const CodeTerminal = () => {
  const codeLines = [
    { num: 1, text: 'const developer = {', color: 'text-slate-500 dark:text-zinc-400' },
    { num: 2, text: '  name: "I Putu Alvi Rupa Dinata",', color: 'text-emerald-600 dark:text-emerald-400 pl-4' },
    { num: 3, text: '  role: "Junior Web Developer",', color: 'text-emerald-600 dark:text-emerald-400 pl-4' },
    { num: 4, text: '  location: "Bali, Indonesia",', color: 'text-emerald-600 dark:text-emerald-400 pl-4' },
    { num: 5, text: '  skills: ["React", "Next.js", "Tailwind", "JS"],', color: 'text-sky-600 dark:text-sky-400 pl-4' },
    { num: 6, text: '  status: "Available for Hire",', color: 'text-amber-600 dark:text-amber-400 pl-4' },
    { num: 7, text: '  coffee: true', color: 'text-purple-600 dark:text-purple-400 pl-4' },
    { num: 8, text: '};', color: 'text-slate-500 dark:text-zinc-400' },
  ];

  return (
    <div className="glass-strong w-full rounded-3xl overflow-hidden font-mono text-xs sm:text-sm">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-900/10 dark:border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] text-slate-500 dark:text-zinc-500 font-semibold select-none">developer.js</span>
        <div className="w-10" />
      </div>
      <div className="p-6 space-y-2 select-text">
        {codeLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.07 }}
            className="flex items-start"
          >
            <span className="text-slate-400 dark:text-zinc-600 text-right pr-4 select-none w-5">{line.num}</span>
            <span className={line.color}>{line.text}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="flex items-center mt-2 pl-5"
          aria-hidden="true"
        >
          <span className="w-2.5 h-4 bg-sky-500 rounded-sm" />
        </motion.div>
      </div>
    </div>
  );
};

export const Hero = () => (
  <section id="home" className="pt-28 sm:pt-32 pb-10 scroll-mt-28">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <Reveal className="space-y-6">
        <div className="glass inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-zinc-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{t.hero.badge}</span>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-wide text-sky-600 dark:text-sky-300">{t.hero.greeting}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            {personalData.name}
          </h1>
          <p className="text-xl font-semibold text-slate-700 dark:text-zinc-200">{t.hero.role}</p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-400 max-w-xl">
            {t.hero.tagline} {t.hero.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-sky-500/30 hover:-translate-y-0.5"
          >
            <span>{t.hero.viewProjects}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm text-slate-800 dark:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-sky-500" />
            <span>{t.hero.contactMe}</span>
          </a>
          <a
            href={personalData.cvUrl}
            download="AlpinDnt-CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors"
          >
            <Download className="w-4 h-4 text-sky-500" />
            <span>{t.hero.downloadCv}</span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="space-y-6">
        <GlassCube3D />
        <CodeTerminal />
      </Reveal>
    </div>
  </section>
);

export default Hero;
