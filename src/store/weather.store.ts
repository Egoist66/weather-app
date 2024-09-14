import type { WeahterRoot } from "@/entities/wheater-api.interface";
import { delay } from "@/utils/delay";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useWheatherStore = defineStore('weather', () => {

    const weatherData = ref<WeahterRoot | null>(null)
    const isLoading = ref<boolean>(false)
    const Error = ref<string>('')


    const setWeatherData = async (baseUrl: string) => {
        try {
            Error.value = ''
            isLoading.value = true

            await delay(500)
            const {data} = await axios.get<WeahterRoot>(baseUrl)
           
            weatherData.value = data

        }
        catch (error: any) {

           
            
            Error.value = error.response.data.error.message
        }
        finally {
            isLoading.value = false
        }
    }
    const getWeatherData = () => {
        return weatherData.value
    }

    return { setWeatherData, getWeatherData, isLoading, Error, weatherData }
})