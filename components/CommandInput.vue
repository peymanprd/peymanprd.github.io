<script lang="ts">
export default { inheritAttrs: false }
</script>
<script setup lang="ts">
interface Props {
  modelValue: string
}

defineProps<Props>()

interface Emits {
  (e: 'update:model-value', value: string): void
}

const emit = defineEmits<Emits>()

function onInput(e: Event) {
  emit('update:model-value', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="relative">
    <Icon
      name="solar:magnifer-linear"
      size="20"
      class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-neutral-400"
    />
    <input
      @input="onInput"
      v-bind="$attrs"
      type="text"
      class="h-12 w-full border-0 bg-transparent focus:outline-2 focus:outline-b-brand pl-12 pr-4 text-neutral-200 placeholder-neutral-400 focus:ring-0 sm:text-sm"
      placeholder="Search..."
      role="combobox"
      aria-expanded="false"
      aria-controls="options"
      autofocus
    />
  </div>
</template>
