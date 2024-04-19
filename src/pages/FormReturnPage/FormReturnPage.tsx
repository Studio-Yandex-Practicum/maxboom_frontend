import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import FormReturn from '@/widgets/FormReturn'

import styles from './FormReturnPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Личный Кабинет', href: '/login' },
  { heading: 'Возврат товара', href: '' }
]

const FormReturnPage = () => {
  return (
    <WrapperForMainContent>
      <section className={styles.formReturn}>
        <div className={styles.formReturn__titleBox}>
          <Heading type={HeadingType.MAIN} className={styles.formReturn__title}>
            Возврат товара
          </Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.formReturn__mainBox}>
          <div className={styles.formReturn__burger}>Burger menu</div>
          <FormReturn />
        </div>
      </section>
    </WrapperForMainContent>
  )
}

export default FormReturnPage
