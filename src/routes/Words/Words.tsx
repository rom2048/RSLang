import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import { useGetWordsQuery } from '../../features/words/wordsApiSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setPage, setGroup, selectGroup, selectPage } from '../../features/words/wordsSlice'
import { Word } from '../../types'

import styles from './Words.module.css'
import PageButton from '../../components/Pagination/Pagination'
import GroupButton from '../../components/Group/Group'

const Words = () => {
  const dispatch = useAppDispatch()
  const group = useAppSelector(selectGroup)
  const page = useAppSelector(selectPage)
  const { data, isLoading, error } = useGetWordsQuery({ group, page })

  if (isLoading) return <>Loading...</>
  if (error) return <>error: {error}</>

  const nextPage = () => dispatch(setPage(page + 1))
  const prevPage = () => dispatch(setPage(page - 1))
  const pagesArray = Array(30)
    .fill(0)
    .map((_, index) => index + 1)
  const groupArray = Array(6)
    .fill(0)
    .map((_, index) => index + 1)
  return (
    <Section title='Список слов'>
      <nav>
        <button onClick={prevPage} className={styles.paginationBtn + ' ' + styles.left}>
          <svg className={styles.ico} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
            <path
              fillRule='evenodd'
              d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        {pagesArray.map((pg) => (
          <PageButton key={pg} pg={pg} setPage={() => dispatch(setPage(pg - 1))} />
        ))}
        <button onClick={nextPage} className={styles.paginationBtn + ' ' + styles.right}>
          <svg className={styles.ico} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
            <path
              fillRule='evenodd'
              d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </nav>
      <div>
        <h2>group: </h2>
        <div>
          {groupArray.map((group) => (
            <GroupButton key={group} group={group} setGroup={() => dispatch(setGroup(group - 1))} />
          ))}
        </div>
      </div>
      <div className={styles.wordList}>
        {data ? data.map((word: Word) => <Card item={word} key={word.id} />) : null}
      </div>
    </Section>
  )
}
export default Words
