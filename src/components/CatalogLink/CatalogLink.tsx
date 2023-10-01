import React, { FC, ReactNode } from 'react'
import styles from './catalogLink.module.scss'
import { Link } from 'react-router-dom'

type TCatalogLinkProps = {
  className?: string
  readonly children: ReactNode
}

/**
 * @param {string} className - нужно для изменения некоторых css- параметров
 */

const CatalogLink: FC<TCatalogLinkProps & React.HTMLProps<HTMLAnchorElement>> = ({ className, children }) => {
  return (
    <Link to="" className={`${styles['catalog-link']} ${className}`}>
      {children}
    </Link>
  )
}

export default CatalogLink
