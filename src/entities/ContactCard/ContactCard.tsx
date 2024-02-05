import { FC } from 'react'

import { TMessenger } from '@/models/MessengerModel'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './contactCard.module.scss'

export type PropsContactCard = {
  messenger: TMessenger
  Icon: string
}

/**
 * Компонент карточки контакта. Заполнение карточки происходит с применением метода map
 *  по массиву мессенджеров с использованием из него ссылки (link) на мессенджер, его названием (title) и иконку(Icon).
 * Причем иконка(Icon) в массиве мессенджеров импортируется как svg компонент
 * @param {TMessenger} messenger - массив для наполнения карточки контакта;
 * @param {string} Icon - компонент-ссылка на svg-компонент из массива messenger (messenger.icon);
 */
const ContactCard: FC<PropsContactCard> = ({ messenger, Icon }) => {
  return (
    <li className={styles.contactCard}>
      <Link to={messenger.link} className={styles.link} target="_blank" rel="nofollow">
        <div className={styles.icon}>
          <Icon />
        </div>
        <Paragraph>{messenger.title}</Paragraph>
      </Link>
    </li>
  )
}

export default ContactCard
