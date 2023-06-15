<script setup>
//
</script>

<template>
  <section class="mt-6 md:mt-12 dark:text-white">
    <div class="py-10">
      <h1
        class="text-4xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-xl md:text-5xl"
      >
        Blog
      </h1>
      <ContentList path="/blog" v-slot="{ list }">
        <ul
          class="flex flex-col gap-4 mt-6 text-neutral-800 dark:text-neutral-100"
        >
          <NuxtLink
            v-for="post in list"
            :key="post._id"
            :to="post._path"
            class="font-medium"
          >
            <li
              class="flex flex-col gap-1 p-4 border border-band rounded-lg hover:bg-neutral-800"
            >
              {{ post.title }}
              <span class="text-xs text-neutral-500">
                {{ new Date(post.date).toDateString() }}
              </span>
            </li>
          </NuxtLink>
        </ul>
      </ContentList>
    </div>
  </section>
</template>
