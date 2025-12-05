<script setup lang="ts">
import { GitCommit, Cpu } from "lucide-vue-next";
import type { Experience, SkillCategory } from "~/types/portfolio";

// Data can be moved to a separate data file if it grows large
const experience = shallowRef<Experience[]>([
  {
    range: "2023 — Pres.",
    company: "Tech Giants Inc.",
    role: "Senior UI Developer",
    detail:
      "Spearheading migration to Nuxt 4. Enforcing strict TypeScript boundaries. Mentoring 4 junior engineers.",
  },
  {
    range: "2020 — 2023",
    company: "FinTech Startup",
    role: "Frontend Engineer",
    detail:
      "Core trading engine UI. Reduced bundle size from 2MB to 350KB via aggressive tree-shaking.",
  },
]);

const skills = shallowRef<SkillCategory>({
  "Core Stack": ["Vue.js", "Nuxt v3+", "TypeScript", "Tailwind v3+"],
  Performance: ["Web Workers", "WASM", "Tree-shaking", "SSR/ISR"],
  Architecture: ["Micro-frontends", "Monorepo", "Design Systems"],
  Tooling: ["Vite", "Vitest", "Docker", "CI/CD"],
});
</script>

<template>
  <section
    id="experience"
    class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24"
  >
    <!-- Experience Column -->
    <div class="md:col-span-7" id="experience">
      <div
        class="flex items-center gap-2 mb-6 border-b border-zinc-800/80 pb-2"
      >
        <GitCommit :size="14" class="text-teal-400" />
        <h2 class="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Execution_Log
        </h2>
      </div>
      <div class="space-y-8">
        <div
          v-for="(job, idx) in experience"
          :key="idx"
          class="group relative pl-4 border-l border-zinc-800 hover:border-teal-400/50 transition-colors duration-300"
        >
          <div class="flex justify-between items-baseline mb-1">
            <h3
              class="text-zinc-200 font-bold text-sm group-hover:text-teal-400 transition-colors"
            >
              {{ job.role }}
            </h3>
            <span
              class="font-mono text-[10px] text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded"
            >
              {{ job.range }}
            </span>
          </div>
          <div
            class="text-xs text-zinc-500 group-hover:text-zinc-400 mb-2 font-mono"
          >
            {{ job.company }}
          </div>
          <p class="text-zinc-400 text-xs leading-5">{{ job.detail }}</p>
        </div>
      </div>
    </div>

    <!-- Skills Column -->
    <div class="md:col-span-5">
      <div
        class="flex items-center gap-2 mb-6 border-b border-zinc-800/80 pb-2"
      >
        <Cpu :size="14" class="text-teal-500" />
        <h2 class="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Tech_Stack
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-y-8 gap-x-4">
        <div v-for="(items, category) in skills" :key="category">
          <h3 class="text-[10px] font-mono text-teal-500/80 uppercase mb-3">
            {{ category }}
          </h3>
          <ul class="space-y-1.5">
            <li
              v-for="skill in items"
              :key="skill"
              class="text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-default block"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
