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
  console.log(blogPageData)
  return (
    <div className={styles.tags}>
      <section className={styles.tags__container}>
        <p className={styles.tags__title}>Тэги</p>
        <ul className={styles.tags__items}>
          <li className={styles.tags__item}>#Путешествия</li>
          <li className={styles.tags__item}>#Путешествия</li>
          <li className={styles.tags__item}>#Путешествия</li>
          <li className={styles.tags__item}>#Путешествия</li>
        </ul>
      </section>
    </div>
  )
}

export default BlogTags
