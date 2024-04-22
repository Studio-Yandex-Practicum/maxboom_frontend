import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import ArrowIcon from '@/assets/images/cart/arrow-right.svg'
import { ProductEntity } from '@/entities/ProductEntity/ui/ProductEntity/ProductEntity'
import { IProductCartList } from '@/models/ProductCartListModel'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { Button } from '@/shared/ui/Button/Button'
import ButtonDots from '@/shared/ui/ButtonDots/ButtonDots'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'

import { getProductListSelector } from '../../model/selectors'
import { putIncreaseProductAmount } from '../../model/services/putIncreaseProductAmount'
import { productAmountActions } from '../../model/slice/productAmountSlice'

import styles from './CartEdit.module.scss'

export type TCartEditProps = {
  cartId: number
  productList: IProductCartList
}

/**
 * Компонент используется для отображения добавленных в корзину продуктов, изменения кол-ва продуктов в корзине,
 * для удаления продуктов из корзины, для добавления продуктов в закладки
 * @param {number} cartId - id корзины
 * @param {IProductCartList} productList - это продукт для определения состояния
 */

// eslint-disable-next-line  @typescript-eslint/no-unused-vars
export const CartEdit: React.FC<TCartEditProps> = ({ cartId, productList }: TCartEditProps) => {
  const [needToOpenContextMenuButtonDots, setNeedToOpen] = useState(false)
  const dispatch = useAppDispatch()

  const productListState: IProductCartList = useSelector(getProductListSelector)

  function deleteProductHandler() {
    setNeedToOpen(false)
    // removeProduct(product.id) переделать на вызов action https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/319
  }
  function addToFavoritesHandler() {
    setNeedToOpen(false)
  }

  function increaseAmountHandler() {
    dispatch(putIncreaseProductAmount(productListState.product.id))
  }

  function decreaseAmountHandler() {
    // tbd https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/318
  }

  function setAmountHandler() {
    //tbd https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/316
  }

  useEffect(() => {
    dispatch(productAmountActions.setProductList(productList))
  }, [productList])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <ProductEntity {...productListState.product} />
          <div className={`${styles.sum_wrapper}`}>
            <Paragraph className={`${styles.sum}`}>
              {' '}
              {productListState.amount * Number(productListState.product.price)}{' '}
              {productListState.product.brand}
              {/* currency, not brand, c Number непонятно пока*/}
            </Paragraph>
            <Subheading className={`${styles.price}`}>
              {' '}
              {productListState.product.price} {productListState.product.brand}/шт
              {/* currency, not brand */}
            </Subheading>
          </div>
        </div>
        <div className={`${styles.counter}`}>
          <Button
            className={`${styles.button} ${styles.button_decrease}`}
            id="button-decrease"
            onClick={decreaseAmountHandler}>
            <ArrowIcon className={styles.arrowIcon} />
          </Button>
          <input
            value={productListState.amount}
            min="1"
            max="99"
            type="text"
            className={`${styles.input}`}
            onChange={setAmountHandler}></input>
          <Button
            className={`${styles.button} ${styles.button_increase}`}
            id="button-increase"
            onClick={increaseAmountHandler}>
            <ArrowIcon />
          </Button>
        </div>
        <ButtonDots className={styles.button_dots} isMenuOpen={needToOpenContextMenuButtonDots}>
          <div className={styles.wrapper}>
            <ul className={styles.menu}>
              <li className={styles.item}>
                <Button type="button" className={styles.menu_button} onClick={addToFavoritesHandler}>
                  В закладки
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
      </div>
    </>
  )
}
