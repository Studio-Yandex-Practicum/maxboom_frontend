import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import styles from './CartPage.module.scss'

/**
 * Страница с корзиной товаров
 */
const CartPage = () => {
  return (
    <main className={styles.main}>
      <WrapperForMainContent>
        <div className={styles.content}>
          <Heading>Корзина</Heading>
          <Subheading>В разработке</Subheading>
        </div>
      </WrapperForMainContent>
    </main>
  )
}

export default CartPage
