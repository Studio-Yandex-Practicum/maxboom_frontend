import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import styles from './CartPage.module.scss'

/**
 * Страница с корзиной товаров
 */
const CartPage = () => {
  return (
    <WrapperForMainContent>
      <Heading className={styles.heading}>Корзина</Heading>
      <Subheading>В разработке</Subheading>
    </WrapperForMainContent>
  )
}

export default CartPage
