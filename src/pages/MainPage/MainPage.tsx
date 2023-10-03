import React from 'react'
import styles from './main.module.scss'
import ContainerCards from '../../components/ContainerCards/ContainerCards'
import BrandsBlock from '../../components/BrandBlock/BrandBlock'
import { storiesData } from '../../mockData/storiesData'
import { blogData } from '../../mockData/blogData'
import { newsData } from '../../mockData/newsData'
import { brandsData } from '../../mockData/brandData'
import { TEXT_STORIES, TEXT_BLOG, TEXT_NEWS, LINK_SHOW_ALL, LINK_NEWS_ALL } from '../../constants/constants'
import Advantages from '../../components/Advantages/Advantages'

const MainPage = () => {
  return (
    <main className={styles.wrapper}>
      <ContainerCards title={TEXT_STORIES} cards={storiesData} />
      <ContainerCards title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogData} />
      <ContainerCards title={TEXT_NEWS} linkText={LINK_NEWS_ALL} cards={newsData} />
      <Advantages />
      <BrandsBlock title={'Наши бренды'} linkText={'Все бренды'} cards={brandsData} />
    </main>
  )
}

export default MainPage
