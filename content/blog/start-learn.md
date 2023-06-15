---
title: Title start learn javascript
description: meta description of the page
author: Peyman Pirzadeh
date: 2022-07-15
---

# start learn javascript

this is a fake content for see contact loader

i always use ref



```vue
<script setup lang="ts">

const route = useRoute()

const { data: post }: null | any = await useAsyncData(
  `content-${route.path}`,
  () => queryContent().where({ _path: route.path }).findOne()
)

</script>
```
