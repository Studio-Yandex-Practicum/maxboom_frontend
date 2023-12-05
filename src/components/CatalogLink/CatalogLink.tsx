import { FC } from 'react'
import classNames from 'classnames'
import Link, { TLinkProps } from '@/shared/ui/Link/Link'
import styles from './catalogLink.module.scss'

/**
 * @param {string} className - нужно для изменения некоторых css- параметров
 * @param to - путь для ссылки
 * @param children дочерние компоненты
 */
const CatalogLink: FC<TLinkProps> = ({ className, to = '', children }) => {
  const classes = classNames(styles['catalog-link'], className)

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}

export default CatalogLink
