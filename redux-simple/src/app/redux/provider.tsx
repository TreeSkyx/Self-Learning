/*
    Provider to warp the main component for redux
    now react can access redux storage from all page
*/

'use client'; // Tell nextjs to use client-side

import { Provider } from "react-redux";
import { store } from "./store";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    return(
        <Provider store = {store}> 
        {children}
        </Provider>
    )
}