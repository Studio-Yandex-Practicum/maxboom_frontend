import React, { FC } from 'react'
import { ALT_IMG_STORIES } from '../../utils/constants'
import styles from './card-stories.module.scss'

type TProps = {
  card: {
    id: number
    src: string
  }
}

const CardStories: FC<TProps> = ({ card }) => {
  return (
    <>
      <li className={styles.li}>
        <img src={card.src} alt={ALT_IMG_STORIES} draggable="false" />
      </li>
    </>
  )
}

export default CardStories
