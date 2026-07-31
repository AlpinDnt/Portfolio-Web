import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Wrench, CheckCircle2 } from 'lucide-react';

/**
 * Skills: Section yang menampilkan daftar teknologi yang dikuasai beserta level kompetensi.
 * Left-aligned headers and optimized split layout sizing.
 */
export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.frontend,
      icon: Code2,
      skills: [
        { name: 'HTML5', level: t.skills.levels.advanced, percent: 90 },
        { name: 'CSS3 / Modern Styling', level: t.skills.levels.advanced, percent: 85 },
        { name: 'JavaScript (ES6+)', level: t.skills.levels.intermediate, percent: 80 },
        { name: 'Tailwind CSS', level: t.skills.levels.advanced, percent: 88 },
        { name: 'React.js', level: t.skills.levels.intermediate, percent: 75 },
      ],
    },
    {
      title: t.skills.categories.backend,
      icon: Database,
      skills: [
        { name: 'Node.js (Basics)', level: t.skills.levels.learning, percent: 60 },
        { name: 'RESTful API', level: t.skills.levels.intermediate, percent: 75 },
        { name: 'JSON Data', level: t.skills.levels.advanced, percent: 85 },
      ],
    },
    {
      title: t.skills.categories.tools,
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: t.skills.levels.intermediate, percent: 80 },
        { name: 'Vite & npm', level: t.skills.levels.intermediate, percent: 78 },
        { name: 'Figma UI/UX Design', level: t.skills.levels.intermediate, percent: 70 },
        { name: 'Responsive Web Design', level: t.skills.levels.advanced, percent: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 relative border-b border-zinc-900/60">
      <div className="space-y-12">
        
        {/* Header Section (Left Aligned) */}
        <div className="text-left max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Grid Kategori Skill (Responsive 1 col on mobile, 3 cols on tablet/desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 space-y-5 shadow-lg"
              >
                {/* Judul Kategori */}
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/60">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <CatIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* List Items Skill */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-zinc-400 font-medium px-1.5 py-0.5 rounded bg-zinc-800/50 border border-zinc-800">
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress Bar Teranimasi */}
                      <div className="h-1.5 w-full bg-zinc-850 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.15 }}
                          className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
