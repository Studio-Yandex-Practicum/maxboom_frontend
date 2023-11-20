import React, { FC, useState } from 'react'
import styles from './blog-main.module.scss'
import BlogItemForContainer from '../BlogItemForContainer/BlogItemForContainer'
import type { PropsBlog } from '../../models/PropsBlog'

import BlogTags from '../BlogTags/BlogTags'
import BlogCategories from '../BlogCategories/BlogCategories'
import WrapperForMainContent from '../WrapperForMainContent/WrapperForMainContent'
import BlogMainItem from '../BlogMainItem/BlogMainItem'
import { Pagination } from '../Pagination/Pagination'

const BlogMain: FC<PropsBlog> = props => {
  const { cards } = props
  const [items, setItems] = useState(cards)
  const [itemNumber, setItemNumber] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const TOTAL_PAGES: number = Math.ceil(items.length / itemNumber)
  const filterCategories = (curcat?: string) => {
    const newItems = cards.filter(newVal => {
      return newVal.category === curcat
      // comparing category for displaying data
    })
    setItems(newItems)
  }

  const filterTags = (curcat: string) => {
    const newItems = cards.filter(newVal => {
      return newVal.tags.includes(curcat)
      // comparing category for displaying data
    })
    setItems(newItems)
  }

  const handlePageChange = (pageNumber: number) => {
    // Handle page change logic here
    setCurrentPage(pageNumber)
  }
  console.log(currentPage)
  const handleShowMore = () => {
    // ...
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage(currentPage + 1)
      setItemNumber(9)
    }
  }

  return (
    <WrapperForMainContent>
      <div className={styles.blog}>
        <h2 className={styles.blog__title}>Блог</h2>
        <p className={styles.blog__path}>Главная/Блог</p>
      </div>
      <div className={styles.blog__wrapper}>
        <div className={styles.blog__filters}>
          <BlogCategories cards={cards} filterItems={filterCategories} />
          <BlogTags cards={cards} filterItems={filterTags} />
        </div>
        <section className={styles.wrapper}>
          <BlogMainItem />
          <ul>
            {items.slice(currentPage == 1 ? 0 : itemNumber * (currentPage - 1), itemNumber * currentPage).map(item => (
              <BlogItemForContainer key={item.id} card={item} />
            ))}
          </ul>
        </section>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        handlePageChange={handlePageChange}
        handleShowMore={handleShowMore}
      />
    </WrapperForMainContent>
  )
}

export default BlogMain
