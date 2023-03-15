import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type NavigationState = {
  isMenuOpen: boolean
}

const initialState: NavigationState = {
  isMenuOpen: false,
}

export const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    toogleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
})

export const selectNavigationState = (state: RootState) => state.nav

export const { toogleMenu } = navSlice.actions

export default navSlice.reducer
