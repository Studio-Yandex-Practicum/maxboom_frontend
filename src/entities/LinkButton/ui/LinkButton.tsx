import { FC } from 'react'

import ArrowIcon from '@/assets/icons/IconArrowRight.svg'
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
    <li className={styles.linkButton}>
      <Link to={link} className={styles.linkButton__link}>
        <div className={styles.linkButton__arrowBox}>
          <ArrowIcon className={styles.linkButton__arrow} />
        </div>
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default LinkButton
