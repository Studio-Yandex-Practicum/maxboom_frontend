import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styles from './catalogLink.module.scss'

export type CatalogLinkProps = LinkProps & {
  className?: string
}

/**
 * @param {string} className - нужно для изменения некоторых css- параметров
 * @param to - путь для ссылки
 * @param children дочерние компоненты
 */

const CatalogLink: FC<CatalogLinkProps> = ({ className, to = '', children }) => {
  return (
    <Link to={to} className={`${styles['catalog-link']} ${className}`}>
      {children}
    </Link>
  )
}

export default CatalogLink
