import { type FC } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { setCategoryId } from '@/entities/Category/slice/categoryIdSlice'
import { setCategorySlug } from '@/entities/Category/slice/categorySlugSlice'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'

import HeaderMenuModalHeading from '../HeaderMenuModalHeading/HeaderMenuModalHeading'
import { type ICategory } from '../model/types/types'

import styles from './HeaderMenuModalCatalog.module.scss'

export interface IHeaderMenuModalCatalog {
  categories?: ICategory[]
  handleCategory?: () => void
  isCatalog?: boolean
  handleClose?: () => void
}

/**
 * Компонент для отрисовки категорий в HeaderMenuModal;
 * @param {boolean} isCatalog - стейт позволяющий показывать данный компонент;
 * @param {array} categories - массив категорий полученный из редакса;
 * @param {function} handleCategory - функция переключения активности;
 * @param {function} handleClose - функция закрытия модальго окна;
 */

const HeaderMenuModalCatalog: FC<IHeaderMenuModalCatalog> = ({
  isCatalog,
  categories,
  handleCategory,
  handleClose
}) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleCloseAndDispatch = (id: number | undefined, slug: string | undefined) => {
    if (handleClose) {
      handleClose()
      dispatch(setCategoryId(id))
      dispatch(setCategorySlug(slug))
    }
  }

  return (
    <>
      {isCatalog && (
        <div className={styles.headerMenuModalCatalog}>
          <HeaderMenuModalHeading handleCategory={handleCategory} />

          <ul>
            {categories?.map(item => (
              <li key={item.id}>
                <Link
                  to={`${Routes.CATEGORIES}/${item.slug}?id=${item.id}`}
                  onClick={() => handleCloseAndDispatch(item.id, item.slug)}
                  className={styles.headerMenuModalCatalog__route}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default HeaderMenuModalCatalog
