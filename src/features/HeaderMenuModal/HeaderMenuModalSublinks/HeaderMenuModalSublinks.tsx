import { FC } from 'react'

import Link from '@/shared/ui/Link/Link'

import HeaderMenuModalHeading from '../HeaderMenuModalHeading/HeaderMenuModalHeading'
import { IData } from '../model/types/types'

import styles from './HeaderMenuModalSublinks.module.scss'

export interface IHeaderMenuModalSublinks {
  isActive?: boolean
  choice?: number
  index?: number
  item?: IData
  handleClose?: () => void
}

/**
 * Компонент модального окна HeaderMenuModal, отвечающий за развертывание роутов и их названий
 * @param {boolean} isActive - булево значение;
 * @param {number} choice - изменяемое состояние индекса;
 * @param {number} index - индекс выбранной кнопки;
 * @param {object} item - обьект массива;
 * @param {function} handleClose - функция закрытия модального окна;
 */

const HeaderMenuModalSublinks: FC<IHeaderMenuModalSublinks> = ({
  isActive,
  choice,
  index,
  item,
  handleClose
}) => {
  return (
    <>
      {choice === index && (
        <div className={styles.headerMenuModalSublinks}>
          <HeaderMenuModalHeading />
          <ul role="list">
            {isActive &&
              choice === index &&
              item?.routes?.map((el, i) => (
                <li role="link" key={i}>
                  <Link
                    to={el.route || '#'}
                    onClick={handleClose}
                    className={styles.headerMenuModalSublinks__route}>
                    {el.subtitle}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default HeaderMenuModalSublinks
