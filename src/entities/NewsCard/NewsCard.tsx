import { FC } from 'react'
import { TCard } from '@/models/CardModel'
import { TEXT_PROMO } from '@/shared/constants/constants'
import styles from './NewsCard.module.scss'
import Link from '@/shared/ui/Link/Link'

export type Props = {
  card: TCard
}

/**
 * Карточка из блока группы новостей
 * @param {TCard} card - параметры карточки из группы новостей
 */

const NewsCard: FC<Props> = ({ card }) => {
  return (
    <Link to={''} className={styles.card}>
      <img src={card.src} alt={card.alt} draggable="false" />
      <h3>{card.title}</h3>
      <span>{card.date}</span>
      {card.promo ? <span className={styles.promo}>{TEXT_PROMO}</span> : null}
    </Link>
  )
}

export default NewsCard
