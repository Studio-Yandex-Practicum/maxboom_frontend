import React, { FC } from 'react'
import styles from './searchResult.module.scss'
import SearchItem from '../search-item/search-item'
import { SEARCH_CATEGORY, SEARCH_PRODUCT } from '../../constants/constants'
import { TCategory, TProduct } from '../../utils/types'
import search from '../../images/search/search-icon.svg'

type TProps = {
  results: Array<TCategory | TProduct>
}

const SearchResult: FC<TProps> = ({ results }) => {
  return (
    <div className={`${styles.result}`}>
      <ul className={`${styles.menu}`}>
        {results.map((item, index) => {
          if (item.type === SEARCH_CATEGORY) {
            return (
              <li key={index} className={`${styles.item}`}>
                <a href={item.url} className={`${styles.link}`}>
                  <img src={search} alt="magnifier" className={`${styles.icon}`}></img>
                  <p className={`${styles.text}`}>{item.name}</p>
                  <span className={`${styles.span}`}>Категория</span>
                </a>
              </li>
            )
          }

          if (item.type === SEARCH_PRODUCT) {
            return (
              <li key={index} className={`${styles.item}`}>
                <SearchItem {...(item as TProduct)} />
              </li>
            )
          }
        })}

        <li className={`${styles['item-search-more']}`}>
          <a href="#" className={`${styles['link-blue']}`}>
            Показать все товары
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SearchResult
