import { FC } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import { Button } from '@/shared/ui/Button/Button'

import styles from './HeaderMenuModalLink.module.scss'

interface IHeaderMenuModalLink {
  title?: string
  isVisible?: boolean
  onClick?: () => void
}

/**
 * Компонент модального окна HeaderMenuModal, отвечающий за развертывание кнопок с именами обьектов массива;
 * @param {string} title - название линка;
 * @param {boolean} isVisible - значение позволяющее показывать иконку стрелки;
 * @param {function} onClick -  - функция переключения активности;
 */

const HeaderMenuModalLink: FC<IHeaderMenuModalLink> = ({ title, isVisible, onClick }) => {
  return (
    <Button onClick={onClick} className={styles.headerMenuModalLink}>
      {title}
      {isVisible && <ArrowIcon className={styles.headerMenuModalLink__arrow} />}
    </Button>
  )
}

export default HeaderMenuModalLink
