import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { PageDescription } from '@/components/PageDescription/PageDescription'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { VIEWED_PRODUCTS_LIMIT } from '@/shared/constants/constants'
import Advantages from '@/widgets/Advantages/ui/Advantages/Advantages'
import { Product } from '@/widgets/Product/Product'
import { ProductInfo } from '@/widgets/ProductInfo/ProductInfo'
import { ViewedProducts } from '@/widgets/ViewedProducts/ViewedProducts'

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
    const viewedProductsStr = localStorage.getItem('viewedProducts') || '[]'
    const viewedProducts = JSON.parse(viewedProductsStr)

    if (slug && !viewedProducts.includes(slug)) {
      if (viewedProducts.length === VIEWED_PRODUCTS_LIMIT) {
        viewedProducts.shift()
      }
      viewedProducts.push(slug)

      localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts))
    }
  }, [slug])

  return (
    <>
      <WrapperForMainContent>
        <PageDescription />
        <Product product={productStore.product} />
        <ProductInfo description={productStore.product.description} />
        <Advantages />
        <ViewedProducts />
      </WrapperForMainContent>
    </>
  )
}
