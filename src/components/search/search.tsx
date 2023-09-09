import { useEffect, useState } from 'react'
import React from 'react'
import styles from './search.module.scss'
import search from '../../images/search/search-icon.svg'
import SearchItem from '../search-item/search-item'
import { searchResponseData } from '../../mockData/searchData'
import { TProduct, TResultData } from '../../utils/types'
import { SEARCH_CATEGORY, SEARCH_PRODUCT } from '../../utils/constants'

function Search() {
  const [visible, setVisability] = useState(false)
  const [resultData, setResultData] = useState<TResultData>({ data: [], success: false }) // TODO: move to redux

  useEffect(() => {
    if (resultData.success) {
      setVisability(true)
    }
  }, [resultData])

  const inputEventHandler = () => {
    setResultData(searchResponseData)
  }

  const searchResultNode = (
    <div className={`${styles.result}`}>
      <ul className={`${styles.menu}`}>
        {resultData?.data.map((item, index) => {
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

  useEffect(() => {
    document.addEventListener('click', e => {
      const searchResultNode = document.querySelector(styles.result)
      const withinBoundaries = e.composedPath().includes(searchResultNode!)

      if (!withinBoundaries && visible) {
        setVisability(false)
      }
    })
  }, [])

  return (
    <form className={`${styles.form}`}>
      <input
        name="search"
        type="text"
        placeholder="Искать товары или категории"
        className={`${styles.input}`}
        onInput={inputEventHandler}
        autoComplete="off"
      />

      <button className={`${styles.button}`}>Найти</button>
      {visible && searchResultNode}
    </form>
  )
}

export default Search
