# Enterprise Portfolio Website

> Production-ready personal engineering portfolio designed with Google / Big-Tech MNC design principles. Built with Vite, React 19, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. Fully static and optimized for 95+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.

[![Deploy to GitHub Pages](https://github.com/Aniket2006953/Aniket2006953.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Aniket2006953/Aniket2006953.github.io/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Demo-Live%20Site-1a73e8?style=flat&logo=googlechrome&logoColor=white)](https://aniket2006953.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## 🌐 Live Website

👉 **[https://aniket2006953.github.io](https://aniket2006953.github.io)**
- **Interactive Light & Dark Mode**: Persistent theme state with automatic OS preference detection.

```
+--------------------------------------------------------------------------+
|  [AC] Alex Chen             About  Experience  Projects  Skills  [Resume] |
|                                                                          |
|  🟢 Available for Senior / Staff Engineer roles                          |
|                                                                          |
|  Hi, I'm Alex Chen                                      [ Profile Frame ] |
|  Senior Software Engineer                                [  Avatar SVG  ] |
|  I build scalable distributed systems and resilient web  [  & Verified  ] |
|  products that millions of people rely on daily.         [    Badge     ] |
|                                                                          |
|  [ View Projects ]  [ Contact Me ]   (GitHub) (LinkedIn) (Email)         |
+--------------------------------------------------------------------------+
```

---

## ⚡ Tech Stack & Architecture

- **Core**: React 19 + TypeScript (Strict Mode)
- **Bundler**: Vite 8 with ESModule tree-shaking
- **Styling**: Tailwind CSS v4 + Custom Design Tokens (CSS Variables)
- **Icons**: Lucide React + Accessible Custom Brand SVGs
- **Motion**: Framer Motion with full `prefers-reduced-motion` compliance
- **CI/CD**: GitHub Actions automated pipeline to GitHub Pages
- **Typography**: Inter (Google Fonts) with system fallbacks

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated CI/CD pipeline
├── public/
│   ├── favicon.svg             # Crisp SVG vector favicon
│   ├── og-image.svg            # OpenGraph & Twitter preview banner
│   ├── profile.svg             # High-tech engineer vector avatar
│   ├── resume.pdf              # Downloadable resume document
│   ├── robots.txt              # Search engine crawler directives
│   └── sitemap.xml             # XML sitemap for SEO discovery
├── src/
│   ├── components/             # Reusable UI component modules
│   │   ├── About.tsx           # Bio narrative & 4 key impact metrics
│   │   ├── Contact.tsx         # Mailto form, quick-copy email, social cards
│   │   ├── Education.tsx       # Degrees, honors, and certifications
│   │   ├── Experience.tsx      # Vertical timeline with metrics highlights
│   │   ├── Footer.tsx          # Copyright, socials, smooth back-to-top
│   │   ├── Hero.tsx            # Intro, status badge, primary CTAs, avatar
│   │   ├── Icons.tsx           # Accessible GitHub & LinkedIn vector SVGs
│   │   ├── Navbar.tsx          # Sticky glass nav, section spy, mobile drawer
│   │   ├── Projects.tsx        # Categorized grid with live/code buttons
│   │   ├── Skills.tsx          # Grouped competency chips
│   │   └── ThemeToggle.tsx     # Light/Dark mode switcher
│   ├── data/
│   │   └── content.ts          # ⭐ SINGLE SOURCE OF TRUTH FOR ALL CONTENT
│   ├── types/
│   │   └── portfolio.ts        # Strongly-typed data definitions
│   ├── App.tsx                 # Root layout & WCAG skip-link
│   ├── index.css               # Design system tokens & Tailwind imports
│   └── main.tsx                # React root entrypoint
├── package.json
├── tsconfig.json
└── vite.config.ts              # Configured for GitHub Pages deployment
```

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js 18+ (tested on Node 20 / 25)
- npm 9+

### 1. Clone & Install

```bash
git clone https://github.com/[YOUR-USERNAME]/[YOUR-USERNAME].github.io.git
cd [YOUR-USERNAME].github.io
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser. Hot Module Replacement (HMR) is enabled.

### 3. Production Build & Test

```bash
npm run build
npm run preview
```

---

## ✏️ How to Customize Your Portfolio

### 1. Edit Content in `src/data/content.ts`
All portfolio content is concentrated in **one file**: [`src/data/content.ts`](file:///d:/PORTFOLIO%20WEBSITE/src/data/content.ts). You never need to touch React components to update your information:

- **Name, Title, Bio, Location**: Update `personal.fullName`, `personal.title`, `personal.shortBio`, `personal.location`.
- **Contact Info & Socials**: Update `personal.email`, `personal.linkedIn`, `personal.github`.
- **Metrics / Stats**: Update `stats` array with your real impact numbers.
- **Experience Timeline**: Add or edit entries in `experiences`.
- **Projects**: Add or edit entries in `projects`.
- **Skills**: Add or organize technical chips in `skills`.
- **Education & Certifications**: Add degrees and honors in `education` and `certificationsAndAwards`.

### 2. Add Your Profile Photo
- Save your portrait image as `profile.jpg` or `profile.png` inside the `public/` folder.
- In `src/data/content.ts`, update `avatarUrl: "./profile.jpg"`.

### 3. Add Your Resume PDF
- Replace `public/resume.pdf` with your actual resume PDF.
- The navbar and hero buttons will automatically download this file.

---

## 🚢 Deploying to GitHub Pages

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: customize portfolio content"
   git push origin main
   ```
2. In your repository on GitHub:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

---

## 📄 License

MIT License. Free to use and customize for your personal portfolio.
