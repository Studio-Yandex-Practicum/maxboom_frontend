import { FC, Suspense, useState } from 'react'

import { useFavorite } from '@/entities/Favorite/model/hooks/useFavorite'
import SideBarMenuModal from '@/features/SideBarMenuModal'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useResize } from '@/shared/libs/hooks/useResize'
import { ECardView } from '@/shared/model/types/common'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import { ProductsList } from '@/widgets/ProductsList/ProductsList'
import { withAdaptiveSideBar } from '@/widgets/SideBarMenu'

import styles from './FavoritesPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Личный Кабинет', href: Routes.ACCOUNT },
  { heading: 'Избранные товары', href: '' }
]

/**
 * Страница с избранными товарами
 */
export const FavoritesPage: FC = () => {
  const favoriteProducts = useFavorite()
  const { isScreenMd } = useResize()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)
  const AdaptiveSideBar = withAdaptiveSideBar(isScreenMd)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className={styles.favoritePage}>
      <WrapperForMainContent>
        <div className={styles.favoritePage__pageDescriptor}>
          <Heading>Избранные товары</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.favoritePage__container}>
          <AdaptiveSideBar handleClick={handleClick} />
          {favoriteProducts.length > 0 ? (
            <section className={styles.favoritePage__list}>
              <ProductsList
                items={{
                  category_name: '',
                  count: favoriteProducts.length,
                  next: '',
                  previous: '',
                  results: favoriteProducts
                }}
                cardView={ECardView.GRID}
              />
            </section>
          ) : (
            <span className={styles.favoritePage__span}>Ваши закладки пусты</span>
          )}
        </div>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            onClose={changeModalState}
            isModalClosing={isModalClosing}
            setIsModalClosing={setIsModalClosing}>
            <Suspense fallback={<Spinner />}>
              <SideBarMenuModal handleClose={changeModalState} />
            </Suspense>
          </Modal>
        )}
      </WrapperForMainContent>
    </div>
  )
}
