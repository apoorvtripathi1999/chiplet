import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice";
import percent from "./percentSlice";


const store = configureStore({
    reducer:
    {
        count: counter.reducer,
        percent: percent.reducer
    }
})

export default store