import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { PageControls } from '@/components/PageControls/PageControls'
import { PageDescription } from '@/components/PageDescription/PageDescription'
import { Pagination } from '@/components/Pagination/Pagination'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { selectCategoryId } from '@/entities/Category/selectors/categorySelectors'
import { selectCategorySlug } from '@/entities/Category/selectors/categorySelectors'
import { ITEMS_PER_PAGE_OPTION, SORT_OPTION, TOTAL_PAGES } from '@/mockData/productsPageOptions'
import { IObjectWithImage } from '@/pages/ProductPage/model/types/productTypes'
import { getProductsOfCategorySelector } from '@/pages/ProductsPage/selectors/selectors'
import { getProducts } from '@/pages/ProductsPage/services/getProducts'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { ECardView } from '@/shared/model/types/common'
import { CategoryList } from '@/widgets/CategoryList/CategoryList'
import { ProductItem } from '@/widgets/ProductItem/ProductItem'

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

  const dispatch = useAppDispatch()
  const categoriesProducts = useSelector(getProductsOfCategorySelector)
  const categoryId = useSelector(selectCategoryId)
  const categorySlug = useSelector(selectCategorySlug)

  useEffect(() => {
    dispatch(getProducts(categoryId))
  }, [categoryId, categorySlug])

  return (
    <>
      <WrapperForMainContent>
        <PageDescription count={categoriesProducts.count} heading={categoriesProducts.category_name} />
        <div className={styles['content-grid']}>
          <CategoryList />
          <div className={styles['content-main']}>
            <section className={styles['content-products']}>
              {categoriesProducts.results.length > 0 ? (
                <>
                  <PageControls
                    cardView={cardView}
                    handleCardViewChange={handleCardViewChange}
                    handleItemsPerPageChange={handleItemsPerPageChange}
                    handleSortChange={handleSortChange}
                    itemPerPageOptions={ITEMS_PER_PAGE_OPTION}
                    sortOptions={SORT_OPTION}
                  />
                  {categoriesProducts.results.map(item => (
                    <ProductItem
                      key={item.id}
                      layout={cardView}
                      name={item.name}
                      price={item.price}
                      brand={item.brand}
                      slug={item.slug}
                      description={item.description}
                      code={item.code}
                      images={item.images.map((img: IObjectWithImage, index: number) => {
                        return {
                          image: img.image,
                          index
                        }
                      })}
                      label_hit={item.label_hit}
                      label_popular={item.label_popular}
                      quantity={item.quantity}
                    />
                  ))}
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
