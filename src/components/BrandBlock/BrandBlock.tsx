import React, { FC } from 'react'
import Link from '../../ui/link'
import { TBrand } from '../../models/BrandModel'
import IconLink from '../../assets/icons/IconLink'
import styles from './brand.module.scss'
import Img from '../../ui/img'

export type Props = {
  title: string
  linkText?: string
  linkPath?: string
  cards: TBrand[]
}

/**
 * Контейнер для изображений одной группы (новости, истории, блог), scrollbar
 * @param {string} title - загаловок блока
 * @param {string} linkText - загаловок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} cards - массив изображений
 */
const BrandBlock: FC<Props> = props => {
  const { title, linkText, linkPath, cards } = props
  const linkTextStyle = styles.link__text

  return (
    <section className={styles.brands}>
      <div className={styles.brands__container}>
        <div className={styles.brands__header}>
          <h2>{title}</h2>
          {linkText ? (
            <Link to={linkPath || '#'} style={linkTextStyle}>
              {linkText}
              {IconLink({ styles: styles.svg })}
            </Link>
          ) : (
            <></>
          )}
        </div>
        <ul className={styles.brands__body}>
          {cards.map(card => (
            <li key={card.id} className={styles.brands_card}>
              <div className={styles.wrap}>
                <Link to="#">
                  <Img
                    src={card.src}
                    alt={card.alt}
                    width={card.width ?? '150'}
                    height={card.height ?? '150'}
                    className={styles.img}
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default BrandBlock
