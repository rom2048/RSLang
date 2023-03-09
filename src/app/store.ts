import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit'
import appSliceReducer from './Navigation/Navigation'

const rootReducer = combineReducers({
  app: appSliceReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export const store = configureStore({
  reducer: {
    app: appSliceReducer,
  },
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
