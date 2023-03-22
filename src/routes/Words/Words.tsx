import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import getWords from '../../utils/getWords'
import { Word } from '../../types'

export type WordsState = {
  loading: boolean
  words: Word[]
  // options: CharacterFilter
}

const initialState: WordsState = {
  loading: false,
  words: [],
  // options: {},
}

export const getData = createAsyncThunk('words/fetchWords', async () => {
  const response = await getWords()
  return response.words
})

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true
      })
      .addCase(getData.fulfilled, (state, action: PayloadAction<Word[]>) => {
        state.loading = false
        state.words = action.payload
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false
        state.words = []
      })
  },
})

export const selectWords = (state: RootState) => state.words

// export const { setOptions } = appDataSlice.actions

export default wordsSlice.reducer
