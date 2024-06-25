import { FC, useMemo } from 'react'

import IconStar from '@/assets/icons/IconStar'
import { Routes } from '@/shared/config/routerConfig/routes'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'

import { getFormatedDate } from '../../model/functions/functions'

import styles from './ReviewCardFeedback.module.scss'

interface IReviewCardFeedbackProps {
  pk: number
  text: string
  date: string
  score: number
  name: string
  index: number
}

/**
 * Компонент ReviewCardFeedback - это карточка отзыва, используется в обертке ReviewCard
 * @param {number} pk - id отзыва
 * @param {string} text - текст отзыва
 * @param {string} date - дата отзыва
 * @param {number} score - показатель рейтинга отзыва
 * @param {string} name - имя оставившего отзыв
 * @param {number} index - index отзыва в массиве отзывов
 */

export const ReviewCardFeedback: FC<IReviewCardFeedbackProps> = ({ pk, text, score, date, name, index }) => {
  const initials = pk !== 0 ? name.slice(0, 1) : name
  const newDate = useMemo(() => {
    if (pk !== 0) {
      return getFormatedDate(date)
    }
    return
  }, [date])

  return (
    <div className={styles.reviewCardFeedback}>
      <div className={styles.reviewCardFeedback__header}>
        <div className={styles.reviewCardFeedback__initials}>{initials}</div>
        <div className={styles.reviewCardFeedback__heading}>
          <Heading type={HeadingType.SMALL}>{name}</Heading>
          <Subheading className={styles.reviewCardFeedback__subheading}>
            Оценил(а) магазин на {score.toFixed(1)}
            <IconStar />
          </Subheading>
        </div>
      </div>

      <Paragraph className={styles.reviewCardFeedback__review}>{text}</Paragraph>

      <Subheading>{newDate}</Subheading>
      <Link to={`${Routes.FEEDBACKS}/${index}`} className={styles.reviewCardFeedback__link}>
        Читать полный отзыв
      </Link>
    </div>
  )
}
