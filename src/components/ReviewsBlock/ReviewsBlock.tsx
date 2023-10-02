import React, { FC } from 'react'
import styles from './ReviewsBlock.module.scss'
import CardReview from '../CardReview/CardReview'
import { TReview } from '../../models/ReviewModel'
import IconHand from '../../assets/images/img-hand.png.png'
import IconLink from '../../assets/icons/IconLink'
import Link from '../../ui/link'

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
const ReviewsBlock: FC<Props> = props => {
  const { title, linkText = '', linkPath = '', reviews } = props
  const linkTextStyle = styles.link

  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <h2>
          {title}
          <img src={IconHand} alt=""></img>
        </h2>
        <Link to={linkPath || '#'} style={linkTextStyle}>
          {linkText}
          {IconLink({ styles: styles.svg })}
        </Link>
      </article>
      <ul>
        {reviews.map(item => (
          <CardReview key={item.id} review={item} />
        ))}
      </ul>
    </section>
  )
}

export default ReviewsBlock
