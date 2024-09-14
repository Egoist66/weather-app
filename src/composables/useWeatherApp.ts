import { useWheatherStore } from "@/store/weather.store"
import { ref, watch } from "vue"

export const useWeatherApp = () => {

    const {setWeatherData} = useWheatherStore()

    const query = ref<string>('')
    const baseurl = ref<string>(`
        http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${query.value}&aqi=no`
    )

   

    watch(query, () => {
        baseurl.value = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${query.value}&aqi=no`
    })

    const getWeatherAppData = () => {

        if(!query.value.length){
            console.warn('Please enter a city!')
            return
        }

        setWeatherData(baseurl.value)
    }



    return {
        query,
        getWeatherAppData
    }
}