<script setup lang="ts">
const CommandResults = resolveComponent('CommandResults')
const CommandEmptyState = resolveComponent('CommandEmptyState')
const route = useRoute()
const commandTerm = ref('')
const highlightIndex = ref(0)
const commandOptions = [
  {
    name: 'Home',
    link: '/',
    iconName: 'solar:home-smile-bold-duotone',
  },
  {
    name: 'About',
    link: '/about',
    iconName: 'solar:user-hand-up-bold-duotone',
  },
  {
    name: 'Services',
    link: '/#p_services',
    iconName: 'solar:laptop-minimalistic-bold-duotone',
  },
  {
    name: 'Projects',
    link: '/#p_projects',
    iconName: 'solar:backpack-bold-duotone',
  },
  // {
  //   name: 'Blog',
  //   link: '/blog',
  //   iconName: 'solar:pen-new-square-bold-duotone',
  // },
]

const isVisibleCommand = computed(() => !!route.query.commandsNavigate)

const results = computed(() => {
  if (!commandTerm.value.length) return commandOptions
  return commandOptions.filter((option) =>
    option.name.includes(
      commandTerm.value.charAt(0).toUpperCase() + commandTerm.value.slice(1)
    )
  )
})

function close() {
  navigateTo(route.path)
}

function highlight(index: number) {
  if (results.value.length) {
    highlightIndex.value = index
    if (highlightIndex.value > results.value.length - 1) {
      highlightIndex.value = 0
    }
    if (highlightIndex.value < 0) {
      highlightIndex.value = results.value.length - 1
    }
  }
}

function highlightNext() {
  highlight(highlightIndex.value + 1)
}
function highlightPrev() {
  highlight(highlightIndex.value - 1)
}

function selectHighlight(index: number | null) {
  if (index === null) navigateTo(results.value[highlightIndex.value].link)
  else navigateTo(results.value[index].link)
  highlightIndex.value = 0
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isVisibleCommand"
      class="fixed inset-0 z-10 overflow-y-auto px-4 py-28"
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
        class="fixed inset-0 backdrop-blur-sm bg-neutral-950 bg-opacity-10 transition-opacity"
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
        class="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-neutral/60 shadow-xl border border-band shadow-neutral-950 backdrop-blur-md transition-all"
      >
        <CommandInput
          v-model="commandTerm"
          @keydown.esc="close"
          @keydown.down="highlightNext"
          @keydown.up="highlightPrev"
          @keydown.enter.prevent="selectHighlight(null)"
          @keydown.tab.prevent
        />
        <Component
          :is="results.length ? CommandResults : CommandEmptyState"
          @selectHighlight="selectHighlight"
          :results="results"
          :highlight-index="highlightIndex"
        />
        <CommandHelper />
      </div>
    </div>
  </Teleport>
</template>
