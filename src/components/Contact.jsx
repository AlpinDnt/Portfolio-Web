import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/translations';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

/**
 * Contact: Section formulir kontak sederhana dan kartu akses langsung ke Email/WA/Sosmed.
 * Left-aligned header optimized for split layout.
 */
export const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: t.contact.errorMsg });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Simulasi pengiriman form (Mock AJAX)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', message: t.contact.successMsg });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const contactCards = [
    {
      title: t.contact.emailDirectLabel,
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      icon: Mail,
      color: 'text-sky-400',
    },
    {
      title: 'WhatsApp',
      value: personalData.whatsapp,
      href: `https://wa.me/${personalData.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: Phone,
      color: 'text-emerald-400',
    },
    {
      title: t.contact.locationLabel,
      value: personalData.location,
      href: '#',
      icon: MapPin,
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="contact" className="py-12 relative">
      <div className="space-y-12">
        
        {/* Section Header (Left Aligned) */}
        <div className="text-left max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Sisi Kiri: Kartu Informasi Kontak Direct */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-4"
          >
            <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-5 shadow-lg">
              <h3 className="text-base font-bold text-white pb-2.5 border-b border-zinc-800/60">
                {t.contact.directInfo}
              </h3>

              <div className="space-y-3.5">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <a
                      key={idx}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/60 hover:border-sky-500/40 transition-all duration-300 group"
                    >
                      <div className={`p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 ${card.color} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">{card.title}</p>
                        <p className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-sky-400 transition-colors break-all">
                          {card.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Tautan Media Sosial */}
              <div className="pt-3 space-y-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  {t.contact.socialsLabel}
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 text-xs font-semibold transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 text-xs font-semibold transition"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Sisi Kanan: Form Kirim Pesan */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-5 shadow-lg"
            >
              <h3 className="text-base font-bold text-white pb-2.5 border-b border-zinc-800/60">
                {t.contact.formTitle}
              </h3>

              {/* Toast Feedback Message */}
              {status.message && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-medium flex items-center gap-2.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                      : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Input Nama */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    {t.contact.nameLabel} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  />
                </div>

                {/* Input Email */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    {t.contact.emailLabel} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  />
                </div>
              </div>

              {/* Input Subject */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                />
              </div>

              {/* Input Message */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  {t.contact.messageLabel} <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-all duration-300 shadow-md shadow-sky-500/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t.contact.sendingBtn}</span>
                ) : (
                  <>
                    <span>{t.contact.sendBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
