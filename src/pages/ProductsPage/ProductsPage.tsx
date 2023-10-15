import React, { useState } from 'react'
import styles from './ProductsPage.module.scss'
import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/header'
import { CategoryList } from '../../components/CategoryList/CategoryList'
import { PageDescription } from '../../components/PageDescription/PageDescription'
import { PageControls } from '../../components/PageControls/PageControls'

export const ProductsPage = () => {
  const sortOptions = ['Название А-Я', 'Название Я-А', 'Сначала дешевые', 'Сначала дорогие', 'Модель А-Я', 'Модель Я-А']
  const itemPerPageOptions = [15, 25, 50, 75, 100]
  const [cardView, setCardView] = useState('grid')

  const handleSortChange = (selectedOption: string) => {
    // Handle sort change logic here
    console.log('Selected sort option:', selectedOption)
  }

  const handleItemsPerPageChange = (selectedOption: string) => {
    // Handle items per page change logic here
    console.log('Selected items per page:', selectedOption)
  }

  const handleCardViewChange = (view: string) => {
    // Handle card view change logic here
    setCardView(view)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <WrapperForMainContent>
          <div className={styles.content}>
            <PageDescription />
            <div className={styles.contentGrid}>
              <CategoryList />
              <PageControls
                cardView={cardView}
                handleCardViewChange={handleCardViewChange}
                handleItemsPerPageChange={handleItemsPerPageChange}
                handleSortChange={handleSortChange}
                itemPerPageOptions={itemPerPageOptions}
                sortOptions={sortOptions}
              />
            </div>
          </div>
        </WrapperForMainContent>
      </main>
      <Footer />
    </>
  )
}
