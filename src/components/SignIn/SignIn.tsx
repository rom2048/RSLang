import { Link } from 'react-router-dom'
import img from '../../assets/beams-cover@95.jpg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './SignIn.module.css'

const SignIn = () => {
  return (
    <main className={styles.main}>
      <img src={img} alt='cover' className={styles.img} />

      <div className={styles.authContainer}>
        <Link to='/'>
          <Logo className={styles.logo} />
        </Link>
        <h1 className={styles.srOnly}>Log in to your RSLang account</h1>
        <form onSubmit={() => {}} className={styles.form}>
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
            <span>Sign in to account</span>
          </button>
          <input type='hidden' name='remember' value='true' />
        </form>
      </div>
    </main>
  )
}

export default SignIn
