import { useRef, useEffect, useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'

import ResetIcon from '@/assets/icons/iconHeaderMenuClose.svg'
import SearchIcon from '@/assets/icons/iconSearch.svg'
import SearchResult from '@/entities/SearchResult/SearchResult'
import { searchResponseData } from '@/mockData/searchData'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TResultData } from '@/shared/model/types/common'
import { Button, ButtonDesign, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { Input, InputSize, InputTheme } from '@/shared/ui/Input/Input'
import Link from '@/shared/ui/Link/Link'

import styles from './SearchProduct.module.scss'

interface ISearchProduct {
  handleClose?: () => void
  isSearchModalOpen?: boolean
}

// @TODO: Перевести форму на Formik + Yup
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/92

/**
 * Компонент формы для поиска категорий/товаров по базе данных магазина
 * @param {function} handleClose - функция закрытия модального окна;
 * @param {boolean} isSearchModalOpen - состояние открытия модального окна;
 */

const SearchProduct: FC<ISearchProduct> = ({ handleClose, isSearchModalOpen }) => {
  const [visible, setVisibility] = useState(false)
  const [isReset, setIsReset] = useState(false)
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
    setIsReset(true)
  }

  const handleReset = () => {
    setQuery('')
    setIsReset(false)
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
    <form
      className={
        isSearchModalOpen
          ? `${styles.searchProduct} ${styles.searchProduct_modal}`
          : `${styles.searchProduct}`
      }
      onSubmit={formSubmitHandler}>
      <Input
        name="search"
        placeholder="Поиск по товарам и категориям"
        customSize={InputSize.S}
        theme={isSearchModalOpen ? InputTheme.NORMAL : InputTheme.ACCENT}
        onChange={inputEventHandler}
        value={query}
      />

      {isSearchModalOpen ? (
        <div className={styles.searchProduct__icons}>
          {isReset && <ResetIcon onClick={handleReset} className={styles.searchProduct__iconResetMobile} />}
          <Link to={Routes.SEARCH} onClick={handleClose}>
            <SearchIcon className={styles.searchProduct__iconSearch} />
          </Link>
        </div>
      ) : (
        <>
          {isReset && <ResetIcon onClick={handleReset} className={styles.searchProduct__iconReset} />}
          <Button
            type="submit"
            theme={ButtonTheme.PRIMARY}
            design={ButtonDesign.SQUARE}
            size={ButtonSize.XS}
            className={styles.searchProduct__button}>
            Найти
          </Button>
        </>
      )}

      {isSearchModalOpen && <SearchResult results={resultData.data} ref={searchResultRef} />}
      {visible && !isSearchModalOpen && <SearchResult results={resultData.data} ref={searchResultRef} />}
    </form>
  )
}

export default SearchProduct
