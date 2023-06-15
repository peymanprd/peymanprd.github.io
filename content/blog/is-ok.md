---
title: Vue city code
description: second meta description of the page
author: Peyman Pirzadeh
date: 2022-07-15
---

# start learn vue city code

this is a fake content for see contact loader

i always use ref

```vue
<script setup lang="ts">
import CityCard from '@/components/CityCard.vue'
import EmptyState from '@/components/EmptyState.vue'

import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const savedCities = ref([] as any[])

function previewCity({ id, city, state, coords }: any) {
  const { lat, lng } = coords
  router.push({
    name: 'city.page',
    params: { state, city },
    query: { id, lat, lng },
  })
}

function removeCity(city: any) {
  savedCities.value.splice(savedCities.value.indexOf(city), 1)
  localStorage.savedCities = JSON.stringify(savedCities.value)
}

async function getCities() {
  if (localStorage.savedCities) {
    savedCities.value = JSON.parse(localStorage.savedCities)

    const requests = []
    let city: any
    for (city of savedCities.value) {
      requests.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            city.coords.lat
          }&lon=${city.coords.lng}&appid=${
            import.meta.env.VITE_OPENWEATHERMAP_API_KEY
          }&units=imperial`
        )
      )
    }

    const weatherData = await Promise.all(requests)
    weatherData.forEach(({ data }, index) => {
      savedCities.value[index].weather = data
    })
  }
}

await getCities()
</script>
```
