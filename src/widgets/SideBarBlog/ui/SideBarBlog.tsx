import { FC, useState } from 'react'

import BlogCategories from '@/entities/BlogCategories'
import BlogTags from '@/entities/BlogTags'
import { blogPageData } from '@/mockData/blogPageData'
import { useResize } from '@/shared/libs/hooks/useResize'

import styles from './SideBarBlog.module.scss'

/**
 * Компонент SideBarBlog - это боковая панель навигации, используется на странице BlogPage
 */

const SideBarBlog: FC = () => {
  const { isScreenLg } = useResize()

  const [items, setItems] = useState(blogPageData)

  const filterCategories = (curcat?: string) => {
    const newItems = items.filter(newVal => {
      return newVal.category === curcat
    })
    setItems(newItems)
  }

  const filterTags = (curcat: string) => {
    const newItems = items.filter(newVal => {
      return newVal.tags.includes(curcat)
    })
    setItems(newItems)
  }

  return (
    <nav className={styles.sideBarBlog}>
      <BlogCategories cards={items} filterItems={filterCategories} />
      {isScreenLg && <BlogTags cards={items} filterItems={filterTags} />}
    </nav>
  )
}

export default SideBarBlog
