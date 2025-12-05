<script setup lang="ts">
// Define component props for customization
const props = defineProps({
  // Allows textColor overriding
  textColor: {
    type: String,
    default: "text-zinc-100",
  },
  // Custom class for size
  sizeClass: {
    type: String,
    default: "h-8 w-8",
  },
});
</script>

<template>
  <div class="inline-flex items-center gap-3 group select-none">
    <!-- Bold Fusion Turbine Logo (SVG) -->
    <div class="relative flex items-center justify-center">
      <!-- Intense Ambient Aura (Always visible, pulses on hover) -->
      <div
        class="absolute inset-0 bg-teal-500/30 blur-xl rounded-full animate-pulse transition-all duration-500 group-hover:bg-teal-400/40 group-hover:blur-2xl"
      ></div>

      <svg
        :class="props.sizeClass"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relative z-10 overflow-visible drop-shadow-[0_0_15px_rgba(45,212,191,0.4)]"
        aria-hidden="true"
      >
        <defs>
          <!-- High Contrast Power Gradient -->
          <linearGradient
            id="power_grad"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stop-color="#99f6e4" />
            <!-- Very Light Teal -->
            <stop offset="50%" stop-color="#2dd4bf" />
            <!-- Teal 400 -->
            <stop offset="100%" stop-color="#115e59" />
            <!-- Dark Teal -->
          </linearGradient>

          <!-- Hard Glow Filter for Core -->
          <filter id="core_glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Heavy Outer Stator (Dark Tech Ring) -->
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="#042f2e"
          stroke-width="8"
          class="opacity-80"
        />

        <!-- Rotating Power Arcs (Main Visual Weight) -->
        <g class="origin-center animate-[spin_6s_linear_infinite]">
          <!-- Primary Heavy Arc -->
          <path
            d="M50 6 A44 44 0 0 1 94 50"
            stroke="url(#power_grad)"
            stroke-width="8"
            stroke-linecap="round"
            class="drop-shadow-lg"
          />
          <!-- Secondary Dark Arc to balance -->
          <path
            d="M50 94 A44 44 0 0 1 6 50"
            stroke="#134e4a"
            stroke-width="8"
            stroke-linecap="round"
            stroke-opacity="0.6"
          />
        </g>

        <!-- Inner High-Speed Accelerator (Counter-Rotate) -->
        <g class="origin-center animate-[spin_2s_linear_infinite_reverse]">
          <circle
            cx="50"
            cy="50"
            r="26"
            stroke="#5eead4"
            stroke-width="4"
            stroke-dasharray="12 18"
            stroke-linecap="square"
            class="opacity-90"
          />
        </g>

        <!-- The Core (Solid & Bright) -->
        <g class="origin-center animate-pulse">
          <!-- Outer Glow Halo -->
          <circle
            cx="50"
            cy="50"
            r="14"
            fill="#2dd4bf"
            filter="url(#core_glow)"
            class="opacity-50"
          />
          <!-- Solid White-Hot Center -->
          <circle cx="50" cy="50" r="10" fill="#ccfbf1" class="shadow-inner" />
          <!-- Tech Detail -->
          <circle cx="50" cy="50" r="4" fill="#0f766e" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Improve smoothness of rotation if needed on low-end devices */
.animate-spin-slow {
  animation: spin 3s linear infinite;
}
</style>
