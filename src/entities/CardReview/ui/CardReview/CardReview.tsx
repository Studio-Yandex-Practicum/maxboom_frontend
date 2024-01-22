import { FC, useEffect, useMemo, useState } from 'react'
import IconStar from '@/assets/icons/IconStar'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import styles from './cardReview.module.scss'

export type Props = {
  // review: TReview
  pk: number
  text: string
  date: string
  score: number
  name: string
}

const CardReview: FC<Props> = ({ pk, text, date, score, name }) => {
  // const { review } = props
  const [parsedDate, setParsedDate] = useState<string>()
  const initials = useMemo(() => {
    return name.slice(0, 1)
  }, [0, 1])
  const linkTextStyle = styles.link__text

  useEffect(() => {
    const _parsedDate = new Date(date)
    const day = _parsedDate.getDate()
    const month = _parsedDate.toLocaleString('ru', { month: 'long' })
    const year = _parsedDate.getFullYear()

    setParsedDate(`${day} ${month}, ${year}`)
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
                <IconStar></IconStar>
              </span>
            </div>
          </div>
          <div className={styles.review__data}>
            <Paragraph>{text}</Paragraph>
            <span>{parsedDate}</span>
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
