import { FC } from 'react'
import SearchItem from '../SearchItem/SearchItem'
import { SEARCH_CATEGORY, SEARCH_PRODUCT } from '@/shared/constants/constants'
import type { TProduct } from '@/shared/model/types/common'
import { TCategory } from '@/models/CategoryModel'
import SearchIcon from '@/assets/images/search/search-icon.svg'
import Link from '@/shared/ui/Link/Link'
import styles from './searchResult.module.scss'
import { Routes } from '@/shared/config/routerConfig/routes'

type TProps = {
  results: Array<TCategory | TProduct>
}

/**
 * @param {string} results - массив поисковой выдачи
 */
const SearchResult: FC<TProps> = ({ results }) => {
  return (
    <div className={styles.result}>
      <ul className={styles.menu}>
        {results.map((item, index) => {
          if (item.type === SEARCH_CATEGORY) {
            return (
              <li key={index} className={styles.item}>
                <Link to={`${Routes}${item.slug}`} className={styles.link}>
                  <SearchIcon className={styles['icon']} />
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
        })}

        <li className={styles['item-search-more']}>
          <Link to="" className={styles['link-blue']}>
            Показать все товары
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SearchResult
