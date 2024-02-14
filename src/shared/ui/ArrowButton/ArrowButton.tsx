import React, { FC } from 'react'

import IconLeftArrow from '@/assets/icons/IconLeftArrow.svg'
import IconRightArrow from '@/assets/icons/IconRightArrow.svg'

import styles from './ArrowButton.module.scss'

type TProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string
  type: 'left' | 'right'
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 * @param {'left' | 'right'} type - используется для того, чтобы поставить стрелку влево или право
 */
const ArrowButton: FC<TProps> = ({ type, className, ...props }) => {
  return (
    <button className={`${styles.arrow__button} ${className}`} {...props}>
      {(type === 'right' && <IconRightArrow className={styles.icon} />) || (
        <IconLeftArrow className={styles.icon} />
      )}
    </button>
  )
}

export default ArrowButton
