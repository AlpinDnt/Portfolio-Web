import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/translations';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

/**
 * CodeTerminal: Komponen simulasi terminal IDE/Editor kode yang teranimasi.
 */
const CodeTerminal = () => {
  const { lang } = useLanguage();

  const codeLines = lang === 'id' 
    ? [
        { num: 1, text: 'const developer = {', color: 'text-zinc-400' },
        { num: 2, text: '  nama: "I Putu Alvi Rupa Dinata",', color: 'text-emerald-400 pl-4' },
        { num: 3, text: '  peran: "Junior Web Developer",', color: 'text-emerald-400 pl-4' },
        { num: 4, text: '  domisili: "Bali, Indonesia",', color: 'text-emerald-400 pl-4' },
        { num: 5, text: '  keahlian: ["React", "Tailwind", "JS"],', color: 'text-sky-400 pl-4' },
        { num: 6, text: '  status: "Tersedia untuk Pekerjaan",', color: 'text-amber-400 pl-4' },
        { num: 7, text: '  kopi: true', color: 'text-purple-400 pl-4' },
        { num: 8, text: '};', color: 'text-zinc-400' },
      ]
    : [
        { num: 1, text: 'const developer = {', color: 'text-zinc-400' },
        { num: 2, text: '  name: "I Putu Alvi Rupa Dinata",', color: 'text-emerald-400 pl-4' },
        { num: 3, text: '  role: "Junior Web Developer",', color: 'text-emerald-400 pl-4' },
        { num: 4, text: '  location: "Bali, Indonesia",', color: 'text-emerald-400 pl-4' },
        { num: 5, text: '  skills: ["React", "Tailwind", "JS"],', color: 'text-sky-400 pl-4' },
        { num: 6, text: '  status: "Available for Hire",', color: 'text-amber-400 pl-4' },
        { num: 7, text: '  coffee: true', color: 'text-purple-400 pl-4' },
        { num: 8, text: '};', color: 'text-zinc-400' },
      ];

  return (
    <div className="w-full rounded-2xl bg-zinc-950/90 border border-zinc-800/80 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm glow-box">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800/60">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] text-zinc-500 font-semibold select-none">developer.js</span>
        <div className="w-10" />
      </div>

      {/* Terminal Content Lines */}
      <div className="p-6 space-y-2 select-text">
        {codeLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="flex items-start"
          >
            <span className="text-zinc-600 text-right pr-4 select-none w-5">{line.num}</span>
            <span className={line.color}>{line.text}</span>
          </motion.div>
        ))}

        {/* Cursor Teranimasi */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="flex items-center mt-2 pl-5"
        >
          <span className="w-2.5 h-4 bg-sky-500 rounded-xs" />
        </motion.div>
      </div>
    </div>
  );
};

/**
 * Hero: Section pembuka di panel kanan yang menampilkan badge, deskripsi detail, tombol download CV, dan terminal kode teranimasi.
 */
export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="space-y-8 pt-6">
      
      {/* Intro Teks */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 text-left"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{t.hero.badge}</span>
        </div>

        {/* Bio Narrative */}
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          {t.hero.description}
        </p>

        {/* Buttons & Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-sm transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5"
          >
            <span>{t.hero.viewProjects}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 text-white font-medium text-sm transition-all duration-300 hover:border-zinc-500"
          >
            <span>{t.hero.contactMe}</span>
          </a>

          <a
            href={personalData.cvUrl}
            download="AlpinDnt-CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-zinc-400 hover:text-white font-medium text-sm transition-colors border border-transparent hover:border-zinc-800"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>{t.hero.downloadCv}</span>
          </a>
        </div>
      </motion.div>

      {/* Terminal Code Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full"
      >
        <CodeTerminal />
      </motion.div>

    </section>
  );
};

export default Hero;
