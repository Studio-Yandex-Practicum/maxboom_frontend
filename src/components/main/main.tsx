import React from 'react'
import styles from './main.module.scss'
import ContainerCards from '../container-cards/container-cards'
import { storiesData } from '../../mockData/storiesData'
import { blogData } from '../../mockData/blogData'
import { newsData } from '../../mockData/newsData'
import { TEXT_STORIES, TEXT_BLOG, TEXT_NEWS, LINK_SHOW_ALL, LINK_NEWS_ALL } from '../../utils/constants'

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <ContainerCards title={TEXT_STORIES} cards={storiesData} />
      <ContainerCards title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogData} />
      <ContainerCards title={TEXT_NEWS} linkText={LINK_NEWS_ALL} cards={newsData} />
    </main>
  )
}

export default Main
