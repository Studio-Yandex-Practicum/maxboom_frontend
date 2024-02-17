import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import styles from './HelpPage.module.scss'
import Subheading from '@/shared/ui/Subheading/Subheading'
import HelpCategories from '../../components/HelpCategories/HelpCategories'

const HelpPage = () => {
  return (
    <div>
      <Heading type={HeadingType.NORMAL}>Помощь</Heading>
      <Subheading className={styles.help__path}>Главная/Помощь</Subheading>
      <div className={styles.help__cats}>
        <Heading type={HeadingType.NORMAL}>Категории</Heading>
        <HelpCategories />
      </div>
    </div>
  )
}

export default HelpPage
