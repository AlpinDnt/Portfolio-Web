import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = ({ compact = false }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  if (compact) {
    return (
      <button
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={!isDark}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="grid place-items-center w-9 h-9 rounded-full text-slate-500 dark:text-zinc-300 hover:text-sky-500 hover:bg-sky-500/10 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
      >
        {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-600" />}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={!isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="glass-pill inline-flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    >
      <span className="relative grid place-items-center w-4 h-4">
        {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-600" />}
      </span>
      <span className="tracking-wide">{isDark ? 'Light' : 'Dark'}</span>
      <span className="sr-only">Current theme: {theme}</span>
    </button>
  );
};

export default ThemeToggle;
