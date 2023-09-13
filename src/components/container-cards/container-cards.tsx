import React, { FC } from 'react'
import styles from './container-cards.module.scss'
import CardForContainer from '../card-for-container/card-for-container'
import { TCard } from '../../utils/type'

/**
 * Контейнер для изображений одной группы (новости, истории, блог), scrollbar
 * @param {string} title - загаловок группы изображений
 * @param {string} linkText - загаловок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} card - массив изображений
 */

type TProps = {
  title: string
  linkText?: string
  linkPath?: string
  cards: TCard[]
}

const ContainerCards: FC<TProps> = ({ title, linkText = '', linkPath = '', cards }) => {
  return (
    <section className={styles.wrapper}>
      <article>
        <h2>{title}</h2>
        <a href={linkPath} className={styles.link}>
          {linkText}
        </a>
      </article>
      <ul>
        {cards.map(item => (
          <CardForContainer key={item.id} card={item} />
        ))}
      </ul>
    </section>
  )
}

export default ContainerCards
