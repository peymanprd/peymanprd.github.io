<script setup lang="ts">
definePageMeta({
  title: 'About Peyman Pirzadeh',
  content: 'About Peyman Pirzadeh - Frontend Developer',
})

const tools = [
  {
    iconName: 'logos:html-5',
    name: 'HTML',
    summary: 'Standard markup language for Web pages',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    iconName: 'logos:css-3',
    name: 'CSS',
    summary: 'Cascading style sheets',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    iconName: 'logos:javascript',
    name: 'Javascript',
    summary: 'Dynamic client-side scripting',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    iconName: 'logos:visual-studio-code',
    name: 'Visual Studio Code',
    summary: 'Open source redefined code editor',
    link: 'https://code.visualstudio.com',
  },
  {
    iconName: 'logos:git-icon',
    name: 'Git',
    summary: 'Open source distributed VCS',
    link: 'https://git-scm.com',
  },
  {
    iconName: 'logos:vue',
    name: 'Vuejs',
    summary: 'The Progressive JavaScript Framework',
    link: 'https://vuejs.org',
  },
  {
    iconName: 'logos:nuxt-icon',
    name: 'Nuxt',
    summary: 'The Intuitive Web Framework',
    link: 'https://nuxt.com',
  },
  {
    iconName: 'logos:vitejs',
    name: 'Vitejs',
    summary: 'Next Generation Frontend Tooling',
    link: 'https://vitejs.dev',
  },
  {
    iconName: 'logos:typescript-icon',
    name: 'Typescript',
    summary: 'TypeScript is JavaScript with syntax for types',
    link: 'https://typescriptlang.org',
  },
  {
    iconName: 'logos:bootstrap',
    name: 'Bootstrap',
    summary: 'Css framework, feature-packed frontend toolkit',
    link: 'https://getbootstrap.com',
  },
  {
    iconName: 'logos:tailwindcss-icon',
    name: 'Tailwindcss',
    summary: 'A utility-first CSS framework',
    link: 'https://tailwindcss.com',
  },
  {
    iconName: 'logos:yarn',
    name: 'Yarn',
    summary: 'A safe package manager',
    link: 'https://yarnpkg.com',
  },
  {
    iconName: 'logos:figma',
    name: 'Figma',
    summary: 'The collaborative interface design tool',
    link: 'https://figma.com',
  },
  {
    iconName: 'logos:postman-icon',
    name: 'Postman',
    summary: 'API platform for building and using APIs',
    link: 'https://www.postman.com',
  },
]
</script>

<template>
  <section class="mt-6 md:mt-12">
    <div class="flex flex-col md:flex-row md:items-start gap-8 py-10">
      <div class="flex flex-col pr-8">
        <h2
          v-motion-slide-left
          class="text-4xl md:text-5xl font-medium text-neutral-100 md:mt-4"
        >
          About Peyman
        </h2>
        <div
          v-motion-slide-right
          class="text-sm md:text-base font-normal text-neutral-100 mt-3"
        >
          In search of madness and logic between pixels
        </div>
        <p class="text-neutral-300 font-light leading-7 mt-6">
          I'm a
          <strong class="font-medium text-neutral-200">
            Frontend Developer / UI Designer
          </strong>
          from Iran. Ever since I can remember, I've always been fascinated by
          <strong class="font-medium text-neutral-200">building</strong> and
          <strong class="font-medium text-neutral-200">creating</strong> things.
          It is the one thing that makes me feel alive. <br />
          So, up until this point, I tried a variety of approaches. I am
          <strong class="font-medium text-neutral-200">obsessed</strong> with
          <strong class="font-medium text-neutral-200">designing</strong>
          fantastic
          <strong class="font-medium">user interfaces</strong>
          and <strong class="font-medium">experiences</strong>. So I'm
          continuously investigating and thinking about how to
          <strong class="font-medium">develop</strong>,
          <strong class="font-medium">improve</strong>, and
          <strong class="font-medium">optimize</strong> them, and I'm always
          ready to <strong class="font-medium">collaborate</strong> with smart
          and <strong class="font-medium">creative</strong> people.
        </p>
      </div>
      <div class="flex flex-col w-full md:min-w-[414px] h-full">
        <div
          class="h-[484px] bg-neutral-900 border border-band rounded-xl flex justify-center items-center"
        >
          <Icon
            name="solar:user-hands-bold-duotone"
            size="202"
            class="text-neutral-800"
          />
        </div>
      </div>
    </div>
    <div class="mt-10 flex flex-col md:flex-row md:items-center gap-4">
      <NuxtLink
        to="https://github.com/peymanprd"
        target="_blank"
        class="group/item flex-1 inline-flex justify-center items-center gap-3 px-4 py-3.5 border border-band rounded-lg text-sm text-neutral-100 font-semibold bg-neutral-900 hover:bg-neutral-800 transition"
      >
        <Icon name="uim:github-alt" size="20" class="ml-1" />
        Github
        <Icon
          name="lucide:arrow-up-right"
          size="18"
          class="ml-auto mr-0 invisible group-hover/item:visible transition"
        />
      </NuxtLink>
      <NuxtLink
        to="/file/peymanpirzadeh-resume-v1.6.pdf"
        class="group/item flex-1 inline-flex justify-center items-center gap-3 px-4 py-3.5 border border-band rounded-lg text-sm text-neutral-100 font-semibold bg-neutral-900 hover:bg-neutral-800 transition"
      >
        <Icon name="heroicons:briefcase-20-solid" size="20" class="ml-1" />
        Resume
        <Icon
          name="lucide:arrow-up-right"
          size="18"
          class="ml-auto mr-0 invisible group-hover/item:visible transition"
        />
      </NuxtLink>
    </div>
    <Tools :tools="tools" />
  </section>
</template>
