import { FC, useMemo } from 'react'

import NoImage from '@/assets/icons/image-not-found-icon.svg'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './BlogCard.module.scss'

type Props = {
  id: number
  image: string
  title: string
  date: string
}

/**
 * Компонент BlogCard - это карточка блога для BlogBlock.
 * @param {string} image - картинка блога
 * @param {string} title - заголовок блога
 * @param {string} date - дата блога
 */

const BlogCard: FC<Props> = ({ image, date, title }) => {
  const newDate = useMemo(() => {
    const _parsedDate = new Date(date)
    const year = _parsedDate.getFullYear()
    const formatter = new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(_parsedDate)

    return `${formatter}, ${year}`
  }, [date])

  return (
    <Link to={''} className={styles.blogCard}>
      {image ? (
        <img src={image} alt={'блог'} draggable="false" className={styles.image} />
      ) : (
        <NoImage className={styles.noImage} />
      )}
      <Heading type={HeadingType.NORMAL} className={styles.heading}>
        {title}
      </Heading>
      <Subheading>{newDate}</Subheading>
    </Link>
  )
}

export default BlogCard
