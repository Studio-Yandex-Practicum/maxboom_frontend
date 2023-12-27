import { FC } from 'react'
import { TCard } from '@/models/CardModel'
import { TEXT_PROMO } from '@/shared/constants/constants'
import styles from './card-for-container.module.scss'
import Link from '@/shared/ui/Link/Link'

export type Props = {
  card: TCard
}

const CardForContainer: FC<Props> = props => {
  const { card } = props

  return (
    <Link to={''} className={styles.card}>
      <img src={card.src} alt={card.alt} draggable="false" />
      <h3>{card.title || ''}</h3>
      <span>{card.date || ''}</span>
      {card.promo ? <span className={styles.promo}>{TEXT_PROMO}</span> : null}
    </Link>
  )
}

export default CardForContainer
