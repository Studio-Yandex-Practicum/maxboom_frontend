import React, { FC } from 'react'
import styles from './ProductsPage.module.scss'
import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'
import Footer from '../../components/Footer/Footer'

import Header from '../../components/header/header'
import { CategoryList } from '../../components/CategoryList/CategoryList'

export const ProductsPage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <WrapperForMainContent>
          <div className={styles.content}>
            <CategoryList />
          </div>
        </WrapperForMainContent>
      </main>
      <Footer />
    </>
  )
}
