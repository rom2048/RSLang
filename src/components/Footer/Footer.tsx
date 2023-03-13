import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as RssLogo } from '../../assets/rs_school_logo.svg'
import { ReactComponent as GitLogo } from '../../assets/github_logo.svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <Link to='/' className={styles.logoLink}>
            <Logo className={styles.logo} />
          </Link>
          <nav className={styles.navContainer} aria-label='quick links'>
            <ul className={styles.linksContainer}>
              <li>
                <Link to='/' className={styles.menuLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className={styles.menuLink}>
                  About
                </Link>
              </li>
              <li>
                <Link to='/something' className={styles.menuLink}>
                  Someting
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.rssfooter}>
          <Link to='https://github.com/rom2048'>
            <GitLogo className={styles.logo} />
          </Link>
          <Link to='https://rs.school/'>
            <RssLogo className={styles.logo} />
          </Link>

          <p className='mt-6 text-sm text-slate-500 sm:mt-0'>© 2023</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
