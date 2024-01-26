import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import SliderBlock from '@/components/SliderBlock/SliderBlock'
import BrandsBlock from '@/widgets/BrandBlock/BrandBlock'
import { blogData } from '@/mockData/blogData'
import {
  TEXT_BLOG,
  LINK_SHOW_ALL,
  TEXT_CUSTOMERS_ABOUT_US,
  LINK_REVIEWS_ALL
} from '@/shared/constants/constants'
import ArticleBlock from '@/components/ArticleBlock/ArticleBlock'
import CategoryGrid from '@/widgets/CategoryGrid/CategoryGrid'
import ReviewsBlock from '@/widgets/ReviewsBlock/ui/ReviewsBlock/ReviewsBlock'
import Advantages from '@/widgets/Advantages/ui/Advantages/Advantages'
import NewsBlock from '@/widgets/NewsBlock/ui/NewsBlock'
import ContainerCards from '@/components/ContainerCards/ContainerCards'
import StoriesBlock from '@/widgets/StoriesBlock/ui/StoriesBlock'

const MainPage = () => {
  return (
    <>
      <SliderBlock />
      <WrapperForMainContent>
        <StoriesBlock />
        <ContainerCards title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogData} />
        <NewsBlock />
        <CategoryGrid />
        <ReviewsBlock title={TEXT_CUSTOMERS_ABOUT_US} linkText={LINK_REVIEWS_ALL} />
        <BrandsBlock />
        <Advantages />
        <ArticleBlock />
      </WrapperForMainContent>
    </>
  )
}

export default MainPage
