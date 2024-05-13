import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'

import IconStar from '@/assets/icons/IconStar'
import { Routes } from '@/shared/config/routerConfig/routes'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
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

export const ReviewCardFeedback: FC<IReviewCardFeedbackProps> = ({ pk, text, score, date, name, index }) => {
  const initials = pk !== 0 ? name.slice(0, 1) : name
  const newDate = useMemo(() => {
    if (pk !== 0) {
      return getFormatedDate(date)
    }
    return
  }, [date])

  return (
    <>
      <div className={styles.review__header}>
        <div className={styles.review__initials}>{initials}</div>
        <div>
          <Heading type={HeadingType.SMALL}>{name}</Heading>
          <span>
            Оценил(а) магазин на {score.toFixed(1)}
            <IconStar />
          </span>
        </div>
      </div>
      <div className={styles.review__data}>
        <Paragraph className={styles.paragraph}>{text}</Paragraph>
        <Subheading>{newDate}</Subheading>
      </div>
      <Link to={`${Routes.REVIEWS}/${index}`} className={styles.link__text}>
        Читать полный отзыв
      </Link>
    </>
  )
}
