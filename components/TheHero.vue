<script setup lang="ts">
import type { MaybeElement } from '@vueuse/core'
const titleText = shallowRef<MaybeElement>()

// const keyframes = ref([
//   { clipPath: 'circle(20% at 0% 40%)' },
//   { clipPath: 'circle(20% at 60% 80%)' },
//   { clipPath: 'circle(20% at 100% 30%)' },
// ])

// useAnimate(titleText, keyframes, {
//   duration: 2000,
//   iterations: 3,
//   direction: 'alternate',
//   easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
// })
</script>

<template>
  <div class="flex flex-col gap-2 md:gap-3 py-16 md:h-[500px] relative">
    <div
      class="absolute top-60 right-0 md:-right-60 bg-brand/80 w-60 h-60 md:w-80 md:h-80 rounded-full blur-2max"
    ></div>
    <AvailabilityStatus class="md:hidden" />
    <h1
      v-motion-slide-left
      class="text-3xl md:text-title font-semibold text-white mt-2 md:mt-8"
    >
      Hello, I’m Peyman
    </h1>
    <h2
      v-motion-slide-right
      class="text-md md:text-subtitle font-normal text-neutral-300 md:mt-2"
    >
      A Self-Taught
      <strong ref="titleText" class="font-medium">Frontend Developer</strong>
    </h2>
    <p
      class="my-6 md:mt-10 md:max-w-3xl text-sm md:text-body font-normal leading-6 md:leading-8 text-neutral-300 md:text-neutral-400"
    >
      proficient in HTML, CSS, and JavaScript framework Vue.js. details-oriented
      and experienced in building multi-platform websites using responsive web
      design (RWD). extremely passionate about creating UI and optimizing UX.
    </p>
    <div
      class="flex flex-col sm:flex-row items-center gap-6 md:mt-12 md:mt-auto mb-0"
    >
      <NuxtLink
        to="mailto:dev.pirzadeh@gmail.com"
        class="group/item inline-flex justify-center items-center w-full md:w-auto gap-2 py-3.5 px-9 bg-white hover:bg-neutral-200 text-2sm font-bold text-neutral-900 rounded-xl transition"
      >
        <span class="translate-x-3 group-hover/item:translate-x-0 transition">
          Get in touch
        </span>
        <Icon
          name="iconamoon:arrow-top-right-1-bold"
          size="18"
          class="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition"
        />
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="inline-flex justify-center items-center w-full md:w-auto gap-2 py-3.5 px-5 border border-band hover:backdrop-brightness-125 bg-transparent text-2sm font-medium text-white rounded-xl transition"
      >
        About Me
      </NuxtLink>
      <Socials />
    </div>
  </div>
</template>
