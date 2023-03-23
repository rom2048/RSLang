import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit'
import wordsSliceReducer from '../routes/Words/Words'
import userReducer from '../routes/User/User'

const rootReducer = combineReducers({
  words: wordsSliceReducer,
  user: userReducer,
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
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
