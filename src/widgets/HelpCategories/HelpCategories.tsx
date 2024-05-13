import Link from '@/shared/ui/Link/Link'

import styles from './HelpCategories.module.scss'

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
