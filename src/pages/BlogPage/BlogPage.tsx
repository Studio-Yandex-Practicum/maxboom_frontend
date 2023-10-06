import React from 'react'
import styles from './blog.module.scss'
import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'
import Header from '../../components/header/header'
import Footer from '../../components/Footer/Footer'
import ContainerCards from '../../components/ContainerCards/ContainerCards'
import { blogData } from '../../mockData/blogData'

import { TEXT_BLOG, LINK_SHOW_ALL } from '../../constants/constants'

const BlogPage = () => {
  return (
    <>
      <Header />
      <main className={styles.blog}>
        <WrapperForMainContent>
          <ContainerCards title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogData} />
        </WrapperForMainContent>
      </main>
      <Footer />
    </>
  )
}

export default BlogPage
