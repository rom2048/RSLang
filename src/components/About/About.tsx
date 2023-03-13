import styles from './About.module.css'
import img from '../../assets/ava.jpg'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>About me :)</h2>
        </div>
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
      </div>
    </section>
  )
}

export default About
