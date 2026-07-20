import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

/**
 * Projects: Section showcase proyek web Alvi Dinata dengan filter kategori interaktif dan modal preview.
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
    <section id="projects" className="py-24 relative bg-zinc-950/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === tab.key
                  ? 'bg-sky-500 text-zinc-950 shadow-lg shadow-sky-500/25 scale-105'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl bg-zinc-900/80 border border-zinc-800/80 overflow-hidden hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  {/* Container Mockup Visual Preview */}
                  <div className="relative h-48 w-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 overflow-hidden p-4 flex items-center justify-center">
                    {/* Visual UI Code Graphic representation */}
                    <div className="w-full h-full rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3 shadow-inner space-y-2 flex flex-col justify-between group-hover:border-sky-500/30 transition-all">
                      <div className="flex items-center gap-1.5 border-b border-zinc-800/60 pb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-[10px] text-zinc-500 ml-2 font-mono">{project.category} Preview</span>
                      </div>
                      <div className="space-y-1.5 py-1">
                        <div className="h-3 w-3/4 bg-sky-500/20 rounded-md" />
                        <div className="h-2 w-1/2 bg-zinc-800 rounded-md" />
                        <div className="h-2 w-5/6 bg-zinc-800/60 rounded-md" />
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono pt-1">
                        <span>v1.0.0</span>
                        <span className="text-sky-400">React + Tailwind</span>
                      </div>
                    </div>

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 rounded-xl bg-sky-500 text-zinc-950 font-bold hover:scale-110 transition-transform shadow-lg"
                        title="Quick View"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Body Kartu Proyek */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges & Links Footer */}
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tItem, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/80">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-zinc-950 font-semibold text-xs transition-all border border-sky-500/30"
                    >
                      <span>{t.projects.viewLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all border border-zinc-700/50"
                      title={t.projects.viewSource}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
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
