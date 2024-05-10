import { FC } from 'react'

import ArrowIcon from '@/assets/icons/IconHeaderMenuArrow.svg'
import { Button } from '@/shared/ui/Button/Button'

import styles from './HeaderMenuModalHeading.module.scss'

interface IHeaderMenuModalHeading {
  handleCategory?: () => void
}

/**
 * Компонент для отрисовки верхнего болка "Меню" со стрелкой "Назад" в HeaderMenuModal
 * @param {function} handleCategory - функция переключения активности
 */

const HeaderMenuModalHeading: FC<IHeaderMenuModalHeading> = ({ handleCategory }) => {
  return (
    <Button onClick={handleCategory} tabIndex={0} role="button" className={styles.headerMenuModalHeading}>
      <ArrowIcon className={styles.headerMenuModalHeading__arrow} />
      Меню
    </Button>
  )
}

export default HeaderMenuModalHeading
