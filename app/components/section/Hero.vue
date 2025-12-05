<script setup lang="ts">
import { ArrowRight, Check, Mail } from "lucide-vue-next";

const { scrollTo, copyEmail, emailCopied } = usePortfolio();

// Static Stats Data
const stats = [
  { label: "Location", value: "Alborz (Remote)" },
  { label: "Experience", value: "4+ Years" },
  { label: "Focus", value: "Performance & UX" },
];
</script>

<template>
  <section
    id="about"
    class="mb-24 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-end"
  >
    <!-- Intro Text -->
    <div>
      <!-- Live Status Badge: Engineering Grade -->
      <div class="mb-8 inline-flex">
        <div
          class="group flex items-center gap-3 px-2.5 py-0.5 rounded-full border border-teal-700/10 bg-teal-700/5 backdrop-blur-sm transition-colors duration-300 hover:border-teal-500/20 hover:bg-teal-500/10 cursor-default"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 duration-1000"
            />
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"
            />
          </span>
          <span
            class="font-mono text-[10px] font-medium text-teal-500 tracking-widest uppercase group-hover:text-teal-400 transition-colors"
          >
            System_Status: <span class="text-teal-300">Open_To_Work</span>
          </span>
        </div>
      </div>

      <h1
        class="text-4xl md:text-5xl font-bold text-zinc-100 mb-6 tracking-tight leading-tight"
      >
        Senior <span class="text-zinc-400">UI Engineer</span
        ><span class="text-teal-400">.</span>
      </h1>

      <p class="text-zinc-400 leading-relaxed max-w-xl text-sm mb-8">
        Architecting high-performance web applications with a focus on
        <span class="text-zinc-200"> scalability</span> and
        <span class="text-zinc-200">developer experience</span>. Specialized in
        the Vue/Nuxt ecosystem and design systems.
      </p>

      <div class="flex flex-wrap gap-3">
        <!-- Primary Action: Refined interaction & feedback -->
        <button
          @click="scrollTo('projects')"
          class="group py-2.5 px-6 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-bold tracking-wide flex items-center gap-2 transition-all duration-200 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 outline-none"
        >
          View Work
          <ArrowRight
            :size="14"
            class="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <!-- Secondary Action: Ghost style with mono font for technical feel -->
        <button
          @click="copyEmail"
          class="group relative py-2.5 px-6 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs font-medium font-mono flex items-center gap-3 transition-all duration-200 hover:border-zinc-600 hover:text-zinc-200 hover:bg-zinc-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 outline-none overflow-hidden"
        >
          <div class="relative w-4 h-4">
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-50 rotate-90"
              enter-to-class="opacity-100 scale-100 rotate-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 scale-100 rotate-0"
              leave-to-class="opacity-0 scale-50 -rotate-90"
            >
              <Check
                v-if="emailCopied"
                :size="16"
                class="text-teal-400 absolute inset-0"
              />
              <Mail
                v-else
                :size="16"
                class="absolute inset-0 transition-colors group-hover:text-zinc-100"
              />
            </Transition>
          </div>
          <span class="tracking-tight">{{
            emailCopied ? "Email Copied" : "Copy Email"
          }}</span>
        </button>
      </div>
    </div>

    <!-- Config Block / Stats -->
    <div class="hidden md:flex w-full justify-end pb-2">
      <div class="flex flex-col gap-4 text-xs font-mono">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="group flex items-center justify-end gap-4 text-zinc-400"
        >
          <span class="tracking-widest uppercase text-[10px]">
            {{ stat.label }}
          </span>
          <span
            class="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-teal-500/50 transition-colors"
          />
          <span class="text-zinc-200 w-32 text-right">{{ stat.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
