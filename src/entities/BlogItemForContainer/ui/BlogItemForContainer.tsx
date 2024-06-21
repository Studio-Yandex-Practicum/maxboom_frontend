import { FC } from 'react'

import IconReview from '@/assets/images/blogMainItem/icon-comments.svg'
import IconView from '@/assets/images/blogMainItem/icon-views.svg'

import styles from './blog-item-for-container.module.scss'

interface IBlogItemForContainer {
  views: number
  reviews: number
  className?: string
}

/**
 * Компонент BlogItemForContainer показывает просмотры и коментарии в карточке блога BlogCard
 * @param {number} views - количество просмотров
 * @param {number} reviews - количество коментариев
 * @param {string} className - дополнительный класс SCSS
 */

const BlogItemForContainer: FC<IBlogItemForContainer> = ({ views, reviews, className }) => {
  return (
    <ul className={`${className} ${styles.blogItemForContainer}`}>
      <li className={styles.blogItemForContainer__info}>
        <IconView />
        <span>{views}</span>
      </li>
      <li className={styles.blogItemForContainer__info}>
        <IconReview />
        <span>{reviews}</span>
      </li>
    </ul>
  )
}

export default BlogItemForContainer
