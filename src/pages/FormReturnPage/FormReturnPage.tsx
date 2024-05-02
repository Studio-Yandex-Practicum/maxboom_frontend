import { FC, useState } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { Routes } from '@/shared/config/routerConfig/routes'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import FormReturn from '@/widgets/FormReturn'
import SideBarMenu from '@/widgets/SideBarMenu'

import styles from './FormReturnPage.module.scss'

const links = [
  { heading: 'Главная', href: Routes.HOME },
  { heading: 'Личный Кабинет', href: Routes.LOGIN },
  { heading: 'Возврат товара', href: '' }
]

const FormReturnPage: FC = () => {
  const [user, setUser] = useState('Моругина Мария') // позже юзера будем получать из редакса

  const handleLogOut = () => {
    setUser('')
  }

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
          <SideBarMenu user={user} handleLogOut={handleLogOut} />
          <FormReturn />
        </div>
      </section>
    </WrapperForMainContent>
  )
}

export default FormReturnPage
