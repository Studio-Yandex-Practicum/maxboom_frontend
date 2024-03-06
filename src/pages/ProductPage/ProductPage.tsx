import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { PageDescription } from '@/components/PageDescription/PageDescription'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Advantages from '@/widgets/Advantages/ui/Advantages/Advantages'
import { Product } from '@/widgets/Product/Product'
import { ProductInfo } from '@/widgets/ProductInfo/ProductInfo'

import { getProduct } from './model/slice/productSlice'

/**
 * Страница с выбранным товаром.
 * @ /slug  - идентификатор товара в backend передаваемый в url
 */
export const ProductPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const productStore = useSelector((store: StateSchema) => store.product)
  //TO DO получать slug из URL или пропса. Временно прописал явно
  //const { slug } = useParams()
  const slug =
    '3w-clinic--uvlazhnyayuschij-krem-50-g--flower-effect-extra-moisture-cream-korejskaya-kosmetika-419275861'

  useEffect(() => {
    if (slug) dispatch(getProduct(slug))
  }, [])

  return (
    <>
      <WrapperForMainContent>
        <PageDescription />
        <Product product={productStore.product} />
        <ProductInfo description={productStore.product.description} />
        <Advantages />
      </WrapperForMainContent>
    </>
  )
}
