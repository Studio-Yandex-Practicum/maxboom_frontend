import { FC } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'

import styles from './HeadingBlock.module.scss'

interface IHeadingBlock {
  title: string
  isIcon?: boolean
  image?: string
  alt?: string
  isLink?: boolean
  subtitle?: string
  link?: string
}

/**
 * Компонент HeadingBlock - это заголовок с отдельным линком. Отрисовывается на главной странице MainPage в блоках новостей, отзывов и т.п.
 * @param {string} title - заголовок блока
 * @param {boolean} isIcon - булево значение показывающее линк
 * @param {string} image - картинка в заголовке блока
 * @param {string} alt - alt картинки в заголовке блока
 * @param {boolean} isLink - булево значение показывающее линк
 * @param {string} subtitle - название линка
 * @param {string} link - ссылка
 */

const HeadingBlock: FC<IHeadingBlock> = ({
  title,
  isIcon = false,
  image,
  alt,
  isLink = false,
  subtitle,
  link
}) => {
  return (
    <article className={styles.headingBlock}>
      <Heading type={HeadingType.NORMAL} className={styles.headingBlock__heading}>
        {title}
        {isIcon && <img src={image} alt={alt} />}
      </Heading>
      {isLink && (
        <Link to={link} className={styles.headingBlock__link}>
          {subtitle}
          <ArrowIcon className={styles.headingBlock__arrow} />
        </Link>
      )}
    </article>
  )
}

export default HeadingBlock
