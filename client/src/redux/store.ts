import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import loginReducer from './login/reducer'
import gamesReducer from './gameList/reducer'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        loginReducer,
        gamesReducer,
    }),
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
