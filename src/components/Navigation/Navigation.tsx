import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './Navigation.module.css'
import Footer from '../Footer/Footer'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
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
                  <NavLink to='/something' className={styles.menuLink}>
                    Статистика
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.auth}>
              <div className={styles.signInContainer}>
                <Link to='login' className={styles.menuLink}>
                  Вход
                </Link>
              </div>
              <Link to='register' className={styles.pillLink}>
                <span>Регистрация</span>
              </Link>
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
                    <div aria-hidden='true' className={styles.modalBg}></div>
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
                        <Link className={styles.mobileLink} to={'/something'}>
                          Статистика
                        </Link>
                      </li>
                      <hr className='m-2 border-slate-300/40' />
                      <li>
                        <Link className={styles.mobileLink} to='/login' data-testid='mobileLink'>
                          Вход
                        </Link>
                      </li>
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
