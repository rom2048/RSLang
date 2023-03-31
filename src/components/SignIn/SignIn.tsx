import { Link, useNavigate } from 'react-router-dom'
import img from '../../assets/beams-cover@95.jpg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './SignIn.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from '../../store/hooks'
import { setCredentials, setUser } from '../../features/auth/authSlice'
import { useSignInMutation } from '../../features/auth/authApiSlice'
import { ErrorMessages, User } from '../../types'

const SignIn = () => {
  const dispatch = useAppDispatch()
  const [signIn, { isLoading }] = useSignInMutation()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>()

  const onSubmit: SubmitHandler<User> = async (user) => {
    try {
      dispatch(setUser(user))
      const authData = await signIn(user).unwrap()
      dispatch(setCredentials(authData))
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main className={styles.main}>
      <img src={img} alt='cover' className={styles.img} />

      <div className={styles.authContainer}>
        <Link to='/'>
          <Logo className={styles.logo} />
        </Link>
        <h1 className={styles.srOnly}>Log in to your RSLang account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor='email' className={styles.label}>
              Email address
            </label>
            <input
              type='email'
              id='email'
              className={styles.input}
              {...register('email', {
                required: ErrorMessages.FIELD_REQUIRED,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: ErrorMessages.EMAIL_FIELD,
                },
              })}
            />
            {errors.email && (
              <p className='error-msg' data-testid='test-error'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='password' className={styles.label}>
              Password
            </label>
            <input
              type='password'
              id='password'
              className={styles.input}
              {...register('password', {
                required: ErrorMessages.FIELD_REQUIRED,
                minLength: {
                  value: 8,
                  message: ErrorMessages.PASSWORD_SHORT,
                },
              })}
            />
            {errors.password && (
              <p className='error-msg' data-testid='test-error'>
                {errors.password.message}
              </p>
            )}
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
