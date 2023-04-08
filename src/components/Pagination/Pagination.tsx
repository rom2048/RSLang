import styles from '../../routes/Words/Words.module.css'

const PageButton = ({ pg, setPage }: { pg: number; setPage: (arg: number) => void }) => {
  return (
    <button className={styles.paginationBtn} onClick={() => setPage(pg)}>
      {pg}
    </button>
  )
}

export default PageButton
