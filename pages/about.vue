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
    <div class="py-10">
      <h2
        class="text-2xl md:text-subtitle font-medium text-neutral-300 md:mt-4"
      >
        About Me
      </h2>
      <div class="space-x-1.5 mt-6 text-neutral-800 dark:text-neutral-200">
        <span class="font-medium">
          I'm Peyman. A
          <strong>Self-Taught Frontend Developer</strong>.
        </span>
      </div>
      <p class="mt-6 text-neutral-700 dark:text-neutral-300 leading-7">
        I'm currently just learn & experience. i really
        <strong>passionate</strong> about aesthetics and UI design. All stages
        from planning to creating my ideas to code are enjoyable for me, so the
        whole path to reaching the destination belongs to me.
      </p>
      <div class="border-t dark:border-t-neutral-800 my-10"></div>
      <p class="text-neutral-700 dark:text-neutral-300 leading-7 my-4">
        I'm passionate about many creative pursuits, including music,
        photography, videography, and of course, <strong>coding</strong>. I love
        building for the <strong>web</strong>. The web is incredible. Anyone can
        become a <strong>developer</strong>, writer, or creator – and no one has
        to ask for permission. You can just build.
      </p>

      <div class="mt-10 flex flex-col md:flex-row md:items-center gap-4">
        <!-- <a
            href="https://twitter.com/peyman_pirzadeh"
            target="_blank"
            class="flex-1 inline-flex justify-center items-center gap-3 px-4 py-3.5 dark:border dark:border-neutral-800 rounded-md text-sm font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-white hover:ring-1 hover:ring-neutral-100 dark:ring-0 dark:hover:bg-neutral-800 transition"
          >
            <Icon name="uim:twitter-alt" size="20" class="ml-1" />
            Twitter
            <Icon name="lucide:arrow-up-right" size="18" class="ml-auto mr-0" />
          </a> -->
        <a
          href="https://github.com/peymanprd"
          target="_blank"
          class="flex-1 inline-flex justify-center items-center gap-3 px-4 py-3.5 dark:border dark:border-neutral-800 rounded-md text-sm font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-white hover:ring-1 hover:ring-neutral-100 dark:ring-0 dark:hover:bg-neutral-800 transition"
        >
          <Icon name="uim:github-alt" size="20" class="ml-1" />
          Github
          <Icon name="lucide:arrow-up-right" size="18" class="ml-auto mr-0" />
        </a>
        <a
          href="/file/peymanpirzadeh-resume-v1.6.pdf"
          class="flex-1 inline-flex justify-center items-center gap-3 px-4 py-3.5 dark:border dark:border-neutral-800 rounded-md text-sm font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-white hover:ring-1 hover:ring-neutral-100 dark:ring-0 dark:hover:bg-neutral-800 transition"
        >
          <Icon name="heroicons:briefcase-20-solid" size="20" class="ml-1" />
          Resume
          <Icon name="lucide:arrow-up-right" size="18" class="ml-auto mr-0" />
        </a>
      </div>
      <Tools :tools="tools" />
    </div>
  </section>
</template>
