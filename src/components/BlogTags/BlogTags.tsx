import React from 'react'
import styles from './blog-tags.module.scss'
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
function BlogTags() {
  const info = blogPageData

  const tags = useMemo(
    () =>
      info.map(item => {
        return item.tags
      }),
    [info]
  )

  const tagsAll = useMemo(
    () =>
      tags.reduce(function (arr, e) {
        return arr.concat(e)
      }),
    [tags]
  )
  const uniqueTags = [...new Set(tagsAll)]

  return (
    <div className={styles.tags}>
      <section className={styles.tags__container}>
        <p className={styles.tags__title}>Тэги</p>
        <ul className={styles.tags__items}>
          {useMemo(
            () =>
              uniqueTags.map(item => (
                <li key={item} className={styles.tags__item}>
                  {item}
                </li>
              )),
            [uniqueTags]
          )}
        </ul>
      </section>
    </div>
  )
}

export default BlogTags
