import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type AppState = {
  isMenuOpen: boolean
}

const initialState: AppState = {
  isMenuOpen: false,
}

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    toogleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
})

export const selectAppState = (state: RootState) => state.app

export const { toogleMenu } = appSlice.actions

export default appSlice.reducer
