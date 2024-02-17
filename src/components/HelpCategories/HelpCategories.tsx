import styles from './HelpCategories.module.scss'
import Link from '@/shared/ui/Link/Link'

const HelpCategories = () => {
  return (
    <>
      <nav className={styles.helpCategories}>
        <Link to="/infoDelivery" className={styles.helpCategories__item}>
          Информация о доставке
        </Link>
        <Link to="/refunds" className={styles.helpCategories__item}>
          Возвраты
        </Link>
        <Link to="" className={styles.helpCategories__item}>
          Подарочные сертификаты
        </Link>
      </nav>
    </>
  )
}

export default HelpCategories
