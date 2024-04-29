/*
    Create store for collect state and value of application
    Reducer is a tools for copy and replace whole data with 
    new updated data in client-side storage)
*/

'use client'; // Tell nextjs to use client-side

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;