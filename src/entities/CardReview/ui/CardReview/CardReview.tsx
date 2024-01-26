import { FC, useMemo } from 'react'
import IconStar from '@/assets/icons/IconStar'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import styles from './cardReview.module.scss'
import Subheading from '@/shared/ui/Subheading/Subheading'

export type Props = {
  pk: number
  text: string
  date: string
  score: number
  name: string
}

/**
 * Отзыв
 * @param {number} pk - id отзыва
 * @param {string} text - текст отзыва
 * @param {string} date - дата отзыва
 * @param {number} score - очко рейтинга отзыва
 * @param {string} name - имя оставившего отзыв
 */

const CardReview: FC<Props> = ({ pk, text, date, score, name }) => {
  const initials = useMemo(() => {
    return name.slice(0, 1)
  }, [0, 1])
  const linkTextStyle = styles.link__text

  const newDate = useMemo(() => {
    const _parsedDate = new Date(date)
    const year = _parsedDate.getFullYear()
    const formatter = new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(_parsedDate)

    return `${formatter}, ${year}`
  }, [date])

  return (
    <article className={styles.review}>
      {pk === 0 ? (
        <>
          <Heading type={HeadingType.SMALL} className={styles.title}>
            {name} - {score}
            <IconStar></IconStar>
          </Heading>

          <p>{text}</p>
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
              <Heading type={HeadingType.SMALL}>{name}</Heading>
              <span>
                Оценил(а) магазин на {score}
                <IconStar />
              </span>
            </div>
          </div>
          <div className={styles.review__data}>
            <Paragraph>{text}</Paragraph>
            <Subheading>{newDate}</Subheading>
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
