import { FC, useRef } from 'react'
import { Word } from '../../types'
import { ReactComponent as AudioIcon } from '../../assets/audio.svg'
import styles from './Card.module.css'
import { useAppSelector } from '../../store/hooks'
import { selectCurrentUser } from '../../features/auth/authSlice'
import Button from '../Button/Button'
import { selectGroupColors } from '../../features/words/wordsSlice'

type CardProps = {
  item: Word
}

const Card: FC<CardProps> = ({ item }) => {
  const refAudioWord = useRef<HTMLAudioElement>(null)
  const refAudioMeaning = useRef<HTMLAudioElement>(null)
  const refAudioExample = useRef<HTMLAudioElement>(null)
  const auth = useAppSelector(selectCurrentUser)
  const colors = useAppSelector(selectGroupColors)

  return (
    <div className={styles.card} style={{ background: colors[item.group] }}>
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
              if (refAudioWord.current) {
                refAudioWord.current.currentTime = 0
                refAudioWord.current.play()
                refAudioWord.current.onended = () => {
                  if (refAudioMeaning.current) refAudioMeaning.current.currentTime = 0
                  refAudioMeaning.current && refAudioMeaning.current.play()

                  if (refAudioMeaning.current) {
                    refAudioMeaning.current.onended = () => {
                      if (refAudioExample.current) refAudioExample.current.currentTime = 0
                      refAudioExample.current && refAudioExample.current.play()
                    }
                  }
                }
              }
            }}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <p
              className={styles.textExample}
              dangerouslySetInnerHTML={{ __html: item.textMeaning }}
            ></p>
            <p className={styles.translate}>{item.textMeaningTranslate}</p>
          </div>
          <div className={styles.textWrapper}>
            <p
              className={styles.textExample}
              dangerouslySetInnerHTML={{ __html: item.textExample }}
            ></p>
            <p className={styles.translate}>{item.textExampleTranslate}</p>
          </div>
        </div>
        {auth?.userId ? (
          <div className={styles.authorContainer}>
            <Button text='Сложное' />
            <Button text='Удалить' background='rgb(15, 23, 42)' />
          </div>
        ) : null}
        <audio ref={refAudioWord} src={'http://localhost:3000/' + item.audio}></audio>
        <audio ref={refAudioMeaning} src={'http://localhost:3000/' + item.audioMeaning}></audio>
        <audio ref={refAudioExample} src={'http://localhost:3000/' + item.audioExample}></audio>
      </div>
    </div>
  )
}

export default Card
