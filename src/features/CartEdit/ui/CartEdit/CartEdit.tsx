import { useState } from 'react'

import { ProductEntity } from '@/entities/ProductEntity/ui/ProductEntity/ProductEntity'
import { IProductData } from '@/pages/CartPage/model/types'
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
    // removeProduct(product.id) переделать на вызов action
  }
  function addToFavoritesHandler() {
    setNeedToOpen(false)
  }

  function increaseAmountHandler() {
    // tbd
  }

  function decreaseAmountHandler() {
    // tbd
  }

  function setAmountHandler() {
    //tbd
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
          <button
            className={`${styles.button} ${styles.button_decrease}`}
            id="button-decrease"
            onClick={decreaseAmountHandler}>
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <input
            value={amount}
            min="1"
            max="99"
            type="text"
            className={`${styles.input}`}
            onChange={setAmountHandler}></input>
          <button
            className={`${styles.button} ${styles.button_increase}`}
            id="button-increase"
            onClick={increaseAmountHandler}>
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ButtonDots className={styles.button_dots} isMenuOpen={needToOpenContextMenuButtonDots}>
          <div className={styles.wrapper}>
            <ul className={styles.menu}>
              <li className={styles.item}>
                <button type="button" className={styles.menu_button} onClick={addToFavoritesHandler}>
                  В закладки
                </button>
              </li>

              <li>
                <button type="button" className={styles.menu_button} onClick={deleteProductHandler}>
                  Удалить
                </button>
              </li>
            </ul>
          </div>
        </ButtonDots>
      </div>
    </>
  )
}
