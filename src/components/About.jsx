import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { translations } from '../data/translations';
import Reveal from './Reveal';

const t = translations.en;

const stats = [
  { label: t.about.stats.projects, value: '4+' },
  { label: t.about.stats.hours, value: '250+' },
  { label: t.about.stats.skills, value: '6+' },
  { label: t.about.stats.commits, value: '90+' },
];

export const About = () => (
  <section id="about" className="py-14 scroll-mt-28">
    <div className="glass rounded-[2rem] p-6 sm:p-10 space-y-8">
      <Reveal className="space-y-3">
        <div className="glass-chip inline-flex items-center gap-2">
          <User className="w-3.5 h-3.5 text-sky-500" />
          <span className="text-xs font-bold">{t.about.badge}</span>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {t.about.title}
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base">{t.about.subtitle}</p>
      </Reveal>

      <Reveal delay={0.08} className="space-y-4 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
        <p>
          I am a <strong className="text-sky-600 dark:text-sky-300">Junior Web Developer</strong> based in Bali
          specializing in modern <em>Frontend Development</em>. I enjoy transforming visual design concepts into
          interactive, high-performance, and pixel-perfect web applications.
        </p>
        <p>
          Always excited to learn cutting-edge web technologies like React.js, Tailwind CSS, and modern web
          architecture. I am committed to writing clean, maintainable code and continuously sharpening my skills
          every day.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="glass rounded-2xl p-5 text-left"
          >
            <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
            <p className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400 mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
