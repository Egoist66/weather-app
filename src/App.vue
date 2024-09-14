<script setup lang="ts">

import WeatherStat from './components/features/WeatherStat.vue';
import Layout from './components/layout/Layout.vue'

</script>

<template>


  <Layout>

    <template #deafault>

      <RouterView />

    </template>

    <template #optional>

      <div class="weather-bg">
          <WeatherStat />
      </div>
    </template>

  </Layout>

</template>

<style scoped></style>
