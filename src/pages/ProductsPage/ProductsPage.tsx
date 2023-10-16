import React, { useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/Footer/Footer'
import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'
import { CategoryList } from '../../components/CategoryList/CategoryList'
import { PageDescription } from '../../components/PageDescription/PageDescription'
import { PageControls } from '../../components/PageControls/PageControls'
import { Pagination } from '../../components/Pagination/Pagination'
import { ITEMS_PER_PAGE_OPTION, SORT_OPTION } from '../../mockData/productsPageOptions'
import styles from './ProductsPage.module.scss'

export enum ECardView {
  GRID = 'grid',
  LIST = 'list',
  COMPACT = 'compact'
}

/**
 * Страница со списокм товаров.
 * Товары можно фильтровать по категориям.
 * Товары можно сортировать, определять кол-во товаров на странице.
 * Можно изменить вид отображения сетки товаров.
 * Реализована пагинация.
 */
export const ProductsPage = () => {
  const [cardView, setCardView] = useState<ECardView>(ECardView.GRID)
  const [currentPage, setCurrentPage] = useState(1)

  const handleSortChange = (selectedOption: string) => {
    // Handle sort change logic here
    console.log('Selected sort option:', selectedOption)
  }

  const handleItemsPerPageChange = (selectedOption: string) => {
    // Handle items per page change logic here
    console.log('Selected items per page:', selectedOption)
  }

  const handleCardViewChange = (view: ECardView) => {
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
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <WrapperForMainContent>
          <div className={styles.content}>
            <PageDescription />
            <div className={styles['content-grid']}>
              <CategoryList />
              <div className={styles['content-main']}>
                <PageControls
                  cardView={cardView}
                  handleCardViewChange={handleCardViewChange}
                  handleItemsPerPageChange={handleItemsPerPageChange}
                  handleSortChange={handleSortChange}
                  itemPerPageOptions={ITEMS_PER_PAGE_OPTION}
                  sortOptions={SORT_OPTION}
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
