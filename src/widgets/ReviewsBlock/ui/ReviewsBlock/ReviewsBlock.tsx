import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'

import IconLink from '@/assets/icons/IconLink'
import IconHand from '@/assets/images/img-hand.png.png'
import CardReview from '@/entities/CardReview/ui/CardReview/CardReview'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'

import { getStoreReviewsSelector } from '../../model/selectors/selectors'
import { getStoreReviews } from '../../model/services/getStoreReviews'

import styles from './reviewsBlock.module.scss'

export type Props = {
  title: string
  linkText?: string
  linkPath?: string
}

/**
 * Контейнер для отзывов, scrollbar
 * @param {string} title - загаловок контейнера
 * @param {string} linkText - загаловок ссылки
 * @param {string} linkPath - адрес ссылки
 */
const ReviewsBlock: FC<Props> = props => {
  const { title, linkText = '', linkPath = '' } = props
  const linkTextStyle = styles.link

  const dispatch = useAppDispatch()
  const reviews = useSelector(getStoreReviewsSelector)

  useEffect(() => {
    dispatch(getStoreReviews())
  }, [])

  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <Heading type={HeadingType.NORMAL}>
          {title}
          <img src={IconHand} alt="иконка" />
        </Heading>

        <Link to={linkPath || '#'} className={linkTextStyle}>
          {linkText}
          {IconLink({ styles: styles.svg })}
        </Link>
      </article>
      <ul>
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
      </ul>
    </section>
  )
}

export default ReviewsBlock
