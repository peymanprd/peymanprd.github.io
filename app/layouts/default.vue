<script setup lang="ts">
// Layout handles the persistent shell of the application
// This ensures Navbar and Background state persists across route changes
</script>

<template>
  <div
    class="min-h-screen bg-zinc-900 text-zinc-300 font-sans text-sm antialiased selection:bg-teal-500/20 selection:text-teal-200 relative overflow-hidden"
  >
    <!-- global singleton components -->
    <TheBackground />
    <TheNavbar />
    <TheCommandPalette />

    <!-- main content container -->
    <!-- centering logic is handled here to enforce design system consistency -->
    <div
      class="max-w-3xl mx-auto px-6 pt-40 relative z-10 pb-20 flex flex-col min-h-screen"
    >
      <!-- page content injection -->
      <main class="flex-grow">
        <slot />
      </main>

      <!-- footer is part of the layout shell -->
      <TheFooter />
    </div>
  </div>
</template>
