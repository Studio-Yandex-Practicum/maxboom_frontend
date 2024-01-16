import { FC } from 'react'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TBrand } from '@/models/BrandModel'
import Link from '@/shared/ui/Link/Link'
import Img from '@/ui/img'
import BrandWithoutImage from '@/assets/images/brands/brand-without-image.webp'
import {
  DEFAULT_WIDTH_FOR_BRANDCARD_IMG,
  DEFAULT_HEIGHT_FOR_BRANDCARD_IMG
} from '@/entities/constants/constants'
import styles from './BrandCard.module.scss'

interface BrandCardProps {
  card: TBrand
}

/**
 * Компонент карточки бренда. Заполнение карточки происходит с применением метода map
 * @param {TBrand} card - массив для наполнения карточки бренда;
 */

const BrandCard: FC<BrandCardProps> = ({ card }) => {
  return (
    <li className={styles.brand}>
      <div className={styles.wrap}>
        <Link className={styles.link} to={`${Routes.BRANDS}/${card.slug}`}>
          <Img
            src={card.image || BrandWithoutImage}
            alt={card.name}
            width={card.width ?? DEFAULT_WIDTH_FOR_BRANDCARD_IMG}
            height={card.height ?? DEFAULT_HEIGHT_FOR_BRANDCARD_IMG}
            className={styles.img}
          />
        </Link>
      </div>
    </li>
  )
}

export default BrandCard
