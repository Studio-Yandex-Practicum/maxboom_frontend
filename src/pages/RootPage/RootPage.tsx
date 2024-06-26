import { Outlet } from 'react-router'

import Contact from '@/features/Contacts/Contacts'
import { messengerArray } from '@/shared/model/types/messengerArray'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'

import styles from './root.module.scss'

const RootPage = () => {
  return (
    <div className={styles.rootPageWrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <Contact messenger={messengerArray} />
    </div>
  )
}

export default RootPage
