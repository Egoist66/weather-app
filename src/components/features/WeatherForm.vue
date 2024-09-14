<script setup lang="ts">
import { useWheatherStore } from "@/store/weather.store";
import Loader from "../ui/Loader.vue";
import { useWeatherApp } from "@/composables/useWeatherApp";

const wStore = useWheatherStore();
const { query, getWeatherAppData } = useWeatherApp();
</script>

<template>
  <div :style="{width: '100%'}">
    <form class="weather-form" @submit.prevent="getWeatherAppData()">
      <input
        placeholder="Enter a city"
        type="text"
        v-model="query"
        name="city"
        class="weather-form__input"
      />

      <button :disabled="!query.length" type="submit" class="wheather-from__btn">Search</button>
    </form>
  </div>

  <div class="weather-info">
    <Loader v-if="wStore.isLoading" />

    <div :style="{width: '100%'}" v-else>
        <div v-if="wStore.getWeatherData()" class="weather-info__text">
            <p class="card card-1">{{ wStore.getWeatherData()?.location.name }}</p>
            <p class="card">{{ wStore.getWeatherData()?.current.temp_c }} °C</p>
            <p class="card">{{ wStore.getWeatherData()?.current.condition.text }}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
.weather-form {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
}

.weather-form__input {
  border-bottom: 2px solid var(--accent);
  border-radius: 10px;
  flex-grow: 1;
  border: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  outline: none;
  font-size: 36px;
  transition: border-color 0.3s;
}

.wheather-from__btn {
  flex-grow: 0.4;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: none;
  background-color: var(--accent);
  color: white;
  font-size: 36px;
  cursor: pointer;
}

.wheather-from__btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.wheather-from__btn:hover {
  background-color: #0fa7c2;
}

.weather-form__input:focus {
  border-color: var(--accent);
}

.weather-info {
  width: 100%;
  display: flex;
  justify-content: center;
}

.weather-info__text {
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card-1 {
  flex-grow: 1 !important;
}

.card {
  padding: 1.5rem;
  border-radius: 10px;
  background-color: #ffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  flex-grow: 0.3;
  font-size: 36px;
}
</style>
