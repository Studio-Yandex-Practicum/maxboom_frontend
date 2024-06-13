import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'

import styles from './DeliveryPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Информация о доставке', href: '' }
]

const DeliveryPage = () => {
  return (
    <WrapperForMainContent>
      <section className={styles.delivery}>
        <div className={styles.delivery__titleBox}>
          <Heading type={HeadingType.MAIN}>Информация о доставке</Heading>
          <Breadcrumbs links={links} />
        </div>
      </section>
    </WrapperForMainContent>
  )
}

export default DeliveryPage
