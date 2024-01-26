import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import styles from './SearchResultsPage.module.scss'
import { search } from '@/features/SearchProduct/slice/searchProductSlice'
import { selectSearchResult } from '@/features/SearchProduct/selectors/searchProductSelectors'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/SroreProvider/config/store'
import { ThunkExtraArg } from '@/app/providers/SroreProvider/config/StateSchema'

/**
 * Страница с результатами поискового запроса
 * @TODO Сверстать страницу SearchResults, разбить на компоненты
 * https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/201
 */
const SearchResultsPage = () => {
  const { query } = useParams()
  const searchResult = useSelector(selectSearchResult)
  const dispatch = useDispatch<ThunkDispatch<RootState, ThunkExtraArg, AnyAction>>()

  useEffect(() => {
    if (query && query.length > 0) {
      dispatch(search(query))
    }
  }, [query, dispatch])

  return (
    <WrapperForMainContent>
      <Heading className={styles.heading}>Результаты поиска</Heading>
      <Subheading>В разработке</Subheading>
      <ul>
        {searchResult &&
          searchResult.categories.map(category => {
            return <li key={category.slug}>{category.name}</li>
          })}
        {searchResult &&
          searchResult.products.map(product => {
            return <li key={product.slug}>{product.name}</li>
          })}
      </ul>
    </WrapperForMainContent>
  )
}

export default SearchResultsPage
