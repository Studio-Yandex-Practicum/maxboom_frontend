import { FC } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import Link from '@/shared/ui/Link/Link'

import styles from './LinkButton.module.scss'

interface ILinkButton {
  link: string
  text: string
}

/**
 * Компонент LinkButton - используется как кнопка перехода
 * @param {string} link - массив категорий полученный из редакса;
 * @param {string} text - телефон полученный из редакса;
 */

const LinkButton: FC<ILinkButton> = ({ link, text }) => {
  return (
    <li className={styles.linkCard}>
      <Link to={link} className={styles.linkCard__link}>
        <span>{text}</span>
        <ArrowIcon className={styles.linkCard__arrow} />
      </Link>
    </li>
  )
}

export default LinkButton
