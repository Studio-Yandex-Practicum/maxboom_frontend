import React, { FC, ReactNode } from 'react'
import styles from './advantageCard.module.scss'

type TAdvantageCardProps = {
  src: string
  readonly children: ReactNode
}

/**
 * @param {string} src - картинка, которая вставляется в определенную карточку
 */

const AdvantageCard: FC<TAdvantageCardProps> = ({ children, src }) => {
  return (
    <div className={`${styles.card}`}>
      <a href="#" className={`${styles.link}`}>
        <img src={src} alt="img" className={`${styles.image}`} />
        <p className={`${styles.text}`}>{children}</p>
      </a>
    </div>
  )
}

export default AdvantageCard
