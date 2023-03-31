import Card from '../Card/Card'
import styles from './CardList.module.css'
import { useAppSelector } from '../../store/hooks'
import { selectWords } from '../../routes/Words/Words'

const CardList = () => {
  const { words } = useAppSelector(selectWords)

  return (
    <div className={styles.cardList}>
      {words && words.map((word) => <Card item={word} key={word.id} />)}
    </div>
  )
}

export default CardList
