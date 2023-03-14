import { FC } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  title: string
  children?: React.ReactNode
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

export default Section
