import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PageDescription.module.scss'
import HeadingBig from '../../shared/ui/typography/headings/HeadingBig/HeadingBig'
import Subtitle from '../../shared/ui/typography/subtitle/Subtitle'

/**
 * Компонент заголовка страницы товаров.
 * Содержит информацию о текущей просматриваемой категории.
 * Содержит "хлебные крошки" со ссылкой на главную страницу.
 */
export const PageDescription = () => {
  return (
    <div className={styles.content__description}>
      <div>
        <HeadingBig className={styles.content__title}>GPS-трекеры</HeadingBig>{' '}
        <span className={styles['content__items-count']}>1 товар</span>
      </div>
      <div className={styles.content__breadcrumbs}>
        <Subtitle>
          <Link to="/" className={styles.content__link}>
            Главная
          </Link>{' '}
          / GPS-трекеры
        </Subtitle>
      </div>
    </div>
  )
}
