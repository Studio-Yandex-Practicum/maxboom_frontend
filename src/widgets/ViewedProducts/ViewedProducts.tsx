import { FC } from 'react'

import Heading from '@/shared/ui/Heading/Heading'
import Scroll from '@/shared/ui/Scroll/Scroll'

import styles from './ViewedProducts.module.scss'

export const ViewedProducts: FC = () => {
  const viwedProductsStr = localStorage.getItem('viewedProducts') || '[]'
  const viwedProducts: string[] = JSON.parse(viwedProductsStr)
  const productList = () => {
    if (viwedProducts.length > 0) {
      return viwedProducts.map(p => <div key={p} />)
    }
  }

  return (
    <section className={styles.viewedproducts}>
      <Heading className={styles.viewedproducts__header}>Вы смотрели</Heading>
      <Scroll>{productList()}</Scroll>
    </section>
  )
}
