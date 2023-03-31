import { ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from './store/store'

export type Word = {
  id: string
  group: number
  page: number
  word: string
  image: string
  audio: string
  audioMeaning: string
  audioExample: string
  textMeaning: string
  textExample: string
  transcription: string
  wordTranslate: string
  textMeaningTranslate: string
  textExampleTranslate: string
}

export type Auth = {
  message: string
  token: string
  refreshToken: string
  userId: string
  name: string
}

export type User = {
  name?: string
  email: string
  password: string
}

export enum ErrorMessages {
  NAME_SHORT = 'This field cannot be less than 3 characters',
  PASSWORD_SHORT = 'This field cannot be less than 8 characters',
  NAME_DIGITS = 'The name cannot contain numbers',
  FIELD_REQUIRED = 'This field cannot be empty',
  EMAIL_FIELD = 'Type your email',
}

export interface BaseQueryApi {
  signal: AbortSignal
  abort: (reason?: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: ThunkDispatch<any, any, any>
  getState: () => RootState
  extra: unknown
  endpoint: string
  type: 'query' | 'mutation'
  forced?: boolean
}
