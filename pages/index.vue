<script setup lang="ts">
definePageMeta({
  title: 'Peyman Pirzadeh - Frontend Developer',
  content: 'Welcome to Peyman Pirzadeh - Frontend Developer website',
})

const services = [
  {
    name: 'VueJS / Nuxt Development',
    summary:
      'VueJS is one of the best JavaScript frameworks, and I will use it to create wonderful web browser and mobile phone applications for your organization.',
    tag: 'popular',
    iconName: 'solar:medal-ribbons-star-bold-duotone',
  },
  {
    name: 'HTML / CSS Responsive Web Design',
    summary:
      'I have extensive expertise building responsive websites using CSS, JavaScript, and HTML, and I am certain that I can meet your requirements.',
    tag: 'used',
    iconName: 'solar:star-fall-bold-duotone',
  },
  {
    name: 'Design File to Code',
    summary:
      'I convert PSD, Sketch, Figma, and Adobe XD files to pixel-perfect standards-compliant HTML5/CSS3/Javascript formats.',
    iconName: 'solar:code-circle-bold-duotone',
  },
  {
    name: 'UI design',
    summary:
      'I have strong skills and experience in creating visually appealing user interfaces that provide an excellent user experience.',
    iconName: 'solar:widget-5-bold-duotone',
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
  <TheHero />
  <Services :services="services" id="p_services" class="!mb-20 md:!mb-40" />
  <!-- <Projects :projects="projects" id="p_projects" class="!mb-20 md:!mb-40" /> -->
</template>
