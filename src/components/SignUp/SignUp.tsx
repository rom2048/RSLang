import { Link } from 'react-router-dom'
import img from '../../assets/beams-cover@95.jpg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './SignUp.module.css'
import { useAppSelector, useAppDispatch } from '../../store/hooks'

import { createUser } from '../../routes/User/User'
import { useEffect } from 'react'

const SignUp = () => {
  const dispatch = useAppDispatch()
  return (
    <main className={styles.main}>
      <img src={img} alt='cover' className={styles.img} />

      <div className={styles.authContainer}>
        <Link to='/'>
          <Logo className={styles.logo} />
        </Link>
        <h1 className={styles.srOnly}>Sign up in to your RSLang account</h1>
        <form onSubmit={() => {}} className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor='name' className={styles.label}>
              Name
            </label>
            <input type='text' id='name' className={styles.input} value='' />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='email' className={styles.label}>
              Email address
            </label>
            <input type='email' id='email' className={styles.input} value='' />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='password' className={styles.label}>
              Password
            </label>
            <input type='password' id='password' className={styles.input} value='' />
          </div>
          <button type='submit' className={styles.btn}>
            <span>Sign up</span>
          </button>
          <input type='hidden' name='remember' value='true' />
        </form>
      </div>
    </main>
  )
}

export default SignUp
