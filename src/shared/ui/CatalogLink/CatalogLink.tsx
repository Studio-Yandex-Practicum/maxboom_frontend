import classNames from 'classnames'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { setCategoryId } from '@/entities/Category/slice/categoryIdSlice'
import { setCategorySlug } from '@/entities/Category/slice/categorySlugSlice'
import Link, { type TLinkProps } from '@/shared/ui/Link/Link'

import styles from './catalogLink.module.scss'

/**
 * @param {string} className - нужно для изменения некоторых css- параметров
 * @param to - путь для ссылки
 * @param children дочерние компоненты
 * @param {number} categoryId - id категории
 * @param {string} categorySlug- URL категории
 */
const CatalogLink: FC<TLinkProps> = ({ className, to = '', children, categoryId, categorySlug }) => {
  const classes = classNames(styles['catalog-link'], className)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Link
      to={to}
      className={classes}
      onClick={() => {
        console.log(to)
        dispatch(setCategoryId(categoryId))
        dispatch(setCategorySlug(categorySlug))
      }}>
      {children}
    </Link>
  )
}

export default CatalogLink
