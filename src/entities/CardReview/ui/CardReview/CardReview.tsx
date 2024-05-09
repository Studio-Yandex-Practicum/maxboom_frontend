import { FC, useMemo } from 'react'

import IconStar from '@/assets/icons/IconStar'
import { Routes } from '@/shared/config/routerConfig/routes'
import { FEEDBACK_STORE_COMMENT } from '@/shared/constants/constants'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './cardReview.module.scss'

export type Props = {
  pk: number
  text: string
  date: string
  score: number
  name: string
  index: number
}

/**
 * Отзыв
 * @param {number} pk - id отзыва
 * @param {string} text - текст отзыва
 * @param {string} date - дата отзыва
 * @param {number} score - очко рейтинга отзыва
 * @param {string} name - имя оставившего отзыв
 * @param {number} index - index отзыва в массиве отзывов
 */

const CardReview: FC<Props> = ({ pk, text, date, score, name, index }) => {
  const initials = pk !== 0 ? name.slice(0, 1) : name

  const linkTextStyle = styles.link__text

  const newDate = useMemo(() => {
    if (pk !== 0) {
      const _parsedDate = new Date(date)
      const year = _parsedDate.getFullYear()
      const formatter = new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(_parsedDate)

      return `${formatter}, ${year}`
    }

    return
  }, [date])

  return (
    <article className={styles.review}>
      {pk === 0 ? (
        <>
          <Heading type={HeadingType.SMALL} className={styles.title}>
            Рейтинг нашего магазина -&nbsp;{score}
            <IconStar></IconStar>
          </Heading>

          <Paragraph>{FEEDBACK_STORE_COMMENT}</Paragraph>
          <Paragraph className={styles.subtitle}>
            Вы можете&nbsp;
            <Link to={`${Routes.REVIEWS}/${pk}`} className={styles.link__text}>
              оставить отзыв
            </Link>
            &nbsp; о нашем магазине или&nbsp;
            <Link to={Routes.CONTACTS} className={styles.link__text}>
              написать в поддержку
            </Link>
            , если у вас есть какие-то вопросы.
          </Paragraph>
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
          <Link to={`${Routes.REVIEWS}/${index}`} className={linkTextStyle}>
            Читать полный отзыв
          </Link>
        </>
      )}
    </article>
  )
}

export default CardReview
