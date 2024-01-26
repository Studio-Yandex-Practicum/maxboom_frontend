import { FC } from 'react'
import { TCard } from '@/models/CardModel'
import styles from './StoryCard.module.scss'
import Link from '@/shared/ui/Link/Link'

export type Props = {
  card: TCard
}

/**
 * Карточка из блока группы историй
 * @param {TCard} card - параметры карточки из группы историй
 */

const StoryCard: FC<Props> = ({ card }) => {
  return (
    <Link to={''} className={styles.card}>
      <img src={card.src} alt={card.alt} draggable="false" />
    </Link>
  )
}

export default StoryCard
