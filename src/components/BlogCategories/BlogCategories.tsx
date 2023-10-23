import styles from './blog-categories.module.scss'
import { blogPageData } from '../../mockData/blogPageData'
import React, { useMemo } from 'react'
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

  const result: {
    key: string
    count: number
  }[] = []
  // Create a unique list of items to loop over
  // Add each item to the result list

  ;[...new Set(cat)].forEach(item =>
    useMemo(
      () =>
        result.push({
          key: item,
          // Get the count of items of the current type
          count: cat.filter(i => i == item).length
        }),
      [result]
    )
  )

  const uniqueCats = useMemo(
    () =>
      result.map(item => {
        return (
          <li key={item.key} className={styles.cats__item}>
            {item.key}
            <p className={styles.cats__count}>{item.count}</p>
          </li>
        )
      }),
    [[...new Set(cat)]]
  )

  return (
    <div className={styles.cats}>
      <section className={styles.cats__container}>
        <p className={styles.cats__title}>Категории</p>
        <ul className={styles.cats__items}>{uniqueCats}</ul>
      </section>
    </div>
  )
}

export default BlogCategories
