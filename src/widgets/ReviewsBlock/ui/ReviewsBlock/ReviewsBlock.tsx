import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'

import CardReview from '@/entities/CardReview/ui/CardReview/CardReview'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import { getStoreReviewsSelector } from '../../model/selectors/selectors'
import { getStoreReviews } from '../../model/services/getStoreReviews'

import styles from './reviewsBlock.module.scss'

export type Props = {
  title: string
  linkText?: string
  linkPath?: string
}

/**
 * Контейнер для отзывов
 * @param {string} title - загаловок контейнера
 */
const ReviewsBlock: FC<Props> = props => {
  const { title } = props

  const dispatch = useAppDispatch()
  const reviews = useSelector(getStoreReviewsSelector)

  useEffect(() => {
    dispatch(getStoreReviews(1))
  }, [])

  return (
    <section className={styles.wrapper}>
      <Heading type={HeadingType.NORMAL}>{title}</Heading>
      <div>
        {reviews.map(item => (
          <CardReview
            key={item.pk}
            pk={item.pk}
            text={item.text}
            date={item.pub_date}
            score={item.average_score}
            name={item.author_name}
          />
        ))}
      </div>
    </section>
  )
}

export default ReviewsBlock
