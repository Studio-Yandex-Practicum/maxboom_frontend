import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { PageDescription } from '@/components/PageDescription/PageDescription'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { ProductInfo } from '@/widgets/ProductInfo/ProductInfo'

import { getProduct } from './model/slice/productSlice'

/**
 * Страница с выбранным товаром.
 */
export const ProductPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const product = useSelector((store: StateSchema) => store.product)
  //TO DO получать slug из URL или пропса. Временно прописал явно
  //const { slug } = useParams()
  const slug = '3m-krug-p5000-trizact-hookit-matiruyuschij-150mm-30362-119465471'

  useEffect(() => {
    if (slug) dispatch(getProduct(slug))
  }, [])

  return (
    <>
      <WrapperForMainContent>
        <PageDescription />
        <ProductInfo description={product.product.description} />
      </WrapperForMainContent>
    </>
  )
}
