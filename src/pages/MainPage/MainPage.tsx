import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { getCart } from '@/entities/CartEntity/model/slice/cartSlice'
import { TEXT_CUSTOMERS_ABOUT_US, LINK_REVIEWS_ALL } from '@/shared/constants/constants'
import Advantages from '@/widgets/Advantages/ui/Advantages/Advantages'
import ArticleBlock from '@/widgets/ArticleBlock/ArticleBlock'
import BannerBlock from '@/widgets/BannerBlock/ui/BannerBlock'
import BlogBlock from '@/widgets/BlogBlock/ui/BlogBlock'
import BrandsBlock from '@/widgets/BrandBlock/ui/BrandBlock/BrandBlock'
import CategoryGrid from '@/widgets/CategoryGrid/CategoryGrid'
import HeroBlock from '@/widgets/HeroBlock/ui/HeroBlock/HeroBlock'
import NewsBlock from '@/widgets/NewsBlock/ui/NewsBlock'
import ReviewsBlock from '@/widgets/ReviewsBlock/ui/ReviewsBlock/ReviewsBlock'
import StoriesBlock from '@/widgets/StoriesBlock/ui/StoriesBlock'
import Subscribe from '@/widgets/Subscribe/Subscribe'
import { ViewedProducts } from '@/widgets/ViewedProducts/ViewedProducts'

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getCart())
  }, [])

  return (
    <>
      <HeroBlock />
      <WrapperForMainContent>
        <StoriesBlock />
        <BannerBlock />
        <ViewedProducts title={'Наши предложения'} hasLabel={true} />
        <BlogBlock />
        <NewsBlock />
        <CategoryGrid />
        <ReviewsBlock title={TEXT_CUSTOMERS_ABOUT_US} linkText={LINK_REVIEWS_ALL} />
        <Subscribe />
        <BrandsBlock />
        <Advantages />
        <ViewedProducts title={'Вы смотрели'} hasLabel={false} />
        <ArticleBlock />
      </WrapperForMainContent>
    </>
  )
}

export default MainPage
