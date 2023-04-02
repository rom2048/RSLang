import { FC } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  text: string
  background?: string
}

const Button: FC<ButtonProps> = ({ text, background }) => {
  return (
    <button className={styles.btn} style={{ background }}>
      {text}
    </button>
  )
}

export default Button
