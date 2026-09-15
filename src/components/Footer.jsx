import React from 'react';
import { personalData, translations } from '../data/translations';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

const t = translations.en;

const linkCls =
  'flex items-center min-h-10 text-sm text-slate-500 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition-colors w-fit';
const groupTitleCls =
  'text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white';

/**
 * Footer — technical-minimal closing system (footer1 recipe):
 * brand statement first, grouped navigation second, legal utilities last.
 */
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: 'Top 3', href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const connect = [
    { name: 'GitHub', href: personalData.github, Icon: GithubIcon },
    { name: 'LinkedIn', href: personalData.linkedin, Icon: LinkedinIcon },
    { name: 'Instagram', href: personalData.instagram, Icon: InstagramIcon },
  ];

  return (
    <footer className="mt-6 border-t border-slate-900/10 dark:border-white/10 pt-12 pb-8">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        {/* Brand statement */}
        <div className="col-span-12 md:col-span-5 space-y-4">
          <a href="#home" className="flex items-center gap-2.5 w-fit">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-sky-500 text-white font-display font-bold text-base">
              A
            </span>
            <span className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-white">
              {personalData.nickName}
              <span className="text-sky-500">.</span>
            </span>
          </a>
          <p className="text-sm font-semibold text-slate-700 dark:text-zinc-200">
            {personalData.name} — {t.hero.role}
          </p>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-zinc-400 max-w-sm">
            {t.hero.tagline}
          </p>
        </div>

        {/* Grouped navigation */}
        <nav aria-label="Footer sections" className="col-span-6 md:col-span-2 space-y-1">
          <p className={groupTitleCls}>{t.footer.sections}</p>
          <div className="pt-2">
            {sections.map((link) => (
              <a key={link.href} href={link.href} className={linkCls}>
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        <nav aria-label="Footer social" className="col-span-6 md:col-span-2 space-y-1">
          <p className={groupTitleCls}>{t.footer.connect}</p>
          <div className="pt-2">
            {connect.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className={`${linkCls} gap-2`}>
                <Icon className="w-4 h-4" />
                {name}
              </a>
            ))}
          </div>
        </nav>

        {/* Direct contact */}
        <div className="col-span-12 md:col-span-3 space-y-1">
          <p className={groupTitleCls}>{t.footer.direct}</p>
          <div className="pt-2">
            <a href={`mailto:${personalData.email}`} className={`${linkCls} break-all`}>
              {personalData.email}
            </a>
            <a
              href={`https://wa.me/${personalData.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className={linkCls}
            >
              {personalData.whatsapp}
            </a>
            <p className="flex items-center min-h-10 text-sm text-slate-500 dark:text-zinc-500 whitespace-pre-line">
              {personalData.location}
            </p>
          </div>
        </div>
      </div>

      {/* Legal utilities */}
      <div className="mt-12 pt-6 border-t border-slate-900/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 dark:text-zinc-500 text-center sm:text-left">
          &copy; {new Date().getFullYear()} {personalData.name}. {t.footer.copyright} {t.footer.tagline}
        </p>
        <button
          onClick={scrollToTop}
          className="px-8 cursor-pointer relative py-3 bg-gray-100 dark:bg-zinc-800 text-xs font-bold uppercase tracking-[0.2em] rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          title={t.footer.backToTop}
        >
          <span className="inline-flex items-center gap-2">
            {t.footer.backToTop}
            <ArrowUp className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
