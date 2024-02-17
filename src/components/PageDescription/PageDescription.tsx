import Heading from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './PageDescription.module.scss'

/**
 * Компонент заголовка страницы товаров.
 * Содержит информацию о текущей просматриваемой категории.
 * Содержит "хлебные крошки" со ссылкой на главную страницу.
 */
export const PageDescription = () => {
  return (
    <div className={styles.content__description}>
      <div>
        <Heading className={styles.content__title}>GPS-трекеры</Heading>{' '}
        <span className={styles['content__items-count']}>1 товар</span>
      </div>
      <div className={styles.content__breadcrumbs}>
        <Subheading>
          <Link to="/" className={styles.content__link}>
            Главная
          </Link>{' '}
          / GPS-трекеры
        </Subheading>
      </div>
    </div>
  )
}
