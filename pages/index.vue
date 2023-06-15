<script setup lang="ts">
definePageMeta({
  title: 'Peyman Pirzadeh - Frontend Developer',
  content: 'Welcome to Peyman Pirzadeh - Frontend Developer website',
})

const services = [
  {
    name: 'VueJS / Nuxt Development',
    summary:
      'VueJS is best progressive javaScript framework. i create complex software for your business, including web browsers and mobile application user interfaces.',
    tag: 'popular',
  },
  {
    name: 'HTML / CSS Responsive Web Design',
    summary:
      'I experts at designing responsive websites, with CSS at the core of front end development alongside JavaScript and HTML.',
    tag: 'used',
  },
  {
    name: 'Design File to Code',
    summary:
      'I convert PSD, Sketch, Figma, and Adobe XD files into pixel-perfect standards that are compliant with HTML5/CSS3/Javascript templates.',
  },
  {
    name: 'UI design',
    summary:
      'I convert PSD, Sketch, Figma, and Adobe XD files into pixel-perfect standards that are compliant with HTML5/CSS3/Javascript templates.',
  },
]
const projects = [
  {
    logo: 'images/projects/pishop-logo.png',
    name: 'Marketo',
    summary: 'A market for online sales of khar and bar',
    link: '/',
  },
  {
    logo: 'images/projects/pishop-logo.png',
    name: 'Marketo',
    summary: 'A market for online sales of khar and bar',
    link: '/',
  },
  {
    logo: 'images/projects/pishop-logo.png',
    name: 'Marketo',
    summary: 'A market for online sales of khar and bar',
    link: '/',
  },
  {
    logo: 'images/projects/pishop-logo.png',
    name: 'Marketo',
    summary: 'A market for online sales of khar and bar',
    link: '/',
  },
]
</script>

<template>
  <TheCommand />
  <TheHero />
  <Services :services="services" id="p_services" class="!mb-20 md:!mb-40" />
  <!-- <Projects :projects="projects" id="p_projects" class="!mb-20 md:!mb-40" /> -->
</template>
