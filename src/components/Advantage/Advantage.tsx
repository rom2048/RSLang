import { ReactComponent as Dictionary } from '../../assets/dictionary.svg'
import { ReactComponent as Game } from '../../assets/game.svg'
import { ReactComponent as Statistics } from '../../assets/statistics.svg'
import styles from './Advantage.module.css'

const Advantage = () => {
  return (
    <ul className={styles.advantageList}>
      <li>
        <div className={styles.icoContainer}>
          <Dictionary className={styles.ico} />
        </div>
        <h3 className={styles.title}>Словарь</h3>
        <p>
          электронный учебник генерируется на основе коллекции исходных данных и состоит из шести
          разделов, в каждом разделе 30 страниц, на каждой странице 20 слов для изучения
        </p>
      </li>
      <li>
        <div className={styles.icoContainer}>
          <Game className={styles.ico} />
        </div>
        <h3 className={styles.title}>Игры</h3>
        <p>Изучаем английский язык играючи</p>
      </li>
      <li>
        <div className={styles.icoContainer}>
          <Statistics className={styles.ico} />
        </div>
        <h3 className={styles.title}>Статистика</h3>
        <p>
          На странице статистики отображается краткосрочная статистика по мини-играм и по словам за
          каждый день изучения
        </p>
      </li>
    </ul>
  )
}

export default Advantage
