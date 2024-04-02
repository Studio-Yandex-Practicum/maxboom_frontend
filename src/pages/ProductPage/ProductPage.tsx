import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { PageDescription } from '@/components/PageDescription/PageDescription'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Advantages from '@/widgets/Advantages/ui/Advantages/Advantages'
import { Product } from '@/widgets/Product/Product'
import { ProductInfo } from '@/widgets/ProductInfo/ProductInfo'
import { ViewedProducts } from '@/widgets/ViewedProducts/ViewedProducts'

import { addToViewedProducts } from './model/functions/functions'
import { getProduct } from './model/slice/productSlice'

/**
 * Страница с выбранным товаром.
 * @ /slug  - идентификатор товара в backend передаваемый в url
 */
export const ProductPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const productStore = useSelector((store: StateSchema) => store.product)
  const { slug } = useParams()

  useEffect(() => {
    if (slug) dispatch(getProduct(slug))
  }, [slug])

  useEffect(() => {
    addToViewedProducts(productStore.product)
  }, [productStore.product])

  return (
    <>
      <WrapperForMainContent>
        <PageDescription count={-1} heading={productStore.product.name} />
        <Product product={productStore.product} />
        <ProductInfo description={productStore.product.description} />
        <Advantages />
        <ViewedProducts title={'Вы смотрели'} hasLabel={false} />
      </WrapperForMainContent>
    </>
  )
}
