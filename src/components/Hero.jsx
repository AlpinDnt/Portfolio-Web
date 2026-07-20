import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/translations';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

/**
 * Hero: Section utama paling atas yang memperkenalkan Alvi Dinata dengan visual portrait, deskripsi ringkas, dan tombol CTA.
 */
export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
      
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Sisi Kiri: Teks Introduksi & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline & Title */}
            <div className="space-y-2">
              <h2 className="text-zinc-400 font-medium text-lg sm:text-xl flex items-center gap-2">
                <span>{t.hero.greeting}</span>
                <span className="font-bold text-white">{personalData.name}</span>
              </h2>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  {t.hero.role}
                </span>
              </h1>
            </div>

            {/* Tagline & Sub-description */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Buttons & Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-sm transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 text-white font-medium text-sm transition-all duration-300 hover:border-zinc-500"
              >
                <span>{t.hero.contactMe}</span>
              </a>

              <a
                href={personalData.cvUrl}
                download="AlpinDnt-CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-zinc-400 hover:text-white font-medium text-sm transition-colors border border-transparent hover:border-zinc-800"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>

            {/* Tautan Media Sosial Quick Access */}
            <div className="pt-6 border-t border-zinc-800/60 flex items-center gap-4 text-zinc-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Socials:</span>
              <a href={personalData.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={personalData.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={`mailto:${personalData.email}`} className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Sisi Kanan: Foto Profil Avatar dengan Glowing Ring Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Glowing Ambient Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 opacity-30 group-hover:opacity-60 blur-xl transition duration-500" />

              {/* Frame Foto Main */}
              <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-3 w-72 sm:w-80 shadow-2xl">
                <img
                  src={personalData.avatar}
                  alt={personalData.name}
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:scale-105 transition duration-500"
                />

                {/* Floating Junior Developer Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{personalData.role}</p>
                      <p className="text-[11px] text-zinc-400">{personalData.location}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
