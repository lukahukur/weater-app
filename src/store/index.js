import {configureStore} from "@reduxjs/toolkit";
import { weatherApi } from "./weatherData";
import cityReducer from './citySlice'
export const store = configureStore({
    reducer:{
        [weatherApi.reducerPath]:weatherApi.reducer,
        city:cityReducer
    },
    middleware: getDefaultMiddleware=> getDefaultMiddleware().concat(weatherApi.middleware)
    
})