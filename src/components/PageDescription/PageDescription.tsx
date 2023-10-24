import React from 'react'
import { Link } from 'react-router-dom'
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
        <h1 className={styles.content__title}>GPS-трекеры</h1>{' '}
        <span className={styles['content__items-count']}>1 товар</span>
      </div>
      <div className={styles.content__breadcrumbs}>
        <Link to="/" className={styles.content__link}>
          Главная
        </Link>{' '}
        / <span>GPS-трекеры</span>
      </div>
    </div>
  )
}
