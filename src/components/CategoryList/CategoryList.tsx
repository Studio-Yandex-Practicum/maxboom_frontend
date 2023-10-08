import React, { FC } from 'react'
import styles from './CategoryList.module.scss'
import Link from '../../ui/link'

export const CategoryList: FC = () => {
  return (
    <div className={styles.categoryList}>
      <h2 className={styles.categoryList__title}>Категории</h2>
      <ul className={styles.categoryList__items}>
        <li className={styles.categoryList__item}>
          <Link to="#" className={styles.categoryList__link}>
            FM-трансмиттеры (1)
          </Link>
        </li>
        <li className={styles.categoryList__item}>
          <Link to="#" className={styles.categoryList__link}>
            GPS-трекеры (1)
          </Link>
        </li>
        <li className={styles.categoryList__item}>
          <Link to="#" className={styles.categoryList__link}>
            SSD-накопители (1)
          </Link>
        </li>
        <li className={styles.categoryList__item}>
          <Link to="#" className={styles.categoryList__link}>
            Автомобильные зарядные устройства (2)
          </Link>
        </li>
        <li className={styles.categoryList__item}>
          <Link to="#" className={styles.categoryList__link}>
            Аккумуляторы для радиоуправляемых игрушек (13)
          </Link>
        </li>
        <li className={styles.categoryList__item}>
          <Link to="#" className={styles.categoryList__link}>
            SSD-накопители (1)
          </Link>
        </li>
      </ul>
    </div>
  )
}
