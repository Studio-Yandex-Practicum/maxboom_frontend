import { FC } from 'react'

import styles from './HeaderMenuSign.module.scss'

export interface IHeaderMenuSign {
  onClick?: () => void
}

/**
 * Кнопка "меню" из трех белых полосочек, появляется в мобильной версии Header
 * @param {function} onClick - функция открытия модального окна
 */

const HeaderMenuSign: FC<IHeaderMenuSign> = ({ onClick }) => {
  return (
    <ul tabIndex={0} onClick={onClick} className={styles.headerMenuSign}>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <li key={i} className={styles.headerMenuSign__stripe}></li>
        ))}
    </ul>
  )
}

export default HeaderMenuSign
