# 🚀 My Portfolio - Digital Marketing Agency

A modern, clean, and fully responsive portfolio website for a digital marketing agency built with React, TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI/UX
- 📱 **Responsive** - Works on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🔒 **Type-Safe** - Full TypeScript support
- 🧩 **Modular Components** - 15 reusable components
- 🎯 **Clean Architecture** - Well-organized codebase
- 🎨 **Interactive UI** - Expand/collapse experience cards with smooth animations

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components (15 files)
│   ├── Button.tsx
│   ├── ServiceCard.tsx
│   ├── TeamMemberCard.tsx
│   └── ... (and more)
├── pages/
│   └── Home/
│       └── index.tsx   # Main page (28 lines!)
└── App.tsx
```

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Navigation

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the app.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📚 Documentation

- **[COMPONENTS.md](./COMPONENTS.md)** - Detailed component documentation
- **[WORK_EXPERIENCE_FEATURE.md](./WORK_EXPERIENCE_FEATURE.md)** - Interactive experience section guide
- **[REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md)** - Refactoring process and benefits
- **[STRUCTURE.md](./STRUCTURE.md)** - Project structure overview

## 🎯 Sections

1. **Hero Section** - Eye-catching banner with CTA
2. **Services** - 6 service cards (SEO, PPC, Social Media, etc.)
3. **CTA Section** - Get free proposal
4. **Case Studies** - 3 success stories
5. **Work Experience** - Interactive experience timeline with expand/collapse
6. **Team** - 6 team members

## 🧩 Components

### Reusable Components (7)
- `Button` - 2 variants (primary, outline)
- `SectionTitle` - Section titles with highlight
- `ServiceCard` - Service display cards
- `TeamMemberCard` - Team member profiles
- `CaseStudyItem` - Case study items
- `ProcessStep` - Process step items
- `LogoStrip` - Partner logos

### Section Components (8)
- `Navbar` - Navigation bar
- `HeroSection` - Hero banner
- `ServicesSection` - Services showcase
- `CTASection` - Call-to-action
- `CaseStudiesSection` - Case studies
- `WorkingProcessSection` - Process steps
- `TeamSection` - Team showcase

## 💡 Code Quality

- ✅ **TypeScript** - Full type safety
- ✅ **Modular** - 15 focused components
- ✅ **Reusable** - Components used 29+ times
- ✅ **Clean** - Home page reduced from 1000+ to 28 lines
- ✅ **Maintainable** - Easy to update and extend

## 🎨 Customization

### Add New Service

Edit `src/components/ServicesSection.tsx`:

```tsx
const services = [
  // ... existing services
  {
    title: ['New Service'],
    titleBgColor: 'bg-[#B9FF66]',
    bgColor: 'bg-[#F3F3F3]',
    // ... other props
  }
];
```

### Add New Team Member

Edit `src/components/TeamSection.tsx`:

```tsx
const teamMembers = [
  // ... existing members
  {
    name: 'New Member',
    position: 'Position',
    // ... other props
  }
];
```

## 📈 Performance

- **Build Size**: ~226KB (gzipped: ~70KB)
- **Build Time**: ~1.2s
- **Modules**: 49 transformed modules

## 🤝 Contributing

Feel free to fork this project and make it your own!

## 📝 License

MIT License - feel free to use this project for your portfolio.

---

Built with ❤️ using React + TypeScript + Vite + Tailwind CSS
