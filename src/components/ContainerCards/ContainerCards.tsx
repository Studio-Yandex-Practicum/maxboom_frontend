import { FC } from 'react'
import CardForContainer from '../CardForContainer/CardForContainer'
import { TCard } from '@/models/CardModel'
import IconLink from '@/assets/icons/IconLink'
import Link from '@/ui/link'
import styles from './container-cards.module.scss'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

export type Props = {
  title: string
  linkText?: string
  linkPath?: string
  cards: TCard[]
}

/**
 * Контейнер для изображений одной группы (новости, истории, блог), scrollbar
 * @param {string} title - загаловок группы изображений
 * @param {string} linkText - загаловок ссылки
 * @param {string} linkPath - адрес ссылки
 * @param {array} card - массив изображений
 */
const ContainerCards: FC<Props> = props => {
  const { title, linkText = '', linkPath = '', cards } = props
  const linkTextStyle = styles.link

  return (
    <section className={styles.wrapper}>
      <article>
        <Heading type={HeadingType.NORMAL}>{title}</Heading>
        <Link to={linkPath || '#'} style={linkTextStyle}>
          {linkText}
          {linkText && IconLink({ styles: styles.svg })}
        </Link>
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
