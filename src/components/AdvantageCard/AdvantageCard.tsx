import React, { FC, FunctionComponent, SVGProps } from 'react'
import styles from './advantageCard.module.scss'

export type TAdvantageCardProps = {
  image: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }> & '*.svg'
  alt: string
  name: string
}
/**
 * @param {string} image - картинка для преимущства
 * @param {string} alt - описание картинки
 * @param {string} name - название преимущества
 */
const AdvantageCard: FC<TAdvantageCardProps> = ({ image, alt, name }) => {
  return (
    <div className={`${styles.card}`}>
      <a href="#" className={`${styles.link}`}>
        <img src={image} alt={alt} className={`${styles.image}`} />
        <p className={`${styles.text}`}>{name}</p>
      </a>
    </div>
  )
}
export default AdvantageCard
