import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Advantages from '@/widgets/Advantages'
import { Product } from '@/widgets/Product/Product'
import { ProductInfo } from '@/widgets/ProductInfo/ProductInfo'
import { ViewedProducts } from '@/widgets/ViewedProducts/ViewedProducts'

import { addToViewedProducts } from './model/functions/functions'
import { getProduct } from './model/slice/productSlice'
import styles from './ProductPage.module.scss'

/**
 * Страница с выбранным товаром.
 * @ /slug  - идентификатор товара в backend передаваемый в url
 */
export const ProductPage = () => {
  const dispatch = useAppDispatch()
  const productStore = useSelector((store: StateSchema) => store.product)
  const { slug } = useParams()

  const links = [
    { heading: 'Главная', href: '/' },
    { heading: productStore.product.name, href: '' }
  ]

  useEffect(() => {
    if (slug) dispatch(getProduct(slug))
  }, [slug])

  useEffect(() => {
    addToViewedProducts(productStore.product)
  }, [productStore.product])

  return (
    <>
      <WrapperForMainContent>
        <div className={styles.pageDescriptor}>
          <Heading>{productStore.product.name}</Heading>
          <Breadcrumbs links={links} />
        </div>
        <Product product={productStore.product} />
        <ProductInfo description={productStore.product.description} />
        <Advantages />
        <ViewedProducts title={'Вы смотрели'} hasLabel={false} />
      </WrapperForMainContent>
    </>
  )
}
