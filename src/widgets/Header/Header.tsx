import classNames from 'classnames'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import ArrowIcon from '@/assets/icons/arrow.svg'
import IconCategories from '@/assets/icons/IconCategories.svg'
import LightningIcon from '@/assets/images/header/lightning.svg'
import CatalogLink from '@/components/CatalogLink/CatalogLink'
import ContextMenuElement from '@/components/ContextMenuElement/ContextMenuElement'
import HeaderAccount from '@/components/HeaderAccount/HeaderAccount'
import { selectCategories, selectDisplayedCategories } from '@/entities/Category/selectors/categorySelectors'
import { fetchCategories } from '@/entities/Category/slice/categorySlice'
import SearchProduct from '@/features/SearchProduct'
import { linkItems } from '@/mockData/catalogListData'
// import { coreBaseData } from '@/mockData/coreBaseData'
import { headerAccountData } from '@/mockData/headerAccountData'
import { Routes } from '@/shared/config/routerConfig/routes'
import { PHONE_NUMBER } from '@/shared/constants/constants'
import Link from '@/shared/ui/Link/Link'
import Logo from '@/shared/ui/logo/Logo'
import CatalogNodeItem from '@/widgets/CatalogNodeItem/CatalogNodeItem'
import NavigationLink from '@/widgets/NavigationLink/NavigationLink'

import styles from './header.module.scss'
import { getCoreBaseHeaderSelector } from './model/selectors/selectors'
import { getCoreBaseHeader } from './model/services/getCoreBaseHeader'

function Header() {
  const dispatch = useDispatch<AppDispatch>()
  const categories = useSelector(selectCategories)
  const coreBaseData = useSelector(getCoreBaseHeaderSelector)
  const displayedCategories = useSelector(selectDisplayedCategories)

  const aboutUsNode = useMemo(
    () => (
      <ul className={styles['header__context-menu-list']}>
        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            О нас
          </Link>
        </li>
        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            Политика безопасности
          </Link>
        </li>
        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            Обзоры
          </Link>
        </li>
        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            Условия соглашения
          </Link>
        </li>
      </ul>
    ),
    []
  )

  const contactNode = useMemo(
    () => (
      <ul className={styles['header__context-menu-list']}>
        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            {PHONE_NUMBER}
          </Link>
        </li>
        <li className={styles['header__context-menu-item']}>
          <Link to="" className={styles['header__context-menu-link']}>
            Обратный звонок
          </Link>
        </li>
      </ul>
    ),
    []
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
                <p className={styles.header__text}>Поддержка</p>
                <p className={styles.header__item}>{PHONE_NUMBER}</p>
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
            <CatalogLink to="" className={styles['header__catalog-link_main']}>
              <div className={styles['header__catalog-wrapper']}>
                <IconCategories className={styles['header__svg']} />
                <p className={styles['header__catalog-text']}>Все категории</p>
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
  )
}

export default Header
