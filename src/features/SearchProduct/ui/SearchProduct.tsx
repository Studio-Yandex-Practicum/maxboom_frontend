import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { searchResponseData } from '@/mockData/searchData'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TResultData } from '@/shared/model/types/common'
import { Button, ButtonDesign, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { Input, InputSize, InputTheme } from '@/shared/ui/Input/Input'
import SearchResult from '@/widgets/SearchResult/SearchResult'

import styles from './SearchProduct.module.scss'

// @TODO: Перевести форму на Formik + Yup
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/92

/**
 * Компонент формы для поиска катгорий/товаров по базе данных магазина
 */
const SearchProduct = () => {
  const [visible, setVisibility] = useState(false)
  const [resultData, setResultData] = useState<TResultData>({ data: [], success: false })
  const [query, setQuery] = useState('')
  const searchResultRef = useRef(null)
  const navigate = useNavigate()

  // @TODO: Добавить интеграцию с бэком - подсказки в поиске при вводе текста
  // https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/172
  const inputEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setResultData(searchResponseData)
    setQuery(value)
  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (query.length > 0) {
      const route = Routes.SEARCH.replace(':query', query)
      navigate(route)
      setVisibility(false)
    }
  }

  const closeContextMenuHandler = (e: Event) => {
    const searchResultNode = searchResultRef.current

    if (searchResultNode) {
      const withinBoundaries = e.composedPath().includes(searchResultNode)

      if (!withinBoundaries && visible) {
        setVisibility(false)
      }
    }
  }

  useEffect(() => {
    if (resultData.success && query.length > 0) {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  }, [resultData, query])

  useEffect(() => {
    document.addEventListener('click', closeContextMenuHandler)
    return () => {
      document.removeEventListener('click', closeContextMenuHandler)
    }
  }, [])

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        name="search"
        placeholder="Поиск по товарам и категориям"
        customSize={InputSize.M}
        theme={InputTheme.ACCENT}
        onChange={inputEventHandler}
      />
      <Button
        type="submit"
        theme={ButtonTheme.PRIMARY}
        design={ButtonDesign.SQUARE}
        size={ButtonSize.XS}
        className={styles.button}>
        Найти
      </Button>
      {visible && <SearchResult results={resultData.data} ref={searchResultRef} />}
    </form>
  )
}

export default SearchProduct
