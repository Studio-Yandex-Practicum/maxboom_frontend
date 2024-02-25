import styles from './HelpCategories.module.scss'
import Link from '@/shared/ui/Link/Link'

// @TODO: Сверстать форму возврата
// Сделал sidebar для страницы помощь
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/222

const HelpCategories = () => {
  return (
    <nav className={styles.helpCategories}>
      <Link to="" className={styles.helpCategories__item}>
        Информация о доставке
      </Link>
      <Link to="" className={styles.helpCategories__item}>
        Возвраты
      </Link>
      <Link to="" className={styles.helpCategories__item}>
        Подарочные сертификаты
      </Link>
    </nav>
  )
}

export default HelpCategories
