// this component is create just to wrap complete app into store
// becoz we cannot add provider without removing 'use client'

'use client'
import { store } from "@/store/store";
import { customTheme } from "@/utils/theme/custom-theme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const persistor = persistStore(store)

export default function StoreProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ThemeProvider theme={customTheme}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </ThemeProvider>
    )
}