<script setup lang="ts">
import { Search, ArrowRight } from "lucide-vue-next";

const { isCmdOpen, cmdItems } = usePortfolio();
const cmdQuery = ref("");
const cmdIndex = ref(0);
const cmdInputRef = ref<HTMLInputElement | null>(null);

// Computed filtered items
const filteredItems = computed(() => {
  return cmdItems.value.filter((item) =>
    item.label.toLowerCase().includes(cmdQuery.value.toLowerCase())
  );
});

// Keyboard Trap Logic
const handleKeyDown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    isCmdOpen.value = !isCmdOpen.value;
    cmdQuery.value = "";
    cmdIndex.value = 0;
  }

  if (!isCmdOpen.value) return;

  if (e.key === "Escape") {
    isCmdOpen.value = false;
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    cmdIndex.value = (cmdIndex.value + 1) % filteredItems.value.length;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    cmdIndex.value =
      (cmdIndex.value - 1 + filteredItems.value.length) %
      filteredItems.value.length;
  } else if (e.key === "Enter") {
    e.preventDefault();
    const selectedItem = filteredItems.value[cmdIndex.value];
    if (selectedItem) {
      selectedItem.action();
    }
  }
};

// Auto focus
watch(isCmdOpen, async (newVal) => {
  if (newVal) {
    await nextTick();
    cmdInputRef.value?.focus();
  }
});

onMounted(() => window.addEventListener("keydown", handleKeyDown));
onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isCmdOpen"
        class="fixed inset-0 z-[100] bg-zinc-950/60 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
        @click="isCmdOpen = false"
      >
        <div
          class="w-full max-w-xl bg-zinc-900/90 border border-zinc-700/50 rounded-xl shadow-2xl shadow-black ring-1 ring-white/5 overflow-hidden"
          @click.stop
        >
          <!-- Input Header -->
          <div
            class="flex items-center px-4 py-4 border-b border-white/5 bg-white/5"
          >
            <Search :size="18" class="text-zinc-500 mr-3" />
            <input
              ref="cmdInputRef"
              type="text"
              v-model="cmdQuery"
              @input="cmdIndex = 0"
              placeholder="Type a command..."
              class="bg-transparent border-none outline-none text-zinc-100 w-full placeholder:text-zinc-500 font-medium text-base focus:ring-0"
            />
            <div class="flex gap-2">
              <span
                class="text-[10px] font-bold text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700/50"
                >ESC</span
              >
            </div>
          </div>

          <!-- List -->
          <div class="py-2 max-h-[300px] overflow-y-auto custom-scrollbar">
            <div
              v-if="filteredItems.length === 0"
              class="px-4 py-8 text-center text-zinc-500 text-xs"
            >
              No commands found.
            </div>
            <template v-else>
              <div v-for="(item, idx) in filteredItems" :key="item.id">
                <!-- Group Header -->
                <div
                  v-if="
                    idx === 0 || filteredItems[idx - 1]?.group !== item.group
                  "
                  class="px-4 py-2 text-[10px] font-bold font-mono text-zinc-600 uppercase tracking-widest sticky top-0 bg-zinc-900/95 backdrop-blur-sm z-10"
                >
                  {{ item.group }}
                </div>

                <!-- Item -->
                <button
                  @click="item.action"
                  @mouseenter="cmdIndex = idx"
                  class="w-full text-left px-4 py-3 flex items-center justify-between group transition-all duration-75 relative"
                  :class="{
                    'bg-teal-500/10': idx === cmdIndex,
                    'hover:bg-white/5': idx !== cmdIndex,
                  }"
                >
                  <div
                    v-if="idx === cmdIndex"
                    class="absolute left-0 top-0 bottom-0 w-1 bg-teal-500"
                  />

                  <div class="flex items-center gap-3 pl-2">
                    <component
                      :is="item.icon"
                      :size="14"
                      class="transition-colors"
                      :class="
                        idx === cmdIndex ? 'text-teal-400' : 'text-zinc-500'
                      "
                    />
                    <span
                      class="font-medium"
                      :class="
                        idx === cmdIndex ? 'text-zinc-100' : 'text-zinc-400'
                      "
                    >
                      {{ item.label }}
                    </span>
                  </div>

                  <div
                    v-if="idx === cmdIndex"
                    class="flex items-center gap-2 text-zinc-500"
                  >
                    <span class="text-[10px] font-mono">Select</span>
                    <ArrowRight :size="12" class="text-teal-500" />
                  </div>
                </button>
              </div>
            </template>
          </div>

          <!-- Footer -->
          <div
            class="bg-zinc-950/50 border-t border-white/5 px-4 py-2 flex justify-between items-center"
          >
            <div class="flex gap-4 text-[10px] text-zinc-600 font-mono">
              <span><strong class="text-zinc-400">↑↓</strong> to navigate</span>
              <span><strong class="text-zinc-400">↵</strong> to select</span>
            </div>
            <div class="text-[10px] text-zinc-700 font-mono">Pro Mode</div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
