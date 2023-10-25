import React, { FC, useMemo } from 'react'
import { TBlogItem } from '../../models/BlogItemModel'
import { TEXT_PROMO } from '../../constants/constants'
import styles from './blog-item-for-container.module.scss'
import eye from '../../assets/images/blogMainItem/icon-views.svg'
import comment from '../../assets/images/blogMainItem/icon-comments.svg'
import { fromSS } from '../../constants/constants'

export type Props = {
  card: TBlogItem
}

const BlogItemForContainer: FC<Props> = props => {
  const { card } = props
  const tags = useMemo(
    () =>
      card.tags.map(item => {
        return (
          <p className={styles.card__tag} key={item}>
            {item}
          </p>
        )
      }),
    []
  )
  return (
    <a className={styles.card}>
      <img src={card.src} alt={card.alt} draggable="false" className={styles.card__im} />
      <div className={styles.card__tags}>{tags}</div>
      <h3>{card.title || ''}</h3>
      <div className={styles.card__info}>
        <p className={styles.card__icon}>
          <img src={eye} alt="views" draggable="false" className={styles.card__image} /> {fromSS}
        </p>
        <p className={styles.card__icon}>
          <img src={comment} alt="comments" draggable="false" className={styles.card__image} />
          {card.comments.length}
        </p>
      </div>
      <span>{card.date || ''}</span>
      {card.promo ? <span className={styles.promo}>{TEXT_PROMO}</span> : null}
    </a>
  )
}

export default BlogItemForContainer
