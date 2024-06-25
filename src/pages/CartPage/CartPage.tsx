import { useSelector } from 'react-redux'

import { getCartSelector } from '@/entities/CartEntity/model/selectors/selectors'
import type { ICartEntity } from '@/entities/CartEntity/model/types/types'
import { CartCouponApply } from '@/features/CartCouponApply/ui/CartCouponApply/CartCouponApply'
import { CartEdit } from '@/features/CartEdit/ui/CartEdit/CartEdit'
import { Routes } from '@/shared/config/routerConfig/routes'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import { MakeOrder } from '@/widgets/MakeOrder/ui/MakeOrder/MakeOrder'

import styles from './CartPage.module.scss'

const links = [
  { heading: 'Главная', href: Routes.HOME },
  { heading: 'Корзина покупок', href: '' }
]

/**
 * Компонент страница корзины. На странице отображаются товары в корзине, можно изменять кол-во товаров в корзине,
 * сразу происходит изменение стоимости. Также можно добавить сертификат или купон на скидку, есть опция оформения быстрого и обычного заказа
 */
const CartPage = () => {
  const cart: ICartEntity = useSelector(getCartSelector)

  return (
    <WrapperForMainContent>
      <article className={styles.titleBox}>
        <Heading type={HeadingType.MAIN}>Оформление заказа ({cart.cart_full_weight.toFixed(2)} кг)</Heading>
        <Breadcrumbs links={links} />
        <Heading type={HeadingType.NORMAL} className={styles.heading}>
          Ваши покупки
        </Heading>
      </article>

      <div className={styles.container}>
        <ul className={styles.cards}>
          {cart.products.map(item => (
            <CartEdit key={item.product.id} cartId={cart.id} productWithInfo={item} />
          ))}
        </ul>

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
