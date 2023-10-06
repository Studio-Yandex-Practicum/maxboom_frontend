import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import Search from '../search/search'
import styles from './header.module.scss'
import down from '../../assets/images/header/arrow_down.svg'
import lightning from '../../assets/images/header/lightning.svg'
import ContextMenuElement from '../ContextMenuElement/ContextMenuElement'
import HeaderAccount from '../HeaderAccount/HeaderAccount'
import { PHONE_NUMBER } from '../../constants/constants'
import { headerAccountData } from '../../mockData/headerAccountData'
import { catalogListData } from '../../mockData/catalogListData'
import CatalogLink from '../CatalogLink/CatalogLink'

function Header() {
  const aboutUsNode = useMemo(
    () => (
      <ul className={`${styles['header__context-menu-list']}`}>
        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            О нас
          </Link>
        </li>
        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            Политика безопасности
          </Link>
        </li>
        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            Обзоры
          </Link>
        </li>
        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            Условия соглашения
          </Link>
        </li>
      </ul>
    ),
    []
  )

  const contactNode = useMemo(
    () => (
      <ul className={`${styles['header__context-menu-list']}`}>
        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            {PHONE_NUMBER}
          </Link>
        </li>
        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            Обратный звонок
          </Link>
        </li>
      </ul>
    ),
    []
  )

  const supportNode = useMemo(
    () => (
      <ul className={`${styles['header__context-menu-list']}`}>
        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            Информация о доставке
          </Link>
        </li>

        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            Возвраты
          </Link>
        </li>
        <li className={`${styles['header__context-menu-item']}`}>
          <Link to="" className={`${styles['header__context-menu-link']}`}>
            Подарочные сертификаты
          </Link>
        </li>
      </ul>
    ),
    []
  )

  const catalogNode = useMemo(
    () => (
      <ul className={`${styles['header__context-menu-list']}`}>
        {catalogListData.map((item, index) => (
          <li key={index} className={`${styles['header__context-menu-item']}`}>
            <Link to={item.url} className={`${styles['header__context-menu-link']}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    ),
    []
  )

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.header__container}`}>
        <div className={`${styles['header__row-one']}`}>
          <nav className={`${styles.header__nav}`}>
            <ul className={`${styles.header__list}`}>
              <li className={`${styles.header__item}`}>
                <ContextMenuElement className={`${styles.header__item}`} content={aboutUsNode}>
                  О нас
                </ContextMenuElement>
              </li>
              <li className={`${styles.header__item}`}>
                <Link to="" className={`${styles.header__link}`}>
                  Блог
                </Link>
              </li>
              <li className={`${styles.header__item}`}>
                <Link to="" className={`${styles.header__link}`}>
                  Новости
                </Link>
              </li>
              <li className={`${styles.header__item}`}>
                <Link to="" className={`${styles.header__link}`}>
                  Отзывы о магазине
                </Link>
              </li>
              <li className={`${styles.header__item}`}>
                <Link to="" className={`${styles.header__link}`}>
                  Контакты
                </Link>
              </li>
              <ContextMenuElement className={`${styles.header__item}`} content={supportNode}>
                <img src={lightning} alt="молния" className={`${styles['header__phone-icon']}`} />
                Помощь
              </ContextMenuElement>
            </ul>
            <ContextMenuElement className={`${styles.header__item}`} content={contactNode} type="right">
              <div className={`${styles['header__phone-wrapper']}`}>
                <p className={`${styles.header__text}`}>Поддержка</p>
                <p className={`${styles.header__item}`}>{PHONE_NUMBER}</p>
                <img src={down} alt="стрелка вниз" className={`${styles['header__phone-icon']}`} />
              </div>
            </ContextMenuElement>
          </nav>
        </div>

        <div className={`${styles['header__row-two']}`}>
          <Logo width="138px" height="46px" />
          <Search />
          <HeaderAccount {...headerAccountData} />
        </div>

        <div className={`${styles['header__row-three']}`}>
          <ContextMenuElement content={catalogNode}>
            <CatalogLink className={`${styles['header__catalog-link_main']}`}>
              <div className={`${styles['header__catalog-wrapper']}`}>
                <svg
                  className={`${styles['header__svg']}`}
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_623)">
                    <path d="M3 0H2C0.89543 0 0 0.89543 0 2V3C0 4.10457 0.89543 5 2 5H3C4.10457 5 5 4.10457 5 3V2C5 0.89543 4.10457 0 3 0Z" />
                    <path d="M3 6H2C0.89543 6 0 6.89543 0 8V9C0 10.1046 0.89543 11 2 11H3C4.10457 11 5 10.1046 5 9V8C5 6.89543 4.10457 6 3 6Z" />
                    <path d="M9 6H8C6.89543 6 6 6.89543 6 8V9C6 10.1046 6.89543 11 8 11H9C10.1046 11 11 10.1046 11 9V8C11 6.89543 10.1046 6 9 6Z" />
                    <path d="M9 0H8C6.89543 0 6 0.89543 6 2V3C6 4.10457 6.89543 5 8 5H9C10.1046 5 11 4.10457 11 3V2C11 0.89543 10.1046 0 9 0Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_623">
                      <rect width="11" height="11" fill="black" />
                    </clipPath>
                  </defs>
                </svg>
                <p className={`${styles['header__catalog-text']}`}>Все категории</p>
              </div>
            </CatalogLink>
          </ContextMenuElement>

          <div className={`${styles['header__tags']}`}>
            <CatalogLink>GPS-треккеры</CatalogLink>
            <CatalogLink>SSD-накопители</CatalogLink>
            <CatalogLink>Автозапчасти</CatalogLink>
            <CatalogLink>Автомобильные зарядные устройства</CatalogLink>
            <CatalogLink>Автосканеры</CatalogLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
