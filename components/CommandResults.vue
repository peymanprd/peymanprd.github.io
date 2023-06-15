<script setup lang="ts">
interface Props {
  results: any[]
  highlightIndex: number
}

defineProps<Props>()
</script>

<template>
  <ul
    class="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2"
    id="options"
    role="listbox"
  >
    <li>
      <h2 class="text-xs text-neutral-200 px-4 py-2 bg-neutral-800/60">
        Pages
      </h2>
      <ul class="text-sm text-neutral-400">
        <li
          v-for="(result, resultKey) in results"
          :key="resultKey"
          class="flex items-center gap-2.5 cursor-pointer hover:bg-neutral-900/40 hover:text-neutral-100 select-none px-4 py-2"
          :class="highlightIndex === resultKey && 'bg-neutral-900/40'"
          id="option-1"
          role="option"
          tabindex="-1"
          @click="navigateTo(result.link)"
          @keydown.enter="navigateTo(result.link)"
        >
          <Icon name="solar:link-square-line-duotone" size="16" />
          {{ result.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>
