import { KeyboardEvent, KeyboardEventHandler, ReactElement, useState, type FC, useEffect } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import { TCategorySidebar } from '@/features/SideBar/model/types/types'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './SideBar.module.scss'

interface ISideBar {
  title?: string
  isVisible?: boolean
  onClick?: () => void
  onKeyUp?: KeyboardEventHandler<HTMLLIElement>
  children?: ReactElement | JSX.Element | JSX.Element[]
  categorySidebar?: TCategorySidebar | undefined
}

/**
 * Компонент SideBar - кнопка, раскрывающаяся в бургер меню
 * @param {string} title - название разворачивающейся кнопки;
 * @param {boolean} isVisible - атрибут дающий видимость иконке стрелочки;
 * @param {function} onClick - функция выхода из профиля handleLogOut;
 * @param {function} onKeyUp - функция выхода из профиля handleLogOut при нажатии клавиши Enter;
 * @param {JSX.Element} children - контент;
 * Далее, для сайдбара на странице категори;
 * @param {
 * to: string,
 * activeElement: MainCategoryInfo | BranchesData,
 * branch: MainCategoryInfo | BranchesData,
 * itemName: string
 * } categorySidebar - объект с параметрами для сайдбара на странице категори;
 */
const SideBar: FC<ISideBar> = ({ title, isVisible, onClick, onKeyUp, children, categorySidebar }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (
      categorySidebar?.activeElement?.name === categorySidebar?.itemName &&
      categorySidebar?.activeElement !== undefined
    ) {
      setIsActive(true)
    } else if (categorySidebar?.branch) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [categorySidebar?.activeElement?.slug, categorySidebar?.branch])

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
        {categorySidebar?.to ? (
          <Link to={categorySidebar?.to}>
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
