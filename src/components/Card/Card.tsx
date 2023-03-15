import { FC } from 'react'
import { Word } from '../../types'
import styles from './Card.module.css'

type CardProps = {
  item: Word
}

const Card: FC<CardProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={'http://localhost:3000/' + item.image}
          alt={item.textMeaning}
        />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardLabelContainer}>
          <p className={styles.cardLabel}>
            <span className={styles.cardLabelText}>Article</span>
          </p>
          <a href='#' className={styles.link}>
            <p className={styles.linkText}> Boost your conversion rate</p>
          </a>
        </div>
        <div className={styles.authorContainer}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.avatar}
              src='https://avatars.githubusercontent.com/u/73503432?v=4'
              alt=''
            />
          </div>
          <div className={styles.authorDetails}>
            <span className={styles.authorName}>Jabed</span>
            <div className={styles.authorDetails}>
              <time dateTime='2020-03-16'>11 Jul, 2022</time>
              <span aria-hidden='true'>·</span>
              <span> 6 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
