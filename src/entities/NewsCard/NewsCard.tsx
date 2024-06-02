import { FC, useMemo } from 'react'

import NoImage from '@/assets/icons/image-not-found-icon.svg'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'

import styles from './NewsCard.module.scss'

type Props = {
  id: number
  image: string
  date: string
  title: string
}

/**
 * Карточка из блока группы новостей
 * @param {Props} card - параметры карточки из группы новостей
 */

const NewsCard: FC<Props> = ({ image, date, title }) => {
  const newDate = useMemo(() => {
    const _parsedDate = new Date(date)
    const year = _parsedDate.getFullYear()
    const formatter = new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(_parsedDate)

    return `${formatter}, ${year}`
  }, [date])

  return (
    <Link to={''} className={styles.card}>
      {image ? (
        <img src={image} alt={'новость'} draggable="false" className={styles.img} />
      ) : (
        <NoImage className={styles.img} />
      )}
      <Heading type={HeadingType.NORMAL} className={styles.heading}>
        {title}
      </Heading>
      <span>{newDate}</span>
      {/* TODO */}
      {/* {promo ? <span className={styles.promo}>{TEXT_PROMO}</span> : null} */}
    </Link>
  )
}

export default NewsCard
