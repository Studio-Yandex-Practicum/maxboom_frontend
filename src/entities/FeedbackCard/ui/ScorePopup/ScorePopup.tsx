import { FC } from 'react'

import IconStar from '@/assets/icons/IconStar'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import { IFeedback } from '../../model/types/types'

import styles from './ScorePopup.module.scss'

export type Props = {
  feedback: IFeedback
  className?: string
}

/**
 * Компонент всплывающего окна с подробными оценками отзыва
 * @param feedback {IFeedback} данные отзыва
 * @param className {string} внешние стили
 */
export const ScorePopup: FC<Props> = ({ feedback, className }) => {
  return (
    <ul className={`${styles.scorepopup} ${className}`}>
      <li className={styles.scorepopup__line}>
        <Paragraph className={styles.scorepopup__scorename}>Скорость доставки</Paragraph>
        <Paragraph className={styles.scorepopup__score}>
          {feedback.delivery_speed_score}
          <IconStar />
        </Paragraph>
      </li>
      <li className={styles.scorepopup__line}>
        <Paragraph className={styles.scorepopup__scorename}>Цена</Paragraph>
        <Paragraph className={styles.scorepopup__score}>
          {feedback.price_score}
          <IconStar />
        </Paragraph>
      </li>
      <li className={styles.scorepopup__line}>
        <Paragraph className={styles.scorepopup__scorename}>Качество товара</Paragraph>
        <Paragraph className={styles.scorepopup__score}>
          {feedback.quality_score}
          <IconStar />
        </Paragraph>
      </li>
    </ul>
  )
}
