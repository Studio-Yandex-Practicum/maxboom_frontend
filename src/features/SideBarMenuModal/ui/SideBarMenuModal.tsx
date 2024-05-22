import { KeyboardEventHandler, KeyboardEvent, FC, useState } from 'react'
import { useNavigate } from 'react-router'

import { useUser } from '@/entities/User/model/hooks/useUser'
import { userData, noUserData } from '@/mockData/sideBarProfileData'
import { Routes } from '@/shared/config/routerConfig/routes'
import { Button } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import SideBarLink from '../SideBarLink/SideBarLink'
import SideBarSublinks from '../SideBarSublinks/SideBarSublinks'

import styles from './SideBarMenuModal.module.scss'

export interface ISideBarMenuModal {
  handleClose?: () => void
  onKeyUp?: KeyboardEventHandler<HTMLDivElement>
  handleLogOut?: () => void
}

/**
 * Модальное окно SideBarMenuModal
 * @param {function} handleClose - функция установки булевого значения, для обозначения состояние процесса закрытия модального окна;
 * @param {function} onKeyUp - функция обнуляющая пользователя по нажатии клавиши Enter;
 * @param {function} handleLogOut - функция обнуляющая пользователя по клику мышки;
 */

const SideBarMenuModal: FC<ISideBarMenuModal> = ({ handleClose, onKeyUp, handleLogOut }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [choice, setChoice] = useState<number>(0)
  const navigate = useNavigate()
  const { email } = useUser()

  const data = email ? userData : noUserData

  const handleClick = (index: number) => {
    setChoice(index)
    setIsActive(!isActive)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>, index: number) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      setChoice(index)
      setIsActive(!isActive)
    }
  }

  const logoutBtnHandle = () => {
    handleLogOut && handleLogOut()
    navigate(Routes.LOGOUT)
  }

  return (
    <div className={styles.sideBarMenuModal}>
      <div className={styles.sideBarMenuModal__container}>
        {email && !isActive && <Heading type={HeadingType.SMALL}>{email}</Heading>}

        <ul role="list" className={styles.sideBarMenuModal__list}>
          {data &&
            data.map((item, index) => (
              <li key={index} onKeyDown={e => handleKeyDown(e, index)} onClick={() => handleClick(index)}>
                {!isActive ? (
                  <SideBarLink isVisible={true} title={item.title} />
                ) : (
                  <SideBarSublinks
                    isActive={isActive}
                    choice={choice}
                    index={index}
                    item={item}
                    title={item.title}
                  />
                )}
              </li>
            ))}

          {email && !isActive && (
            <SideBarLink onKeyUp={onKeyUp} onClick={logoutBtnHandle} isVisible={false} title="Выход" />
          )}
        </ul>
      </div>

      <Button className={styles.sideBarMenuModal__button} type="button" onClick={handleClose}>
        Закрыть
      </Button>
    </div>
  )
}

export default SideBarMenuModal
