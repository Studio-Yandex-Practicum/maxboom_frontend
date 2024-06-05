import classNames from 'classnames'
import { FC } from 'react'

import IconCompare from '@/assets/icons/IconCompare.svg'
import IconFile from '@/assets/icons/IconFile.svg'
import IconLike from '@/assets/icons/IconLike'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './AccountMenu.module.scss'

/**
 *
 * Компонент меню на странице аккаунта
 */
export const AccountMenu: FC = () => {
  return (
    <section className={styles.accountMenu}>
      <Link to={Routes.COMPARE} className={styles.accountMenu__link}>
        <div className={styles.accountMenu__content}>
          <IconCompare className={styles.accountMenu__icon} />
          <Paragraph className={styles.accountMenu__text}>Сравнение</Paragraph>
        </div>
      </Link>
      <Link to={Routes.FAVORITES} className={styles.accountMenu__link}>
        <div className={styles.accountMenu__content}>
          <IconLike styles={classNames(styles.accountMenu__icon, styles.accountMenu__icon_like)} />
          <Paragraph className={styles.accountMenu__text}>Избранное</Paragraph>
        </div>
      </Link>
      {/*TODO реализовать страницу файлов*/}
      <Link to={Routes.COMPARE} className={styles.accountMenu__link}>
        <div className={styles.accountMenu__content}>
          <IconFile className={classNames(styles.accountMenu__icon, styles.accountMenu__icon_files)} />
          <Paragraph className={styles.accountMenu__text}>Файлы</Paragraph>
        </div>
      </Link>
      <Link to={Routes.COMPARE} className={styles.accountMenu__link}>
        <div className={styles.accountMenu__content}></div>
      </Link>
    </section>
  )
}
