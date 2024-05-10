import { FC, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router'

import CloseIcon from '@/assets/icons/iconHeaderMenuClose.svg'
import PhoneIcon from '@/assets/icons/IconPhone.svg'
import ContactCard from '@/entities/ContactCard/ContactCard'
import HeaderAccount from '@/entities/HeaderAccount/HeaderAccount'
import { headerMenuData } from '@/mockData/headerMenuData'
import { headerAccountData } from '@/shared/mockData/headerAccountData'
import { messengerArray } from '@/shared/model/types/messengerArray'
import { Button } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import HeaderMenuModalCatalog from '../HeaderMenuModalCatalog/HeaderMenuModalCatalog'
import HeaderMenuModalLink from '../HeaderMenuModalLink/HeaderMenuModalLink'
import HeaderMenuModalSublinks from '../HeaderMenuModalSublinks/HeaderMenuModalSublinks'
import { ICategory } from '../model/types/types'

import styles from './HeaderMenuModal.module.scss'

interface IHeaderMenuModal {
  categories?: ICategory[]
  phoneNumber?: string
  isMenuModalOpen?: boolean
  handleClose?: () => void
}

/**
 * Модальное окно HeaderMenuModal
 * @param {array} categories - массив категорий полученный из редакса;
 * @param {string} phoneNumber - телефон полученный из редакса;
 * @param {boolean} isMenuModalOpen - состояние открытия модального окна;
 * @param {function} handleClose - функция закрытия модального окна;
 */

const HeaderMenuModal: FC<IHeaderMenuModal> = ({ categories, phoneNumber, isMenuModalOpen, handleClose }) => {
  const [isActive, setIsActive] = useState(false)
  const [isCatalog, setIsCatalog] = useState(false)
  const [choice, setChoice] = useState(0)
  const navigate = useNavigate()

  const handleClick = (index: number) => {
    setChoice(index)
    setIsActive(!isActive)
  }

  const handleLink = (route: string) => {
    navigate(route)
    handleClose
  }

  const handleCategory = () => {
    setIsActive(!isActive)
    setIsCatalog(!isCatalog)
  }

  return (
    <div className={styles.headerMenuModal}>
      {!isActive && !isCatalog && (
        <>
          <div className={styles.headerMenuModal__heading}>
            <Button onClick={handleClose} className={styles.headerMenuModal__closeButton}>
              <CloseIcon className={styles.headerMenuModal__closeIcon} />
            </Button>

            <Heading type={HeadingType.NORMAL} className={styles.headerMenuModal__title}>
              Меню
            </Heading>
          </div>

          <div className={styles.headerMenuModal__account}>
            <HeaderAccount
              handleClose={handleClose}
              isMenuModalOpen={isMenuModalOpen}
              {...headerAccountData}
            />
          </div>
        </>
      )}

      {!isCatalog ? (
        !isActive && <HeaderMenuModalLink isVisible={true} title="Каталог" onClick={handleCategory} />
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
              <li
                key={index}
                onClick={() => (item.link === null ? handleClick(index) : handleLink(item.link))}>
                {!isActive ? (
                  <HeaderMenuModalLink isVisible={item.link === null ? true : false} title={item.title} />
                ) : (
                  <HeaderMenuModalSublinks
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