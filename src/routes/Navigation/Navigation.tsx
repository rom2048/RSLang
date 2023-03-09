import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toogleMenu, selectAppState } from '../../app/Navigation/Navigation'
import styles from './Navigation.module.css'

const Navigation = () => {
  const { isMenuOpen } = useAppSelector(selectAppState)
  const dispatch = useAppDispatch()
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <nav className={styles.navContainer}>
            <div className={styles.logoContainer}>
              <Link to='/'>
                <Logo className={styles.logo} />
              </Link>
              <ul className={styles.linksContainer}>
                <li>
                  <NavLink to='/' className={styles.menuLink}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' className={styles.menuLink}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/something' className={styles.menuLink}>
                    Someting
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.auth}>
              <div className={styles.signInContainer}>
                <Link to='login' className={styles.menuLink}>
                  Sign in
                </Link>
              </div>
              <Link to='register' className={styles.pillLink}>
                <span>Register</span>
              </Link>
              <div className={styles.mobileMenu}>
                <div>
                  <button className={styles.mobileMenuBtn}>
                    <svg
                      aria-hidden='true'
                      fill='none'
                      strokeWidth='2'
                      strokeLinecap='round'
                      onClick={() => dispatch(toogleMenu())}
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
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.mobileLink} to={'/about'}>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.mobileLink} to={'/something'}>
                          Something
                        </Link>
                      </li>
                      <hr className='m-2 border-slate-300/40' />
                      <li>
                        <Link className={styles.mobileLink} to='/login'>
                          Sign in
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>

        {/* <nav>
          <ul>
            
          </ul>
        </nav> */}
      </header>
      <Outlet />
    </React.Fragment>
  )
}

export default Navigation
