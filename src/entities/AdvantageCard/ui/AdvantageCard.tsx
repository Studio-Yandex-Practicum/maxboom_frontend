import { FC } from 'react'

import Link from '@/shared/ui/Link/Link'
import Span from '@/shared/ui/Span/Span'

import styles from './advantageCard.module.scss'

export type TAdvantageCardProps = {
  image: string
  alt: string
  name: string
  route: string
}

/**
 * Компонент AdvantageCard - это карточка достоинства магазина. Входит в компонент Advantages
 * @param {string} image - картинка для преимущества
 * @param {string} alt - описание картинки
 * @param {string} name - название преимущества
 * @param {string} route - ссылка для перехода
 */

const AdvantageCard: FC<TAdvantageCardProps> = ({ image, alt, name, route }) => {
  return (
    <Link to={route} className={styles.advantageCard}>
      <img src={image} alt={alt} className={styles.image} />
      <Span className={styles.span}>{name}</Span>
    </Link>
  )
}

export default AdvantageCard
