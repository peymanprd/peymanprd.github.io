<script setup lang="ts">
interface Props {
  results: any[]
  highlightIndex: number
}

defineProps<Props>()

interface Emits {
  (e: 'selectHighlight', index: number): void
}

const emit = defineEmits<Emits>()
</script>

<template>
  <ul
    class="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto"
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
          class="flex items-center gap-2.5 cursor-pointer hover:bg-neutral-900/40 hover:text-neutral-100 px-4 py-2"
          :class="
            highlightIndex === resultKey && 'bg-neutral-900/40 text-neutral-100'
          "
          id="option-1"
          role="option"
          tabindex="0"
          @click="emit('selectHighlight', resultKey)"
        >
          <ClientOnly>
            <Icon :name="result.iconName" size="16" />
          </ClientOnly>
          {{ result.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>
