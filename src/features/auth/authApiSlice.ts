import { apiSlice } from '../api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: { ...credentials },
      }),
    }),
    users: builder.mutation({
      query: (credentials) => ({
        url: '/users',
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: { ...credentials },
      }),
    }),
  }),
})

export const { useSignInMutation, useUsersMutation } = authApiSlice
