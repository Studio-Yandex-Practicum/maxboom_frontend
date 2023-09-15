import React, { FC } from 'react'
import styles from './card-for-container.module.scss'
import { TCard } from '../../utils/type'
import { TEXT_PROMO } from '../../utils/constants'

type TProps = {
  card: TCard
}

const CardForContainer: FC<TProps> = ({ card }) => {
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
