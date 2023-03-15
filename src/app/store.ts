import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit'
import navSliceReducer from './Navigation/Navigation'
import wordsSliceReducer from './Words/Words'

const rootReducer = combineReducers({
  nav: navSliceReducer,
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
    nav: navSliceReducer,
    words: wordsSliceReducer,
  },
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
