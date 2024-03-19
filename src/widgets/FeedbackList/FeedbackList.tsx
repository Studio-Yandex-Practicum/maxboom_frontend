import { type FC } from 'react'

import { FeedbackCard } from '@/entities/FeedbackCard/FeedbackCard'

import { IFeedback } from '../../pages/FeedbackPage/model/types/types'

import styles from './FeedbackList.module.scss'

interface IFeedbackListProps {
  feedbacks: IFeedback[]
}

/**
 * Виджет дял отображения отзывов
 * @feedbacks {IFeedback[]} - массив отзывов о магазине
 */
export const FeedbackList: FC<IFeedbackListProps> = props => {
  const { feedbacks = [] } = props

  return (
    <section className={styles.feedbacklist}>
      <div className={styles.feedbacklist__list}>
        {feedbacks && feedbacks.map(f => <FeedbackCard feedback={f} key={f.pk} />)}
      </div>
    </section>
  )
}
