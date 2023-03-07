import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import appSliceReducer from './Navigation/Navigation'

export const store = configureStore({
  reducer: {
    app: appSliceReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
