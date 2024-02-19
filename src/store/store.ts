// store is being used for state management 
// and persistor added so our data stay persisted until we logout 
// and in this app i didn't add session expire mechanism because i didn't think any use in this app if needed then sorry :)

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice';
import todoReducer from './slices/todoSlice';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer, 
  todo: todoReducer, 
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch