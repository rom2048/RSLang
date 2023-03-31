import { Word } from '../types'

const getWords = async (page = 0, group = 0): Promise<Word[] | null> => {
  const res = await fetch('http://localhost:3000/words')
  if (res.ok) {
    const words = await res.json()
    return words
  }
  return null
}

export default getWords
