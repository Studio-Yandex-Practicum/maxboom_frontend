import React from 'react'
import styles from './main.module.scss'
import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'

import Footer from '../../components/Footer/Footer'
import ContainerCards from '../../components/ContainerCards/ContainerCards'
import SliderBlock from '../../components/SliderBlock/SliderBlock'
import BrandsBlock from '../../components/BrandBlock/BrandBlock'
import { storiesData } from '../../mockData/storiesData'
import { blogData } from '../../mockData/blogData'
import { newsData } from '../../mockData/newsData'
import { reviewsData } from '../../mockData/reviews.Data'
import { brandsData } from '../../mockData/brandData'

import {
  TEXT_STORIES,
  TEXT_BLOG,
  TEXT_NEWS,
  LINK_SHOW_ALL,
  LINK_NEWS_ALL,
  TEXT_CUSTOMERS_ABOUT_US,
  LINK_REVIEWS_ALL
} from '../../constants/constants'
import ContainerReviews from '../../components/ReviewsBlock/ReviewsBlock'
import ArticleBlock from '../../components/ArticleBlock/ArticleBlock'
import Advantages from '../../components/Advantages/Advantages'
import Header from '../../components/header/header'

const MainPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SliderBlock />
        <WrapperForMainContent>
          <ContainerCards title={TEXT_STORIES} cards={storiesData} />
          <ContainerCards title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogData} />
          <ContainerCards title={TEXT_NEWS} linkText={LINK_NEWS_ALL} cards={newsData} />
          <ContainerReviews title={TEXT_CUSTOMERS_ABOUT_US} linkText={LINK_REVIEWS_ALL} reviews={reviewsData} />
          <BrandsBlock title={'Наши бренды'} linkText={'Все бренды'} cards={brandsData} />
          <Advantages />
          <ArticleBlock />
        </WrapperForMainContent>
      </main>
      <Footer />
    </>
  )
}

export default MainPage
