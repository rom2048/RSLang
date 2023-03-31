import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { Auth, User } from '../../types'

export type UserState = {
  user: User | null
  auth: Auth | null
}

const initialState: UserState = {
  user: null,
  auth: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    setCredentials: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload
    },
    logOut: (state) => {
      state.user = null
      state.auth = null
    },
  },
})

export const { setUser, setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.auth
