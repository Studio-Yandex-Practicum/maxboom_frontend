import { FC } from 'react'

import styles from './HeaderMenuSign.module.scss'

const HeaderMenuSign: FC = () => {
  return (
    <ul tabIndex={0} className={styles.headerMenuSign}>
      <li className={styles.headerMenuSign__stripe}></li>
      <li className={styles.headerMenuSign__stripe}></li>
      <li className={styles.headerMenuSign__stripe}></li>
    </ul>
  )
}

export default HeaderMenuSign
