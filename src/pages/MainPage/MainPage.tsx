import ArticleBlock from '@/components/ArticleBlock/ArticleBlock'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { TEXT_CUSTOMERS_ABOUT_US, LINK_REVIEWS_ALL } from '@/shared/constants/constants'
import Advantages from '@/widgets/Advantages/ui/Advantages/Advantages'
import BlogBlock from '@/widgets/BlogBlock/ui/BlogBlock'
import BrandsBlock from '@/widgets/BrandBlock/ui/BrandBlock/BrandBlock'
import CategoryGrid from '@/widgets/CategoryGrid/CategoryGrid'
import NewsBlock from '@/widgets/NewsBlock/ui/NewsBlock'
import ReviewsBlock from '@/widgets/ReviewsBlock/ui/ReviewsBlock/ReviewsBlock'
import SliderBlock from '@/widgets/SliderBlock/ui/SliderBlock/SliderBlock'
import StoriesBlock from '@/widgets/StoriesBlock/ui/StoriesBlock'
import Subscribe from '@/widgets/Subscribe/Subscribe'

const MainPage = () => {
  return (
    <>
      <SliderBlock />

      <WrapperForMainContent>
        <StoriesBlock />
        <BlogBlock />
        <NewsBlock />
        <CategoryGrid />
        <ReviewsBlock title={TEXT_CUSTOMERS_ABOUT_US} linkText={LINK_REVIEWS_ALL} />
        <Subscribe />
        <BrandsBlock />
        <Advantages />
        <ArticleBlock />
      </WrapperForMainContent>
    </>
  )
}

export default MainPage
