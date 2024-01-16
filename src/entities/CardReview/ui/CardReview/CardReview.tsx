import { FC, useMemo } from 'react'
import { TReview } from '@/models/ReviewModel'
import IconStar from '@/assets/icons/IconStar'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import styles from './cardReview.module.scss'

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
          <Heading type={HeadingType.SMALL} className={styles.title}>
            {review.name} - {review.score}
            <IconStar></IconStar>
          </Heading>

          <p>{review.text}</p>
          <p className={styles.subtitle}>
            Вы можете{' '}
            <Link to="#" className={styles.link__text}>
              оставить отзыв
            </Link>{' '}
            о нашем магазине или{' '}
            <Link to="#" className={styles.link__text}>
              написать в поддержку
            </Link>
            , если у вас есть какие-то вопросы.
          </p>
        </>
      ) : (
        <>
          <div className={styles.review__header}>
            <div className={styles.review__initials}>{initials}</div>
            <div>
              <Heading type={HeadingType.SMALL}>{review.name}</Heading>
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
          <Link to="#" className={linkTextStyle}>
            Читать полный отзыв
          </Link>
        </>
      )}
    </article>
  )
}

export default CardReview
