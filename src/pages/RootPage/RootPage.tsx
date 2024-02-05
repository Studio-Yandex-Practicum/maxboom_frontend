import { Outlet } from 'react-router'

import Header from '@/components/header/header'
import { messengerArray } from '@/shared/model/types/messengerArray'
import Footer from '@/widgets/Footer/Footer'

import Contact from '../../features/Contacts/Contacts'

import styles from './root.module.scss'

const RootPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <Contact messenger={messengerArray} />
    </>
  )
}

export default RootPage
