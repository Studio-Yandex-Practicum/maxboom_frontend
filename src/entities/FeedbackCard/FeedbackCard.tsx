import { FC } from 'react'

import IconStar from '@/assets/icons/IconStar'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './FeedbackCard.module.scss'
import { IFeedback } from './types/types'
import { ScorePopup } from './ui/ScorePopup/ScorePopup'

export type Props = {
  feedback: IFeedback
}

/**
 * Отзыв
 * @feedback {IFeedback} отзыв
 */

export const FeedbackCard: FC<Props> = ({ feedback }) => {
  const initials = feedback.author_name.slice(0, 1)

  const getFeedbackDate = (pubDate: string): string => {
    const parsedDate = new Date(pubDate)
    const year = parsedDate.getFullYear()
    const month = parsedDate.getMonth() + 1 < 10 ? `0${parsedDate.getMonth() + 1}` : parsedDate.getMonth() + 1
    const day = parsedDate.getDate() < 10 ? `0${parsedDate.getDate()}` : parsedDate.getDate()
    return `${day}.${month}.${year}`
  }

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
            <Subheading className={styles.feedbackcard__date}>
              {getFeedbackDate(feedback.replay.pub_date)}
            </Subheading>
          </div>
          <Paragraph className={styles.feedbackcard__text}>{feedback.replay.text}</Paragraph>
        </div>
      )}
    </article>
  )
}
