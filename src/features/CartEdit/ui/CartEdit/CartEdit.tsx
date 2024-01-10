import { TCartItemExt } from '@/mockData/cartData'
import styles from './CartEdit.module.scss'
import { useEffect, useState } from 'react'
import ButtonDots from '@/shared/ui/ButtonDots/ButtonDots'
import { ProductEntity } from '@/entities/ProductEntity/ui/ProductEntity/ProductEntity'

type TProps = {
  product: TCartItemExt
  decreaseQuantity: (productArticle: string) => void
  increaseQuantity: (productArticle: string) => void
  setQuantity: (productArticle: string, quantity: number) => void
  removeProduct: (productArticle: string) => void
}

/**
 * @param {TCartItemExt} product - это продукт для определения состояния
 */

export const CartEdit: React.FC<TProps> = (props: TProps) => {
  const [amount, setAmount] = useState<number>(0)

  useEffect(() => {
    setAmount(props.product.quantity)
  }, [props.product.quantity])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <ProductEntity {...props.product} />
          <div className={`${styles.sum_wrapper}`}>
            <p className={`${styles.sum}`}>
              {props.product.price * props.product.quantity} {props.product.currency}
            </p>
            <p className={`${styles.price}`}>
              {props.product.price} {props.product.currency}/шт
            </p>
          </div>
        </div>
        <div className={`${styles.counter}`}>
          <button
            className={`${styles.button} ${styles.button_decrease}`}
            id="button-decrease"
            onClick={() => {
              props.decreaseQuantity(props.product.article)
            }}>
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
            onChange={e => {
              props.setQuantity(props.product.article, Number(e.target.value))
            }}></input>
          <button
            className={`${styles.button} ${styles.button_increase}`}
            id="button-increase"
            onClick={() => {
              props.increaseQuantity(props.product.article)
            }}>
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
        <ButtonDots
          removeProduct={props.removeProduct}
          article={props.product.article}
          className={styles.button_dots}
        />
      </div>
    </>
  )
}
