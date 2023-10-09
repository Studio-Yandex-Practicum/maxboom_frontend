import React from 'react'
import styles from './blog-tags.module.scss'
import { blogPageData } from '../../mockData/blogPageData'

/**
 * Контейнер для изображений одной группы (новости, истории, блог), scrollbar
 * @param {string} title - заголовок группы изображений
 * @param {string} linkText - заголовок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} card - массив изображений
 * @param {array} tags - массив тэгов
 */
function BlogTags() {
  const info = blogPageData
  const tags = info.map(item => {
    return item.tags
  })
  const tagsAll = tags.reduce(function (arr, e) {
    return arr.concat(e)
  })

  const uniqueTags = [...new Set(tagsAll)]

  return (
    <div className={styles.tags}>
      <section className={styles.tags__container}>
        <p className={styles.tags__title}>Тэги</p>
        <ul className={styles.tags__items}>
          {uniqueTags.map(item => (
            <li key={item} className={styles.tags__item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default BlogTags
