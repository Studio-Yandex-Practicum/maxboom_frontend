import React, { FC, useEffect, useState } from 'react'
import styles from './search.module.scss'
import { searchResponseData } from '../../mockData/searchData'
import { TResultData } from '../../utils/types'
import SearchResult from '../searchResult/searchResult'
import { Input, InputSize, InputTheme } from '../../shared/ui/Input/Input'

// @TODO: Перевести форму на Formik + Yup
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/92
const Search: FC<React.HTMLProps<HTMLAnchorElement>> = () => {
  const [visible, setVisability] = useState(false)
  const [resultData, setResultData] = useState<TResultData>({ data: [], success: false }) // TODO: move to redux

  const inputEventHandler = () => {
    setResultData(searchResponseData)
  }

  const closeContextMenuHandler = (e: Event) => {
    const searchResultNode = document.querySelector(styles.result)
    const withinBoundaries = e.composedPath().includes(searchResultNode!)

    if (!withinBoundaries && visible) {
      setVisability(false)
    }
  }

  useEffect(() => {
    if (resultData.success) {
      setVisability(true)
    }
  }, [resultData])

  useEffect(() => {
    document.addEventListener('click', closeContextMenuHandler)
    return () => {
      document.removeEventListener('click', closeContextMenuHandler)
    }
  }, [])

  return (
    <form className={`${styles.form}`}>
      <Input
        name="search"
        placeholder="Искать товары или категории"
        customSize={InputSize.M}
        theme={InputTheme.ACCENT}
        onChange={inputEventHandler}
      />
      <button className={`${styles.button}`}>Найти</button>
      {visible && <SearchResult results={resultData.data} />}
    </form>
  )
}

export default Search
