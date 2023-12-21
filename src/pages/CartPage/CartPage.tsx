import { CartCouponApply } from '@/features/CartCouponApply/ui/CartCouponApply/CartCouponApply'
import { CartEdit } from '@/features/CartEdit/ui/CartEdit/CartEdit'
import { MakeOrder } from '@/widgets/MakeOrder/ui/MakeOrder/MakeOrder'
import styles from './CartPage.module.scss'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import { useEffect, useState } from 'react'
import { TCart, TCartItem, TCartItemExt, cartData } from '@/mockData/cartData'
import { getProduct } from '@/shared/api/maxboom/product'
import { TOrder } from '@/utils/types'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const [cart, updateCart] = useState<TCart>(cartData)
  const [cartWithProducts, updateCartWithProducts] = useState<TCartItemExt[]>([])
  const [order, setOrder] = useState<TOrder>({
    amount: 0,
    productsSum: 0,
    currency: '₽',
    productsSumWithoutDiscount: 0,
    total: 0
  })

  useEffect(() => {
    const _products = cart.products.map(item => {
      const product = getProduct(item.article)!
      return { ...product, quantity: item.quantity }
    })
    updateCartWithProducts(_products)
  }, [cart])

  useEffect(() => {
    let amount = 0
    let productsSum = 0
    for (let i = 0; i < cartWithProducts.length; i = i + 1) {
      amount += cartWithProducts[i].quantity
      productsSum += cartWithProducts[i].quantity * cartWithProducts[i].price
    }

    setOrder({
      ...order,
      amount: amount,
      productsSum: productsSum,
      productsSumWithoutDiscount: productsSum,
      total: productsSum
    })
  }, [cartWithProducts])

  function increaseQuantity(productArticle: string) {
    const products = new Array<TCartItem>()

    for (let i = 0; i < cart.products.length; i = i + 1) {
      const item = cart.products[i]
      if (item.article === productArticle) {
        if (item.quantity < 99) {
          item.quantity = item.quantity + 1
          products.push(item)
        }
      } else {
        products.push(item)
      }
    }

    updateCart({
      ...cart,
      products: products
    })
  }

  function decreaseQuantity(productArticle: string) {
    const products = new Array<TCartItem>()
    for (let i = 0; i < cart.products.length; i = i + 1) {
      const item = cart.products[i]
      if (item.article === productArticle) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1
        } else {
          item.quantity = 0
        }
      }
      products.push(item)
    }
    updateCart({
      ...cart,
      products: products
    })
  }
  function setQuantity(productArticle: string, quantity: number) {
    const products = new Array<TCartItem>()
    for (let i = 0; i < cart.products.length; i = i + 1) {
      const item = cart.products[i]
      if (item.article === productArticle) {
        item.quantity = quantity
      }
      products.push(item)
    }
    updateCart({
      ...cart,
      products: products
    })
  }

  function removeProduct(productArticle: string) {
    const products = new Array<TCartItem>()
    for (let i = 0; i < cart.products.length; i = i + 1) {
      const item = cart.products[i]
      if (item.article !== productArticle) {
        products.push(item)
      }
    }
    updateCart({
      ...cart,
      products: products
    })
  }

  return (
    <WrapperForMainContent>
      <div className={styles.titles}>
        <Heading>
          Оформление заказа ({cart.weight.toFixed(2)} {cart.unit})
        </Heading>
        <Subheading>
          <Link to={'/'} className={styles.link}>
            Главная
          </Link>{' '}
          / Корзина покупок
        </Subheading>
        <Heading className={styles.heading} type={HeadingType.NORMAL}>
          Ваши покупки
        </Heading>
      </div>
      <div className={styles.container}>
        <div className={styles.cards}>
          {cartWithProducts.map(item => {
            return (
              <CartEdit
                key={item.article}
                product={item}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                setQuantity={setQuantity}
                removeProduct={removeProduct}></CartEdit>
            )
          })}
        </div>
        <div className={styles.wrapper}>
          <MakeOrder {...order}></MakeOrder>
          <CartCouponApply></CartCouponApply>
        </div>
      </div>
    </WrapperForMainContent>
  )
}

export default CartPage
