import React, { FC } from 'react'
import styles from './blog-main.module.scss'
import CardForContainer from '../CardForContainer/CardForContainer'
import { PropsBlog } from '../../models/PropsBlog'
import BlogTags from '../BlogTags/BlogTags'
import BlogCategories from '../BlogCategories/BlogCategories'
import WrapperForMainContent from '../WrapperForMainContent/WrapperForMainContent'
import BlogMainItem from '../BlogMainItem/BlogMainItem'
/**
 * Контейнер для изображений одной группы (новости, истории, блог), scrollbar
 * @param {string} title - заголовок группы изображений
 * @param {string} linkText - заголовок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} card - массив изображений
 */
const BlogMain: FC<PropsBlog> = props => {
  const { cards } = props

  return (
    <WrapperForMainContent>
      <div className={styles.blog}>
        <h2 className={styles.blog__title}>Блог</h2>
        <p className={styles.blog__path}>Главная/Блог</p>
      </div>
      <div className={styles.blog__wrapper}>
        <div className={styles.blog__filters}>
          <BlogCategories />
          <BlogTags />
        </div>
        <section className={styles.wrapper}>
          <BlogMainItem />
          <ul>
            {cards.map(item => (
              <CardForContainer key={item.id} card={item} />
            ))}
          </ul>
        </section>
      </div>
    </WrapperForMainContent>
  )
}

export default BlogMain
