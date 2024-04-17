import { useState } from 'react'

import ArrowIcon from '@/assets/images/cart/arrow-right.svg'
import { ProductEntity } from '@/entities/ProductEntity/ui/ProductEntity/ProductEntity'
import { IProductData } from '@/pages/CartPage/model/types'
import { Button } from '@/shared/ui/Button/Button'
import ButtonDots from '@/shared/ui/ButtonDots/ButtonDots'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './CartEdit.module.scss'

export type TCartEditProps = {
  cartId: number
  amount: number
  product: IProductData
}

/**
 * Компонент используется для отображения добавленных в корзину продуктов, изменения кол-ва продуктов в корзине,
 * для удаления продуктов из корзины, для добавления продуктов в закладки
 * @param {number} cartId - id корзины
 * @param {number} amount - количество товаров в корзине
 * @param {IProductData} product - это продукт для определения состояния
 */

// eslint-disable-next-line  @typescript-eslint/no-unused-vars
export const CartEdit: React.FC<TCartEditProps> = ({ cartId, amount, product }: TCartEditProps) => {
  const [needToOpenContextMenuButtonDots, setNeedToOpen] = useState(false)

  function deleteProductHandler() {
    setNeedToOpen(false)
    // removeProduct(product.id) переделать на вызов action https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/319
  }
  function addToFavoritesHandler() {
    setNeedToOpen(false)
  }

  function increaseAmountHandler() {
    // tbd https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/317
  }

  function decreaseAmountHandler() {
    // tbd https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/318
  }

  function setAmountHandler() {
    //tbd https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/316
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <ProductEntity {...product} />
          <div className={`${styles.sum_wrapper}`}>
            <Paragraph className={`${styles.sum}`}>
              {' '}
              {amount * Number(product.price)} {product.brand}
              {/* currency, not brand, c Number непонятно пока*/}
            </Paragraph>
            <Subheading className={`${styles.price}`}>
              {' '}
              {product.price} {product.brand}/шт
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
            value={amount}
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
