import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

// 1. Membuat React Context untuk bahasa
const LanguageContext = createContext();

/**
 * LanguageProvider: Component pembungkus yang menyediakan state bahasa ke seluruh aplikasi.
 * Pengguna dapat mengganti bahasa antara 'id' (Indonesia) dan 'en' (English) secara real-time.
 */
export const LanguageProvider = ({ children }) => {
  // Ambil pilihan bahasa terakhir dari localStorage (jika ada), default ke 'id'
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('portfolio_lang');
    return savedLang === 'en' ? 'en' : 'id';
  });

  // Simpan perubahan bahasa ke localStorage saat `lang` berubah
  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  // Fungsi toggle instan antara ID dan EN
  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'id' ? 'en' : 'id'));
  };

  // Kamus teks terjemahan yang aktif saat ini
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom Hook: `useLanguage`
 * Digunakan di komponen mana saja untuk mengakses `lang`, `toggleLanguage`, dan `t` (teks terjemahan)
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage harus digunakan di dalam <LanguageProvider>');
  }
  return context;
};
