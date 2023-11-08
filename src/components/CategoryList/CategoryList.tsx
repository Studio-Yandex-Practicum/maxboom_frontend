import React, { FC } from 'react'
import Link from '../../ui/link'
import styles from './CategoryList.module.scss'
import HeadingNormal from '../../shared/ui/typography/headings/HeadingNormal/HeadingNormal'

/**
 * Список категорий для страницы товаров.
 * Фиксированная высота настраивается классом .category-list__items
 */
export const CategoryList: FC = () => {
  return (
    <div className={styles['category-list']}>
      <HeadingNormal className={styles['category-list__title']}>Категории</HeadingNormal>
      <ul className={styles['category-list__items']}>
        <li className={styles['category-list__item']}>
          <Link to="#" className={styles['category-list__link']}>
            FM-трансмиттеры (1)
          </Link>
        </li>
        <li className={styles['category-list__item']}>
          <Link to="#" className={styles['category-list__link']}>
            GPS-трекеры (1)
          </Link>
        </li>
        <li className={styles['category-list__item']}>
          <Link to="#" className={styles['category-list__link']}>
            SSD-накопители (1)
          </Link>
        </li>
        <li className={styles['category-list__item']}>
          <Link to="#" className={styles['category-list__link']}>
            Автомобильные зарядные устройства (2)
          </Link>
        </li>
        <li className={styles['category-list__item']}>
          <Link to="#" className={styles['category-list__link']}>
            Аккумуляторы для радиоуправляемых игрушек (13)
          </Link>
        </li>
        <li className={styles['category-list__item']}>
          <Link to="#" className={styles['category-list__link']}>
            SSD-накопители (1)
          </Link>
        </li>
      </ul>
    </div>
  )
}
