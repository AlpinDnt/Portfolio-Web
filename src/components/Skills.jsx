import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, Braces, Network, MonitorSmartphone } from 'lucide-react';
import { translations } from '../data/translations';
import Reveal from './Reveal';

const t = translations.en;

const STACK = [
  { name: 'HTML5', slug: 'html5' },
  { name: 'CSS3', slug: 'css' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'REST API', Icon: Network },
  { name: 'JSON', Icon: Braces },
  { name: 'Git & GitHub', slug: 'git' },
  { name: 'Vite', slug: 'vite' },
  { name: 'npm', slug: 'npm' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Responsive Design', Icon: MonitorSmartphone },
];

const TechBadge = ({ name, slug, Icon, index }) => {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
      whileHover={{ y: -6, scale: 1.08 }}
      className="group flex flex-col items-center gap-2.5"
      title={name}
    >
      <span className="glass w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full grid place-items-center transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-sky-500/25 group-hover:border-sky-500/40">
        {slug && !failed ? (
          <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt={`${name} logo`}
            loading="lazy"
            width="32"
            height="32"
            className="w-8 h-8 sm:w-9 sm:h-9 dark:brightness-125 dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
            onError={() => setFailed(true)}
          />
        ) : Icon ? (
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-sky-600" aria-label={`${name} icon`} />
        ) : (
          <span className="text-lg font-extrabold text-sky-600">{name.charAt(0)}</span>
        )}
      </span>
      <span className="text-[11px] font-bold text-slate-500 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center leading-tight max-w-[5.5rem]">
        {name}
      </span>
    </motion.div>
  );
};

export const Skills = () => (
  <section id="skills" className="py-14 scroll-mt-28">
    <Reveal className="space-y-3 max-w-3xl">
      <div className="glass-chip inline-flex items-center gap-2">
        <Cpu className="w-3.5 h-3.5 text-sky-500" />
        <span className="text-xs font-bold">Tech Stack</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {t.skills.title}
      </h2>
      <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base">{t.skills.subtitle}</p>
    </Reveal>

    <Reveal delay={0.1} className="mt-10">
      <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-7 sm:gap-x-8" role="list" aria-label="Technologies I use">
        {STACK.map((tech, idx) => (
          <div key={tech.name} role="listitem">
            <TechBadge name={tech.name} slug={tech.slug} Icon={tech.Icon} index={idx} />
          </div>
        ))}
      </div>
    </Reveal>

    <Reveal delay={0.15} className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-zinc-400 text-center">
      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
      <span>Every tool above ships in the Top 3 below — logos mark the tools, demos prove the skill.</span>
    </Reveal>
  </section>
);

export default Skills;
