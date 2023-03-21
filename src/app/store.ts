import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit'
import wordsSliceReducer from './Words/Words'

const rootReducer = combineReducers({
  words: wordsSliceReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export const store = configureStore({
  reducer: {
    words: wordsSliceReducer,
  },
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
