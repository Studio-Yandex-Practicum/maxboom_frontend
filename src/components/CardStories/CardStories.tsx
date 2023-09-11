import React, { FC } from 'react'
import styles from './card-stories.module.scss'

type Props = {
  card: {
    id: number
    src: string
    alt: string
  }
}

const CardStories: FC<Props> = props => {
  const { card } = props

  return (
    <>
      <li className={styles.li}>
        <a>
          <img src={card.src} alt={card.alt} draggable="false" />
        </a>
      </li>
    </>
  )
}

export default CardStories
