import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Wrench, CheckCircle2 } from 'lucide-react';

/**
 * Skills: Section yang menampilkan daftar teknologi yang dikuasai beserta level kompetensi dan indikator visual.
 */
export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.frontend,
      icon: Code2,
      skills: [
        { name: 'HTML5', level: t.skills.levels.advanced, percent: 80 },
        { name: 'CSS3 / Modern Styling', level: t.skills.levels.intermediate, percent: 75 },
        { name: 'JavaScript (ES6+)', level: t.skills.levels.learning, percent: 65 },
        { name: 'Tailwind CSS', level: t.skills.levels.intermediate, percent: 75 },
        { name: 'React.js', level: t.skills.levels.learning, percent: 65 },
      ],
    },
    {
      title: t.skills.categories.backend,
      icon: Database,
      skills: [
        { name: 'Node.js (Basics)', level: t.skills.levels.learning, percent: 60 },
        { name: 'RESTful API', level: t.skills.levels.learning, percent: 75 },
        { name: 'JSON Data', level: t.skills.levels.learning, percent: 70 },
      ],
    },
    {
      title: t.skills.categories.tools,
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: t.skills.levels.intermediate, percent: 80 },
        { name: 'Vite & npm', level: t.skills.levels.intermediate, percent: 78 },
        { name: 'Figma UI/UX Design', level: t.skills.levels.learning, percent: 70 },
        { name: 'Responsive Web Design', level: t.skills.levels.learning, percent: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Grid Kategori Skill */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 space-y-6 shadow-xl"
              >
                {/* Judul Kategori */}
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* List Items Skill */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-zinc-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                          {skill.name}
                        </span>
                        <span className="text-zinc-400 font-medium px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/50">
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress Bar Teranimasi */}
                      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
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
