import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit'

import wordsSliceReducer from '../routes/Words/Words'
import authReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/apiSlice'
const rootReducer = combineReducers({
  words: wordsSliceReducer,
  auth: authReducer,
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
    words: wordsSliceReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
