import { Outlet } from 'react-router'
import Header from '@/components/header/header'
import Footer from '@/widgets/Footer/Footer'
import styles from './root.module.scss'
import Contact from '../../features/Contacts/Contacts'
import { messengerArray } from '@/shared/model/types/messengerArray'

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
