import { KeyboardEvent, KeyboardEventHandler, ReactElement, useState, type FC, useEffect } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import { BranchesData, MainCategoryInfo } from '@/widgets/CategoryList/types/types'

import styles from './SideBar.module.scss'

export interface ISideBar {
  title?: string
  isVisible?: boolean
  onClick?: () => void
  onKeyUp?: KeyboardEventHandler<HTMLLIElement>
  children?: ReactElement | JSX.Element | JSX.Element[]
  to?: string | undefined
  activeElement?: MainCategoryInfo | BranchesData
  branch?: MainCategoryInfo | BranchesData
  itemName?: string
}

/**
 * Компонент SideBar - кнопка, раскрывающаяся в бургер меню
 * @param {string} title - название разворачивающейся кнопки;
 * @param {boolean} isVisible - атрибут дающий видимость иконке стрелочки;
 * @param {function} onClick - функция выхода из профиля handleLogOut;
 * @param {function} onKeyUp - функция выхода из профиля handleLogOut при нажатии клавиши Enter;
 * @param {JSX.Element} children - контент;
 * Далее, для сайдбара на странице категори;
 * @param {string} to - если есть ссылка для item верхнего уровня, передает путь
 * @param {MainCategoryInfo | BranchesData} activeElement - item верхнего уровня, на который кликнули
 * @param {MainCategoryInfo | BranchesData} branch - item из children, на который кликнули
 * @param {string} itemName - название item, на который кликнули
 */

const SideBar: FC<ISideBar> = ({
  title,
  isVisible,
  onClick,
  onKeyUp,
  children,
  to,
  activeElement,
  branch,
  itemName
}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (activeElement?.name === itemName) {
      setIsActive(!isActive)
    } else if (branch) {
      setIsActive(!isActive)
    }
  }, [activeElement?.slug, branch])

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      e.stopPropagation()
      handleClick()
    }
  }

  return (
    <li tabIndex={0} role="button" onKeyUp={onKeyUp} onKeyDown={handleKeyDown} className={styles.sideBar}>
      <div onClick={handleClick} className={styles.sideBar__header}>
        {to ? (
          <Link to={to}>
            <Paragraph className={styles.sideBar__headerText} onClick={onClick}>
              {title}
            </Paragraph>
          </Link>
        ) : (
          <Paragraph className={styles.sideBar__headerText} onClick={onClick}>
            {title}
          </Paragraph>
        )}
        {isVisible && (
          <ArrowIcon
            onClick={handleClick}
            className={`${styles.sideBar__headerArrow} ${isActive && styles.sideBar__headerArrow_active}`}
          />
        )}
      </div>
      {isVisible && (
        <div
          className={
            isActive
              ? `${styles.sideBar__children}`
              : `${styles.sideBar__children} ${styles.sideBar__children_close}`
          }>
          {isActive && children}
        </div>
      )}
    </li>
  )
}

export default SideBar
