/**
 * ==============================================================================
 * TRANSLATIONS DICTIONARY & PERSONAL DATA
 * ==============================================================================
 * This file contains all personal data and English-only UI copy.
 * Edit your name, bio, projects, skills, and social links here.
 */

export const personalData = {
  // --- MAIN IDENTITY CUSTOMIZATION ---
  name: "I Putu Alvi Rupa Dinata",
  nickName: "AlpinDnt",
  role: "Junior Web Developer",
  location: "Denpasar, Bali,\nIndonesia",
  email: "ptu.alvi@gmail.com", // Change to your email
  whatsapp: "+6282325494970", // Change to your WhatsApp number
  github: "https://github.com/AlpinDnt", // Change to your GitHub URL
  linkedin: "https://www.linkedin.com/in/alpindnt/", // Change to your LinkedIn URL
  instagram: "https://www.instagram.com/alpindnt?igsh=MTN4NnNzd2hrcTh1MA%3D%3D&utm_source=qr", // Change to your Instagram URL
  cvUrl: "/AlpinDnt-CV.pdf", // Path to your CV PDF file in the public/ folder
};

export const translations = {
  // ==========================================
  // ENGLISH (EN) — single language
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
          category: "Landing Page",
          title: "Serene Stay",
          description: "Serene Stay is a modern and fully responsive villa & stay booking website. Key features include real-time villa search, dynamic category & price filtering, an interactive photo gallery, room detail modals with full amenities, and a transparent simulated booking flow.",
          tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript", "Lucide React"],
          liveUrl: "https://serene-stayy.vercel.app/",
          githubUrl: "https://github.com/AlpinDnt/serene-stayy",
          featured: true,
          type: "webApp"
        },
        {
          id: 2,
          category: "Web App",
          title: "Lumina Store",
          description: "Lumina Store is a sleek, modern, and fully responsive fashion e-commerce web application built with a minimalist aesthetic. Key features include real-time product searching, dynamic category filtering, a persistent slide-over cart drawer powered by React Context API and LocalStorage, interactive product detail modals with size selectors, and a simulated checkout flow.",
          tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript", "Context API", "Lucide React"],
          liveUrl: "https://lumina-store-online.vercel.app/",
          githubUrl: "https://github.com/AlpinDnt/Lumina-Store",
          featured: true,
          type: "webApp"
        },
        {
          id: 3,
          category: "Landing Page",
          title: "Kroma Coffee",
          description: "A modern and aesthetic specialty coffee shop landing page featuring a warm dark mode theme. Equipped with an interactive category-based menu filter, a dedicated roasting story & philosophy section, location & operating hours with a dark-themed Google Maps integration, and SEO metadata optimization.",
          tech: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "Lucide React"],
          liveUrl: "https://kroma-coffee.vercel.app/",
          githubUrl: "https://github.com/AlpinDnt/kroma-coffee",
          featured: true,
          type: "landing"
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Interested in working together or have a question? Let's connect!",
      ctaBadge: "Available for freelance projects",
      bigTitleA: "Let's Build",
      bigTitleB: "Something Amazing",
      ctaTitle: "Have a project in mind? Let's build it together.",
      ctaText: "Tell me about your landing page or web app — I will get back to you with ideas and a clear next step.",
      emailMe: "Email Me",
      whatsappMe: "WhatsApp",
      copyEmail: "Copy email",
      copiedMsg: "Email copied to clipboard.",
      servicesEyebrow: "What I can do for you",
      servicesTitleA: "Pick a lane,",
      servicesTitleB: "let's ship it.",
      servicesSub: "Three ways we can work together — every card opens a chat with the brief already drafted.",
      servicesNote: "Prefer email? Write anytime — every message goes straight to my inbox.",
      items: [
        {
          title: "Landing Pages",
          desc: "Responsive, high-converting pages for products, cafés, and campaigns — like Kroma Coffee.",
          cta: "Start a landing page",
          waText: "Hi Alvi! I need a landing page for my business. Can we discuss it?",
        },
        {
          title: "Web Apps",
          desc: "Interactive React apps with real features — search, carts, dashboards — like Lumina Store.",
          cta: "Start a web app",
          waText: "Hi Alvi! I want to build a web app. Here is what I have in mind:",
        },
        {
          title: "UI Revamps",
          desc: "Turn an outdated page into a modern, fast glass interface with clearer structure.",
          cta: "Revamp my UI",
          waText: "Hi Alvi! I want to revamp my website UI. Can you take a look?",
        },
      ],
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
      sections: "Sections",
      connect: "Connect",
      direct: "Direct",
    }
  }
};
