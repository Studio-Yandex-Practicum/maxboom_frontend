import classNames from 'classnames'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { setCategoryId } from '@/entities/Category/slice/categoryIdSlice'
import { setCategorySlug } from '@/entities/Category/slice/categorySlugSlice'
import Link, { TLinkProps } from '@/shared/ui/Link/Link'

import styles from './catalogLink.module.scss'

/**
 * @param {string} className - нужно для изменения некоторых css- параметров
 * @param to - путь для ссылки
 * @param children дочерние компоненты
 * @param {string} categoryId - id категории
 */
const CatalogLink: FC<TLinkProps> = ({ className, to = '', children, categoryId }) => {
  const classes = classNames(styles['catalog-link'], className)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Link
      to={to}
      className={classes}
      onClick={() => {
        dispatch(setCategoryId(categoryId))
        dispatch(setCategorySlug(to))
      }}>
      {children}
    </Link>
  )
}

export default CatalogLink
