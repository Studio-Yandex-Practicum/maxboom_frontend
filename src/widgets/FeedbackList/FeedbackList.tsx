import { type FC } from 'react'

import { FeedbackCard } from '@/entities/FeedbackCard/FeedbackCard'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import { IFeedback } from '../../pages/FeedbackPage/model/types/types'

import styles from './FeedbackList.module.scss'

export type TProps = {
  feedbacks: IFeedback[]
}

/**
 * Виджет дял отображения отзывов
 * @feedbacks {IFeedback[]} - массив отзывов о магазине
 */
export const FeedbackList: FC<TProps> = props => {
  const { feedbacks = [] } = props

  return (
    <section className={styles.feedbacklist}>
      <Heading type={HeadingType.NORMAL} className={styles.feedbacklist__header}>
        Отзывы о магазине
      </Heading>

      <div className={styles.feedbacklist__list}>
        {feedbacks.map(f => (
          <FeedbackCard feedback={f} key={f.pk} />
        ))}
      </div>
    </section>
  )
}
