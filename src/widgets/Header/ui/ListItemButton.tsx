import { FC } from 'react'

import styles from './ListItem.module.scss'

type ListItemButtonProps = React.HTMLAttributes<HTMLElement> & {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * компонент списка со ссылками для Header
 * @param {string} className - для передачи дополнительных параметров стиля
 */
const ListItemButton: FC<ListItemButtonProps> = ({ onClick, children }) => {
  return (
    <li className={styles.item}>
      <button onClick={onClick} className={styles.link}>
        {children}
      </button>
    </li>
  )
}

export default ListItemButton
