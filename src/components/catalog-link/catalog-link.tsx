import React, { FC, ReactNode } from 'react'
import styles from './catalog-link.module.scss'

type TCatalogLinkProps = {
  className?: string
  readonly children: ReactNode
}
const CatalogLink: FC<TCatalogLinkProps> = ({ className, children }) => {
  return (
    <a
      href="#"
      className={`${styles['catalog-link']} ${styles['catalog-item']} ${styles['catalog-text1']} ${className}`}>
      {children}
    </a>
  )

  return (
    <a href="#" className={`${styles['catalog-link']} ${className}`}>
      <div className={`${styles['catalog-item']}`}>
        <p className={`${styles['catalog-text']}`}>{children}</p>
      </div>
    </a>
  )
}

export default CatalogLink
