import { FC } from 'react'

import BrandWithoutImage from '@/assets/images/brands/brand-without-image.webp'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'
import Img from '@/ui/img'
import { Brand } from '@/widgets/BrandBlock/types/types'

import styles from './BrandCard.module.scss'

interface BrandCardProps {
  card: Brand
}

/**
 * Компонент BrandCard - это карточка бренда. Входит в компонент BrandBlock
 * @param {object} card - обьект карточки бренда
 */

const BrandCard: FC<BrandCardProps> = ({ card }) => {
  return (
    <Link className={styles.brandCard} to={`${Routes.BRANDS}/${card.slug}`}>
      <Img src={card.image || BrandWithoutImage} alt={card.name} className={styles.img} />
    </Link>
  )
}

export default BrandCard
