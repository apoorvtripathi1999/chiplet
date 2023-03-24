import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice";


const store = configureStore({
    reducer:
    {
        count: counter.reducer
    }
})

export default store