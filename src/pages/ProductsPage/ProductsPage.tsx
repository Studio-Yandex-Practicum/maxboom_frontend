import React, { useState } from 'react'
import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'
import { CategoryList } from '../../components/CategoryList/CategoryList'
import { PageDescription } from '../../components/PageDescription/PageDescription'
import { PageControls } from '../../components/PageControls/PageControls'
import { Pagination } from '../../components/Pagination/Pagination'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { ITEMS_PER_PAGE_OPTION, SORT_OPTION, TOTAL_PAGES } from '../../mockData/productsPageOptions'
import { ECardView } from '../../utils/types'
import styles from './ProductsPage.module.scss'

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

  const handleSortChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    // Handle sort change logic here
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const selectedOption = event.target.value
  }

  const handleItemsPerPageChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    // Handle items per page change logic here
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const selectedOption = event.target.value
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

  const handleShowMore = () => {
    // ...
    if (currentPage < TOTAL_PAGES) setCurrentPage(currentPage + 1)
  }

  return (
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
              <section className={styles['content-products']}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map(x => (
                  <ProductCard key={x} layout={cardView} />
                ))}
              </section>
              <Pagination
                currentPage={currentPage}
                totalPages={TOTAL_PAGES}
                handlePageChange={handlePageChange}
                handleShowMore={handleShowMore}
              />
            </div>
          </div>
        </div>
      </WrapperForMainContent>
    </main>
  )
}
