import styles from './blog-categories.module.scss'
import React, { FC, useMemo } from 'react'
import { PropsCategories } from '../../models/PropsBlog'
/**
 * Контейнер для изображений одной группы (новости, истории, блог), scrollbar
 * @param {string} title - заголовок группы изображений
 * @param {string} linkText - заголовок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} card - массив изображений
 * @param {array} tags - массив тэгов
 */

const BlogCategories: FC<PropsCategories> = props => {
  const { cards, filterItems } = props

  const cat = useMemo(
    () =>
      cards.map(item => {
        return item.category
      }),
    [cards]
  )

  const result: {
    key?: string
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
          <button
            key={item.key}
            className={styles.cats__item}
            onClick={() => {
              filterItems(item.key)
            }}>
            {item.key}
            <p className={styles.cats__count}>{item.count}</p>
          </button>
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
