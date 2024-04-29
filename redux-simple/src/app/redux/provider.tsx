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