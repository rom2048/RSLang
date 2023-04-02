import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'
import { RootState } from '../../store/store'
import { Auth } from '../../types'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.auth?.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status === 401 || result?.error?.status === 403) {
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      `users/${api.getState().auth?.auth?.userId}/tokens`,
      api,
      extraOptions,
    )
    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setCredentials(refreshResult.data as Auth))
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
