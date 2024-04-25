import { useState, type FC } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import { ISideBar } from '../model/types/types'

import styles from './SideBar.module.scss'

/**
 * Компонент SideBar - кнопка, раскрывающаяся в бургер меню
 * @param {title} string - название разворачивающейся кнопки;
 * @param {isVisible} boolean - атрибут дающий видимость иконке стрелочки;
 * @param {onClick} function - название разворачивающейся кнопки; *
 * @param {children} JSX.Element - контент;
 */

const SideBar: FC<ISideBar> = ({ title, isVisible, onClick, children }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div onClick={onClick} className={styles.sideBar}>
      <div onClick={handleClick} className={styles.sideBar__header}>
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
    </div>
  )
}

export default SideBar
