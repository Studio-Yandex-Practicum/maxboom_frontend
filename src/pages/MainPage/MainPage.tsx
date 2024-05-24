import { FC } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Advantages from '@/widgets/Advantages'
import ArticleBlock from '@/widgets/ArticleBlock'
import BannerBlock from '@/widgets/BannerBlock/ui/BannerBlock'
import BlogBlock from '@/widgets/BlogBlock/ui/BlogBlock'
import BrandsBlock from '@/widgets/BrandBlock/ui/BrandBlock/BrandBlock'
import CategoryGrid from '@/widgets/CategoryGrid'
import HeroBlock from '@/widgets/HeroBlock'
import NewsBlock from '@/widgets/NewsBlock'
import ReviewsBlock from '@/widgets/ReviewsBlock'
import StoriesBlock from '@/widgets/StoriesBlock/ui/StoriesBlock'
import Subscribe from '@/widgets/Subscribe'
import { ViewedProducts } from '@/widgets/ViewedProducts/ViewedProducts'

const MainPage: FC = () => {
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
        <ReviewsBlock />
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
