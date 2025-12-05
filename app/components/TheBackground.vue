<script setup lang="ts">
// Handles the visual background effects (Dot Matrix + Monochrome Spotlight + Noise)
const mousePos = ref({ x: 0, y: 0 });

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener("mousemove", (e) => {
      mousePos.value = { x: e.clientX, y: e.clientY };
    });
  }
});
</script>

<template>
  <!-- Reverted 1 step back: Zinc-700 -> Zinc-900 -->
  <div
    class="fixed inset-0 pointer-events-none z-0 bg-zinc-900 overflow-hidden"
  >
    <!-- 1. The Architectural Dot Grid (Static Base) -->
    <!-- Dots reverted: Zinc-500 -> Zinc-700 (#3f3f46) -->
    <div
      class="absolute inset-0 opacity-[0.2]"
      style="
        background-image: radial-gradient(#3f3f46 1px, transparent 1px);
        background-size: 24px 24px;
      "
    />

    <!-- 2. Ambient Structural Depth (Top Center) -->
    <!-- Glow reverted: Zinc-500 -> Zinc-700 -->
    <div
      class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-zinc-700/20 blur-[120px] rounded-full pointer-events-none"
    />

    <!-- 3. Dynamic Cursor Spotlight (Interactive Reveal) -->
    <ClientOnly>
      <div
        class="absolute inset-0 transition-opacity duration-300"
        :style="{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(82, 82, 91, 0.09), transparent 40%)`,
        }"
      />
    </ClientOnly>

    <!-- 4. Cinematic Vignette & Peripheral Grain (The 'Lead Engineer' Touch) -->
    <!-- Creates depth by darkening edges and applying texture ONLY to the periphery, keeping center content crisp. -->
    <div class="absolute inset-0 pointer-events-none z-[1]">
      <!-- Vignette: Focuses attention to the center -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)] mix-blend-multiply"
      />

      <!-- Peripheral Grain: High-fidelity noise masked to show only on edges -->
      <div
        class="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style="
          background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJYdWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1vY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+&quot;);
          mask-image: radial-gradient(
            circle at center,
            transparent 40%,
            black 100%
          );
        "
      />
    </div>
  </div>
</template>
