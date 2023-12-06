import { FC, useState } from 'react'
import { TMessenger } from '@/models/MessengerModel'
import styles from './contacts.module.scss'
import ContactCard from '../../entities/СontactCard/СontactCard'
import { Button, ButtonTheme, ButtonDesign } from '@/shared/ui/Button/Button'
import MessageIcon from '../../assets/icons/chat.svg'
import CloseIcon from '@/assets/icons/IconMessageClose.svg'
// import CloseIcon from '@/assets/icons/IconClose.svg'

export type PropsСontacts = {
  messenger: TMessenger[],
}

const Сontacts: FC<PropsСontacts> = ({ messenger }) => {

  const [messageMenuActive, setMessageMenuActive] = useState(false);

  function toggleClick() {
    messageMenuActive ? setMessageMenuActive(false) : setMessageMenuActive(true)
  }

  return (
    <div className={styles.contacts}>
      <div className={messageMenuActive ? styles.contactsMenu : styles.contactsMenuHidden}>
        <ul className={styles.contactList}>

          {messenger.map((item) => (
            <ContactCard
              messenger={item}
              key={item.id}
              Icon={item.icon}
            />
          ))}

        </ul>
      </div>

      <Button theme={ButtonTheme.PRIMARY} design={ButtonDesign.ROUND} className={styles.button} onClick={toggleClick}>
        {messageMenuActive ? <CloseIcon className={styles.buttonCloseIcon} /> : <MessageIcon className={styles.buttonMessageIcon} />}

      </Button>
    </div>
  );
}

export default Сontacts


