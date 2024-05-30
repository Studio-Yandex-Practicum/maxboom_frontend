import { FC, useState } from 'react'

import { useWithFavorite } from '@/entities/Favorite/model/hooks/useWithFavorie'
import { WidgetButtonsFunctions } from '@/features/WidgetButtonsFunctions/WidgetButtonsFunctions'
import { Routes } from '@/shared/config/routerConfig/routes'
import { ECardView } from '@/shared/model/types/common'
import { IProduct } from '@/shared/model/types/ProductModel'
import Link from '@/shared/ui/Link/Link'

import styles from './AccountCartCard.module.scss'

interface IAccountCartCardProps {
  product: IProduct
}

/**
 * Компонет карточка товара в корзине для страницы аккаунта пользователя
 * @param {IProduct} product продукт из корзины
 */
export const AccountCartCard: FC<IAccountCartCardProps> = ({ product }) => {
  const [isInCompared, setIsInCompared] = useState<boolean>(false)
  /* const { isInCart, handleAddToCart } = useProductInCart(product.slug, product.id) */
  const { isLiked, handleLike } = useWithFavorite(product)

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  return (
    <div className={styles.accountCartCard}>
      <div className={styles.accountCartCard__buttonsConteiner}>
        <WidgetButtonsFunctions
          isLiked={isLiked}
          isInCompared={isInCompared}
          handleLike={handleLike}
          handleAddToCompared={handleAddToCompared}
          layout={ECardView.LIST}
        />
      </div>
      <div className={`${styles.accountCartCard__frame}`}>
        {product.images.length && (
          <img src={product.images[0].image} alt={'product'} className={styles.accountCartCard__image} />
        )}
      </div>
      <Link to={`${Routes.PRODUCT}/${product.slug}`} className={styles.accountCartCard__name}>
        {product.name}
      </Link>
    </div>
  )
}
