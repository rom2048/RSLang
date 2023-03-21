import { FC } from 'react'
import { Word } from '../../types'
import { ReactComponent as AudioIcon } from '../../assets/audio.svg'
import styles from './Card.module.css'
import Button from '../Button/Button'

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
        <div className={styles.cardInfoContainer}>
          <div className={styles.cardWordContainer}>
            <h3 className={styles.cardWord}>{item.word}</h3>
            {'-'}
            <span>{item.transcription}</span>
            {'-'}
            <span>{item.wordTranslate}</span>
          </div>
          <AudioIcon
            className='ico'
            onClick={() => {
              console.log('play/stop')
            }}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <p
              className={styles.textExample}
              dangerouslySetInnerHTML={{ __html: item.textExample }}
            ></p>
            <p className={styles.translate}>{item.textExampleTranslate}</p>
          </div>
          <div className={styles.textWrapper}>
            <p
              className={styles.textExample}
              dangerouslySetInnerHTML={{ __html: item.textMeaning }}
            ></p>
            <p className={styles.translate}>{item.textMeaningTranslate}</p>
          </div>
        </div>
        <div className={styles.authorContainer}>
          <Button text='Сложное' />
          <Button text='Удалить' background='rgb(15, 23, 42)' />
        </div>
        <audio src={'http://localhost:3000/' + item.audio}></audio>
        <audio src={'http://localhost:3000/' + item.audioExample}></audio>
        <audio src={'http://localhost:3000/' + item.audioMeaning}></audio>
      </div>
    </div>
  )
}

export default Card
