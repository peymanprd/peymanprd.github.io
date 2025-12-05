<script setup lang="ts">
import { ArrowUp } from "lucide-vue-next";

const { copyEmail } = usePortfolio();

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>

<template>
  <footer
    id="contact"
    class="border-t border-zinc-800/80 mt-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500"
  >
    <!-- Left: Actions -->
    <div
      class="flex gap-6 font-mono mb-4 md:mb-0 w-full md:w-auto justify-center md:justify-start"
    >
      <button @click="copyEmail" class="hover:text-teal-300 transition-colors">
        COPY_EMAIL()
      </button>
      <a href="#" class="hover:text-teal-300 transition-colors">LINKEDIN</a>
      <a href="#" class="hover:text-teal-300 transition-colors">GITHUB</a>
    </div>

    <!-- Right: Back to Top & System Status -->
    <div
      class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end"
    >
      <div class="font-mono opacity-30 select-none hidden sm:block">
        // TERMINAL_SESSION_END
      </div>

      <button
        @click="scrollToTop"
        class="group flex items-center gap-3 text-zinc-500 hover:text-teal-300 transition-all duration-300"
        title="Back to Top"
      >
        <span
          class="font-mono text-[10px] tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        >
          cd /root
        </span>
        <div
          class="p-2 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-teal-500/40 group-hover:bg-teal-950/20 transition-all"
        >
          <ArrowUp :size="14" />
        </div>
      </button>
    </div>
  </footer>
</template>
