import styles from './Hero.module.css'
import { ReactComponent as HeroText } from '../../assets/hero_text.svg'

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        RS Lang{' '}
        <span className={styles.highlight}>
          <HeroText className={styles.highlightSvg} />
          <span style={{ position: 'relative' }}>веб приложение</span>
        </span>{' '}
        для изучения Английского языка
      </h1>
      <p className={styles.text}>
        Изучайте английский язык с помощью словоря и игр. Отслеживайте свой прогресс изучения с
        помощью статистики.
      </p>
      <div className={styles.heroBtnContainer}>
        <button className={styles.btn}>Попробовать</button>
      </div>
    </div>
  )
}

export default Hero
