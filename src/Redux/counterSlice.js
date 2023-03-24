import {createSlice} from '@reduxjs/toolkit'

const counter = createSlice({
    name: "counter",
    initialState: {
     count: 0
    },
    reducers:
    {
        actionIncrement(state){
         state.count = state.count+1
        },
        actionDecrement(state){
            state.count = state.count-1
        }
    }
})

export default counter
export const counterAction = counter.actions