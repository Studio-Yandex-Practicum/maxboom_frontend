import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import IconLink from '@/assets/icons/IconLink'
import IconHand from '@/assets/images/img-hand.png.png'
import CardReview from '@/entities/CardReview/ui/CardReview/CardReview'
import { getAverageMark, getFeedbacks } from '@/features/Reviews/model/slice/feedbacksSlice'
import { IFeedback } from '@/features/Reviews/model/types/types'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'

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
  const { title, linkText = '', linkPath = '#' } = props
  const linkTextStyle = styles.link

  const dispatch = useAppDispatch()
  const reviews = useSelector((store: StateSchema) => store.feedbacks)

  useEffect(() => {
    dispatch(getFeedbacks(1))

    dispatch(getAverageMark())
  }, [])

  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <Heading type={HeadingType.NORMAL}>
          {title}
          &nbsp;
          <img src={IconHand} alt="иконка" />
        </Heading>
        <Link to={linkPath} className={linkTextStyle}>
          {linkText}
          {IconLink({ styles: styles.svg })}
        </Link>
      </article>
      <ul>
        <CardReview
          key="feadbackHeader"
          pk={0}
          text=""
          date=""
          score={reviews.averageMark.average_score__avg}
          name=""
        />
        {reviews.feedbacks.map((item: IFeedback) => (
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
