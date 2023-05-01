import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setPage, selectPage } from '../../features/words/wordsSlice'
import styles from './Pagination.module.css'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
  const dispatch = useAppDispatch()
  const page = useAppSelector(selectPage)

  const leftButton = (
    <svg className={styles.ico} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
      <path
        fillRule='evenodd'
        d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
        clipRule='evenodd'
      />
    </svg>
  )
  const rightButton = (
    <svg className={styles.ico} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
      <path
        fillRule='evenodd'
        d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
        clipRule='evenodd'
      />
    </svg>
  )
  return (
    <ReactPaginate
      forcePage={page}
      containerClassName={styles.nav}
      pageLinkClassName={styles.paginationBtn}
      breakLinkClassName={styles.paginationBtn + ' ' + styles.break}
      previousLinkClassName={styles.paginationBtn + ' ' + styles.left}
      nextLinkClassName={styles.paginationBtn + ' ' + styles.right}
      activeLinkClassName={styles.selected}
      breakLabel='...'
      nextLabel={rightButton}
      onPageChange={({ selected }) => dispatch(setPage(selected))}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={30}
      previousLabel={leftButton}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
