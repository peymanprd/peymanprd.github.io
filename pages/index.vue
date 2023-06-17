<script setup lang="ts">
definePageMeta({
  title: 'Peyman Pirzadeh - Frontend Developer',
  content: 'Welcome to Peyman Pirzadeh - Frontend Developer website',
})

const services = [
  {
    name: 'VueJS / Nuxt Development',
    summary:
      'VueJS is a fantastic JavaScript framework that I will use to create excellent web and mobile applications for your company.',
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
    logo: 'images/projects/ilm.png',
    name: 'ilm',
    summary: 'A Weather web application',
    link: 'https://ilm-black.vercel.app',
  },
  {
    logo: 'images/projects/drawer.png',
    name: 'Drawer',
    summary: 'A tool for drawing and painting',
    link: 'https://drawer-eta.vercel.app',
  },
  // {
  //   logo: 'images/x.png',
  //   name: 'Coming',
  //   summary: 'A project that may be discussed and observed',
  //   link: '/',
  // },
  // {
  //   logo: 'images/x.png',
  //   name: 'Coming',
  //   summary: 'A project that may be discussed and observed',
  //   link: '/',
  // },
]
</script>

<template>
  <TheHero />
  <Services :services="services" id="p_services" class="!mb-20 md:!mb-40" />
  <Projects :projects="projects" id="p_projects" class="!mb-20 md:!mb-40" />
</template>
