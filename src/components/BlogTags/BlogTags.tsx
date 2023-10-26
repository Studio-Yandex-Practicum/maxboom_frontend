import styles from './blog-tags.module.scss'
import React, { FC, useMemo } from 'react'
import { PropsTags } from '../../models/PropsBlog'
/**
 * Контейнер для изображений одной группы (новости, истории, блог), scrollbar
 * @param {string} title - заголовок группы изображений
 * @param {string} linkText - заголовок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} card - массив изображений
 * @param {array} tags - массив тэгов
 */

const BlogTags: FC<PropsTags> = props => {
  const { cards, filterItems } = props
  const tags = useMemo(
    () =>
      cards.map(item => {
        return item.tags
      }),
    [cards]
  )

  const tagsAll = useMemo(
    () =>
      tags.reduce(function (arr, e) {
        return arr.concat(e)
      }),
    [tags]
  )
  const uniqueTags = useMemo(
    () =>
      [...new Set(tagsAll)].map(item => {
        return (
          <button
            key={item}
            className={styles.tags__item}
            onClick={() => {
              filterItems(item)
            }}>
            {item}
          </button>
        )
      }),
    [[...new Set(tagsAll)]]
  )

  return (
    <div className={styles.tags}>
      <section className={styles.tags__container}>
        <p className={styles.tags__title}>Тэги</p>
        <ul className={styles.tags__items}>{uniqueTags}</ul>
      </section>
    </div>
  )
}

export default BlogTags
