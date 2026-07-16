import React, { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'id';

// ── Translation dictionary ──────────────────────────────────────────────────
export const translations = {
  en: {
    // Navigation / Dock
    nav: {
      home: 'Home',
      skills: 'Skills',
      resume: 'Resume',
      contact: 'Contact',
      switchLang: 'ID', // button label when current lang is EN → click to go ID
    },

    // Hero
    hero: {
      name: 'Cahya Yoga Ariyanto',
      title: 'Frontend Developer',
      bio: 'Passionate Frontend Developer dedicated to building responsive, user-friendly, and high-performance web applications with modern technologies and clean, maintainable code.',
      viewWork: 'View Work',
    },

    // Services
    services: {
      sectionTitle: 'Services',
      sectionDesc:
        'A range of services to help build digital products that grow and succeed online.',
      items: [
        { title: ['Frontend', 'Development'] },
        { title: ['AI', 'Integration'] },
        { title: ['UI/UX', 'Design'] },
        { title: ['Performance', 'Optimization'] },
        { title: ['Content', 'Creation'] },
        { title: ['Analytics and', 'Tracking'] },
      ],
    },

    // CTA
    cta: {
      heading: "Let's make things happen",
      body: 'Contact me today to learn more about how I can help your product grow and succeed.',
      button: 'Get in Touch',
    },

    // GitHub
    github: {
      sectionTitle: 'GitHub Contributions',
      sectionDesc: 'Explore my coding journey and contributions throughout the year',
    },

    // Experience
    experience: {
      sectionTitle: 'Work Experience',
      sectionDesc: 'My professional journey and career milestones in web development',
      items: [
        {
          number: '01',
          title: 'Senior Frontend Developer',
          company: 'Tech Company A',
          period: 'Jan 2022 – Present',
          description:
            'Led the development of responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with cross-functional teams to deliver high-quality products. Mentored junior developers and conducted code reviews to maintain code quality standards.',
        },
        {
          number: '02',
          title: 'Frontend Developer',
          company: 'Startup B',
          period: 'Jun 2020 – Dec 2021',
          description:
            'Developed and maintained multiple client-facing web applications. Implemented responsive designs and ensured cross-browser compatibility. Worked closely with designers to transform mockups into functional interfaces.',
        },
        {
          number: '03',
          title: 'Junior Web Developer',
          company: 'Agency C',
          period: 'Jan 2019 – May 2020',
          description:
            'Built interactive web pages using HTML, CSS, and JavaScript. Assisted senior developers in implementing new features and fixing bugs. Participated in daily stand-ups and sprint planning meetings.',
        },
        {
          number: '04',
          title: 'Web Developer Intern',
          company: 'Company D',
          period: 'Jun 2018 – Dec 2018',
          description:
            'Learned web development fundamentals and best practices. Contributed to small features and bug fixes under supervision. Gained experience with version control systems and agile methodologies.',
        },
      ],
    },

    // Projects
    projects: {
      sectionTitle: 'Projects',
      sectionDesc: 'A collection of projects I have worked on — from web to mobile',
      filterAll: 'All',
      filterWebsite: 'Website',
      filterMobile: 'Mobile',
      items: [
        {
          title: 'Pig Friends',
          description:
            'Community & information website about guinea pig care. Features guides, gallery, and interactive discussion forum.',
        },
        {
          title: 'Plagbleg',
          description: 'Plagiarism detection & reporting platform with a clean and intuitive interface.',
        },
        {
          title: 'Trilokas',
          description:
            'Location-based mobile app for exploring culture & tourist destinations with an immersive visual experience.',
        },
        {
          title: 'Picture',
          description:
            'Photo sharing and exploration web app with a modern gallery layout and fast search.',
        },
        {
          title: 'Sayur Mart',
          description:
            'Fresh vegetables and fruits e-commerce platform with an easy-to-use online ordering system.',
        },
        {
          title: 'PMB SMA',
          description:
            'Mobile app for high school new student admission with an efficient and accessible digital registration flow.',
        },
      ],
    },

    // CV Page
    cv: {
      pageTitle: 'Resume',
      downloadBtn: 'Download PDF',
      printBtn: 'Print',
      backBtn: 'Back to Portfolio',
      generatingPdf: 'Generating PDF…',

      name: 'Cahya Yoga Ariyanto',
      role: 'Frontend Developer',
      email: 'cahyayogaariyanto@email.com',
      phone: '+62 812-3456-7890',
      location: 'Yogyakarta, Indonesia',
      github: 'github.com/CahyaYogaAriyanto',
      linkedin: 'linkedin.com/in/cahyayoga',

      sections: {
        summary: 'Professional Summary',
        skills: 'Technical Skills',
        experience: 'Work Experience',
        education: 'Education',
        projects: 'Projects',
        certifications: 'Certifications',
        languages: 'Languages',
        contact: 'Contact Information',
      },

      summary:
        'Passionate Frontend Developer with experience building responsive, high-performance web and mobile applications. Proficient in React, TypeScript, and modern CSS frameworks. Strong problem-solving skills, eye for design, and commitment to clean, maintainable code.',

      skills: {
        frontend: { label: 'Frontend', items: 'React, TypeScript, Next.js, Redux, HTML5, JavaScript' },
        styling: { label: 'Styling', items: 'Tailwind CSS, CSS3, Sass, Bootstrap, MUI, Framer Motion' },
        backend: { label: 'Backend', items: 'Node.js, Express, Django, Laravel' },
        database: { label: 'Database', items: 'MySQL, PostgreSQL, MongoDB, Firebase' },
        mobile: { label: 'Mobile', items: 'Flutter, Dart, React Native, Expo' },
        tools: { label: 'Tools & DevOps', items: 'Git, GitHub, Docker, Vercel, AWS, Figma' },
      },

      education: [
        {
          degree: 'Bachelor of Informatics Engineering',
          institution: 'Universitas XYZ',
          period: '2019 – 2023',
          gpa: 'GPA: 3.82 / 4.00',
        },
      ],

      certifications: [
        { name: 'React Developer Certification', issuer: 'Meta', year: '2023' },
        { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2022' },
        { name: 'Google UX Design Certificate', issuer: 'Google', year: '2022' },
      ],

      languages: [
        { lang: 'Indonesian', level: 'Native' },
        { lang: 'English', level: 'Professional' },
      ],

      present: 'Present',
    },

    // Skills page
    skills: {
      sectionTitle: 'My Skills',
      sectionDesc:
        'A comprehensive overview of the technologies, tools, and concepts I work with to build modern digital experiences.',
    },

    // Footer / misc
    misc: {
      madeWith: 'Designed & built by',
      rights: 'All rights reserved.',
    },
  },

  id: {
    nav: {
      home: 'Beranda',
      skills: 'Keahlian',
      resume: 'Resume',
      contact: 'Kontak',
      switchLang: 'EN',
    },

    hero: {
      name: 'Cahya Yoga Ariyanto',
      title: 'Frontend Developer',
      bio: 'Frontend Developer bersemangat yang berdedikasi membangun aplikasi web yang responsif, ramah pengguna, dan berperforma tinggi dengan teknologi modern serta kode yang bersih dan terpelihara.',
      viewWork: 'Lihat Karya',
    },

    services: {
      sectionTitle: 'Layanan',
      sectionDesc: 'Berbagai layanan untuk membantu membangun produk digital yang berkembang dan berhasil.',
      items: [
        { title: ['Pengembangan', 'Frontend'] },
        { title: ['Integrasi', 'AI'] },
        { title: ['Desain', 'UI/UX'] },
        { title: ['Optimasi', 'Performa'] },
        { title: ['Pembuatan', 'Konten'] },
        { title: ['Analitik &', 'Pelacakan'] },
      ],
    },

    cta: {
      heading: 'Mari wujudkan ide Anda',
      body: 'Hubungi saya hari ini untuk mengetahui bagaimana saya dapat membantu produk Anda berkembang.',
      button: 'Hubungi Saya',
    },

    github: {
      sectionTitle: 'Kontribusi GitHub',
      sectionDesc: 'Jelajahi perjalanan coding dan kontribusi saya sepanjang tahun',
    },

    experience: {
      sectionTitle: 'Pengalaman Kerja',
      sectionDesc: 'Perjalanan profesional dan pencapaian karier saya dalam pengembangan web',
      items: [
        {
          number: '01',
          title: 'Senior Frontend Developer',
          company: 'Tech Company A',
          period: 'Jan 2022 – Sekarang',
          description:
            'Memimpin pengembangan aplikasi web responsif menggunakan React, TypeScript, dan framework CSS modern. Berkolaborasi dengan tim lintas fungsi untuk menghasilkan produk berkualitas tinggi. Membimbing pengembang junior dan melakukan code review.',
        },
        {
          number: '02',
          title: 'Frontend Developer',
          company: 'Startup B',
          period: 'Jun 2020 – Des 2021',
          description:
            'Mengembangkan dan memelihara berbagai aplikasi web yang berhubungan dengan klien. Mengimplementasikan desain responsif dan memastikan kompatibilitas lintas browser.',
        },
        {
          number: '03',
          title: 'Junior Web Developer',
          company: 'Agency C',
          period: 'Jan 2019 – Mei 2020',
          description:
            'Membangun halaman web interaktif menggunakan HTML, CSS, dan JavaScript. Membantu pengembang senior dalam mengimplementasikan fitur baru dan memperbaiki bug.',
        },
        {
          number: '04',
          title: 'Magang Web Developer',
          company: 'Company D',
          period: 'Jun 2018 – Des 2018',
          description:
            'Mempelajari dasar-dasar dan praktik terbaik pengembangan web. Berkontribusi pada fitur kecil dan perbaikan bug di bawah pengawasan.',
        },
      ],
    },

    projects: {
      sectionTitle: 'Proyek',
      sectionDesc: 'Kumpulan proyek yang saya kerjakan — dari web hingga mobile',
      filterAll: 'Semua',
      filterWebsite: 'Website',
      filterMobile: 'Mobile',
      items: [
        {
          title: 'Pig Friends',
          description:
            'Website komunitas & informasi seputar perawatan guinea pig. Menampilkan panduan, galeri, dan forum diskusi interaktif.',
        },
        {
          title: 'Plagbleg',
          description: 'Platform deteksi & pelaporan plagiarisme teks dengan antarmuka bersih dan intuitif.',
        },
        {
          title: 'Trilokas',
          description:
            'Aplikasi mobile eksplorasi budaya & destinasi wisata berbasis lokasi dengan pengalaman visual imersif.',
        },
        {
          title: 'Picture',
          description:
            'Aplikasi web berbagi dan eksplorasi foto dengan tampilan galeri modern dan fitur pencarian cepat.',
        },
        {
          title: 'Sayur Mart',
          description:
            'Platform e-commerce sayur dan buah segar dengan sistem pemesanan online yang mudah digunakan.',
        },
        {
          title: 'PMB SMA',
          description:
            'Aplikasi mobile penerimaan murid baru SMA dengan alur pendaftaran digital yang efisien dan mudah diakses.',
        },
      ],
    },

    cv: {
      pageTitle: 'Resume',
      downloadBtn: 'Unduh PDF',
      printBtn: 'Cetak',
      backBtn: 'Kembali ke Portofolio',
      generatingPdf: 'Membuat PDF…',

      name: 'Cahya Yoga Ariyanto',
      role: 'Frontend Developer',
      email: 'cahyayogaariyanto@email.com',
      phone: '+62 812-3456-7890',
      location: 'Yogyakarta, Indonesia',
      github: 'github.com/CahyaYogaAriyanto',
      linkedin: 'linkedin.com/in/cahyayoga',

      sections: {
        summary: 'Ringkasan Profesional',
        skills: 'Keahlian Teknis',
        experience: 'Pengalaman Kerja',
        education: 'Pendidikan',
        projects: 'Proyek',
        certifications: 'Sertifikasi',
        languages: 'Bahasa',
        contact: 'Informasi Kontak',
      },

      summary:
        'Frontend Developer bersemangat dengan pengalaman membangun aplikasi web dan mobile yang responsif dan berperforma tinggi. Mahir dalam React, TypeScript, dan framework CSS modern. Kemampuan pemecahan masalah yang kuat, kepekaan desain, dan komitmen pada kode yang bersih.',

      skills: {
        frontend: { label: 'Frontend', items: 'React, TypeScript, Next.js, Redux, HTML5, JavaScript' },
        styling: { label: 'Styling', items: 'Tailwind CSS, CSS3, Sass, Bootstrap, MUI, Framer Motion' },
        backend: { label: 'Backend', items: 'Node.js, Express, Django, Laravel' },
        database: { label: 'Database', items: 'MySQL, PostgreSQL, MongoDB, Firebase' },
        mobile: { label: 'Mobile', items: 'Flutter, Dart, React Native, Expo' },
        tools: { label: 'Tools & DevOps', items: 'Git, GitHub, Docker, Vercel, AWS, Figma' },
      },

      education: [
        {
          degree: 'Sarjana Teknik Informatika',
          institution: 'Universitas XYZ',
          period: '2019 – 2023',
          gpa: 'IPK: 3.82 / 4.00',
        },
      ],

      certifications: [
        { name: 'Sertifikasi React Developer', issuer: 'Meta', year: '2023' },
        { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2022' },
        { name: 'Sertifikat Desain UX Google', issuer: 'Google', year: '2022' },
      ],

      languages: [
        { lang: 'Bahasa Indonesia', level: 'Bahasa Ibu' },
        { lang: 'Inggris', level: 'Profesional' },
      ],

      present: 'Sekarang',
    },

    skills: {
      sectionTitle: 'Keahlian Saya',
      sectionDesc:
        'Gambaran lengkap tentang teknologi, alat, dan konsep yang saya gunakan untuk membangun pengalaman digital modern.',
    },

    misc: {
      madeWith: 'Dirancang & dibangun oleh',
      rights: 'Semua hak dilindungi.',
    },
  },
} as const;

export type Translations = typeof translations.en;

// ── Context ─────────────────────────────────────────────────────────────────
interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'id' : 'en'));

  const value: LanguageContextValue = {
    lang,
    t: translations[lang] as Translations,
    toggleLang,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// ── Hook ────────────────────────────────────────────────────────────────────
export const useLang = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
};
