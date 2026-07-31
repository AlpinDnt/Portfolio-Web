import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/translations';
import { ArrowUp } from 'lucide-react';

/**
 * Footer: Bagian paling bawah website portofolio dengan copyright, link sosial media, dan tombol back to top.
 * Disederhanakan untuk split layout scrolling.
 */
export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900/60 py-10 text-zinc-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <div className="text-xs text-center sm:text-left space-y-1">
          <p>&copy; {new Date().getFullYear()} {personalData.name}.</p>
          <p className="text-[10px] text-zinc-650">{t.footer.tagline}</p>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-sky-500/40 text-xs font-semibold transition"
          title={t.footer.backToTop}
        >
          <span>{t.footer.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
