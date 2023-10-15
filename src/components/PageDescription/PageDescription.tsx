import React from 'react'
import styles from './PageDescription.module.scss'
import { Link } from 'react-router-dom'

export const PageDescription = () => {
  return (
    <div className={styles.content__description}>
      <div>
        <h1 className={styles.content__title}>GPS-трекеры</h1>{' '}
        <span className={styles.content__itemsCount}>1 товар</span>
      </div>
      <div className={styles.content__headrcrumbs}>
        <Link to="/" className={styles.content__link}>
          Главная
        </Link>{' '}
        / <span>GPS-трекеры</span>
      </div>
    </div>
  )
}
