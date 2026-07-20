import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

/**
 * LanguageToggle: Komponen tombol pengalih bahasa (ID ⇄ EN) dengan indikator aktif & animasi.
 */
export const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-zinc-900/90 border border-zinc-700/60 text-zinc-300 hover:text-white hover:border-sky-500/50 transition-all duration-300 shadow-sm group"
    >
      <Globe className="w-3.5 h-3.5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
      
      {/* Indikator Pilihan Bahasa ID vs EN */}
      <span className="flex items-center gap-1">
        <span className={`px-1 rounded transition-colors ${lang === 'id' ? 'bg-sky-500/20 text-sky-400 font-bold' : 'text-zinc-500'}`}>
          ID
        </span>
        <span className="text-zinc-600">/</span>
        <span className={`px-1 rounded transition-colors ${lang === 'en' ? 'bg-sky-500/20 text-sky-400 font-bold' : 'text-zinc-500'}`}>
          EN
        </span>
      </span>
    </button>
  );
};

export default LanguageToggle;
