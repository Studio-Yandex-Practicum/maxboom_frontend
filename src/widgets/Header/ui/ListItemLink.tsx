import { FC } from 'react'

import Link from '@/shared/ui/Link/Link'

import styles from './ListItem.module.scss'

type ListItemLinkProps = React.HTMLAttributes<HTMLElement> & {
  to: string
}

/**
 * компонент списка со ссылками для Header
 * @param {string} className - для передачи дополнительных параметров стиля
 */
const ListItemLink: FC<ListItemLinkProps> = ({ to, children }) => {
  return (
    <li className={styles.item}>
      <Link to={to} className={styles.link}>
        {children}
      </Link>
    </li>
  )
}

export default ListItemLink
