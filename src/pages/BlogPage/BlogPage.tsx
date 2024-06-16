import { FC } from 'react'

import { blogPageData } from '@/mockData/blogPageData'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TEXT_BLOG, LINK_SHOW_ALL } from '@/shared/constants/constants'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import BlogMain from '@/widgets/BlogMain'

import styles from './blog.module.scss'

const links = [
  { heading: 'Главная', href: Routes.HOME },
  { heading: 'Блог', href: '' }
]

/**
 * Страница - Блог
 */

const BlogPage: FC = () => {
  return (
    <WrapperForMainContent>
      <article className={styles.titleBox}>
        <Heading type={HeadingType.MAIN}>{TEXT_BLOG}</Heading>
        <Breadcrumbs links={links} />
      </article>

      <div className={styles.blogPage}>
        {/* <SideBarBlog /> */}
        {/* <BlogMain /> */}
      </div>

      <BlogMain title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogPageData} />
    </WrapperForMainContent>
  )
}

export default BlogPage
