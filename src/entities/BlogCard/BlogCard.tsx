import { FC, useMemo } from 'react'
import styles from './BlogCard.module.scss'
import Link from '@/shared/ui/Link/Link'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import NoImage from '@/assets/icons/image-not-found-icon.svg'

type Props = {
  id: number
  image: string
  title: string
  date: string
}

/**
 * Карточка из блока блог
 * @param {Props} card - параметры карточки из блога
 */

const BlogCard: FC<Props> = ({ image, date, title }) => {
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
    </Link>
  )
}

export default BlogCard
