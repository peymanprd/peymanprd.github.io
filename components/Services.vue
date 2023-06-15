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
}
interface Props {
  services: Array<Service>
}
defineProps<Props>()
</script>

<template>
  <SectionBox caption="Services I can offer you">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
      <Service
        v-for="(service, serviceKey) in services"
        :key="serviceKey"
        :service="service"
      />
    </div>
    <p class="text-sm text-neutral-400 flex items-center gap-1.5 w-full ml-1">
      <Icon name="solar:info-circle-line-duotone" size="18" />
      If you believe I can assist you but the service you require is not listed
      here, please
      <strong class="font-medium">
        <NuxtLink
          to="mailto:dev.pirzadeh@gmail.com"
          class="text-brand underline"
        >
          contact me
        </NuxtLink>
      </strong>
      regardless.
    </p>
  </SectionBox>
</template>
