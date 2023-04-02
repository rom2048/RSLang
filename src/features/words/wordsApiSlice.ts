import { apiSlice } from '../api/apiSlice'

export const wordsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query({
      query: (page = 0, group = 0) => `/words?${group}&${page}`,
    }),
    getWord: builder.query({
      query: (id: number) => `/words/${id}`,
    }),
  }),
})

export const { useGetWordsQuery, useGetWordQuery } = wordsApiSlice
