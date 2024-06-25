import { useState } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import { putDecreaseProductAmount } from '@/entities/CartEntity/model/services/putDecreaseProductAmount'
import { putIncreaseProductAmount } from '@/entities/CartEntity/model/services/putIncreaseProductAmount'
import { putRemoveProduct } from '@/entities/CartEntity/model/services/putRemoveProduct'
import { putRenewProductAmount } from '@/entities/CartEntity/model/services/putRenewProductAmount'
import { useWithFavorite } from '@/entities/Favorite/model/hooks/useWithFavorie'
import { ProductEntity } from '@/entities/ProductEntity/ui/ProductEntity/ProductEntity'
import { calculateProductPrice } from '@/shared/libs/helpers/calculateProductPrice'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import type { IProductCartList } from '@/shared/model/types/ProductCartListModel'
import { Button } from '@/shared/ui/Button/Button'
import ButtonDots from '@/shared/ui/ButtonDots/ButtonDots'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'

import { EMPTY, MAX_AMOUNT, MIN_AMOUNT } from '../../model/constants/constants'

import styles from './CartEdit.module.scss'

export type TCartEditProps = {
  cartId: number
  productWithInfo: IProductCartList
}

/**
 * Компонент используется для отображения добавленных в корзину продуктов, изменения кол-ва продуктов в корзине,
 * для удаления продуктов из корзины, для добавления продуктов в закладки
 * @param {number} cartId - id корзины
 * @param {IProductCartList} productWithInfo - это корзина с количеством товара, общей стоимостью и весом
 */

export const CartEdit: React.FC<TCartEditProps> = ({ cartId, productWithInfo }: TCartEditProps) => {
  const [needToOpenContextMenuButtonDots, setNeedToOpen] = useState(false)

  const dispatch = useAppDispatch()
  const { isLiked, handleLike } = useWithFavorite(productWithInfo.product)

  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  const [value, setValue] = useState<string>(EMPTY)

  function deleteProductHandler() {
    setNeedToOpen(false)
    dispatch(putRemoveProduct(productWithInfo.product.id))
  }

  function addToFavoritesHandler() {
    handleLike()
    setNeedToOpen(false)
  }

  function increaseAmountHandler() {
    if (productWithInfo.amount < MAX_AMOUNT) {
      dispatch(putIncreaseProductAmount(productWithInfo.product.id))
    }
  }

  function decreaseAmountHandler() {
    if (productWithInfo.amount > MIN_AMOUNT) {
      dispatch(putDecreaseProductAmount(productWithInfo.product.id))
    }
  }

  function setAmountHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value)
    if (Number.isInteger(newValue)) {
      dispatch(
        putRenewProductAmount({
          product: productWithInfo.product.id,
          cart: cartId,
          amount: newValue
        })
      )
    } else {
      setValue(EMPTY)
    }
  }

  return (
    <li className={styles.cartEdit}>
      <ProductEntity {...productWithInfo.product} />

      <div className={styles.counter}>
        <Button
          className={`${styles.button} ${styles.button_decrease}`}
          id="button-decrease"
          onClick={decreaseAmountHandler}>
          <ArrowIcon className={styles.arrowLeft} />
        </Button>
        <input
          value={productWithInfo.amount}
          min={MIN_AMOUNT}
          max={MAX_AMOUNT}
          type="text"
          className={styles.input}
          onChange={setAmountHandler}></input>
        <Button
          className={`${styles.button} ${styles.button_increase}`}
          id="button-increase"
          onClick={increaseAmountHandler}>
          <ArrowIcon className={styles.arrowRight} />
        </Button>
      </div>

      <div className={styles.sumWrapper}>
        <Paragraph className={styles.sum}>
          {calculateProductPrice(productWithInfo.amount, String(productWithInfo.product.price))}
          &nbsp;₽
        </Paragraph>
        <Subheading className={styles.price}>{productWithInfo.product.price}&nbsp;₽/шт</Subheading>
      </div>

      <ButtonDots className={styles.buttonDots} isMenuOpen={needToOpenContextMenuButtonDots}>
        <div className={styles.wrapper}>
          <ul>
            <li className={styles.item}>
              <Button type="button" className={styles.menu_button} onClick={addToFavoritesHandler}>
                {isLiked ? 'Из закладок' : 'В закладки'}
              </Button>
            </li>
            <li>
              <Button type="button" className={styles.menu_button} onClick={deleteProductHandler}>
                Удалить
              </Button>
            </li>
          </ul>
        </div>
      </ButtonDots>
    </li>
  )
}
