<script setup lang="ts">
const { initScrollSpy } = usePortfolio();

// Initialize ScrollSpy when the DOM is ready
onMounted(() => {
  initScrollSpy();
});

useSeoMeta({
  title: "Peyman Pirzadeh | Senior UI Engineer",
  description:
    "Senior UI Engineer specializing in high-performance Vue/Nuxt architectures, design systems, and scalable frontend solutions.",
  ogTitle: "Peyman Pirzadeh - Senior UI Engineer",
  ogDescription:
    "Architecting high-performance web applications with a focus on scalability and developer experience.",
  twitterCard: "summary_large_image",
});

// Structured Data (JSON-LD) for Rich Results
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Peyman Pirzadeh",
        jobTitle: "Senior UI Engineer",
        url: "https://peyman.dev",
        sameAs: ["https://github.com/peyman", "https://linkedin.com/in/peyman"],
        knowsAbout: ["Vue.js", "Nuxt", "System Architecture", "UI Engineering"],
      }),
    },
  ],
});
</script>

<template>
  <div class="space-y-24">
    <!-- sections are auto-imported from components/section/ -->
    <SectionHero />
    <SectionExperienceSkills />
    <SectionProjects />
  </div>
</template>
