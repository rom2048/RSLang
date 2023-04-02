import React, { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './Navigation.module.css'
import Footer from '../Footer/Footer'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { selectCurrentUser, logOut } from '../../features/auth/authSlice'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const auth = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const logOff = () => {
    dispatch(logOut())
    navigate('/')
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <nav className={styles.navContainer}>
            <div className={styles.logoContainer}>
              <Link to='/'>
                <Logo className='ico' />
              </Link>
              <ul className={styles.linksContainer}>
                <li>
                  <NavLink to='/' className={styles.menuLink}>
                    Главная
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' className={styles.menuLink}>
                    Игры
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/words' className={styles.menuLink}>
                    Список слов
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.auth}>
              {!auth?.userId ? (
                <>
                  <div className={styles.signInContainer}>
                    <Link to='/signin' className={styles.menuLink}>
                      Вход
                    </Link>
                  </div>
                  <Link to='/signup' className={styles.pillLink}>
                    <span>Регистрация</span>
                  </Link>
                </>
              ) : (
                <>
                  <div className={styles.signInContainer}>
                    <p onClick={logOff} className={styles.menuLink}>
                      Выход
                    </p>
                  </div>
                  <Link to='/profile' className={styles.pillLink}>
                    <span>Профиль</span>
                  </Link>
                </>
              )}

              <div className={styles.mobileMenu}>
                <div>
                  <button className={styles.mobileMenuBtn}>
                    <svg
                      aria-hidden='true'
                      fill='none'
                      strokeWidth='2'
                      strokeLinecap='round'
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className={styles.menuSvg}
                    >
                      {!isMenuOpen ? (
                        <>
                          <path d='M0 1H14M0 7H14M0 13H14' className={styles.transition}></path>
                          <path
                            d='M2 2L12 12M12 2L2 12'
                            className={styles.transition + ' ' + styles.pathHide}
                          ></path>
                        </>
                      ) : (
                        <>
                          <path
                            d='M0 1H14M0 7H14M0 13H14'
                            className={styles.transition + ' ' + styles.pathHide}
                          ></path>
                          <path d='M2 2L12 12M12 2L2 12' className={styles.transition}></path>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
                {isMenuOpen && (
                  <div>
                    <div
                      aria-hidden='true'
                      className={styles.modalBg}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    ></div>
                    <ul className={styles.mobileMenuLinks}>
                      <li>
                        <Link className={styles.mobileLink} to={'/'}>
                          Главная
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.mobileLink} to={'/about'}>
                          Игры
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.mobileLink} to={'/words'}>
                          Список слов
                        </Link>
                      </li>
                      <hr className='m-2 border-slate-300/40' />
                      {!auth?.userId ? (
                        <li>
                          <Link className={styles.mobileLink} to='/signin' data-testid='mobileLink'>
                            Вход
                          </Link>
                        </li>
                      ) : (
                        <p onClick={logOff} className={styles.mobileLink}>
                          Выход
                        </p>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default Navigation
