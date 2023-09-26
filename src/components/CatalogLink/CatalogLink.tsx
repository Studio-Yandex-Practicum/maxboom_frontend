import React, { FC, ReactNode } from 'react'
import styles from './catalog-link.module.scss'

type CatalogLinkProps = {
  className?: string
  readonly children: ReactNode
}
const CatalogLink: FC<CatalogLinkProps & React.HTMLProps<HTMLAnchorElement>> = props => {
  const { className, children } = props
  return (
    <a
      href="#"
      className={`${styles['catalog-link']} ${styles['catalog-item']} ${styles['catalog-text1']} ${className}`}>
      {children}
    </a>
  )
}

export default CatalogLink
