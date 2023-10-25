import React from 'react'
import styles from './root.module.scss'
import Header from '../../components/header/header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router'

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
