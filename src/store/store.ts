import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/apiSlice'
import wordsReducer from '../features/words/wordsSlice'
const rootReducer = combineReducers({
  auth: authReducer,
  words: wordsReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    words: wordsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
