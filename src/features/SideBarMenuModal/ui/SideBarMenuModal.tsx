import { KeyboardEvent, FC, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { getSideBarAuth, getSideBarUnAuth } from '@/entities/SideBarEntity/model/functions/sideBarOptions'
import { useLogout } from '@/features/login/model/hooks/useLogout'
import { getCurrentUserEmail } from '@/features/login/model/selectors/getUserAuthStatus'
import { Button } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import SideBarLink from '../SideBarLink/SideBarLink'
import SideBarSublinks from '../SideBarSublinks/SideBarSublinks'

import styles from './SideBarMenuModal.module.scss'

export interface ISideBarMenuModal {
  handleClose?: VoidFunction
}

/**
 * Модальное окно SideBarMenuModal
 * @param {function} handleClose - функция установки булевого значения, для обозначения состояние процесса закрытия модального окна;
 */

const SideBarMenuModal: FC<ISideBarMenuModal> = ({ handleClose }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [choice, setChoice] = useState<number>(0)
  const logoutHandle = useLogout()
  const email = useSelector(getCurrentUserEmail)

  const data = useMemo(() => {
    return email ? getSideBarAuth() : getSideBarUnAuth()
  }, [email])

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

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      logoutHandle()
    }
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
            <SideBarLink onKeyUp={handleKeyUp} onClick={logoutHandle} isVisible={false} title="Выход" />
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
