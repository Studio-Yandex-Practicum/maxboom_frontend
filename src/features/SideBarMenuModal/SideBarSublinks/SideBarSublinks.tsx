import { KeyboardEvent, FC } from 'react'
import { useNavigate } from 'react-router-dom'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'

import { IData } from '../model/types/types'

import styles from './SideBarSublinks.module.scss'

export interface ISideBarSublinks {
  isActive?: boolean
  choice?: number
  index?: number
  item?: IData
  title?: string
}

/**
 * Компонент модального окна SideBarMenuModal, отвечающий за развертывание роутов и их названий
 * @param {boolean} isActive - булево значение;
 * @param {number} choice - изменяемое состояние индекса;
 * @param {number} index - индекс выбранной кнопки;
 * @param {object} item - обьект массива;
 * @param {string} title - заголовок обьекта массива;
 */

const SideBarSublinks: FC<ISideBarSublinks> = ({ isActive, choice, index, item, title }) => {
  const navigate = useNavigate()

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, index: string) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      navigate(index)
    }
  }

  return (
    <>
      {choice === index && (
        <div className={styles.sideBarSublinks}>
          <div tabIndex={0} role="button" className={styles.sideBarSublinks__header}>
            <ArrowIcon className={styles.sideBarSublinks__headerArrow} />
            <Heading type={HeadingType.SMALL}>{title}</Heading>
          </div>
          <ul role="list" className={styles.sideBarSublinks__routes}>
            {isActive &&
              choice === index &&
              item?.routes?.map((el: IData, i: number) => (
                <li role="link" key={i}>
                  <Link
                    onKeyDown={e => handleKeyDown(e, el.route || '#')}
                    to={el.route || '#'}
                    className={styles.sideBarSublinks__route}>
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

export default SideBarSublinks
