import { useMemo } from 'react'
import classNames from 'classnames'
import Logo from '../logo/Logo'
import Search from '../search/search'
import ArrowIcon from '@/assets/icons/arrow.svg'
import LightningIcon from '@/assets/images/header/lightning.svg'
import ContextMenuElement from '../ContextMenuElement/ContextMenuElement'
import HeaderAccount from '../HeaderAccount/HeaderAccount'
import { PHONE_NUMBER } from '@/shared/constants/constants'
import { headerAccountData } from '@/mockData/headerAccountData'
import { catalogListData } from '@/mockData/catalogListData'
import CatalogLink from '../CatalogLink/CatalogLink'
import { Routes } from '@/shared/config/routerConfig/routes'
import { CatalogLinksId } from '@/shared/config/catalogLinks/catalogLinks'
import Link from '@/shared/ui/Link/Link'
import IconCategories from '@/assets/icons/IconCategories.svg'
import styles from './header.module.scss'

function Header() {
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
        {catalogListData.map((item, index) => (
          <li key={index} className={styles['header__context-menu-item']}>
            <Link to={`${Routes}${item.slug}`} className={styles['header__context-menu-link']}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    ),
    []
  )

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles['header__row-one']}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              {/* TODO замапить список ссылок из конфига чтобы не засорять код
              https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/125 */}
              <li className={styles.header__item}>
                <ContextMenuElement className={styles.header__item} content={aboutUsNode}>
                  О нас
                </ContextMenuElement>
              </li>
              <li className={styles.header__item}>
                <Link to={Routes.BLOG} className={styles.header__link}>
                  Блог
                </Link>
              </li>
              <li className={styles.header__item}>
                <Link to="" className={styles.header__link}>
                  Новости
                </Link>
              </li>
              <li className={styles.header__item}>
                <Link to="" className={styles.header__link}>
                  Отзывы о магазине
                </Link>
              </li>
              <li className={styles.header__item}>
                <Link to="" className={styles.header__link}>
                  Контакты
                </Link>
              </li>
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
          <Logo width="138px" height="46px" />
          <Search />
          <HeaderAccount {...headerAccountData} />
        </div>

        <div className={styles['header__row-three']}>
          <ContextMenuElement content={catalogNode}>
            {/* @TODO: вставить путь когда будет роут */}
            <CatalogLink to="" className={styles['header__catalog-link_main']}>
              <div className={styles['header__catalog-wrapper']}>
                <IconCategories className={styles['header__svg']} />
                <p className={styles['header__catalog-text']}>Все категории</p>
              </div>
            </CatalogLink>
          </ContextMenuElement>

          <div className={styles['header__tags']}>
            <CatalogLink to={Routes.PRODUCTS + CatalogLinksId.TRANSMIT}>GPS-треккеры</CatalogLink>
            <CatalogLink to={Routes.PRODUCTS + CatalogLinksId.GPS_TRACK}>SSD-накопители</CatalogLink>
            <CatalogLink to={Routes.PRODUCTS + CatalogLinksId.SSD}>Автозапчасти</CatalogLink>
            <CatalogLink to={Routes.PRODUCTS + CatalogLinksId.AUTO_PARTS}>
              Автомобильные зарядные устройства
            </CatalogLink>
            <CatalogLink to={Routes.PRODUCTS + CatalogLinksId.CAR_CHARGES}>Автосканеры</CatalogLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
