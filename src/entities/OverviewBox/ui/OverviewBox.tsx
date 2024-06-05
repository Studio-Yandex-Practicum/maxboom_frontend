import { FC } from 'react'

import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './OverviewBox.module.scss'

interface IOverviewBox {
  title: string
  pageRoute: string
  pageRouteText: string
  subtitle?: string
  itemRoute?: string
  itemRouteText?: string
}

/**
 * Компонент OverviewBox - это карточка которая используется в виджете OverviewBlock.
 * @param {string} title - заголовок карточки
 * @param {string} pageRoute - ссылка на общую страницу
 * @param {string} pageRouteText - текст ссылки на общую страницу
 * @param {string} subtitle - текст, если карточка пустая
 * @param {string} itemRoute - ссылка на товар
 * @param {string} itemRouteText - текст ссылки на товар
 */

const OverviewBox: FC<IOverviewBox> = ({
  title,
  pageRoute,
  pageRouteText,
  subtitle,
  itemRoute,
  itemRouteText
}) => {
  return (
    <div className={styles.overviewBox}>
      <div className={styles.overviewBox__title}>
        <Heading type={HeadingType.NORMAL}>{title}</Heading>
        <Link to={pageRoute} className={styles.overviewBox__pageRoute}>
          {pageRouteText}
        </Link>
      </div>
      <Paragraph className={styles.overviewBox__subtitle}>{subtitle}</Paragraph>
      <Link to={itemRoute || '#'} className={styles.overviewBox__itemRouteText}>
        {itemRouteText}
      </Link>
    </div>
  )
}

export default OverviewBox
