import { FC } from 'react'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TBrand } from '@/models/BrandModel'
import Link from '@/shared/ui/Link/Link'
import Img from '@/ui/img'
import BrandWithoutImage from '@/assets/images/brands/brand-without-image.webp'
import styles from './BrandCard.module.scss'

interface BrandCardProps {
  card: TBrand
}

/**
 * Компонент карточки бренда. Заполнение карточки происходит с применением метода map
 * @param {TBrand} card - массив для наполнения карточки бренда;
 */

const BrandBlock: FC<BrandCardProps> = ({ card }) => {
  return (
    <li className={styles.brand}>
      <div className={styles.wrap}>
        <Link to={`${Routes.BRANDS}${card.slug}`}>
          <Img
            src={card.image || BrandWithoutImage}
            alt={card.name}
            width={card.width ?? '150'}
            height={card.height ?? '150'}
            className={styles.img}
          />
        </Link>
      </div>
    </li>
  )
}

export default BrandBlock
