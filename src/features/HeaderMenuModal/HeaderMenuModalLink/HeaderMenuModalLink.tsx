import { FC } from 'react'

import CatalogIcon from '@/assets/icons/IconCatalog.svg'
import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import { Button } from '@/shared/ui/Button/Button'

import { ICategory } from '../model/types/types'

import styles from './HeaderMenuModalLink.module.scss'

interface IHeaderMenuModalLink {
  title?: string
  categories?: ICategory[]
  isVisible?: boolean
  onClick?: () => void
}

/**
 * Компонент модального окна HeaderMenuModal, отвечающий за развертывание кнопок с именами обьектов массива;
 * @param {string} title - название линка;
 * @param {array} categories - массив категорий полученный из редакса;
 * @param {boolean} isVisible - значение позволяющее показывать иконку стрелки;
 * @param {function} onClick -  - функция переключения активности;
 */

const HeaderMenuModalLink: FC<IHeaderMenuModalLink> = ({ title, categories, isVisible, onClick }) => {
  return (
    <Button onClick={onClick} className={styles.headerMenuModalLink}>
      {isVisible && categories ? (
        <div className={styles.headerMenuModalLink__title}>
          <CatalogIcon className={styles.headerMenuModalLink__iconCatalog} />
          <span>{title}</span>
        </div>
      ) : (
        <span>{title}</span>
      )}
      {isVisible && <ArrowIcon className={styles.headerMenuModalLink__arrow} />}
    </Button>
  )
}

export default HeaderMenuModalLink
