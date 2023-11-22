import { Outlet } from 'react-router'
import Header from '../../components/header/header'
import Footer from '../../components/Footer/Footer'
import styles from './root.module.scss'

const RootPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootPage
