import React, { FC } from 'react'
import styles from './card-for-container.module.scss'
import { TCard } from '../../models/CardModel'
import { TEXT_PROMO } from '../../constants/constants'

type Props = {
  card: TCard
}

const CardForContainer: FC<Props> = props => {
  const { card } = props

  return (
    <a className={styles.card}>
      <img src={card.src} alt={card.alt} draggable="false" />
      <h3>{card.title || ''}</h3>
      <span>{card.date || ''}</span>
      {card.promo ? <span className={styles.promo}>{TEXT_PROMO}</span> : null}
    </a>
  )
}

export default CardForContainer
