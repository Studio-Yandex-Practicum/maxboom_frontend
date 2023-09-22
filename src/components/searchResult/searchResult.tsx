import React, { FC } from 'react'
import styles from './searchResult.module.scss'
import SearchItem from '../search-item/search-item'
import { SEARCH_CATEGORY, SEARCH_PRODUCT } from '../../utils/constants'
import { TCategory, TProduct } from '../../utils/types'
import search from '../../images/search/search-icon.svg'
import { Link } from 'react-router-dom'

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
                <Link to={item.url} className={`${styles.link}`}>
                  <img src={search} alt="magnifier" className={`${styles.icon}`}></img>
                  <p className={`${styles.text}`}>{item.name}</p>
                  <span className={`${styles.span}`}>Категория</span>
                </Link>
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
          <Link to="" className={`${styles['link-blue']}`}>
            Показать все товары
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SearchResult
