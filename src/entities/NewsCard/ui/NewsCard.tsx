import { FC, useMemo } from 'react'

import NoImage from '@/assets/icons/image-not-found-icon.svg'
import { TEXT_PROMO } from '@/shared/constants/constants'
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
 * Компонент NewsCard - это карточка из блока группы новостей NewsBlock
 * @param {string} image - картинка
 * @param {string} date - дата
 * @param {string} title - заголовок
 */

const NewsCard: FC<Props> = ({ image, date, title }) => {
  const newDate = useMemo(() => {
    const _parsedDate = new Date(date)
    const year = _parsedDate.getFullYear()
    const formatter = new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(_parsedDate)

    return `${formatter}, ${year}`
  }, [date])

  return (
    <Link to={''} className={styles.newsCard}>
      {image ? (
        <img src={image} alt={'новость'} className={styles.image} />
      ) : (
        <NoImage className={styles.noImage} />
      )}
      <Heading type={HeadingType.NORMAL} className={styles.heading}>
        {title}
      </Heading>
      <span className={styles.span}>{newDate}</span>
      <div className={styles.promo}>{TEXT_PROMO}</div>
    </Link>
  )
}

export default NewsCard
