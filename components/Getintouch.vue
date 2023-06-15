<script setup lang="ts">
//
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center p-1 bg-neutral-850 border border-band rounded-2xl"
  >
    <div class="flex justify-center items-center w-64 h-44 md:h-auto">
      <NuxtImg src="/images/icons/email.png" class="w-20" />
    </div>
    <div
      class="flex flex-col gap-3 py-6 px-12 md:px-8 bg-neutral-900 rounded-2xl h-auto md:h-56"
    >
      <h4 class="text-lg sm:text-2xl font-medium capitalize text-white">
        Are you eager to work with me?
      </h4>
      <p class="text-sm leading-6 sm:text-2sm font-normal text-neutral-400">
        There are no boundaries between me and you, feel free to get started and
        email me your ideas
      </p>
      <div
        class="flex flex-col sm:flex-row items-center gap-8 mt-6 md:mt-auto mb-0"
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
        <Socials />
      </div>
    </div>
  </div>
</template>
