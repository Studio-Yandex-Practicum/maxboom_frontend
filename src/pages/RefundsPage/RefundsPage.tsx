import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import styles from './RefundsPage.module.scss'
import HelpPage from '@/pages/HelpPage/HelpPage'
import FormReturn from '../../components/FormReturn/FormReturn'

const RefundsPage = () => {
  return (
    <WrapperForMainContent>
      <div className={styles.help__wrapper}>
        <HelpPage />
        <div>
          <Heading type={HeadingType.NORMAL}>Форма возврата</Heading>
          <FormReturn />
        </div>
      </div>
    </WrapperForMainContent>
  )
}

export default RefundsPage
