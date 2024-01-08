import { FC } from 'react'
import { TBrand } from '@/models/BrandModel'
import Link from '@/shared/ui/Link/Link'
import Img from '@/ui/img'
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
        <Link to="#">
          <Img
            src={card.src}
            alt={card.alt}
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
