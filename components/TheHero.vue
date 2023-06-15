<script setup lang="ts">
//
</script>

<template>
  <div class="flex flex-col gap-2 md:gap-3 py-16 md:h-[500px] relative">
    <div
      class="absolute top-60 right-0 md:-right-60 bg-brand/80 w-60 h-60 md:w-80 md:h-80 rounded-full blur-2max"
    ></div>
    <h1 class="text-4xl md:text-title font-semibold text-white mt-6">
      Hello, I’m Peyman
    </h1>
    <h2 class="text-2xl md:text-subtitle font-medium text-neutral-300 md:mt-4">
      A Self-Taught Frontend Developer
    </h2>
    <p
      class="my-6 md:mt-12 md:max-w-3xl text-base md:text-body font-normal md:leading-8 text-neutral-600 dark:text-neutral-400"
    >
      proficient in HTML, CSS, and JavaScript framework Vue.js. details-oriented
      and experienced in building multi-platform websites using responsive web
      design (RWD). extremely passionate about creating UI and optimizing UX. I
    </p>
    <div
      class="flex flex-col sm:flex-row items-center gap-6 md:mt-12 md:mt-auto mb-0"
    >
      <NuxtLink
        to="mailto:dev.pirzadeh@gmail.com"
        class="group/item inline-flex justify-center items-center w-full md:w-auto gap-2 py-3.5 px-9 bg-white hover:bg-neutral-200 text-2sm font-bold text-neutral-900 rounded-xl transition"
      >
        Get in touch
        <Icon
          name="iconamoon:arrow-top-right-1-bold"
          size="18"
          class="group-hover/item:translate-x-1 transition"
        />
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="inline-flex justify-center items-center w-full md:w-auto gap-2 py-3.5 px-5 border border-band hover:border-neutral-700 bg-transparent text-2sm font-medium text-white rounded-xl transition"
      >
        About Me
      </NuxtLink>
      <Socials />
    </div>
  </div>
</template>
