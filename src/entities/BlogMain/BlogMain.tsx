import { FC, useState } from 'react'
import BlogItemForContainer from '@/entities/BlogItemForContainer/BlogItemForContainer'
import type { PropsBlog } from '@/models/PropsBlog'
import BlogTags from '@/entities/BlogTags/BlogTags'
import BlogCategories from '@/entities/BlogCategories/BlogCategories'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import BlogMainItem from '@/entities/BlogMainItem/BlogMainItem'
import { Pagination } from '@/components/Pagination/Pagination'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import styles from './blog-main.module.scss'
/*import { TBlogItem } from '@/models/BlogItemModel'*/

const BlogMain: FC<PropsBlog> = props => {
  const { cards } = props
  const [items, setItems] = useState(cards)
  const [itemNumber, setItemNumber] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const TOTAL_PAGES: number = Math.ceil(cards.length / itemNumber)
  console.log(setItems)
  const handlePageChange = (pageNumber: number) => {
    // Handle page change logic here
    setCurrentPage(pageNumber)
  }

  const handleShowMore = () => {
    // ...
    if (currentPage < TOTAL_PAGES) setCurrentPage(currentPage + 1)
    setItemNumber(9)
  }

  return (
    <WrapperForMainContent>
      <div className={styles.blog}>
        <Heading className={styles.blog__title}>Блог</Heading>
        <Subheading className={styles.blog__path}>Главная/Блог</Subheading>
      </div>
      <div className={styles.blog__wrapper}>
        <div className={styles.blog__filters}>
          <BlogCategories cards={cards} />
          <BlogTags cards={cards} />
        </div>
        <section className={styles.wrapper}>
          <BlogMainItem />
          <ul>
            {items
              .slice(currentPage == 1 ? 0 : itemNumber * (currentPage - 1), itemNumber * currentPage)
              .map(item => (
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
