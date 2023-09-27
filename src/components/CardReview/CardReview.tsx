import React, { FC } from 'react'
import styles from './CardReview.module.scss'
import { TReview } from '../../models/ReviewModel'
import IconStar from '../../assets/icons/IconStar'
import Link from '../../ui/link'

type Props = {
  review: TReview
}

const CardReview: FC<Props> = props => {
  const { review } = props
  const initials = review.name.slice(0, 1)
  const linkTextStyle = styles.link__text

  return (
    <article className={styles.review}>
      <div className={styles.review__header}>
        <div className={styles.review__initials}>{initials}</div>
        <div>
          <h3>{review.name}</h3>
          <span>
            Оценил(а) магазин на {review.score}
            <IconStar></IconStar>
          </span>
        </div>
      </div>
      <div className={styles.review__data}>
        <p>{review.text}</p>
        <span>{review.date}</span>
      </div>
      <Link to="#" style={linkTextStyle}>
        Читать полный отзыв
      </Link>
    </article>
  )
}

export default CardReview
