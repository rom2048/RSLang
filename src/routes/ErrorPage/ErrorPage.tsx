import { useNavigate } from 'react-router-dom'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <main className={styles.errorPage}>
      <div className={styles.container}>
        <p className={styles.status}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.describe}>Sorry, we couldn’t find the page you’re looking for.</p>
        <div className={styles.buttonContainer}>
          <button onClick={() => navigate(-1)} className={styles.button}>
            Go back
          </button>
        </div>
      </div>
    </main>
  )
}

export default ErrorPage
