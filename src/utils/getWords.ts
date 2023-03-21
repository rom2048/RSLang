// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getWords = async (page = 0, group = 0): Promise<any> => {
  const res = await fetch('http://localhost:3000/words')
  if (res.ok) {
    const words = await res.json()
    return {
      words,
      status: res.status,
      statusMessage: res.statusText,
    }
  }
}

export default getWords
