import { FC, useMemo } from 'react'

import NoImage from '@/assets/icons/image-not-found-icon.svg'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TEXT_PROMO } from '@/shared/constants/constants'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './NewsCard.module.scss'

type Props = {
  id: number
  image: string
  date: string
  title: string
  link: string
}

/**
 * Компонент NewsCard - это карточка из блока группы новостей NewsBlock
 * @param {string} image - картинка
 * @param {string} date - дата
 * @param {string} title - заголовок
 * @param {string} link - ссылка
 */

const NewsCard: FC<Props> = ({ image, date, title, link }) => {
  const newDate = useMemo(() => {
    const _parsedDate = new Date(date)
    const year = _parsedDate.getFullYear()
    const formatter = new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(_parsedDate)

    return `${formatter}, ${year}`
  }, [date])

  return (
    <Link to={`${Routes.SHOP_NEWS}/${link}`} className={styles.newsCard}>
      {image ? (
        <img src={image} alt={'новость'} className={styles.image} />
      ) : (
        <NoImage className={styles.noImage} />
      )}
      <Heading type={HeadingType.NORMAL} className={styles.heading}>
        {title}
      </Heading>
      <Subheading>{newDate}</Subheading>
      <div className={styles.promo}>{TEXT_PROMO}</div>
    </Link>
  )
}

export default NewsCard
