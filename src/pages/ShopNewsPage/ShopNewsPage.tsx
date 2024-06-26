import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import ShopNewsWidget from '@/widgets/NewsBlock/ui/ShopNewsWidget/ShopNewsWidget'

import styles from './ShopNewsPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Новости', href: '' }
]

const ShopNewsPage = () => {
  return (
    <WrapperForMainContent>
      <section className={styles.container}>
        <Heading type={HeadingType.MAIN} className={styles.title}>
          Новости
        </Heading>
        <Breadcrumbs links={links} />
        <ShopNewsWidget />
      </section>
    </WrapperForMainContent>
  )
}

export default ShopNewsPage
