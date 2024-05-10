import { FC } from 'react'

import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'

import HeaderMenuModalHeading from '../HeaderMenuModalHeading/HeaderMenuModalHeading'
import { ICategory } from '../model/types/types'

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
                  onClick={handleClose}
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
