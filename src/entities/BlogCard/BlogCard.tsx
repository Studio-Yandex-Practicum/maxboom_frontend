import { FC } from 'react'
import { TCard } from '@/models/CardModel'
import styles from './BlogCard.module.scss'
import Link from '@/shared/ui/Link/Link'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

export type Props = {
  card: TCard
}

/**
 * Карточка из блока блог
 * @param {TCard} card - параметры карточки из блога
 */

const BlogCard: FC<Props> = ({ card }) => {
  return (
    <Link to={''} className={styles.card}>
      <img src={card.src} alt={card.alt} draggable="false" />
      <Heading type={HeadingType.NORMAL} className={styles.heading}>
        {card.title}
      </Heading>
      <span>{card.date}</span>
    </Link>
  )
}

export default BlogCard
