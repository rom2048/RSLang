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
            </div>
            <div className={styles.mobileMenu}>
              <button>
                <svg
                  aria-hidden='true'
                  fill='none'
                  strokeWidth='2'
                  strokeLinecap='round'
                  onClick={() => dispatch(toogleMenu())}
                >
                  {!isMenuOpen && <path d='M0 1H14M0 7H14M0 13H14'></path>}
                  <path
                    d='M2 2L12 12M12 2L2 12'
                    className='origin-center transition scale-90 opacity-0'
                  ></path>
                  {isMenuOpen && <path d='M2 2L12 12M12 2L2 12'></path>}
                </svg>
              </button>
              {isMenuOpen && (
                <div>
                  <div aria-hidden='true'></div>
                  <div>
                    <a className='block w-full p-2' data-headlessui-state='open' href='/#features'>
                      Features
                    </a>
                    <a className='block w-full p-2' data-headlessui-state='open' href='/#faq'>
                      Frequently asked questions
                    </a>
                    <a
                      className='block w-full p-2'
                      data-headlessui-state='open'
                      href='/userregister'
                    >
                      Get started
                    </a>
                    <hr className='m-2 border-slate-300/40' />
                    <a className='block w-full p-2' data-headlessui-state='open' href='/login'>
                      Sign in
                    </a>
                  </div>
                </div>
              )}
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
