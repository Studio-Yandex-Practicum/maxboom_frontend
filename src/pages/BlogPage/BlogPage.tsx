import React from 'react'
/*import styles from './blog.module.scss'*/
import Header from '../../components/header/header'
import Footer from '../../components/Footer/Footer'
import BlogMain from '../../components/BlogMain/BlogMain'
import { blogPageData } from '../../mockData/blogPageData'
import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'

import { TEXT_BLOG, LINK_SHOW_ALL } from '../../constants/constants'

const BlogPage = () => {
  return (
    <>
      <Header />
      <WrapperForMainContent>
        <BlogMain title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogPageData} />
      </WrapperForMainContent>
      <Footer />
    </>
  )
}

export default BlogPage
