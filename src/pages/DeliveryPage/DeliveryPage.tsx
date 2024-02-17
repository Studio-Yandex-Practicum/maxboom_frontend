import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import styles from './DeliveryPage.module.scss'
import HelpPage from '@/pages/HelpPage/HelpPage'

const DeliveryPage = () => {
  return (
    <WrapperForMainContent>
      <div className={styles.help__wrapper}>
        <HelpPage />
        <div className={styles.delivery}>
          <Heading type={HeadingType.NORMAL}>Информация о доставке</Heading>
        </div>
      </div>
    </WrapperForMainContent>
  )
}

export default DeliveryPage
