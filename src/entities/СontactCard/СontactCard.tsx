import { FC } from 'react'
import { TMessenger } from '@/models/MessengerModel'
import styles from './contactCard.module.scss'
import Link from '@/ui/link'

export type PropsContactCard = {
  messenger: TMessenger,
  Icon: string,
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
      <Link to={messenger.link} style={styles.link} target="_blank" rel="nofollow">
        <div className={styles.icon}>
          <Icon />
        </div>
        <p className={styles.text}>{messenger.title}</p>
      </Link>
    </li>
  )
}

export default ContactCard


