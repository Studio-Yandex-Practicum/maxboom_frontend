import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading from '@/shared/ui/Heading/Heading'

import styles from './ContactsPage.module.scss'

/**
 * Страница контакты
 */
const ContactsPage = () => {
  return (
    <WrapperForMainContent>
      <Heading className={styles.heading}>Контакты</Heading>
      <div className={styles.contacts__map}>
        <iframe
          className={styles.contacts__frame}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A50cb035aa350e601dea4586ad7eed4abc5b2e25af022307b5b0ff17e0d16bc63&amp;source=constructor"
          width="635"
          height="360"
          frameBorder="0"></iframe>
      </div>
    </WrapperForMainContent>
  )
}

export default ContactsPage
