import React, { FC } from 'react'
import styles from './ContainerReviews.module.scss'
import CardReview from '../CardReview/CardReview'
import { TReview } from '../../models/ReviewModel'

type Props = {
  title: string
  linkText?: string
  linkPath?: string
  reviews: TReview[]
}

/**
 * Контейнер для отзывов, scrollbar
 * @param {string} title - загаловок контейнера
 * @param {string} linkText - загаловок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} reviews - массив отзывов
 */
const ContainerReviews: FC<Props> = props => {
  const { title, linkText = '', linkPath = '', reviews } = props

  return (
    <section className={styles.wrapper}>
      <article>
        <h2>{title}</h2>
        <a href={linkPath} className={styles.link}>
          {linkText}
        </a>
      </article>
      <ul>
        {reviews.map(item => (
          <CardReview key={item.id} review={item} />
        ))}
      </ul>
    </section>
  )
}

export default ContainerReviews
