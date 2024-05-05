import qs from 'qs'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'

import { selectFilterProducts, selectFilterQuantity } from '@/components/Dropdown/selectors/selectors'
import { setFilterProducts, setProductQuantityFilter } from '@/components/Dropdown/slice/filtersSlice'
import { PageControls } from '@/components/PageControls/PageControls'
import { PageControlsSkeletons } from '@/components/PageControls/PageControlsSkeletons/PageControlsSkeletons'
import { PageDescription } from '@/components/PageDescription/PageDescription'
import { PageDescriptionSkeleton } from '@/components/PageDescription/PageDescriptionSkeleton/PageDescriptionSkeleton'
import { Pagination } from '@/components/Pagination/Pagination'
import { selectNumberOfPage } from '@/components/Pagination/selectors/selectors'
import { setNumberOfPage } from '@/components/Pagination/slice/paginationSlice'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { selectCategoryId, selectCategorySlug } from '@/entities/Category/selectors/categorySelectors'
import { setCategoryId } from '@/entities/Category/slice/categoryIdSlice'
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
  let numberOfPage = useSelector(selectNumberOfPage)
  let categId = useSelector(selectCategoryId)
  const location = useLocation()
  const page = Number(location.search.replace(`?categId=${categId}`, '').replace(`&page=`, ''))

  const [cardView, setCardView] = useState<ECardView>(ECardView.GRID)
  const [currentPage, setCurrentPage] = useState(numberOfPage)

  const dispatch = useAppDispatch()

  const categoriesProducts = useSelector(getProductsOfCategorySelector)

  const categorySlug = useSelector(selectCategorySlug)

  // let categId = useSelector(selectCategoryId)

  //For GET products in dispatch
  // const location = useLocation()
  const id = Number(location.search.replace('?categId=', '').replace(`&page=${page}`, ''))
  const categoryId = categId ? `?category=${categId}` : `?category=${id}`

  //For filter products on page (to GET in dispatch)
  const selectProductsFilter = useSelector(selectFilterProducts)
  const filterProducts = selectProductsFilter ? `&ordering=${selectProductsFilter.value}` : ''
  const selectQuantityFilter = useSelector(selectFilterQuantity)
  const filterQuantity = selectQuantityFilter ? `&limit=${selectQuantityFilter.value}` : ''

  //Skeletons
  const isLoading = useSelector(getLoading)

  //Pagination
  const totalPages = Math.ceil(categoriesProducts.count / Number(selectQuantityFilter.value))
  // const page = Number(location.search.replace(`?categId=${categId}`, '').replace(`&page=`, ''))
  const productsQuantityPerPage =
    numberOfPage > 1
      ? `&offset=${(numberOfPage - 1) * Number(selectQuantityFilter.value)}`
      : `&offset=${(page - 1) * Number(selectQuantityFilter.value)}`

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
    setCardView(view)
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    dispatch(setNumberOfPage(pageNumber))
  }

  const handleShowMore = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    dispatch(setNumberOfPage(currentPage + 1))
  }

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProducts({ categoryId, filterProducts, filterQuantity, productsQuantityPerPage }))
  }, [filterProducts, filterQuantity])

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      dispatch(setCategoryId(params.categId))
      dispatch(setNumberOfPage(params.page))

      categId = Number(params.categId)
      numberOfPage = Number(params.page)
    }
  }, [])

  useEffect(() => {
    let page
    // let category
    if (numberOfPage > 1) {
      page = numberOfPage
    } else {
      page = undefined
    }
    const queryString = qs.stringify({
      categId,
      page
    })
    navigate(`${location.pathname}?${queryString}`)
    dispatch(getProducts({ categoryId, filterProducts, filterQuantity, productsQuantityPerPage }))
  }, [categorySlug, categId, numberOfPage])

  useEffect(() => {
    dispatch(setNumberOfPage(1))
    setCurrentPage(1)
  }, [categorySlug, filterProducts, filterQuantity])

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
                    changeValueToFilterProducts={selectProductsFilter.name}
                    changeValueToQuantityProducts={selectQuantityFilter.name}
                  />
                  <ProductsList items={categoriesProducts} cardView={cardView} />
                </>
              ) : (
                'В данной категории нет товаров'
              )}
            </section>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
              handleShowMore={handleShowMore}
            />
          </div>
        </div>
      </WrapperForMainContent>
    </>
  )
}
