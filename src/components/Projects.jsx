import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Medal, Award } from 'lucide-react';
import { translations } from '../data/translations';
import { GithubIcon } from './SocialIcons';
import Reveal from './Reveal';

const t = translations.en;

const RANK_META = [
  { rank: 1, label: 'Rank 1 · Best Overall', Icon: Trophy, cls: 'rank-1', ring: 'hover:border-amber-400/60' },
  { rank: 2, label: 'Rank 2 · Runner Up', Icon: Medal, cls: 'rank-2', ring: 'hover:border-slate-400/60' },
  { rank: 3, label: 'Rank 3 · Top Pick', Icon: Award, cls: 'rank-3', ring: 'hover:border-orange-400/60' },
];

const TiltCard = ({ children, className = '' }) => {
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg) translateY(-6px)`;
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export const Projects = () => {
  const projects = t.projects.items.slice(0, 3);

  return (
    <section id="projects" className="py-14 scroll-mt-28">
      <Reveal className="space-y-3 max-w-3xl">
        <p className="text-sm font-bold tracking-widest text-sky-600 dark:text-sky-300">TOP 3</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          {t.projects.title}
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
          {t.projects.subtitle} — ranked 1 to 3, no filters, only the strongest proof.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, idx) => {
          const meta = RANK_META[idx] || RANK_META[2];
          const RankIcon = meta.Icon;
          const first = idx === 0;
          return (
            <Reveal key={project.id} delay={idx * 0.1} className={first ? 'md:-mt-4' : ''}>
              <TiltCard
                className={`glass rounded-3xl p-6 h-full flex flex-col justify-between gap-6 border transition-colors duration-300 ${meta.ring} ${first ? 'md:scale-[1.03]' : ''}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold shadow ${meta.cls}`}>
                      <RankIcon className="w-3.5 h-3.5" />
                      #{meta.rank}
                    </span>
                    <span className="glass-chip">{project.category}</span>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400">
                    {meta.label}
                  </p>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-300">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 6).map((techItem, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2 py-1 rounded-lg glass-field"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.projects.viewLive}</span>
                    </motion.a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="glass inline-flex items-center justify-center p-2.5 rounded-2xl text-slate-700 dark:text-zinc-200 hover:text-sky-600 dark:hover:text-sky-300 transition"
                      title={t.projects.viewSource}
                      aria-label={`${t.projects.viewSource} — ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
