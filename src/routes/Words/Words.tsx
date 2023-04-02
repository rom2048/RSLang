import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import { useGetWordsQuery } from '../../features/words/wordsApiSlice'
import { Word } from '../../types'

import styles from './Words.module.css'

const Words = () => {
  const page = 0
  const group = 0
  const { data, isLoading, error } = useGetWordsQuery({ page, group })
  return (
    <Section title='Список слов'>
      <div className={styles.wordList}>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.map((word: Word) => <Card item={word} key={word.id} />)
        ) : null}
      </div>
    </Section>
  )
}
export default Words
