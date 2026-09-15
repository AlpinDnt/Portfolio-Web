import React, { useState } from 'react';
import { personalData, translations } from '../data/translations';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, MessageCircle, ArrowUpRight, Globe, ShoppingBag, Palette } from 'lucide-react';
import Reveal from './Reveal';

const t = translations.en;

const MARQUEE = ['Landing Pages', 'Web Apps', 'UI Revamps', 'React', 'Tailwind CSS', 'Open to Work'];

const SERVICE_ICONS = [Globe, ShoppingBag, Palette];

const waLink = (text) =>
  `https://wa.me/${personalData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = personalData.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-14 scroll-mt-28 space-y-10 overflow-hidden">
      {/* Marquee strip */}
      <Reveal className="marquee relative -mx-4 sm:-mx-6" aria-label="Services ticker">
        <div className="marquee-track items-center py-3 border-y border-slate-900/10 dark:border-white/10">
          {[...MARQUEE, ...MARQUEE].map((word, idx) => (
            <span key={idx} aria-hidden={idx >= MARQUEE.length} className="flex items-center gap-10 shrink-0">
              <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-zinc-500 whitespace-nowrap">
                {word}
              </span>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
            </span>
          ))}
        </div>
      </Reveal>

      {/* Header */}
      <Reveal className="text-center space-y-5 max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-[0.35em] text-slate-400 dark:text-zinc-500">
          {t.contact.servicesEyebrow.toUpperCase()}
        </p>
        <h2 className="font-display font-extrabold tracking-tight text-slate-900 dark:text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
          {t.contact.servicesTitleA}
          <br />
          <span className="text-sky-500">{t.contact.servicesTitleB}</span>
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-lg max-w-xl mx-auto">
          {t.contact.servicesSub}
        </p>
      </Reveal>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {t.contact.items.map((item, idx) => {
          const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
          return (
            <Reveal key={item.title} delay={idx * 0.08}>
              <motion.a
                whileHover={{ y: -6 }}
                href={waLink(item.waText)}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-3xl p-6 flex flex-col gap-4 h-full hover:border-sky-500/40 transition-colors duration-300 group"
              >
                <span className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/25 grid place-items-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-sky-600 dark:text-sky-300" />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-slate-900/10 dark:text-white/10">
                    0{idx + 1}
                  </span>
                </span>
                <span>
                  <span className="block font-display text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </span>
                  <span className="block mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
                    {item.desc}
                  </span>
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-sky-600 dark:text-sky-300">
                  {item.cta}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.a>
            </Reveal>
          );
        })}
      </div>

      {/* Direct contact row */}
      <Reveal className="glass rounded-3xl px-5 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <p className="text-xs text-slate-500 dark:text-zinc-400 text-center">{t.contact.servicesNote}</p>
        <span className="flex flex-wrap items-center justify-center gap-2.5">
          <motion.a
            whileHover={{ y: -2 }}
            href={`mailto:${personalData.email}?subject=${encodeURIComponent('Project inquiry for AlpinDnt')}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs transition shadow-md shadow-sky-500/30"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contact.emailMe}</span>
          </motion.a>
          <button
            onClick={copyEmail}
            aria-live="polite"
            className="glass inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs text-slate-700 dark:text-zinc-100 hover:border-sky-500/50 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? t.contact.copiedMsg : personalData.email}</span>
          </button>
          <motion.a
            whileHover={{ y: -2 }}
            href={waLink('Hi Alvi! I found your portfolio and want to talk about a project.')}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs text-slate-700 dark:text-zinc-100 hover:border-emerald-500/50 transition"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.contact.whatsappMe}</span>
          </motion.a>
        </span>
      </Reveal>
    </section>
  );
};

export default Contact;
