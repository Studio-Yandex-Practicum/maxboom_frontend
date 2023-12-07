import { FC } from 'react'
import { TMessenger } from '@/models/MessengerModel'
import styles from './contactCard.module.scss'
import Link from '@/ui/link'

export type PropsContactCard = {
  messenger: TMessenger,
  Icon: string,
}

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


