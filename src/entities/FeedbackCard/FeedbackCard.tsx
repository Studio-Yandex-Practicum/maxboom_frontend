import { FC } from 'react'

import IconStar from '@/assets/icons/IconStar'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './FeedbackCard.module.scss'
import { getFeedbackDate } from './model/functions/functions'
import { IFeedback } from './model/types/types'
import { ScorePopup } from './ui/ScorePopup/ScorePopup'

interface IFeedbackCardProps {
  feedback: IFeedback
}

/**
 * Компонент карточки отзыва
 * @param feedback {IFeedback} данные отзыва
 */
export const FeedbackCard: FC<IFeedbackCardProps> = ({ feedback }) => {
  const initials = feedback.author_name.slice(0, 1)

  return (
    <article className={styles.feedbackcard}>
      <div className={styles.feedbackcard__header}>
        <div className={styles.feedbackcard__usercontainer}>
          <div className={styles.feedbackcard__initials}>{initials}</div>
          <div className={styles.feedbackcard__scorewraper}>
            <Heading type={HeadingType.SMALL} className={styles.feedbackcard__username}>
              {feedback.author_name}
            </Heading>
            <span className={styles.feedbackcard__score}>
              Оценил(а) магазин на {feedback.average_score}
              <IconStar />
            </span>
            <ScorePopup feedback={feedback} className={styles.feedbackcard__scorepopap} />
          </div>
        </div>
        <Subheading className={styles.feedbackcard__date}>{getFeedbackDate(feedback.pub_date)}</Subheading>
      </div>
      <Paragraph className={styles.feedbackcard__text}>{feedback.text}</Paragraph>
      {feedback.replay && (
        <div className={styles.feedbackcard__replay}>
          <div className={styles.feedbackcard__header}>
            <Heading type={HeadingType.SMALL} className={styles.feedbackcard__username}>
              Ответ: {feedback.replay.name}
            </Heading>
            <Subheading className={`${styles.feedbackcard__date} ${styles.feedbackcard__date_isanswer}`}>
              {getFeedbackDate(feedback.replay.pub_date)}
            </Subheading>
          </div>
          <Paragraph className={styles.feedbackcard__text}>{feedback.replay.text}</Paragraph>
        </div>
      )}
    </article>
  )
}
