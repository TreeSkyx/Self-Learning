/*
    Here is a Slice that using do the action (like a function),
    in this case is a counter slice that has an increment, decrement and
    increment by amount inside (line 23-25)
*/

'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0 // set default value to 0 
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {state.value += 1}, 
        decrement: (state) => {state.value -= 1},
        incrementByAmount: (state, action) => {
            state.value += action.payload; // payload is a value from patcher(like a parameter)
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        }
    }
})

export const {increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;