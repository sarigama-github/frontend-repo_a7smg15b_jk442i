import React from 'react';
import { Plane, Sun, Moon } from 'lucide-react';

export default function HeaderBar({ theme, onToggleTheme, language, onToggleLanguage }) {
  const isDark = theme === 'dark';
  const isEN = language === 'en';

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-600 text-white shadow">
            <Plane size={20} />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-neutral-900 dark:text-white">HanzTravel</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              {isEN ? 'Explore the skies in 3D' : 'Jelajah langit dalam 3D'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={isEN ? 'Toggle theme' : 'Ubah tema'}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm hidden sm:inline">{isDark ? (isEN ? 'Light' : 'Terang') : (isEN ? 'Dark' : 'Gelap')}</span>
          </button>

          <button
            onClick={onToggleLanguage}
            aria-label={isEN ? 'Toggle language' : 'Ubah bahasa'}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <span className={`text-sm font-medium ${isEN ? 'opacity-40' : ''}`}>IN</span>
            <span className="mx-1 text-neutral-400">/</span>
            <span className={`text-sm font-medium ${isEN ? '' : 'opacity-40'}`}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}
