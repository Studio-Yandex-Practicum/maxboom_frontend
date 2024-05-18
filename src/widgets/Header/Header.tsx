import classNames from 'classnames'
import { FC, lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import MenuIcon from '@/assets/icons/iconMenu.svg'
import {
  getLoading,
  selectCategories,
  selectDisplayedCategories
} from '@/entities/Category/selectors/categorySelectors'
import { fetchCategories } from '@/entities/Category/slice/categorySlice'
import HeaderAccount from '@/entities/HeaderAccount/HeaderAccount'
import CallBack from '@/features/CallBack'
import HeaderSearchModal from '@/features/HeaderSearchModal'
import SearchProduct from '@/features/SearchProduct'
import { Routes } from '@/shared/config/routerConfig/routes'
import ArrowIcon from '@/shared/icons/arrow.svg'
import IconCategories from '@/shared/icons/IconCategories.svg'
import { useResize } from '@/shared/libs/hooks/useResize'
import { linkItems } from '@/shared/mockData/catalogListData'
import { headerAccountData } from '@/shared/mockData/headerAccountData'
import { Button } from '@/shared/ui/Button/Button'
import CatalogLink from '@/shared/ui/CatalogLink/CatalogLink'
import CatalogLinkSkeleton from '@/shared/ui/CatalogLink/ui/skeleton/CatalogLinkSkeleton'
import ContextMenuElement from '@/shared/ui/ContextMenuElement/ContextMenuElement'
import Link from '@/shared/ui/Link/Link'
import Logo from '@/shared/ui/logo/Logo'
import LogoSkeleton from '@/shared/ui/logo/model/skeleton/LogoSkeleton'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Spinner from '@/shared/ui/Spinner/Spinner'
import CatalogNodeItem from '@/widgets/CatalogNodeItem/CatalogNodeItem'
import NavigationLink from '@/widgets/NavigationLink/NavigationLink'

import styles from './header.module.scss'
import LightningIcon from './icons/lightning.svg'
import { getCoreBaseHeaderSelector } from './model/selectors/selectors'
import { getCoreBaseHeader } from './model/services/getCoreBaseHeader'
import ListItemButton from './ui/ListItemButton'
import ListItemLink from './ui/ListItemLink'

const HeaderMenuModal = lazy(() => import('@/features/HeaderMenuModal'))

/**
 * Компонент шапки сайта
 */

const Header: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const categories = useSelector(selectCategories)
  const coreBaseData = useSelector(getCoreBaseHeaderSelector)
  const displayedCategories = useSelector(selectDisplayedCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const phoneNumber = coreBaseData.header.support.phone_number
  const logo = coreBaseData.header.main_logo.image
  const isCategoriesLoading = useSelector(getLoading)

  const { isScreenLg } = useResize()

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const changeMenuModalState = () => {
    setIsMenuModalOpen(!isMenuModalOpen)
  }

  const changeSearchModalState = () => {
    setIsSearchModalOpen(!isSearchModalOpen)
  }

  const closeModal = () => {
    setIsModalClosing(true)
  }

  const aboutUsNode = useMemo(
    () => (
      <ul className={styles.header__contextMenuList}>
        <ListItemLink to={Routes.ABOUT}>О нас</ListItemLink>
        <ListItemLink to={Routes.PRIVACY}>Политика безопасности</ListItemLink>
        <ListItemLink to={Routes.REVIEWS}>Обзоры</ListItemLink>
        <ListItemLink to={Routes.TERMS}>Условия соглашения</ListItemLink>
      </ul>
    ),
    []
  )

  const contactNode = useMemo(
    () => (
      <ul className={styles.header__contextMenuList}>
        <ListItemLink to={`tel:${phoneNumber}`}>{phoneNumber}</ListItemLink>
        <ListItemButton onClick={changeModalState}>Обратный звонок</ListItemButton>
      </ul>
    ),
    [phoneNumber]
  )

  const supportNode = useMemo(
    () => (
      <ul className={styles.header__contextMenuList}>
        <li className={styles.header__contextMenuItem}>
          <Link to={Routes.DELIVERY} className={styles.header__contextMenuLink}>
            Информация о доставке
          </Link>
        </li>
        <li className={styles.header__contextMenuItem}>
          <Link to={Routes.ADD_RETURN} className={styles.header__contextMenuLink}>
            Возвраты
          </Link>
        </li>
        <li className={styles.header__contextMenuItem}>
          <Link to={Routes.VOUCHERS} className={styles.header__contextMenuLink}>
            Подарочные сертификаты
          </Link>
        </li>
      </ul>
    ),
    []
  )

  const catalogNode = useMemo(
    () => (
      <ul className={`${styles.header__contextMenuList} ${styles.header__contextMenuList_catalog}`}>
        {categories.map(category => (
          <CatalogNodeItem key={category.id} slug={category.slug} name={category.name} id={category.id} />
        ))}
      </ul>
    ),
    [categories]
  )

  useEffect(() => {
    dispatch(getCoreBaseHeader())
  }, [])

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={changeModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <CallBack setIsModalClosing={setIsModalClosing} />
        </Modal>
      )}

      {isMenuModalOpen && (
        <Modal
          isModalOpen={isMenuModalOpen}
          onClose={changeMenuModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <Suspense fallback={<Spinner />}>
            <HeaderMenuModal
              categories={categories}
              phoneNumber={phoneNumber}
              isMenuModalOpen={isMenuModalOpen}
              handleClose={closeModal}
            />
          </Suspense>
        </Modal>
      )}

      {isSearchModalOpen && (
        <Modal
          isModalOpen={isSearchModalOpen}
          onClose={changeSearchModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <Suspense fallback={<Spinner />}>
            <HeaderSearchModal isSearchModalOpen={isSearchModalOpen} handleClose={closeModal} />
          </Suspense>
        </Modal>
      )}

      <header className={isScreenLg ? `${styles.header}` : `${styles.header} ${styles.header_mobile}`}>
        <div className={isScreenLg ? `${styles.header__container}` : `${styles.header__containerMobile}`}>
          {isScreenLg && (
            <nav className={styles.header__nav}>
              <ul className={styles.header__list}>
                <li>
                  <ContextMenuElement className={styles.header__item} content={aboutUsNode}>
                    О нас
                  </ContextMenuElement>
                </li>

                {linkItems.map(item => (
                  <NavigationLink key={item.index} label={item.label} to={item.to} />
                ))}

                <li>
                  <ContextMenuElement className={styles.header__item} content={supportNode}>
                    <LightningIcon className={classNames(styles.header__icon, styles.header__icon_help)} />
                    Помощь
                  </ContextMenuElement>
                </li>
              </ul>

              <ContextMenuElement className={styles.header__item} content={contactNode} type="right">
                <div className={styles.header__phoneWrapper}>
                  <Paragraph className={styles.header__text}>{coreBaseData.header.support.name}</Paragraph>
                  <Paragraph className={styles.header__item}>{phoneNumber}</Paragraph>
                  <ArrowIcon className={classNames(styles.header__icon, styles.header__icon_phone)} />
                </div>
              </ContextMenuElement>
            </nav>
          )}

          <div className={isScreenLg ? `${styles.header__logo}` : `${styles.header__logoMobile}`}>
            {!isScreenLg && (
              <Button onClick={changeMenuModalState} className={styles.header__menuButton}>
                <MenuIcon className={styles.header__menuIcon} />
              </Button>
            )}
            {!logo ? (
              <LogoSkeleton width="138px" height="46px" />
            ) : (
              <Logo image={logo} width="138px" height="46px" />
            )}
          </div>

          {isScreenLg && <SearchProduct />}

          <HeaderAccount changeSearchModalState={changeSearchModalState} {...headerAccountData} />

          {isScreenLg && (
            <ContextMenuElement content={catalogNode} className={styles.header__catalog}>
              <CatalogLink to={`${Routes.CATEGORIES}`} className={styles.header__catalogLinkMain}>
                <div className={styles.header__catalogWrapper}>
                  <IconCategories className={styles.header__svg} />
                  <Paragraph className={styles.header__catalogText}>Все категории</Paragraph>
                </div>
              </CatalogLink>
            </ContextMenuElement>
          )}

          {isScreenLg && (
            <div className={styles.header__tags}>
              {isCategoriesLoading ? (
                <ul className={styles.header__catalogLinkSkeleton}>
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i}>
                        <CatalogLinkSkeleton height={35} width={140} />
                      </li>
                    ))}
                </ul>
              ) : (
                displayedCategories.map(category => (
                  <CatalogLink
                    key={category.id}
                    categorySlug={category.slug}
                    to={`${Routes.CATEGORIES}/${category.slug}`}
                    categoryId={category.id}>
                    {category.name}
                  </CatalogLink>
                ))
              )}
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
