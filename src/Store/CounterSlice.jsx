import { createSlice } from '@reduxjs/toolkit'
const initVal ={
    cnt:0
}
///
const counterSlice = createSlice({
name: "counter",
initialState:initVal,
reducers:{
    add:(state,actions)=>{
        debugger
        state.cnt++
    },
    add5:(state,actions)=>{
        debugger
        state.cnt += actions.payload.addCustom
    },
}
})
export const {add,add5} = counterSlice.actions
export default counterSlice.reducer
