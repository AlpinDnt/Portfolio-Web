import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, Eye, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

/**
 * Projects: Section showcase proyek web Alvi Dinata dengan filter kategori interaktif dan modal preview.
 * Left-aligned headers and 2-column grid format for split layout.
 */
export const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'webApp', label: t.projects.filterWebApp },
    { key: 'frontend', label: t.projects.filterFrontend },
    { key: 'landing', label: t.projects.filterLanding },
  ];

  const projects = t.projects.items;

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.type === activeFilter);

  return (
    <section id="projects" className="py-12 relative border-b border-zinc-900/60">
      <div className="space-y-10">
        
        {/* Section Header (Left Aligned) */}
        <div className="text-left max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Buttons (Left Aligned) */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                activeFilter === tab.key
                  ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/25 scale-105'
                  : 'bg-zinc-900/60 text-zinc-450 hover:text-white border border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid (2 columns on tablet/desktop) */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-5 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:bg-zinc-900/50"
            >
              <div className="space-y-4">
                {/* Card Header dengan Icon & Badges */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-850 group-hover:border-sky-500/30 text-sky-400 transition-colors">
                    <Terminal className="w-4.5 h-4.5" />
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <Sparkles className="w-2.5 h-2.5" /> Featured
                      </span>
                    )}
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Stack Badges & Links Footer */}
              <div className="space-y-4 mt-6 pt-4 border-t border-zinc-800/60">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-medium px-2 py-0.5 rounded bg-zinc-950/60 text-zinc-300 border border-zinc-850"
                    >
                      {tItem}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-950/80 hover:bg-sky-500 text-zinc-400 hover:text-zinc-950 border border-zinc-850 hover:border-sky-500/20 font-bold text-[11px] transition-all"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Quick View</span>
                  </button>
                  
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-850 hover:border-sky-500/40 text-zinc-400 hover:text-sky-400 transition-all"
                    title={t.projects.viewLive}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-850 hover:border-sky-500/40 text-zinc-400 hover:text-white transition-all"
                    title={t.projects.viewSource}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </motion.div>

        {/* Modal Quick View Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-xl w-full p-6 space-y-6 shadow-2xl relative">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-sky-500/10 text-sky-400">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-zinc-400 hover:text-white p-1 rounded-lg bg-zinc-800"
                >
                  ✕
                </button>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">{selectedProject.description}</p>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((item, idx) => (
                    <span key={idx} className="text-xs font-medium px-3 py-1 rounded-lg bg-zinc-800 text-sky-400 border border-zinc-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-zinc-800">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-500 text-zinc-950 font-bold text-sm hover:bg-sky-400 transition"
                >
                  <span>{t.projects.viewLive}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-800 text-white font-medium text-sm hover:bg-zinc-700 transition"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t.projects.viewSource}</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
