import { FC, useMemo } from 'react'
import type { TBlogItem } from '@/models/BlogItemModel'
import { TEXT_PROMO } from '@/shared/constants/constants'
import styles from './blog-item-for-container.module.scss'
import ViewIcon from '@/assets/images/blogMainItem/icon-views.svg'
import CommentIcon from '@/assets/images/blogMainItem/icon-comments.svg'
import { fromSS } from '@/shared/constants/constants'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

export type Props = {
  card: TBlogItem
}

const BlogItemForContainer: FC<Props> = props => {
  const { card } = props
  const tags = useMemo(
    () =>
      card.tags.map(item => {
        return (
          <Paragraph className={styles.card__tag} key={item}>
            {item}
          </Paragraph>
        )
      }),
    []
  )

  return (
    <Link to={''} className={styles.card}>
      <img src={card.src} alt={card.alt} draggable="false" className={styles.card__im} />
      <div className={styles.card__tags}>{tags}</div>
      <Heading type={HeadingType.NORMAL}>{card.title || ''}</Heading>
      <div className={styles.card__info}>
        <Paragraph className={styles.card__icons}>
          <ViewIcon className={styles['card__icon']} /> {fromSS}
        </Paragraph>
        <Paragraph className={styles.card__icons}>
          <CommentIcon className={styles['card__icon']} /> {card.comments.length}
        </Paragraph>
      </div>
      <span>{card.date || ''}</span>
      {card.promo ? <span className={styles.promo}>{TEXT_PROMO}</span> : null}
    </Link>
  )
}

export default BlogItemForContainer
