import { useEffect, useRef, type FC } from 'react'

import FeedbackCard from '@/entities/FeedbackCard/FeedbackCard'

import styles from './FeedbackList.module.scss'
import type { IFeedback } from './model/types/types'

interface IFeedbackListProps {
  pk: number
  feedbacks: IFeedback[]
}

/**
 * Виджет дял отображения отзывов
 * @param {IFeedback[]} feedbacks- массив отзывов о магазине
 * @param {number} pk - идентификатор отзыва, на который нужно спозиционировать страницу
 */
export const FeedbackList: FC<IFeedbackListProps> = ({ feedbacks, pk }) => {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pk])

  return (
    <section className={styles.feedbacklist}>
      <div className={styles.feedbacklist__list}>
        {feedbacks.map(f => {
          return f.pk === pk ? (
            <FeedbackCard feedback={f} key={f.pk} ref={targetRef} />
          ) : (
            <FeedbackCard feedback={f} key={f.pk} />
          )
        })}
      </div>
    </section>
  )
}
