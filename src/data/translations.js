/**
 * ==============================================================================
 * DICTIONARY TRANSLATIONS & PERSONAL DATA
 * ==============================================================================
 * File ini berisi semua data personal dan teks dua bahasa (Bahasa Indonesia & English).
 * Anda bisa mengubah nama, bio, proyek, skill, dan tautan sosial media di sini.
 */

export const personalData = {
  // --- KUSTOMISASI IDENTITAS UTAMA ---
  name: "I Putu Alvi Rupa Dinata",
  nickName: "AlpinDnt",
  role: "Junior Web Developer",
  location: "Denpasar, Bali, Indonesia",
  email: "ptu.alpin@gmail.com", // Ubah ke email Anda
  whatsapp: "+6282325494970", // Ubah ke nomor WA Anda
  github: "https://github.com/AlpinDnt", // Ubah ke URL GitHub Anda
  linkedin: "https://www.linkedin.com/in/alvi-rupa-dinata-0132b8309?utm_source=share_via&utm_content=profile&utm_medium=member_ios", // Ubah ke URL LinkedIn Anda
  instagram: "https://www.instagram.com/alpindnt?igsh=MTN4NnNzd2hrcTh1MA%3D%3D&utm_source=qr", // Ubah ke URL Instagram Anda
  avatar: "/foto-formal.jpeg", // Foto profil Anda di folder public/profile.jpg
  cvUrl: "/ats-cv.pdf", // Path file CV PDF Anda di folder public/
};

