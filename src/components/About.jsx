import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { User, FolderCheck, Clock, Layers, GitBranch } from 'lucide-react';

/**
 * About: Section tentang latar belakang, filosofi belajar, dan statistik aktivitas koding Alvi Dinata.
 */
export const About = () => {
  const { t, lang } = useLanguage();

  const stats = [
    { label: t.about.stats.projects, value: '10+', icon: FolderCheck, color: 'text-sky-400' },
    { label: t.about.stats.hours, value: '500+', icon: Clock, color: 'text-emerald-400' },
    { label: t.about.stats.skills, value: '8+', icon: Layers, color: 'text-purple-400' },
    { label: t.about.stats.commits, value: '250+', icon: GitBranch, color: 'text-amber-400' },
  ];

  return (
    <section id="about" className="py-24 relative bg-zinc-950/60 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
            <User className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sisi Kiri: Cerita Bio */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed"
          >
            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 shadow-xl">
              {lang === 'id' ? (
                <>
                  <p>
                    Saya adalah seorang <strong className="text-sky-400">Junior Web Developer</strong> berdomisili di Bali yang berfokus pada pengembangan antarmuka web modern (<em>Frontend Development</em>). Saya sangat menikmati proses mengubah ide desain visual menjadi kode aplikasi yang interaktif dan responsif.
                  </p>
                  <p>
                    Selalu antusias mempelajari teknologi web terkini seperti React.js, Tailwind CSS, dan arsitektur aplikasi modern. Saya berkomitmen untuk menulis kode yang bersih, mudah dipelihara, dan terus mengasah skill setiap hari.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I am a <strong className="text-sky-400">Junior Web Developer</strong> based in Bali specializing in modern <em>Frontend Development</em>. I enjoy transforming visual design concepts into interactive, high-performance, and pixel-perfect web applications.
                  </p>
                  <p>
                    Always excited to learn cutting-edge web technologies like React.js, Tailwind CSS, and modern web architecture. I am committed to writing clean, maintainable code and continuously sharpening my skills every day.
                  </p>
                </>
              )}
            </div>
          </motion.div>

          {/* Sisi Kanan: 4 Kartu Statistik */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 shadow-lg text-left"
                >
                  <div className={`p-2.5 rounded-xl bg-zinc-800/60 w-fit mb-3 ${item.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-400 mt-1">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
