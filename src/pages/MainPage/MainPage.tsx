import { FC } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TEXT_CUSTOMERS_ABOUT_US, LINK_REVIEWS_ALL } from '@/shared/constants/constants'
import Advantages from '@/widgets/Advantages/ui/Advantages/Advantages'
import ArticleBlock from '@/widgets/ArticleBlock'
import BannerBlock from '@/widgets/BannerBlock/ui/BannerBlock'
import BlogBlock from '@/widgets/BlogBlock/ui/BlogBlock'
import BrandsBlock from '@/widgets/BrandBlock/ui/BrandBlock/BrandBlock'
import CategoryGrid from '@/widgets/CategoryGrid'
import HeroBlock from '@/widgets/HeroBlock/ui/HeroBlock/HeroBlock'
import NewsBlock from '@/widgets/NewsBlock/ui/NewsBlock'
import ReviewsBlock from '@/widgets/ReviewsBlock/ui/ReviewsBlock/ReviewsBlock'
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
        <ReviewsBlock
          linkPath={`${Routes.REVIEWS}/${0}`}
          title={TEXT_CUSTOMERS_ABOUT_US}
          linkText={LINK_REVIEWS_ALL}
        />
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
