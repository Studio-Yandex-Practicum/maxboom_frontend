import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import styles from './HelpPage.module.scss'
import Subheading from '@/shared/ui/Subheading/Subheading'
import HelpCategories from '../../components/HelpCategories/HelpCategories'
import FormReturn from '../../components/FormReturn/FormReturn'

const HelpPage = () => {
  return (
    <WrapperForMainContent>
      <div className={styles.help__wrapper}>
        <div className={styles.help}>
          <Heading type={HeadingType.NORMAL}>Помощь</Heading>
          <Subheading className={styles.help__path}>Главная/Помощь</Subheading>
        </div>
        <div className={styles.cats__wrapper}>
          <div className={styles.cats}>
            <nav className={styles.cats__container}>
              <Heading type={HeadingType.NORMAL}>Категории</Heading>
              <HelpCategories />
            </nav>
          </div>
          {/* <Heading type={HeadingType.NORMAL}>Форма возврата</Heading> */}
          <FormReturn />
        </div>
      </div>
    </WrapperForMainContent>
  )
}

export default HelpPage
