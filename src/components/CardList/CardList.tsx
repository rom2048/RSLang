import Card from '../Card/Card'
import styles from './CardList.module.css'
import { useAppSelector } from '../../app/hooks'
import { selectWords } from '../../app/Words/Words'

const CardList = () => {
  const { words } = useAppSelector(selectWords)

  return (
    <div className={styles.cardList}>
      {words.map((word) => (
        <Card item={word} key={word.id} />
      ))}
    </div>
  )
}

export default CardList
