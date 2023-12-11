import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../ReduxToolkit/slice/CounterSlice'
import CRUDSlice from "./slice/CRUDSlice";
const store = configureStore({
    reducer:{
        counter:CounterReducer,
        items:CRUDSlice
    }
})
export default store