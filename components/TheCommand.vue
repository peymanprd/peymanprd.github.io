<script setup lang="ts">
const route = useRoute()
const commandTerm = ref('')
const highlightIndex = ref(0)
const options = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Stack',
    link: '/',
  },
]

const results = computed(() => {
  if (!commandTerm.value.length) return options
  return options.filter((option) =>
    option.name.includes(
      commandTerm.value.charAt(0).toUpperCase() + commandTerm.value.slice(1)
    )
  )
})

function onKeydown(e: Event) {
  if (results.value && highlightIndex.value < results.value.length - 1) {
    highlightIndex.value++
  }
}
function onKeyup(e: Event) {
  if (results.value && highlightIndex.value >= results.value.length - 1) {
    highlightIndex.value--
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="route.query.command"
      class="fixed inset-0 z-10 overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
    >
      <!--
      Background overlay, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->

      <div
        v-if="route.query.command"
        class="fixed inset-0 bg-neutral-950 bg-opacity-40 transition-opacity"
        aria-hidden="true"
      ></div>

      <!--
      Command palette, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->

      <div
        v-if="route.query.command"
        class="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-neutral/60 shadow-xl border border-band shadow-neutral-950 backdrop-blur-md transition-all"
      >
        <CommandInput
          v-model="commandTerm"
          @keydown="onKeydown"
          @keyup="onKeyup"
        />
        <template v-if="results.length">
          <CommandResults
            :results="results"
            :highlight-index="highlightIndex"
          />
        </template>
        <template v-else>
          <CommandEmptyState />
        </template>
        <CommandHelper />
      </div>
    </div>
  </Teleport>
</template>
