import { FC, useMemo } from 'react'

import NoImage from '@/assets/icons/image-not-found-icon.svg'
import BlogItemForContainer from '@/entities/BlogItemForContainer'
import TagButton from '@/entities/TagButton'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './BlogCard.module.scss'

interface IBlogCard {
  id: number
  image: string
  title: string
  date: string
  tags?: TTag[]
  views?: number
  isBlog?: boolean
}

type TTag = {
  name: string
}

/**
 * Компонент BlogCard - это карточка блога для BlogBlock и BlogMain.
 * @param {string} image - картинка блога
 * @param {string} title - заголовок блога
 * @param {string} date - дата блога
 * @param {string} tags - теги блога
 * @param {number} views - количество просмотров
 * @param {boolean} isBlog - булевое значение для отрисовки тегов
 */

const BlogCard: FC<IBlogCard> = ({ image, date, title, tags, views = 0, isBlog = false }) => {
  const newDate = useMemo(() => {
    const _parsedDate = new Date(date)
    const year = _parsedDate.getFullYear()
    const formatter = new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(_parsedDate)

    return `${formatter}, ${year}`
  }, [date])

  const blogTags = useMemo(
    () =>
      tags?.map((tag, index) => (
        <li key={index}>
          <TagButton tag={tag.name} />
        </li>
      )),
    []
  )

  return (
    <Link to={''} className={isBlog ? `${styles.blogCard} ${styles.blogCard_blog}` : `${styles.blogCard}`}>
      {image ? (
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={'блог'}
            draggable="false"
            className={isBlog ? `${styles.image} ${styles.image_blog}` : `${styles.image}`}
          />
          {isBlog && (
            <>
              <ul className={styles.tags}>{blogTags}</ul>
              <BlogItemForContainer views={views} reviews={0} />
            </>
          )}
        </div>
      ) : (
        <NoImage className={styles.blogCard__noImage} />
      )}

      <Heading type={HeadingType.NORMAL} className={styles.heading}>
        {title}
      </Heading>
      <Subheading className={styles.subheading}>{newDate}</Subheading>
    </Link>
  )
}

export default BlogCard
