import { FC } from 'react'

import Link from '../Link/Link'
import Subheading from '../Subheading/Subheading'

import styles from './Breadcrumbs.module.scss'

export type TLinkProps = {
  heading: string
  href: string
}
type TBreadcrumbsProps = {
  links: TLinkProps[]
}

/**
 * shared/ui компонент хлебные крошки, принимает список ссылок и рендерит их;
 * @param {TLinkProps[]} links - ссылки, которые попадают в хлебные крошки
 * @param {string} heading - название категории
 * @param {string} href - ссылка
 */

const Breadcrumbs: FC<TBreadcrumbsProps> = ({ links }) => {
  return (
    <div className={styles.breadcrumbs}>
      {links.map((link, index) => {
        return (
          (index !== links.length - 1 && (
            <Subheading key={link.href}>
              <Link to={link.href} className={styles.link}>
                {link.heading}
              </Link>
              <span>&nbsp;&#47;&nbsp;</span>
            </Subheading>
          )) || <Subheading key={link.href}>{link.heading}</Subheading>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
