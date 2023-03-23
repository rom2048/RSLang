import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SERVER_URL } from '../../constants'
import { RootState } from '../../store/store'
// import getWords from '../../utils/getWords'
import { Auth, User } from '../../types'

export type UserState = {
  loading: boolean
  user: User
  auth: Auth
  // options: CharacterFilter
}

const initialState: UserState = {
  loading: false,
  user: {
    name: '',
    email: '',
    password: '',
  },
  auth: {
    message: '',
    token: '',
    refreshToken: '',
    userId: '',
    name: '',
  },
}

export const createUser = createAsyncThunk('user/createUser', async (user: User) => {
  const response = await fetch(`${SERVER_URL}users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const data = await response.json()
  console.log(data)

  return data
})

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(createUser.rejected, (state) => {
        state.loading = false
        state.user = {
          name: '',
          email: '',
          password: '',
        }
      })
  },
})

// export const selectWords = (state: RootState) => state.words

export default user.reducer
