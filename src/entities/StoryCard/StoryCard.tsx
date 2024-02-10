import { FC } from 'react'

import NoImage from '@/assets/icons/image-not-found-icon.svg'
import Link from '@/shared/ui/Link/Link'

import styles from './StoryCard.module.scss'

type TProps = {
  link: string
  pictures: string[]
}

/**
 * Карточка из блока группы историй
 * @param {string} link - ссылка, которая будет, вероятно, вести на страницу истории
 * @param {string[]} pictures - массив картинок, относящийся к одной story
 */

const StoryCard: FC<TProps> = ({ link, pictures }) => {
  return (
    <Link to={link} className={styles.card}>
      {pictures[0] ? (
        <img src={pictures[0]} alt={'новость'} draggable="false" className={styles.img} />
      ) : (
        <NoImage className={styles.img} />
      )}
    </Link>
  )
}

export default StoryCard
