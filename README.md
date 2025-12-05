# Peyman.dev — Engineering Grade Portfolio

> A high-performance, scalable, and accessible portfolio architecture built with **Nuxt 4** and **Tailwind CSS**. Designed with a philosophy of "Functional Aesthetics" and strict engineering standards.

![Project Status](https://img.shields.io/badge/status-active-success?style=flat-square)
![Nuxt](https://img.shields.io/badge/Nuxt-4.0-00DC82?style=flat-square&logo=nuxt.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)

## ⚡ Technical Overview

This project is not just a static site; it is a demonstration of modern frontend architecture. It leverages the latest **Vue 3.5+** features within the **Nuxt 4** ecosystem to deliver a seamless, zero-layout-shift experience.

### Core Stack

- **Framework:** [Nuxt 4](https://nuxt.com) (SSR Enabled)
- **UI Engine:** [Vue 3.5](https://vuejs.org) (Composition API, `<script setup>`)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) (JIT, Utility-first)
- **Type System:** TypeScript 5.3 (Strict Mode)
- **Icons:** `lucide-vue-next` (Tree-shakable SVG icons)

## 💎 Key Features

- **HUD Navigation System:** A floating, glassmorphism-based navigation bar that persists state across routes without re-rendering.
- **Command Palette (`Cmd+K`):** A fully accessible, keyboard-first command interface for power user navigation and actions.
- **Cinematic Depth:** Utilizes masking, vignettes, and dynamic noise textures to create a "Dark Engineering Studio" ambiance without compromising text readability.
- **Performance Optimized:**
  - `IntersectionObserver` for efficient scroll-spying.
  - Native CSS animations for GPU-accelerated motion.
  - `shallowRef` for static data optimization.
- **Architectural Integrity:** Clean separation of concerns via `composables/` (Logic), `components/` (UI), and `types/` (Definitions).

## 📂 Project Architecture

The project follows a modular, domain-driven structure to ensure maintainability and scalability.

```bash
peymanprd-portfolio-io/
├── components/           # UI Atoms & Molecules
│   ├── project/          # Project-specific components
│   ├── section/          # Landing page sections (Hero, Experience, etc.)
│   ├── TheNavbar.vue     # Singleton HUD Navigation
│   ├── TheCommandPalette # Singleton Global Action Menu
│   └── ...
├── composables/          # Shared Logic (State & Actions)
│   └── usePortfolio.ts   # Centralized logic for UI state & scroll handling
├── layouts/              # Persistent Shells
│   └── default.vue       # Main application shell (Nav + Footer)
├── pages/                # Route Views
│   └── index.vue         # Home view composition
├── types/                # TypeScript Definitions (Source of Truth)
│   └── portfolio.ts      # Shared interfaces
└── app.vue               # App Entry & Global Config

🚀 Getting StartedEnsure you have Node.js 20+ installed.
# 1. Clone the repository
git clone [https://github.com/peymanprd/peymanprd-portfolio-io.git](https://github.com/peymanprd/peymanprd-portfolio-io.git)

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
🛠 Build & DeploymentThis project is optimized for edge deployment (Vercel, Netlify, or Cloudflare Pages).# Production build
npm run build

# Preview production build locally
npm run preview
🧩 CustomizationConfigurationUpdate nuxt.config.ts for global meta tags and module settings.DataModify static data in components/section/*.vue or abstract them into a JSON file within server/api if dynamic fetching is required.StylingThe design system is based on the Zinc palette. To change the theme, update tailwind.config.ts or modify the base classes in layouts/default.vue.© 2025 Peyman Pirzadeh. Designed & Engineered with precision.
```
