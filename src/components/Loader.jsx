import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Loader — glass boot splash shown while the page opens.
 * Monogram pulse, 0–100% counter, progress hairline, and wordmark;
 * exits with a soft fade.
 */
export const Loader = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const DUR = 1500;
    const step = (now) => {
      const t = Math.min(1, (now - start) / DUR);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
  <motion.div
    role="status"
    aria-label="Loading portfolio"
    className="fixed inset-0 z-[100] grid place-items-center"
    style={{ backgroundColor: 'var(--page-bg)' }}
    exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <div aria-hidden="true" className="aurora-field">
      <div className="aurora-blob aurora-blob-a" />
      <div className="aurora-blob aurora-blob-b" />
    </div>

    <div className="relative flex flex-col items-center gap-5 px-6 text-center">
      <motion.span
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid place-items-center w-20 h-20 rounded-3xl bg-sky-500 text-white font-display font-extrabold text-4xl shadow-xl shadow-sky-500/40"
      >
        A
        <span className="loader-ring" />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="space-y-1.5"
      >
        <p className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          AlpinDnt<span className="text-sky-500">.</span>
        </p>
        <p className="text-[10px] font-bold tracking-[0.3em] text-slate-500 dark:text-zinc-400">
          JUNIOR WEB DEVELOPER
        </p>
      </motion.div>

      <div className="w-44 space-y-2">
        <div className="h-1 rounded-full bg-slate-900/10 dark:bg-white/10 overflow-hidden">
          <span className="loader-bar block h-full rounded-full bg-sky-500" />
        </div>
        <p className="font-display text-sm font-bold tabular-nums text-sky-600 dark:text-sky-300">
          {pct}%
        </p>
      </div>
    </div>
  </motion.div>
  );
};

export default Loader;
