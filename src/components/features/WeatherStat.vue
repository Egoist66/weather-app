
<script setup lang="ts">
import { useWheatherStore } from '@/store/weather.store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';


const {weatherData} = storeToRefs(useWheatherStore())

const weatherStatus = computed(() => weatherData.value?.current.condition.text)

</script>


<template>
    <div class="weather-stat">
        
        <img :style="{filter: 'brightness(0.5)'}" class="weather-bg__img bg-default" src="/bg.jpg" alt="app-bg">
        <img class="weather-bg__img overcast" src="/overcast.jpg" alt="overcast">
        <img class="weather-bg__img cloudy" src="/party-clouds.jpg" alt="cloudy">
        <img :class="{'bg-active': weatherStatus === 'Sunny'}" class="weather-bg__img sunny" src="/sunnyjpg.jpg" alt="cloudy">
       
    </div>
</template>


<style scoped>

</style>