<script setup lang="ts">
const route = useRoute()
// const colorThemeKey = ref(0)
// const colorMode = useColorMode()

// const colorThemeIcon = computed(() => {
//   if (colorMode.preference === 'light')
//     return 'line-md:sunny-outline-to-moon-loop-transition'
//   if (colorMode.preference === 'dark')
//     return 'line-md:moon-to-sunny-outline-loop-transition'
//   return 'line-md:computer'
// })

// function setColorTheme(newMode: string) {
//   colorMode.preference = newMode
//   colorThemeKey.value++
// }
</script>

<template>
  <nav
    class="flex items-center w-full gap-8 py-8 font-medium text-2.5sm transition"
  >
    <TheMobileMenu :visible="!!route.query.mobileMenu" />
    <NuxtLink
      to="/"
      class="text-neutral-500 hover:text-neutral-900 mr-2 md:mr-8"
    >
      <TheLogo />
    </NuxtLink>
    <ul class="hidden md:flex md:items-center md:gap-10">
      <li>
        <NuxtLink
          to="/#p_services"
          class="text-neutral-500 hover:text-neutral-100"
        >
          Services
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#p_projects"
          class="text-neutral-500 hover:text-neutral-100"
        >
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="text-neutral-500 hover:text-neutral-100">
          About
        </NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink
          to="/blog"
          class="text-neutral-500 hover:text-neutral-900"
        >
          Blog
        </NuxtLink>
      </li> -->
      <li>
        <NuxtLink
          to="mailto:dev.pirzadeh@gmail.com"
          class="text-neutral-500 hover:text-neutral-100"
        >
          Contact
        </NuxtLink>
      </li>
    </ul>

    <div class="inline-flex items-center gap-4 mr-0 ml-auto">
      <AvailabilityStatus class="hidden md:flex" />
      <NuxtLink
        :to="`${route.path}?commandsNavigate=true`"
        class="inline-flex justify-center items-center w-10 h-10 rounded-full text-neutral-400 hover:text-neutral-100"
      >
        <Icon name="lucide:command" size="18" />
      </NuxtLink>

      <!-- <button
        id="theme_toggle"
        aria-label="theme_toggle"
        @click="
          setColorTheme(
            $colorMode.preference === 'system'
              ? 'light'
              : $colorMode.preference === 'light'
              ? 'dark'
              : 'system'
          )
        "
        class="btn-change-color-mode inline-flex justify-center items-center rounded-full w-10 h-10 text-neutral-400 hover:text-neutral-100"
      >
        <Icon :key="colorThemeKey" size="20" :name="colorThemeIcon" />
      </button> -->
      <NuxtLink
        :to="`${route.path}?mobileMenu=true`"
        class="inline-flex md:hidden justify-center items-center w-10 h-10 rounded-lg border border-band"
      >
        <Icon
          name="solar:hamburger-menu-linear"
          size="24"
          class="text-neutral-100"
        />
      </NuxtLink>
    </div>
  </nav>
</template>
