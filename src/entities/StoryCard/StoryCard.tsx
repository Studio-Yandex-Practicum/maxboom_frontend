import { FC } from 'react'
import styles from './StoryCard.module.scss'
import Link from '@/shared/ui/Link/Link'

type TProps = {
  link: string
  pictures: string[]
}

/**
 * Карточка из блока группы историй
 * @param {TCard} card - параметры карточки из группы историй
 */

const StoryCard: FC<TProps> = ({ link, pictures }) => {
  return (
    <Link to={link} className={styles.card}>
      <img src={pictures[0]} alt="история" className={styles.img} draggable="false" />
    </Link>
  )
}

export default StoryCard
