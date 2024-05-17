import { FC, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import PhoneIcon from '@/assets/icons/IconPhone.svg'
import ContactCard from '@/entities/ContactCard/ContactCard'
import HeaderAccount from '@/entities/HeaderAccount/HeaderAccount'
import ModalHeading from '@/entities/ModalHeading'
import { headerMenuData } from '@/mockData/headerMenuData'
import { messengerArray } from '@/shared/model/types/messengerArray'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import HeaderMenuModalCatalog from '../HeaderMenuModalCatalog/HeaderMenuModalCatalog'
import HeaderMenuModalLink from '../HeaderMenuModalLink/HeaderMenuModalLink'
import HeaderMenuModalSublinks from '../HeaderMenuModalSublinks/HeaderMenuModalSublinks'
import type { ICategory } from '../model/types/types'

import styles from './HeaderMenuModal.module.scss'

interface IHeaderMenuModal {
  categories?: ICategory[]
  phoneNumber?: string
  isMenuModalOpen?: boolean
  handleClose?: () => void
  counter: number
  total: number
}

/**
 * Модальное окно HeaderMenuModal - открывается по клику на кнопку из трех полосок в левом верхнем углу, при ширине браузера не более 1200px
 * @param {array} categories - массив категорий полученный из редакса;
 * @param {string} phoneNumber - телефон полученный из редакса;
 * @param {boolean} isMenuModalOpen - состояние открытия модального окна;
 * @param {function} handleClose - функция закрытия модального окна;
 */

const HeaderMenuModal: FC<IHeaderMenuModal> = ({
  categories,
  phoneNumber,
  isMenuModalOpen,
  handleClose,
  counter,
  total
}) => {
  const [isActive, setIsActive] = useState(false)
  const [isCatalog, setIsCatalog] = useState(false)
  const [choice, setChoice] = useState(0)

  const handleClick = (index: number) => {
    setChoice(index)
    setIsActive(!isActive)
  }

  const handleCategory = () => {
    setIsActive(!isActive)
    setIsCatalog(!isCatalog)
  }

  const handleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.headerMenuModal}>
      {!isActive && !isCatalog && (
        <>
          <ModalHeading handleClose={handleClose} title="Меню" />

          <div className={styles.headerMenuModal__account}>
            <HeaderAccount
              handleClose={handleClose}
              isMenuModalOpen={isMenuModalOpen}
              counter={counter}
              total={total}
            />
          </div>
        </>
      )}

      {!isCatalog ? (
        !isActive && (
          <HeaderMenuModalLink
            categories={categories}
            isVisible={true}
            title="Каталог"
            onClick={handleCategory}
          />
        )
      ) : (
        <HeaderMenuModalCatalog
          handleCategory={handleCategory}
          isCatalog={isCatalog}
          handleClose={handleClose}
          categories={categories}
        />
      )}

      {!isCatalog && (
        <ul>
          {headerMenuData &&
            headerMenuData.map((item, index) => (
              <li key={index}>
                {!isActive ? (
                  <Link
                    onClick={item.link === null ? () => handleClick(index) : handleClose}
                    to={item.link || '#'}>
                    <HeaderMenuModalLink isVisible={item.link === null ? true : false} title={item.title} />
                  </Link>
                ) : (
                  <HeaderMenuModalSublinks
                    handleCategory={handleMenu}
                    handleClose={handleClose}
                    isActive={isActive}
                    choice={choice}
                    index={index}
                    item={item}
                  />
                )}
              </li>
            ))}
        </ul>
      )}

      {!isActive && !isCatalog && (
        <div className={styles.headerMenuModal__container}>
          <Link to={`tel:${phoneNumber}`} className={styles.headerMenuModal__support}>
            Поддержка:&nbsp;
            <PhoneIcon />
            &nbsp;
            {phoneNumber || <Skeleton count={1} />}
          </Link>
          <Paragraph className={styles.headerMenuModal__workHours}>Будни, с 10.00 до 20.00</Paragraph>
          <ul className={styles.headerMenuModal__contactList}>
            {messengerArray.map(item => (
              <ContactCard
                isMenuModalOpen={isMenuModalOpen}
                messenger={item}
                key={item.id}
                Icon={item.icon}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default HeaderMenuModal
