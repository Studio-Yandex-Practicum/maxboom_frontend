import { forwardRef } from 'react'

import SearchItem from '@/entities/SearchItem/SearchItem'
import { Routes } from '@/shared/config/routerConfig/routes'
import { SEARCH_CATEGORY, SEARCH_PRODUCT } from '@/shared/constants/constants'
import { TCategory } from '@/shared/model/types/CategoryModel'
import type { TProduct } from '@/shared/model/types/common'
import Link from '@/shared/ui/Link/Link'

import SearchIcon from './icons/search-icon.svg'
import styles from './SearchResult.module.scss'

type TProps = {
  results: Array<TCategory | TProduct>
}

/**
 * Компонент тултипа-подсказки при вводе поискового запроса
 * @param {Array<TCategory | TProduct>} props.results - подсказка, получаемая с бэка, при вводе текста в поисковую строку;
 * @param {React.MutableRefObject<null>} ref - реф из компонента SearchProduct;
 */
const SearchResult = forwardRef<HTMLDivElement, TProps>(({ results }, ref) => {
  return (
    <div className={styles.result} ref={ref}>
      <ul className={styles.menu}>
        {results.map((item, index) => {
          if (item.type === SEARCH_CATEGORY) {
            return (
              <li key={index} className={styles.item}>
                <Link to={`${Routes}${item.slug}`} className={styles.link}>
                  <SearchIcon className={styles.icon} />
                  <p className={styles.text}>{item.name}</p>
                  <span className={styles.span}>Категория</span>
                </Link>
              </li>
            )
          }

          if (item.type === SEARCH_PRODUCT) {
            return (
              <li key={index} className={styles.item}>
                <SearchItem to="" {...(item as TProduct)} />
              </li>
            )
          }

          return null
        })}

        <li>
          <Link to="" className={styles['link-blue']}>
            Показать все товары
          </Link>
        </li>
      </ul>
    </div>
  )
})

SearchResult.displayName = 'SearchResult'

export default SearchResult
