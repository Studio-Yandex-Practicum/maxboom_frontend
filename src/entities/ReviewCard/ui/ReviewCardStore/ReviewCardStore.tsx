import { FC } from 'react'

import IconStar from '@/assets/icons/IconStar'
import { Routes } from '@/shared/config/routerConfig/routes'
import { FEEDBACK_STORE_COMMENT } from '@/shared/constants/constants'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './ReviewCardStore.module.scss'

interface IReviewCardStoreProps {
  score: number
}

/**
 * Компонент ReviewCardStore - это карточка рейтинга магазина
 * @param {number} score - показатель рейтинга магазина
 */

export const ReviewCardStore: FC<IReviewCardStoreProps> = ({ score }) => {
  return (
    <div className={styles.reviewCardStore}>
      <Heading type={HeadingType.SMALL} className={styles.title}>
        Рейтинг нашего магазина -&nbsp;{score.toFixed(1)}
        <IconStar></IconStar>
      </Heading>

      <Paragraph className={styles.paragraph}>{FEEDBACK_STORE_COMMENT}</Paragraph>
      <Paragraph className={styles.paragraph}>
        Вы можете&nbsp;
        <Link to={`${Routes.FEEDBACKS}/0`} className={styles.link}>
          оставить отзыв
        </Link>
        &nbsp; о нашем магазине или&nbsp;
        <Link to={Routes.CONTACTS} className={styles.link}>
          написать в поддержку
        </Link>
        , если у вас есть какие-то вопросы.
      </Paragraph>
    </div>
  )
}
