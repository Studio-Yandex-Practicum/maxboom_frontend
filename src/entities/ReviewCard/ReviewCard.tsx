import { type FC } from 'react'

import styles from './ReviewCard.module.scss'
import { ReviewCardFeedback } from './ui/ReviewCardFeedback/ReviewCardFeedback'
import { ReviewCardStore } from './ui/ReviewCardStore/ReviewCardStore'

interface IReviewCardProps {
  pk: number
  text: string
  date: string
  score: number
  name: string
  index: number
}

/**
 * Компонент ReviewCard - это обертка для карточки отзыва
 * @param {number} pk - id отзыва
 * @param {string} text - текст отзыва
 * @param {string} date - дата отзыва
 * @param {number} score - показатель рейтинга отзыва
 * @param {string} name - имя оставившего отзыв
 * @param {number} index - index отзыва в массиве отзывов
 */

export const ReviewCard: FC<IReviewCardProps> = ({ pk, text, date, score, name, index }) => {
  return (
    <li className={styles.reviewCard}>
      {pk === 0 ? (
        <ReviewCardStore score={score} />
      ) : (
        <ReviewCardFeedback pk={pk} text={text} date={date} score={score} name={name} index={index} />
      )}
    </li>
  )
}
