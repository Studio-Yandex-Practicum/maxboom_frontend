import { FC } from 'react'

import { getNoun } from '@/shared/libs/helpers/getNoun'
import Heading from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './PageDescription.module.scss'

type Props = {
  count: number
  heading: string
}
/**
 * Компонент заголовка страницы товаров.
 * Содержит информацию о текущей просматриваемой категории.
 * Содержит "хлебные крошки" со ссылкой на главную страницу.
 * @param {number} count - количество товаров в категории;
 * @param {string} heading - наименование-заголовок;
 */
export const PageDescription: FC<Props> = ({ count, heading }) => {
  return (
    <div className={styles.content__description}>
      <div>
        <Heading className={styles.content__title}>{heading}</Heading>{' '}
        {count >= 0 ? (
          <span className={styles['content__items-count']}>
            {count} {getNoun(count, 'товар', 'товара', 'товаров')}
          </span>
        ) : (
          ''
        )}
      </div>
      <div className={styles.content__breadcrumbs}>
        <Subheading>
          <Link to="/" className={styles.content__link}>
            Главная
          </Link>{' '}
          / {heading}
        </Subheading>
      </div>
    </div>
  )
}
