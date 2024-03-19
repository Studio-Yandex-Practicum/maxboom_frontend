import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import FormReturn from '@/widgets/FormReturn/ui/FormReturn'
import HelpCategories from '@/widgets/HelpCategories/HelpCategories'

import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'

import styles from './HelpPage.module.scss'

const HelpPage = () => {
  return (
    <WrapperForMainContent>
      <div className={styles.help__wrapper}>
        <div className={styles.help__container}>
          <Heading type={HeadingType.NORMAL}>Помощь</Heading>
          <Subheading className={styles.help__path}>Главная/Помощь</Subheading>
          <div className={styles.help__cats}>
            <Heading type={HeadingType.NORMAL}>Категории</Heading>
            <HelpCategories />
          </div>
        </div>
        <div className={styles.help__container}>
          <Heading type={HeadingType.NORMAL}>Форма возврата</Heading>
          <FormReturn />
        </div>
      </div>
    </WrapperForMainContent>
  )
}

export default HelpPage
