import React from 'react'
import Logo from '../logo/logo'
import Search from '../search/search'
import styles from './header.module.scss'
import down from '../../images/header/arrow_down.svg'
import catalog from '../../images/header/catalog.svg'
import lightning from '../../images/header/lightning.svg'
import ContextMenuElement from '../context-menu-element/context-menu-element'
import HeaderAccount from '../header-account/header-account'
import { PHONE_NUMBER } from '../../utils/constants'
import { headerAccountData } from '../../mockData/headerAccountData'
import { catalogListData } from '../../mockData/catalogListData'
import CatalogLink from '../catalog-link/catalog-link'

function Header() {
  const aboutUsNode = (
    <ul className={`${styles['header__context-menu-list']}`}>
      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          О нас
        </a>
      </li>
      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          Политика безопасности
        </a>
      </li>
      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          Обзоры
        </a>
      </li>
      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          Условия соглашения
        </a>
      </li>
    </ul>
  )
  const contactNode = (
    <ul className={`${styles['header__context-menu-list']}`}>
      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          {PHONE_NUMBER}
        </a>
      </li>
      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          Обратный звонок
        </a>
      </li>
    </ul>
  )
  const supportNode = (
    <ul className={`${styles['header__context-menu-list']}`}>
      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          Информация о доставке
        </a>
      </li>

      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          Возвраты
        </a>
      </li>
      <li className={`${styles['header__context-menu-item']}`}>
        <a href="#" className={`${styles['header__context-menu-link']}`}>
          Подарочные сертификаты
        </a>
      </li>
    </ul>
  )
  const catalogNode = (
    <ul className={`${styles['header__context-menu-list']}`}>
      {catalogListData.map((item, index) => (
        <li key={index} className={`${styles['header__context-menu-item']}`}>
          <a href={item.url} className={`${styles['header__context-menu-link']}`}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
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
                <a href="/shopblog" className={`${styles.header__link}`}>
                  Блог
                </a>
              </li>
              <li className={`${styles.header__item}`}>
                <a href="/shopnews" className={`${styles.header__link}`}>
                  Новости
                </a>
              </li>
              <li className={`${styles.header__item}`}>
                <a href="/store-reviews" className={`${styles.header__link}`}>
                  Отзывы о магазине
                </a>
              </li>
              <li className={`${styles.header__item}`}>
                <a href="/contact-us" className={`${styles.header__link}`}>
                  Контакты
                </a>
              </li>
              <ContextMenuElement className={`${styles.header__item}`} content={supportNode}>
                <img src={lightning} alt="молния" className={`${styles['header__phone-icon']}`} />
                <a href="#" className={`${styles.header__link}`}>
                  Помощь
                </a>
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
          <Logo />
          <Search />
          <HeaderAccount {...headerAccountData} />
        </div>

        <div className={`${styles['header__row-three']}`}>
          <ContextMenuElement content={catalogNode}>
            <CatalogLink className={`${styles['header__catalog-link_main']}`}>
              <div className={`${styles['header__catalog-wrapper']}`}>
                <img src={catalog} alt="catalog" className={`${styles['header__catalog-icon']}`} />
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
