import { ReactElement, useState, type FC } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './SideBar.module.scss'

export interface ISideBar {
  key?: number
  title?: string
  isVisible?: boolean
  onClick?: () => void
  children?: ReactElement | JSX.Element | JSX.Element[]
}

/**
 * Компонент SideBar - кнопка, раскрывающаяся в бургер меню
 * @param {number} key - индекс списка;
 * @param {string} title - название разворачивающейся кнопки;
 * @param {boolean} isVisible - атрибут дающий видимость иконке стрелочки;
 * @param {function} onClick - название разворачивающейся кнопки; *
 * @param {JSX.Element} children - контент;
 */

const SideBar: FC<ISideBar> = ({ key, title, isVisible, onClick, children }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <li key={key} tabIndex={0} onClick={onClick} className={styles.sideBar}>
      <div onClick={handleClick} className={styles.sideBar__header} role="tab">
        <Paragraph className={styles.sideBar__headerText}>{title}</Paragraph>
        {isVisible && (
          <ArrowIcon
            className={`${styles.sideBar__headerArrow} ${isActive && styles.sideBar__headerArrow_close}`}
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
