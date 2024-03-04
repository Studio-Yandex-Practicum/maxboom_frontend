import classNames from 'classnames'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { selectCategories, selectDisplayedCategories } from '@/entities/Category/selectors/categorySelectors'
import { fetchCategories } from '@/entities/Category/slice/categorySlice'
import HeaderAccount from '@/entities/HeaderAccount/HeaderAccount'
import CallBack from '@/features/CallBack'
import SearchProduct from '@/features/SearchProduct'
import { Routes } from '@/shared/config/routerConfig/routes'
import ArrowIcon from '@/shared/icons/arrow.svg'
import IconCategories from '@/shared/icons/IconCategories.svg'
import { linkItems } from '@/shared/mockData/catalogListData'
import { headerAccountData } from '@/shared/mockData/headerAccountData'
import CatalogLink from '@/shared/ui/CatalogLink/CatalogLink'
import ContextMenuElement from '@/shared/ui/ContextMenuElement/ContextMenuElement'
import Link from '@/shared/ui/Link/Link'
import Logo from '@/shared/ui/logo/Logo'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import CatalogNodeItem from '@/widgets/CatalogNodeItem/CatalogNodeItem'
import NavigationLink from '@/widgets/NavigationLink/NavigationLink'

import styles from './header.module.scss'
import LightningIcon from './icons/lightning.svg'
import { getCoreBaseHeaderSelector } from './model/selectors/selectors'
import { getCoreBaseHeader } from './model/services/getCoreBaseHeader'
import ListItemButton from './ui/ListItemButton'
import ListItemLink from './ui/ListItemLink'

function Header() {
  const dispatch = useDispatch<AppDispatch>()
  const categories = useSelector(selectCategories)
  const coreBaseData = useSelector(getCoreBaseHeaderSelector)
  const displayedCategories = useSelector(selectDisplayedCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const phoneNumber = coreBaseData.header.support.phone_number

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const aboutUsNode = useMemo(
    () => (
      <ul className={styles['header__context-menu-list']}>
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
      <ul className={styles['header__context-menu-list']}>
        <ListItemLink to={`tel:${phoneNumber}`}>{phoneNumber}</ListItemLink>
        <ListItemButton onClick={changeModalState}>Обратный звонок</ListItemButton>
      </ul>
    ),
    [phoneNumber]
  )

  const supportNode = useMemo(
    () => (
      <ul className={styles['header__context-menu-list']}>
        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            Информация о доставке
          </Link>
        </li>

        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            Возвраты
          </Link>
        </li>
        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            Подарочные сертификаты
          </Link>
        </li>
      </ul>
    ),
    []
  )

  const catalogNode = useMemo(
    () => (
      <ul className={styles['header__context-menu-list']}>
        {categories.map(category => (
          <CatalogNodeItem key={category.id} slug={category.slug} name={category.name} />
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
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles['header__row-one']}>
            <nav className={styles.header__nav}>
              <ul className={styles.header__list}>
                <li className={styles.header__item}>
                  <ContextMenuElement className={styles.header__item} content={aboutUsNode}>
                    О нас
                  </ContextMenuElement>
                </li>
                {linkItems.map(item => (
                  <NavigationLink key={item.index} label={item.label} to={item.to} />
                ))}
                <ContextMenuElement className={styles.header__item} content={supportNode}>
                  <LightningIcon className={classNames(styles.header__icon, styles.help_icon)} />
                  Помощь
                </ContextMenuElement>
              </ul>
              <ContextMenuElement className={styles.header__item} content={contactNode} type="right">
                <div className={styles['header__phone-wrapper']}>
                  <Paragraph className={styles.header__text}>{coreBaseData.header.support.name}</Paragraph>
                  <Paragraph className={styles.header__item}>{phoneNumber}</Paragraph>
                  <ArrowIcon className={classNames(styles.header__icon, styles.phone_icon)} />
                </div>
              </ContextMenuElement>
            </nav>
          </div>

          <div className={styles['header__row-two']}>
            <Logo
              image={coreBaseData.header.main_logo.image}
              title={coreBaseData.header.main_logo.title}
              url={coreBaseData.header.main_logo.url}
              width="138px"
              height="46px"
            />
            <SearchProduct />
            <HeaderAccount {...headerAccountData} />
          </div>

          <div className={styles['header__row-three']}>
            <ContextMenuElement content={catalogNode}>
              <CatalogLink to={`${Routes.CATEGORIES}`} className={styles['header__catalog-link_main']}>
                <div className={styles['header__catalog-wrapper']}>
                  <IconCategories className={styles['header__svg']} />
                  <Paragraph className={styles['header__catalog-text']}>Все категории</Paragraph>
                </div>
              </CatalogLink>
            </ContextMenuElement>

            <div className={styles['header__tags']}>
              {displayedCategories.map(category => (
                <CatalogLink key={category.id} to={`${Routes.CATEGORIES}/${category.slug}`}>
                  {category.name}
                </CatalogLink>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
