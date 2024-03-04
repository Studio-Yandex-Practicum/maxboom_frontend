import { FC } from 'react'

import styles from './Dot.module.scss'

export type Props = {
  isActive: boolean
  onClick: () => void
}

/**
 * Карточка из блока группы историй
 * @param {TCard} card - параметры карточки из группы историй
 */

const Dot: FC<Props> = ({ isActive, onClick }) => {
  return (
    <li onClick={onClick} className={`${styles.dots__item} ${isActive ? styles.dots__item_active : ''}`} />
  )
}

export default Dot
