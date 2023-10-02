import React, { FC, ReactNode } from 'react'
import styles from './catalogLink.module.scss'
import { Link } from 'react-router-dom'

export type CatalogLinkProps = {
  className?: string
  readonly children: ReactNode
}

/**
 * @param {string} className - нужно для изменения некоторых css- параметров
 */

const CatalogLink: FC<CatalogLinkProps & React.HTMLProps<HTMLAnchorElement>> = ({ className, children }) => {
  return (
    <Link to="" className={`${styles['catalog-link']} ${className}`}>
      {children}
    </Link>
  )
}

export default CatalogLink
