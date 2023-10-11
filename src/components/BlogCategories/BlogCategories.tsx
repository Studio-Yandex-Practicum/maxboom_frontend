import React from 'react'
import styles from './blog-categories.module.scss'
import { blogPageData } from '../../mockData/blogPageData'
import { useMemo } from 'react'
/**
 * Контейнер для изображений одной группы (новости, истории, блог), scrollbar
 * @param {string} title - заголовок группы изображений
 * @param {string} linkText - заголовок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} card - массив изображений
 * @param {array} tags - массив тэгов
 */
function BlogCategories() {
  const info = blogPageData
  const cat = useMemo(
    () =>
      info.map(item => {
        return item.category
      }),
    [info]
  )
  const uniqueCats = [...new Set(cat)]

  return (
    <div className={styles.cats}>
      <section className={styles.cats__container}>
        <p className={styles.cats__title}>Категории</p>
        <ul className={styles.cats__items}>
          {useMemo(
            () =>
              uniqueCats.map(item => (
                <li key={item} className={styles.cats__item}>
                  {item}
                </li>
              )),
            [uniqueCats]
          )}
        </ul>
      </section>
    </div>
  )
}

export default BlogCategories
