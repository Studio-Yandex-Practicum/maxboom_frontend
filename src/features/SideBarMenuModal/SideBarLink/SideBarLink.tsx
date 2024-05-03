import { KeyboardEventHandler, FC } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'

import styles from './SideBarLink.module.scss'

export interface ISideBarLink {
  isVisible?: boolean
  onKeyUp?: KeyboardEventHandler<HTMLDivElement>
  onClick?: () => void
  title?: string
}

/**
 * Компонент модального окна SideBarMenuModal, отвечающий за развертывание названий обьектов массива
 * @param {boolean} isVisible - булево значение скрывающее стрелку;
 * @param {function} onKeyUp - функция обнуляющая пользователя по нажатии клавиши Enter;
 * @param {function} onClick - функция клика по роуту;
 * @param {string} title - название роута;
 */

const SideBarLink: FC<ISideBarLink> = ({ isVisible, onKeyUp, onClick, title }) => {
  return (
    <div tabIndex={0} role="button" onKeyUp={onKeyUp} className={styles.sideBarLink} onClick={onClick}>
      {title}
      {isVisible && <ArrowIcon className={styles.sideBarLink__arrow} />}
    </div>
  )
}

export default SideBarLink
