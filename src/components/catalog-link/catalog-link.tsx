import React, { FC, ReactNode } from 'react'
import styles from './catalog-link.module.scss'

type TCatalogLinkProps = {
  className?: string
  readonly children: ReactNode
}
const CatalogLink: FC<TCatalogLinkProps & React.HTMLProps<HTMLAnchorElement>> = ({ className, children }) => {
  return (
    <a
      href="#"
      className={`${styles['catalog-link']} ${styles['catalog-item']} ${styles['catalog-text1']} ${className}`}>
      {children}
    </a>
  )
}

export default CatalogLink
