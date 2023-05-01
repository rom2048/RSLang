import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import { useGetWordsQuery } from '../../features/words/wordsApiSlice'
import { useAppSelector } from '../../store/hooks'
import { selectGroup, selectPage } from '../../features/words/wordsSlice'
import { Word } from '../../types'

import styles from './Words.module.css'
import Pagination from '../../components/Pagination/Pagination'
import Group from '../../components/Group/Group'

const Words = () => {
  const group = useAppSelector(selectGroup)
  const page = useAppSelector(selectPage)
  const { data, isLoading, error } = useGetWordsQuery({ group, page })

  if (isLoading) return <>Loading...</>
  if (error) return <>error: {error}</>

  return (
    <Section title='Список слов'>
      <Pagination />

      <Group />
      <div className={styles.wordList}>
        {data ? data.map((word: Word) => <Card item={word} key={word.id} />) : null}
      </div>
      <Pagination />
    </Section>
  )
}
export default Words
