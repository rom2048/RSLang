import { FC } from 'react'
import img from '../../assets/background-faqs.55d2e36a.jpg'
import styles from './Section.module.css'

interface SectionProps {
  title: string
  children?: React.ReactNode
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      {title === 'Преимущества' ? (
        <img
          src={img}
          alt='background-image'
          decoding='async'
          loading='lazy'
          width={1558}
          height={946}
          className={styles.bgImg}
        />
      ) : (
        ''
      )}
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section
