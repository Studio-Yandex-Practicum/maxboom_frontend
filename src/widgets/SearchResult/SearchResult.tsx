import { type FC } from 'react'
import SearchItem from '@/entities/SearchItem/SearchItem'
import { SEARCH_CATEGORY, SEARCH_PRODUCT } from '@/shared/constants/constants'
import type { TProduct } from '@/shared/model/types/common'
import { TCategory } from '@/models/CategoryModel'
import SearchIcon from '@/assets/images/search/search-icon.svg'
import Link from '@/shared/ui/Link/Link'
import { Routes } from '@/shared/config/routerConfig/routes'
import styles from './searchResult.module.scss'

type TProps = {
  results: Array<TCategory | TProduct>
}

/**
 * Компонент тултипа-подсказки при вводе поискового запроса
 * @param {Array<TCategory | TProduct>} props.results - подсказка, получаемая с бэка, при вводе текста в поисковую строку
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
}

export default SearchResult
