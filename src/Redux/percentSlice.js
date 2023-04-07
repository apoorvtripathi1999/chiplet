import {createSlice} from '@reduxjs/toolkit'

const percentSlice = createSlice({
    name: "percent",
    initialState: {
     percent: "100%",
    },
    reducers:
    {
        percentLoop(state)
        {
           switch (state.loopIter)
           {
              case 0: return {percent: "0%"}
              case 1: return {percent: "50%"}
              case 2: return {percent: "75%"}
              case 3: return {percent: "100%"}
              default: return state
           }
        }
   
    }
})

export const { percentLoop } = percentSlice.actions
export default percentSlice.reducer
