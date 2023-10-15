import React, { useState } from 'react'
import styles from './ProductsPage.module.scss'
import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/header'
import { CategoryList } from '../../components/CategoryList/CategoryList'
import { PageDescription } from '../../components/PageDescription/PageDescription'
import { PageControls } from '../../components/PageControls/PageControls'
import { Pagination } from '../../components/Pagination/Pagination'

export const ProductsPage = () => {
  const sortOptions = ['Название А-Я', 'Название Я-А', 'Сначала дешевые', 'Сначала дорогие', 'Модель А-Я', 'Модель Я-А']
  const itemPerPageOptions = [15, 25, 50, 75, 100]
  const [cardView, setCardView] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  const handleSortChange = (selectedOption: string) => {
    // Handle sort change logic here
    console.log('Selected sort option:', selectedOption)
  }

  const handleItemsPerPageChange = (selectedOption: string) => {
    // Handle items per page change logic here
    console.log('Selected items per page:', selectedOption)
  }

  const handleCardViewChange = (view: string) => {
    // Handle card view change logic here
    setCardView(view)
  }

  const handlePageChange = (pageNumber: number) => {
    // Handle page change logic here
    setCurrentPage(pageNumber)
  }

  // Calculate total number of pages based on total number of items and items per page
  // const totalPages = Math.ceil(totalItems / itemsPerPage)
  const totalPages = 10

  const handleShowMore = () => {
    // ...
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <WrapperForMainContent>
          <div className={styles.content}>
            <PageDescription />
            <div className={styles.contentGrid}>
              <CategoryList />
              <div className={styles.contentMain}>
                <PageControls
                  cardView={cardView}
                  handleCardViewChange={handleCardViewChange}
                  handleItemsPerPageChange={handleItemsPerPageChange}
                  handleSortChange={handleSortChange}
                  itemPerPageOptions={itemPerPageOptions}
                  sortOptions={sortOptions}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                  handleShowMore={handleShowMore}
                />
              </div>
            </div>
          </div>
        </WrapperForMainContent>
      </main>
      <Footer />
    </>
  )
}
