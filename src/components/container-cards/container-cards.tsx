import React, { FC } from 'react'
import styles from './container-cards.module.scss'
import CardForContainer from '../card-for-container/card-for-container'
import { TCard } from '../../utils/type'

type TProps = {
  title: string
  linkText?: string
  linkPath?: string
  cards: TCard[]
}

const ContainerCards: FC<TProps> = ({ title, linkText, linkPath, cards }) => {
  return (
    <section className={styles.wrapper}>
      <article>
        <h2>{title}</h2>
        <a href={linkPath} className={styles.link}>
          {linkText}
        </a>
      </article>
      <ul>{cards ? cards.map(item => <CardForContainer key={item.id} card={item} />) : null}</ul>
    </section>
  )
}

export default ContainerCards
