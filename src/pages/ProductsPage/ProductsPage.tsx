import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import { selectFilterProducts, selectFilterQuantity } from '@/components/Dropdown/selectors/selectors'
import { setFilterProducts, setProductQuantityFilter } from '@/components/Dropdown/slice/filtersSlice'
import { PageControls } from '@/components/PageControls/PageControls'
import { PageControlsSkeletons } from '@/components/PageControls/PageControlsSkeletons/PageControlsSkeletons'
import { PageDescription } from '@/components/PageDescription/PageDescription'
import { PageDescriptionSkeleton } from '@/components/PageDescription/PageDescriptionSkeleton/PageDescriptionSkeleton'
import { Pagination } from '@/components/Pagination/Pagination'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { selectCategorySlug } from '@/entities/Category/selectors/categorySelectors'
import { TOTAL_PAGES } from '@/mockData/productsPageOptions'
import { getLoading, getProductsOfCategorySelector } from '@/pages/ProductsPage/selectors/selectors'
import { getProducts } from '@/pages/ProductsPage/services/getProducts'
import { ITEMS_PER_PAGE_OPTION, NUMBER_OF_PRODUCTS, SORT_OPTION } from '@/shared/constants/constants'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { ECardView } from '@/shared/model/types/common'
import { CategoryList } from '@/widgets/CategoryList/CategoryList'
import { ProductSkeleton } from '@/widgets/ProductItem/ProductSkeleton/ProductSkeleton'
import { ProductsList } from '@/widgets/ProductsList/ProductsList'

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

  const dispatch = useAppDispatch()

  const categoriesProducts = useSelector(getProductsOfCategorySelector)
  const categorySlug = useSelector(selectCategorySlug)

  const location = useLocation()

  const categoryId = Number(location.search.replace('?id=', ''))

  const selectProductsFilter = useSelector(selectFilterProducts)
  const filterProducts = selectProductsFilter ? `&ordering=${selectProductsFilter.value}` : ''

  const selectQuantityFilter = useSelector(selectFilterQuantity)
  const filterQuantity = selectQuantityFilter ? `&limit=${selectQuantityFilter.value}` : ''

  const isLoading = useSelector(getLoading)

  const handleSortChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    const selectedOption = event.target.value
    const setCategoryFilters = SORT_OPTION.find(item => item.name === selectedOption)
    dispatch(setFilterProducts(setCategoryFilters))
  }

  const handleItemsPerPageChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    const selectedOption = event.target.value
    const setQuantityFilters = ITEMS_PER_PAGE_OPTION.find(item => item.name === selectedOption)
    dispatch(setProductQuantityFilter(setQuantityFilters))
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

  useEffect(() => {
    dispatch(getProducts({ categoryId, filterProducts, filterQuantity }))
  }, [categoryId, categorySlug, filterProducts, filterQuantity])

  return (
    <>
      <WrapperForMainContent>
        {isLoading ? (
          <PageDescriptionSkeleton />
        ) : (
          <PageDescription count={categoriesProducts.count} heading={categoriesProducts.category_name} />
        )}
        <div className={styles['content-grid']}>
          <CategoryList />
          <div className={styles['content-main']}>
            <section className={styles['content-products']}>
              {isLoading ? (
                <>
                  <PageControlsSkeletons />
                  {Array(NUMBER_OF_PRODUCTS)
                    .fill(0)
                    .map((_, i) => (
                      <ProductSkeleton key={i} />
                    ))}
                </>
              ) : categoriesProducts.results.length > 0 ? (
                <>
                  <PageControls
                    cardView={cardView}
                    handleCardViewChange={handleCardViewChange}
                    handleItemsPerPageChange={handleItemsPerPageChange}
                    handleSortChange={handleSortChange}
                    itemPerPageOptions={ITEMS_PER_PAGE_OPTION}
                    sortOptions={SORT_OPTION}
                  />
                  <ProductsList items={categoriesProducts} cardView={cardView} />
                </>
              ) : (
                'В данной категории нет товаров'
              )}
            </section>
            <Pagination
              currentPage={currentPage}
              totalPages={TOTAL_PAGES}
              handlePageChange={handlePageChange}
              handleShowMore={handleShowMore}
            />
          </div>
        </div>
      </WrapperForMainContent>
    </>
  )
}
