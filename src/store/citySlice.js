import {createSlice} from '@reduxjs/toolkit';


const citySlice = createSlice({
    name:'city',
    initialState:{
        city:'new york'
    },
    reducers:{
        changeCity(state,action){
            state.city = action.payload
        }
    }
    
});
export const {changeCity} = citySlice.actions;
export default  citySlice.reducer