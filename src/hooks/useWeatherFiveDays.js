import React from "react";
import { useGetWeatherDataQuery } from "../store/weatherData";

export default function useWeatherFiveDays(args){
    const {data =[],error,isLoading} = useGetWeatherDataQuery({city:args,type:'forecast'});

        return {wthr:data,err:error,loading:isLoading}
    


}
