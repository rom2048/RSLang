import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { Word } from '../../types'

export type WordsState = {
  words: Word[]
  group: number
  page: number
  groupColors: string[]
}

const initialState: WordsState = {
  words: [],
  group: 0,
  page: 0,
  groupColors: ['#9DFF76', '#FFF86F', '#C5CCFF', '#FFBE3E', '#F17D8A', '#C097FF', '#FF2700'],
}

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setGroup: (state, action: PayloadAction<number>) => {
      state.group = action.payload
      state.page = 0
    },
    setWords: (state, action: PayloadAction<Word[]>) => {
      state.words = action.payload
    },
  },
})

export const { setPage, setGroup, setWords } = wordsSlice.actions

export default wordsSlice.reducer

export const selectPage = (state: RootState) => state.words.page
export const selectGroup = (state: RootState) => state.words.group
export const selectWords = (state: RootState) => state.words.words
export const selectGroupColors = (state: RootState) => state.words.groupColors
