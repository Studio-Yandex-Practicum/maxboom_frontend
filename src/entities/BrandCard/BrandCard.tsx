import { FC } from 'react'
import { Routes } from '@/shared/config/routerConfig/routes'
import { Brand } from '@/widgets/BrandBlock/types/types'
import Link from '@/shared/ui/Link/Link'
import Img from '@/ui/img'
import BrandWithoutImage from '@/assets/images/brands/brand-without-image.webp'
import styles from './BrandCard.module.scss'

interface BrandCardProps {
  card: Brand
}

/**
 * Компонент карточки бренда. Заполнение карточки происходит с применением метода map
 * @param {Brand} card - массив для наполнения карточки бренда;
 */

const BrandCard: FC<BrandCardProps> = ({ card }) => {
  return (
    <li className={styles.brand}>
      <div className={styles.wrap}>
        <Link className={styles.link} to={`${Routes.BRANDS}/${card.slug}`}>
          <Img src={card.image || BrandWithoutImage} alt={card.name} className={styles.img} />
        </Link>
      </div>
    </li>
  )
}

export default BrandCard
