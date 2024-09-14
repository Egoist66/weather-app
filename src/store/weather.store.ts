import type { WeahterRoot } from "@/entities/wheater-api.interface";
import { delay } from "@/utils/delay";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useWheatherStore = defineStore('weather', () => {

    const weatherData = ref<WeahterRoot | null>(null)
    const isLoading = ref<boolean>(false)
    const isError = ref<boolean>(false)


    const setWeatherData = async (baseUrl: string) => {
        try {
            isError.value = false
            isLoading.value = true

            await delay(500)
            const {data} = await axios.get<WeahterRoot>(baseUrl)
            weatherData.value = data

        }
        catch (error) {

            isError.value = true
        }
        finally {
            isLoading.value = false
        }
    }
    const getWeatherData = () => {
        return weatherData.value
    }

    return { setWeatherData, getWeatherData, isLoading, isError, weatherData }
})