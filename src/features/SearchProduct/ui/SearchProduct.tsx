import { useRef, useEffect, useState } from 'react'
import { searchResponseData } from '@/mockData/searchData'
import { TResultData } from '@/shared/model/types/common'
import SearchResult from '@/widgets/SearchResult/SearchResult'
import { Input, InputSize, InputTheme } from '@/shared/ui/Input/Input'
import { Button, ButtonDesign, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import styles from './SearchProduct.module.scss'

// @TODO: Перевести форму на Formik + Yup
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/92

/**
 * Компонент формы для поиска катгорий/товаров по базе данных магазина
 */
const SearchProduct = () => {
  const [visible, setVisibility] = useState(false)
  const [resultData, setResultData] = useState<TResultData>({ data: [], success: false })
  const searchResultRef = useRef(null)

  // @TODO: Добавить интеграцию с бэком - подсказки в поиске при вводе текста
  // https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/172
  const inputEventHandler = () => {
    setResultData(searchResponseData)
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
    if (resultData.success) {
      setVisibility(true)
    }
  }, [resultData])

  useEffect(() => {
    document.addEventListener('click', closeContextMenuHandler)
    return () => {
      document.removeEventListener('click', closeContextMenuHandler)
    }
  }, [])

  return (
    <form className={styles.form}>
      <Input
        name="search"
        placeholder="Поиск по товарам и категориям"
        customSize={InputSize.M}
        theme={InputTheme.ACCENT}
        onChange={inputEventHandler}
      />
      {/* @TODO: Добавить onClick-интеграцию с бэком для отправки поискового запроса
      https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/173 */}
      <Button
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
