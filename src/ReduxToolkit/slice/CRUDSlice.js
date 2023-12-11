import { createSlice } from "@reduxjs/toolkit";

const CrudSlice = createSlice({
    name:"crud",
    initialState:[],
    reducers:{
        post:(state,action)=>{
            return [...state, {...action.payload,id:state.length}]
        },
        update:(state,action)=>{
            const newData = [...state]
            newData[action.payload.id] = action.payload
            return newData
        },
        delete1:(state,action)=>{
            return state.filter((value)=>value.id!==action.payload.id)
        }
    }
})
export const { post, delete1, update } = CrudSlice.actions
export default CrudSlice.reducer