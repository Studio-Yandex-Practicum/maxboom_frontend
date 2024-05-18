import { FC } from 'react'
import { Link } from 'react-router-dom'

import IconStar from '@/assets/icons/IconStar'
import { Routes } from '@/shared/config/routerConfig/routes'
import { FEEDBACK_STORE_COMMENT } from '@/shared/constants/constants'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './ReviewCardStore.module.scss'

interface IReviewCardStoreProps {
  score: number
}

export const ReviewCardStore: FC<IReviewCardStoreProps> = ({ score }) => {
  return (
    <>
      <Heading type={HeadingType.SMALL} className={styles.title}>
        Рейтинг нашего магазина -&nbsp;{score.toFixed(1)}
        <IconStar></IconStar>
      </Heading>
      <Paragraph className={styles.paragraph}>{FEEDBACK_STORE_COMMENT}</Paragraph>
      <Paragraph className={styles.paragraph}>
        Вы можете&nbsp;
        <Link to={`${Routes.REVIEWS}/0`} className={styles.link__text}>
          оставить отзыв
        </Link>
        &nbsp; о нашем магазине или&nbsp;
        <Link to={Routes.CONTACTS} className={styles.link__text}>
          написать в поддержку
        </Link>
        , если у вас есть какие-то вопросы.
      </Paragraph>
    </>
  )
}
