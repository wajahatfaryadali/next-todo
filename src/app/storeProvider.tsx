'use client'
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const persistor = persistStore(store)

export default function StoreProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}