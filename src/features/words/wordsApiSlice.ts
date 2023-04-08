import { Word } from '../../types'
import { apiSlice } from '../api/apiSlice'

export const wordsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query<Word[], Record<string, number>>({
      query: (args) => {
        const { group, page } = args
        return `/words?group=${group}&page=${page}`
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: string }) => ({ type: 'Words' as const, id })),
              { type: 'Words', id: 'LIST' },
            ]
          : [{ type: 'Words', id: 'LIST' }],
    }),
    getWord: builder.query({
      query: (id: number) => `/words/${id}`,
    }),
  }),
})

export const { useGetWordsQuery, useGetWordQuery } = wordsApiSlice
