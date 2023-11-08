import React, { FC, useMemo } from 'react'
import { TReview } from '../../models/ReviewModel'
import IconStar from '../../assets/icons/IconStar'
import Link from '../../ui/link'
import { Link as ReactLink } from 'react-router-dom'
import styles from './CardReview.module.scss'
import HeadingSmall from '../../shared/ui/typography/headings/HeadingSmall/HeadingSmall'
import Paragraph from '../../shared/ui/typography/paragraph/Paragraph'

export type Props = {
  review: TReview
}

const CardReview: FC<Props> = props => {
  const { review } = props
  const initials = useMemo(() => {
    return review.name.slice(0, 1)
  }, [0, 1])
  const linkTextStyle = styles.link__text

  return (
    <article className={styles.review}>
      {review.id === 0 ? (
        <>
          <HeadingSmall className={styles.title}>
            {review.name} - {review.score}
            <IconStar></IconStar>
          </HeadingSmall>

          <p>{review.text}</p>
          <p className={styles.subtitle}>
            Вы можете{' '}
            <ReactLink to="#" className={styles.link__text}>
              оставить отзыв
            </ReactLink>{' '}
            о нашем магазине или{' '}
            <ReactLink to="#" className={styles.link__text}>
              написать в поддержку
            </ReactLink>
            , если у вас есть какие-то вопросы.
          </p>
        </>
      ) : (
        <>
          <div className={styles.review__header}>
            <div className={styles.review__initials}>{initials}</div>
            <div>
              <HeadingSmall>{review.name}</HeadingSmall>
              <span>
                Оценил(а) магазин на {review.score}
                <IconStar></IconStar>
              </span>
            </div>
          </div>
          <div className={styles.review__data}>
            <Paragraph>{review.text}</Paragraph>
            <span>{review.date}</span>
          </div>
          <Link to="#" style={linkTextStyle}>
            Читать полный отзыв
          </Link>
        </>
      )}
    </article>
  )
}

export default CardReview
