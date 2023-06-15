<script setup lang="ts">
enum TAG {
  POPULAR = 'popular',
  USED = 'used',
}

type Tag = TAG.POPULAR | TAG.USED | string

interface Service {
  name: string
  summary: string
  tag?: Tag
  iconName: string
}

interface Props {
  service: Service
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col gap-2.5 py-5 px-6 rounded-xl border relative hover:backdrop-brightness-125 transition"
    :class="[
      !service.tag && 'border-band',
      service.tag === TAG.POPULAR && 'border-brand',
      service.tag === TAG.USED && 'border-cyan-500',
    ]"
  >
    <template v-if="service.tag">
      <span
        class="absolute -top-3 left-4 z-[1] inline-flex justify-center items-center gap-1 py-1 px-2.5 rounded-full text-2xs font-bold capitalize text-neutral-800"
        :class="[
          service.tag === TAG.POPULAR && 'bg-brand',
          service.tag === TAG.USED && 'bg-high',
        ]"
      >
        Most {{ service.tag }}
      </span>
    </template>
    <span class="absolute top-3 right-3 text-white opacity-5">
      <Icon :name="service.iconName" size="69" />
    </span>
    <h4 class="text-2sm font-medium capitalize text-neutral-200">
      {{ service.name }}
    </h4>
    <p class="text-3sm text-neutral-400 leading-5">
      {{ service.summary }}
    </p>
  </div>
</template>
