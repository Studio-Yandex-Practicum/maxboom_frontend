import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { CartCouponApply } from '@/features/CartCouponApply/ui/CartCouponApply/CartCouponApply'
import { CartEdit } from '@/features/CartEdit/ui/CartEdit/CartEdit'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { ICart } from '@/shared/model/types/CartModel'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import { MakeOrder } from '@/widgets/MakeOrder/ui/MakeOrder/MakeOrder'

import styles from './CartPage.module.scss'
import { getCartSelector } from './model/selector'
import { getCartList } from './model/services'

/**
 * Компонент страница корзины. На странице отображаются товары в корзине, можно изменять кол-во товаров в корзине,
 * сразу происходит изменение стоимости. Также можно добавить сертификат или купон на скидку, есть опция оформения быстрого и обычного заказа
 */

const CartPage = () => {
  const dispatch = useAppDispatch()
  const cart: ICart = useSelector(getCartSelector)

  useEffect(() => {
    dispatch(getCartList())
  }, [])

  function updateCart() {
    dispatch(getCartList())
  }

  return (
    <WrapperForMainContent>
      <div className={styles.titles}>
        <Heading>
          Оформление заказа ({cart.cart_full_weight.toFixed(2)} кг)
          {/* Кг приходит с бека или нет, tbd */}
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
          {cart.products.map(item => {
            return (
              <CartEdit
                key={item.product.id}
                cartId={cart.id}
                productWithInfo={item}
                updateCart={updateCart}
              />
            )
          })}
        </div>
        <div className={styles.wrapper}>
          <MakeOrder
            amount={cart.products.reduce((total, item) => total + item.amount, 0)}
            currency="RUB"
            productsSum={cart.cart_full_price}
            productsSumWithoutDiscount={cart.cart_full_price}
            total={cart.cart_full_price}
          />
          <CartCouponApply />
        </div>
      </div>
    </WrapperForMainContent>
  )
}

export default CartPage
