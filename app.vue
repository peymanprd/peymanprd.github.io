<template>
  <div id="__root__" class="bg-neutral-900 min-h-screen">
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#121212 0%,#0AE361 50%,#121212 100%)"
      :height="1"
      :throttle="0"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
