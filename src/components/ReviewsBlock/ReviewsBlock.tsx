import React, { FC } from 'react'
import CardReview from '../CardReview/CardReview'
import { TReview } from '../../models/ReviewModel'
import IconHand from '../../assets/images/img-hand.png.png'
import IconLink from '../../assets/icons/IconLink'
import Link from '../../ui/link'
import styles from './ReviewsBlock.module.scss'
import HeadingNormal from '../../shared/ui/typography/headings/HeadingNormal/HeadingNormal'

export type Props = {
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
        <HeadingNormal>
          {title}
          <img src={IconHand} alt=""></img>
        </HeadingNormal>

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