export const translations = {
  // ==========================================
  // 1. BAHASA INDONESIA (ID)
  // ==========================================
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Saya",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      badge: "Tersedia Untuk Pekerjaan & Proyek",
      greeting: "Halo 👋, Saya",
      role: "Junior Web Developer",
      tagline: "Membangun web yang modern, responsif, dan kaya akan interaksi.",
      description: "Saya seorang Web Developer pemula yang berdedikasi menciptakan pengalaman web bersih, responsif, dan nyaman digunakan dengan teknologi JavaScript & React terbaru.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
      downloadCv: "Unduh CV",
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Mengenal Latar Belakang & Semangat Koding Saya",
      badge: "Latar Belakang",
      paragraph1: "Saya adalah seorang **Junior Web Developer** berdomisili di Bali yang berfokus pada pengembangan antarmuka web modern (Frontend Development). Saya menikmati proses mengubah ide desain visual menjadi kode aplikasi yang interaktif dan responsif.",
      paragraph2: "Selalu antusias mempelajari teknologi web terkini seperti React.js, Tailwind CSS, dan arsitektur aplikasi modern. Saya berkomitmen untuk menulis kode yang bersih, mudah dipelihara, dan terus mengasah skill setiap hari.",
      stats: {
        projects: "Proyek Selesai",
        hours: "Jam Koding",
        skills: "Teknologi Dikuasai",
        commits: "Git Commits",
      },
    },
    skills: {
      title: "Keahlian & Teknologi",
      subtitle: "Teknologi dan tools yang saya gunakan dalam pembuatan web",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend & Database",
        tools: "Tools & Workflow",
      },
      levels: {
        advanced: "Mahir",
        intermediate: "Menengah",
        learning: "Dalam Pembelajaran",
      }
    },
    projects: {
      title: "Portofolio Proyek",
      subtitle: "Kumpulan proyek web yang telah saya bangun",
      filterAll: "Semua Proyek",
      filterWebApp: "Web App",
      filterFrontend: "Frontend UI",
      filterLanding: "Landing Page",
      viewLive: "Live Demo",
      viewSource: "Kode Source",
      items: [
        {
          id: 1,
          category: "Web App",
          title: "Student Notes AI",
          description: "Student Notes AI adalah aplikasi web full-stack yang memungkinkan pengguna meng-upload materi kuliah dalam format PDF, lalu secara otomatis menghasilkan catatan belajar terstruktur, ringkasan TL;DR, kuis pilihan ganda, dan flashcard menggunakan Gemini API. Setiap pengguna memiliki akun pribadi dengan riwayat materi yang bersifat privat, dan admin memiliki dashboard khusus untuk mengelola pengguna.",
          tech: ["React.js", "Tailwind CSS", "Laravel", "TypeScript", "PHP", "SQL", "Google Gemini API (gemini-2.5-flash)", "docker"],
          liveUrl: "#",
          githubUrl: "https://github.com/AlpinDnt/student-notes-ai",
          featured: true,
          type: "webApp"
        },
      ]
    },
    contact: {
      title: "Hubungi Saya",
      subtitle: "Tertarik bekerjasama atau ingin bertanya? Mari terhubung!",
      formTitle: "Kirim Pesan",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda",
      emailLabel: "Alamat Email",
      emailPlaceholder: "nama@gmail.com",
      subjectLabel: "Subjek",
      subjectPlaceholder: "Tujuan pesan Anda",
      messageLabel: "Pesan",
      messagePlaceholder: "Tuliskan pesan Anda di sini...",
      sendBtn: "Kirim Pesan",
      sendingBtn: "Mengirim...",
      successMsg: "Pesan berhasil dikirim! Saya akan segera membalas.",
      errorMsg: "Harap isi semua kolom form sebelum mengirim.",
      directInfo: "Informasi Kontak",
      locationLabel: "Lokasi",
      emailDirectLabel: "Email Resmi",
      socialsLabel: "Media Sosial",
    },
    footer: {
      tagline: "Dibangun dengan React.js & Tailwind CSS.",
      copyright: "Hak Cipta Dilindungi.",
      backToTop: "Kembali ke Atas",
    }
  },

  // ==========================================
  // 2. ENGLISH (EN)
  // ==========================================
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Available for Hire & Projects",
      greeting: "Hello 👋, I am",
      role: "Junior Web Developer",
      tagline: "Building modern, responsive, and highly interactive web experiences.",
      description: "I am an enthusiastic beginner Web Developer dedicated to creating clean, user-friendly, and responsive web applications using the latest JavaScript & React tech stack.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know my background & coding passion",
      badge: "Background",
      paragraph1: "I am a **Junior Web Developer** based in Bali specializing in modern **Frontend Development**. I enjoy transforming visual design concepts into interactive, high-performance, and pixel-perfect web applications.",
      paragraph2: "Always excited to learn cutting-edge web technologies like React.js, Tailwind CSS, and modern web architecture. I am committed to writing clean, maintainable code and continuously sharpening my skills every day.",
      stats: {
        projects: "Projects Built",
        hours: "Coding Hours",
        skills: "Tech Stack",
        commits: "Git Commits",
      },
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Technologies and tools I use to build modern applications",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend & Database",
        tools: "Tools & Workflow",
      },
      levels: {
        advanced: "Advanced",
        intermediate: "Intermediate",
        learning: "Learning",
      }
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A showcase of web applications I have constructed",
      filterAll: "All Projects",
      filterWebApp: "Web App",
      filterFrontend: "Frontend UI",
      filterLanding: "Landing Page",
      viewLive: "Live Demo",
      viewSource: "Source Code",
      items: [
        {
          id: 1,
          category: "Web App",
          title: "Student Notes AI",
          description: "Student Notes AI is a full-stack web application that lets users upload PDF course materials and automatically generates structured study notes, TL;DR summaries, multiple-choice quizzes, and flashcards using the Gemini API. Each user has a personal account with private material history, while admins get a dedicated dashboard for user management.",
          tech: ["React.js", "Tailwind CSS", "Laravel", "TypeScript", "PHP", "SQL", "Google Gemini API (gemini-2.5-flash)", "docker"],
          liveUrl: "#",
          githubUrl: "https://github.com/AlpinDnt/student-notes-ai",
          featured: true,
          type: "webApp"
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Interested in working together or have a question? Let's connect!",
      formTitle: "Send a Message",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "name@gmail.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Purpose of your message",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      successMsg: "Message sent successfully! I will reply shortly.",
      errorMsg: "Please fill out all form fields before submitting.",
      directInfo: "Contact Details",
      locationLabel: "Location",
      emailDirectLabel: "Direct Email",
      socialsLabel: "Social Networks",
    },
    footer: {
      tagline: "Crafted with React.js & Tailwind CSS.",
      copyright: "All rights reserved.",
      backToTop: "Back to Top",
    }
  }
};
