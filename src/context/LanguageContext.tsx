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
      responsibilitiesLabel: 'Responsibilities:',
      collapseLabel: 'Collapse',
      expandLabel: 'Expand',
      items: [
        {
          number: '10 months',
          title: 'Front-End Developer (React.js & Vue.js)',
          company: 'PT Gama Integra Informatika',
          location: 'Sleman, Yogyakarta',
          period: 'October 2025 – June 2026',
          responsibilities: [
            'Developed and implemented modern UI/UX designs into responsive, interactive, and user-friendly web applications using React.js, Vue.js, and TypeScript.',
            'Integrated REST APIs with backend for data management, authentication, and implementation of various business features.',
            'Prepared technical documentation regarding component structure, API usage, and system development flow to facilitate maintenance and further development.',
            'Performed debugging, bug fixes, code refactoring, and application performance optimization to ensure the system runs stably, efficiently, and is easy to maintain.',
            'Collaborated with UI/UX Designers, Back-End Developers, and related teams in the application development process.',
          ],
        },
        {
          number: '6 months',
          title: 'Front-End Developer Intern (Vue.js)',
          company: 'G Media',
          location: 'Sleman, Yogyakarta',
          period: 'January 2025 – June 2025',
          responsibilities: [
            'Implemented UI/UX designs from mockups into web application interfaces using Vue.js.',
            'Developed and maintained responsive, interactive, and user-friendly interface components.',
            'Collaborated with the development team in implementing new features and system improvements.',
            'Prepared technical documentation related to component structure, feature implementation, and development flow to facilitate maintenance and further development.',
            'Conducted testing and debugging to ensure the application runs properly.',
          ],
        },
        {
          number: '1 year',
          title: 'Teaching Assistant',
          company: 'Universitas Teknologi Yogyakarta',
          location: 'Sleman, Yogyakarta',
          period: 'February 2024 – February 2025',
          roles: [
            {
              name: 'Information Technology Applications',
              responsibilities: [
                'Assisted lecturers in conducting practicum sessions and substituted for lecturers during the learning process.',
                'Guided students in using applications and implementing information technology in practicum case studies.',
                'Conducted assignment assessments, evaluated practicum results, and provided feedback to students.',
                'Managed class administration, including recording student attendance.',
                'Prepared learning recap documents, practicum materials, and evaluation results.',
              ],
            },
            {
              name: 'Coding and Machine Learning',
              responsibilities: [
                'Accompanied the learning process in programming and basic Machine Learning practicum sessions.',
                'Guided students in the coding, debugging, and Machine Learning algorithm implementation process.',
                'Substituted for lecturers in practicum sessions and provided guidance on learning assignments.',
                'Conducted assignment assessments and provided feedback on students\' work results.',
                'Prepared documentation and practicum result recaps as learning evaluation materials.',
              ],
            },
            {
              name: 'Database',
              responsibilities: [
                'Assisted lecturers in conducting practicum sessions for database design and management.',
                'Guided students in using SQL, creating queries, and implementing database systems.',
                'Substituted for lecturers in practicum class assistance when needed.',
                'Conducted assignment assessments, checked practicum results, and evaluated student learning.',
                'Managed class administration, including recording attendance and preparing learning recaps.',
              ],
            },
          ],
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

      educationDesc: 'The academic journey that shaped the foundation of my knowledge and skills',

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
          institution: 'Universitas Teknologi Yogyakarta',
          period: '2022 – 2026',
          gpa: 'GPA: 3.78 / 4.00',
        },
        {
          degree: 'Vocational High School',
          institution: 'SMK Ma’arif NU Doro',
          period: '2019 – 2022',
        },
        {
          degree: 'Junior High School',
          institution: 'SMP Negeri 1 Petungkriyono',
          period: '2016 – 2019',
        },
        {
          degree: 'Elementary School',
          institution: 'SD Negeri 01 Yosorejo',
          period: '2010 – 2016',
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
      sectionDesc: 'Perjalanan profesional dan pencapaian karier saya sebagai frontend developer',
      responsibilitiesLabel: 'Tanggung Jawab:',
      collapseLabel: 'Tutup',
      expandLabel: 'Buka',
      items: [
        {
          number: '11 bulan',
          title: 'Front-End Developer (React.js & Vue.js)',
          company: 'PT Gama Integra Informatika',
          location: 'Sleman, Yogyakarta',
          period: 'Oktober 2025 – Agustus 2026',
          responsibilities: [
            'Mengembangkan dan mengimplementasikan desain UI/UX modern menjadi aplikasi web yang responsif, interaktif, dan user-friendly menggunakan React.js, Vue.js, dan TypeScript.',
            'Melakukan integrasi REST API dengan backend untuk pengelolaan data, autentikasi, serta implementasi berbagai fitur bisnis.',
            'Menyusun dokumentasi teknis mengenai struktur komponen, penggunaan API, serta alur pengembangan sistem untuk memudahkan maintenance dan pengembangan lanjutan.',
            'Melakukan debugging, perbaikan bug, refactoring kode, serta optimasi performa aplikasi agar sistem berjalan stabil, efisien, dan mudah dipelihara.',
            'Berkolaborasi dengan UI/UX Designer, Back-End Developer, dan tim terkait dalam proses pengembangan aplikasi.',
          ],
        },
        {
          number: '6 bulan',
          title: 'Front-End Developer Intern (Vue.js)',
          company: 'G Media',
          location: 'Sleman, Yogyakarta',
          period: 'Oktober 2025 – Juni 2025',
          responsibilities: [
            'Mengimplementasikan desain UI/UX dari mockup menjadi antarmuka aplikasi web menggunakan Vue.js.',
            'Mengembangkan dan memelihara komponen antarmuka yang responsif, interaktif, dan mudah digunakan.',
            'Berkolaborasi dengan tim pengembang dalam implementasi fitur baru dan penyempurnaan sistem.',
            'Menyusun dokumentasi teknis terkait struktur komponen, implementasi fitur, serta alur pengembangan untuk memudahkan maintenance dan pengembangan lanjutan.',
            'Melakukan testing dan debugging untuk memastikan aplikasi berjalan dengan baik.',
          ],
        },
        {
          number: '2 Semester (1 tahun)',
          title: 'Asisten Dosen',
          company: 'Universitas Teknologi Yogyakarta',
          location: 'Sleman, Yogyakarta',
          period: 'Februari 2024 – Februari 2025',
          roles: [
            {
              name: 'Aplikasi Teknologi Informasi',
              responsibilities: [
                'Membantu dosen dalam pelaksanaan praktikum serta menggantikan peran dosen saat proses pembelajaran berlangsung.',
                'Membimbing mahasiswa dalam penggunaan aplikasi dan implementasi teknologi informasi pada studi kasus praktikum.',
                'Melakukan penilaian tugas, evaluasi hasil praktikum, serta memberikan umpan balik kepada mahasiswa.',
                'Mengelola administrasi kelas, termasuk pencatatan kehadiran mahasiswa.',
                'Menyusun dokumen rekap pembelajaran, materi praktikum, dan hasil evaluasi.',
              ],
            },
            {
              name: 'Coding dan Machine Learning',
              responsibilities: [
                'Mendampingi proses pembelajaran praktikum pemrograman dan dasar Machine Learning.',
                'Membimbing mahasiswa dalam proses coding, debugging, serta implementasi algoritma Machine Learning.',
                'Menggantikan dosen dalam sesi praktikum serta memberikan arahan terkait tugas pembelajaran.',
                'Melakukan penilaian tugas dan memberikan feedback terhadap hasil pekerjaan mahasiswa.',
                'Menyusun dokumentasi dan rekap hasil praktikum sebagai bahan evaluasi pembelajaran.',
              ],
            },
            {
              name: 'Basis Data',
              responsibilities: [
                'Membantu dosen dalam pelaksanaan praktikum perancangan dan pengelolaan basis data.',
                'Membimbing mahasiswa dalam penggunaan SQL, pembuatan query, serta implementasi sistem basis data.',
                'Menggantikan dosen dalam pendampingan kelas praktikum apabila diperlukan.',
                'Melakukan penilaian tugas, pengecekan hasil praktikum, dan evaluasi pembelajaran mahasiswa.',
                'Mengelola administrasi kelas, termasuk pencatatan absensi dan penyusunan rekap pembelajaran.',
              ],
            },
          ],
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

      educationDesc: 'Perjalanan akademik yang membentuk fondasi pengetahuan dan keterampilan saya',

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
          degree: 'Sarjana Informatika',
          institution: 'Universitas Teknologi Yogyakarta ',
          period: '2022 – 2026',
          gpa: 'IPK: 3.78 / 4.00',
        },
        {
          degree: 'Sekolah Menengah Kejuruan',
          institution: 'SMK Ma’arif NU Doro',
          period: '2019 – 2022',
        },
        {
          degree: 'Sekolah Menengah Pertama',
          institution: 'SMP Negeri 1 Petungkriyono',
          period: '2016 – 2019',
        },
        {
          degree: 'Sekolah Dasar',
          institution: 'SD Negeri 01 Yosorejo',
          period: '2010 – 2016',
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
