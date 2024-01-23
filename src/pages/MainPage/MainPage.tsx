import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import ContainerCards from '@/components/ContainerCards/ContainerCards'
import SliderBlock from '@/components/SliderBlock/SliderBlock'
import BrandsBlock from '@/widgets/BrandBlock/BrandBlock'
import { storiesData } from '@/mockData/storiesData'
import { blogData } from '@/mockData/blogData'
import { newsData } from '@/mockData/newsData'
import { reviewsData } from '@/mockData/reviews.Data'
import {
  TEXT_STORIES,
  TEXT_BLOG,
  TEXT_NEWS,
  LINK_SHOW_ALL,
  LINK_NEWS_ALL,
  TEXT_CUSTOMERS_ABOUT_US,
  LINK_REVIEWS_ALL
} from '@/shared/constants/constants'
import ArticleBlock from '@/components/ArticleBlock/ArticleBlock'
import CategoryGrid from '@/widgets/CategoryGrid/CategoryGrid'
import ReviewsBlock from '@/widgets/ReviewsBlock/ui/ReviewsBlock/ReviewsBlock'
import Advantages from '@/widgets/Advantages/ui/Advantages/Advantages'


const MainPage = () => {
  return (
    <>
      <SliderBlock />
      <WrapperForMainContent>
        <ContainerCards title={TEXT_STORIES} cards={storiesData} />
        <ContainerCards title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogData} />
        <ContainerCards title={TEXT_NEWS} linkText={LINK_NEWS_ALL} cards={newsData} />
        <CategoryGrid />
        <ReviewsBlock title={TEXT_CUSTOMERS_ABOUT_US} linkText={LINK_REVIEWS_ALL} reviews={reviewsData} />
        <BrandsBlock />
        <Advantages />
        <ArticleBlock />
      </WrapperForMainContent>
    </>
  )
}

export default MainPage
