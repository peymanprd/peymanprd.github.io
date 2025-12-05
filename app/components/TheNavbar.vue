<script setup lang="ts">
import { Terminal, Command } from "lucide-vue-next";

const { scrollTo, isCmdOpen, activeSection } = usePortfolio();

const navLinks = ["About", "Experience", "Projects"];
</script>

<template>
  <nav class="fixed top-6 left-0 right-0 z-40 px-6 pointer-events-none">
    <div
      class="max-w-3xl mx-auto flex justify-between items-center h-12 bg-zinc-800/40 backdrop-blur-md border border-zinc-700/20 rounded-full pl-2 pr-4 shadow-2xl shadow-black/20 pointer-events-auto transition-all hover:border-zinc-700/70"
    >
      <!-- Logo: Engineering Terminal Style -->
      <button
        @click="scrollTo('about')"
        class="flex items-center gap-3 group"
        aria-label="Go to top"
      >
        <div
          class="p-1.5 rounded-full bg-zinc-800/40 text-teal-400 border border-zinc-700/30 group-hover:border-teal-400/30 group-hover:bg-teal-500/10 group-hover:text-teal-300 transition-all duration-300 shadow-sm"
        >
          <Terminal :size="16" stroke-width="2.5" />
        </div>
        <div class="flex flex-col items-start leading-none">
          <span
            class="font-mono text-xs font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors"
          >
            ~/peyman<span class="text-teal-400 animate-pulse">_</span>
          </span>
          <span
            class="text-[8px] font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors mt-0.5"
          >
            UI_ENGINEER
          </span>
        </div>
      </button>

      <!-- Actions -->
      <div class="flex items-center gap-6">
        <!-- Desktop Links -->
        <div
          class="hidden md:flex gap-1 bg-zinc-950/30 p-1 rounded-full border border-white/5"
        >
          <button
            v-for="item in navLinks"
            :key="item"
            @click="scrollTo(item.toLowerCase())"
            class="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden"
            :class="[
              activeSection === item.toLowerCase()
                ? 'text-zinc-100 bg-zinc-800 shadow-sm'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50',
            ]"
          >
            {{ item }}

            <!-- Active Indicator: Quantum Glow Line -->
            <div
              v-if="activeSection === item.toLowerCase()"
              class="absolute bottom-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_8px_rgba(45,212,191,0.6)]"
            />
          </button>
        </div>

        <div class="h-4 w-[1px] bg-zinc-700/70 hidden md:block" />

        <!-- Command Trigger -->
        <button
          @click="isCmdOpen = true"
          class="flex items-center gap-2 text-zinc-400 hover:text-teal-400 transition-colors group"
          title="Command Palette (Cmd+K)"
        >
          <Command :size="16" />
          <span
            class="hidden sm:inline text-[10px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded-md text-zinc-400 group-hover:text-zinc-200 transition-colors"
          >
            Cmd+K
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>
