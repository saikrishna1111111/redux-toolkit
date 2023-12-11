import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice = createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:(state,action)=>{
            return state+action.payload
        },
        decrement:(state,action)=>{
            return state-1
        }
    }
})
export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer