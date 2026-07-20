import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/translations';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

/**
 * Footer: Bagian paling bawah website portofolio dengan copyright, link sosial media, dan tombol back to top.
 */
export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Sisi Kiri: Brand & Tagline */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {personalData.name} <span className="text-sky-400">.</span>
              </p>
              <p className="text-xs text-zinc-500">
                {t.footer.tagline}
              </p>
            </div>
          </div>

          {/* Sisi Tengah: Copyright */}
          <div className="text-xs text-zinc-500 text-center">
            &copy; {new Date().getFullYear()} {personalData.name}. {t.footer.copyright}
          </div>

          {/* Sisi Kanan: Social Links & Back To Top Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-900 hover:text-sky-400 transition">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-900 hover:text-sky-400 transition">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={personalData.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-900 hover:text-sky-400 transition">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-sky-500/40 text-xs font-semibold transition"
              title={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
