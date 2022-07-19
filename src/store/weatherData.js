import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
    reducerPath:'weatherApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:6969'}),
    endpoints:(builder)=>({
        getWeatherData:builder.query({
            query:({city='',type=''} )=>`/${city}/${type}` 
        })
    })

})
export const {useGetWeatherDataQuery} = weatherApi