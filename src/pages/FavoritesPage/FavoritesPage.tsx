import { FC, KeyboardEvent, Suspense, useState } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { useFavorite } from '@/entities/Favorite/model/hooks/useFavorite'
import SideBarButton from '@/entities/SideBarButton'
import SideBarMenuModal from '@/features/SideBarMenuModal'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useResize } from '@/shared/libs/hooks/useResize'
import { ECardView } from '@/shared/model/types/common'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import { ProductsList } from '@/widgets/ProductsList/ProductsList'
import SideBarMenu from '@/widgets/SideBarMenu'

import styles from './FavoritesPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Личный Кабинет', href: Routes.LOGIN },
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
  const [user, setUser] = useState<string>('Elon Musk') // TODO получать пользователя из редакса

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleLogOut = () => {
    setUser('')
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      handleLogOut()
    }
  }

  return (
    <div className={styles.favoritePage}>
      <WrapperForMainContent>
        <div className={styles.favoritePage__pageDescriptor}>
          <Heading>Избранные товары</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.favoritePage__container}>
          {isScreenMd ? (
            <SideBarMenu user={user} handleLogOut={handleLogOut} />
          ) : (
            <SideBarButton onClick={handleClick} />
          )}
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
              <SideBarMenuModal
                handleClose={changeModalState}
                onKeyUp={handleKeyUp}
                handleLogOut={handleLogOut}
                user={user}
              />
            </Suspense>
          </Modal>
        )}
      </WrapperForMainContent>
    </div>
  )
}
