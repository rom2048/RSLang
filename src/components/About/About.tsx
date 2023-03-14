import styles from './About.module.css'
import img from '../../assets/ava.jpg'

const About = () => {
  return (
    <div className={styles.card}>
      <figure className={styles.figure}>
        <blockquote className={styles.blockquote}>
          <p className={styles.text}>
            Выполняю задание единолично. Пока что написал только main page. Тим лид :)
          </p>
        </blockquote>
        <figcaption className={styles.figcaption}>
          <div>
            <div className={styles.name}>Роман Мамонтов</div>
            <div className={styles.prof}>Web developer</div>
          </div>
          <div className={styles.imgContainer}>
            <img src={img} alt='Roman' className={styles.img} loading='lazy' decoding='async' />
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default About
