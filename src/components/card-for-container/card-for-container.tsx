import React, { FC, useEffect, useState } from 'react'
import styles from './card-for-container.module.scss'
import { TCard } from '../../utils/type'
import { TEXT_PROMO } from '../../utils/constants'

type TProps = {
  card: TCard
}

const CardForContainer: FC<TProps> = ({ card }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    card.title ? setTitle(card.title) : setTitle('')
    card.date ? setDate(card.date) : setDate('')
  }, [])

  return (
    <a className={styles.card}>
      <img src={card.src} alt={card.alt} draggable="false" />
      <h3>{title}</h3>
      <span>{date}</span>
      {card.promo ? <span className={styles.promo}>{TEXT_PROMO}</span> : null}
    </a>
  )
}

export default CardForContainer
