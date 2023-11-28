import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './catalogLink.module.scss'

export type CatalogLinkProps = {
  className?: string
  readonly children: ReactNode
  to?: string
}

/**
 * @param {string} className - нужно для изменения некоторых css- параметров
 * @param to - путь для ссылки
 * @param children дочерние компоненты
 */

const CatalogLink: FC<CatalogLinkProps & React.HTMLProps<HTMLAnchorElement>> = ({ className, to = '', children }) => {
  return (
    <Link to={to} className={`${styles['catalog-link']} ${className}`}>
      {children}
    </Link>
  )
}

export default CatalogLink
