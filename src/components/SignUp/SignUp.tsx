import { Link, useNavigate } from 'react-router-dom'
import img from '../../assets/beams-cover@95.jpg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './SignUp.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useUsersMutation } from '../../features/auth/authApiSlice'
import { ErrorMessages, User } from '../../types'

const SignUp = () => {
  const [users, { isLoading }] = useUsersMutation()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>()

  const onSubmit: SubmitHandler<User> = async (user) => {
    try {
      await users(user).unwrap()
      navigate('/signin')
      console.log('register success!')
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
        <h1 className={styles.srOnly}>Sign up in to your RSLang account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor='name' className={styles.label}>
              Name
            </label>
            <input
              type='text'
              id='name'
              className={styles.input}
              {...register('name', {
                required: ErrorMessages.FIELD_REQUIRED,
                pattern: {
                  value: /[a-zA-Zа-яА-Я]+/gm,
                  message: ErrorMessages.NAME_DIGITS,
                },
                minLength: {
                  value: 3,
                  message: ErrorMessages.NAME_SHORT,
                },
              })}
            />
            {errors.name && (
              <p className='error-msg' data-testid='test-error'>
                {errors.name.message}
              </p>
            )}
          </div>
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
            <span>Sign up</span>
          </button>
          <input type='hidden' name='remember' value='true' />
        </form>
      </div>
    </main>
  )
}

export default SignUp
