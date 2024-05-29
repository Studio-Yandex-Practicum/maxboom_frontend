import { FC, useState } from 'react'

import { useWithFavorite } from '@/entities/Favorite/model/hooks/useWithFavorie'
import { ECardView } from '@/shared/model/types/common'
import { IProduct } from '@/shared/model/types/ProductModel'

import { WidgetButtonsFunctions } from '../WidgetButtonsFunctions/WidgetButtonsFunctions'

import styles from './AccountCartCard.module.scss'

interface IAccountCartCardProps {
  product: IProduct
}

export const AccountCartCard: FC<IAccountCartCardProps> = ({ product }) => {
  const [isInCompared, setIsInCompared] = useState<boolean>(false)
  /* const { isInCart, handleAddToCart } = useProductInCart(product.slug, product.id) */
  const { isLiked, handleLike } = useWithFavorite(product)

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  return (
    <div className={styles.accountCartCard}>
      <WidgetButtonsFunctions
        isLiked={isLiked}
        isInCompared={isInCompared}
        handleLike={handleLike}
        handleAddToCompared={handleAddToCompared}
        layout={ECardView.LIST}
      />
      {product.name}
    </div>
  )
}
