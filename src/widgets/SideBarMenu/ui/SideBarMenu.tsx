import { KeyboardEvent, FC } from 'react'
import { useNavigate } from 'react-router-dom'

import SideBar from '@/features/SideBar'
import { userData, noUserData } from '@/mockData/sideBarProfileData'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'

import styles from './SideBarMenu.module.scss'

export interface ISideBarMenu {
  user: string
  handleLogOut: () => void
}

/**
 * Компонент SideBarMenu раскрывающийся в бургер меню
 * @param {string} user - данные пользователя;
 * @param {function} handleLogOut - функция выхода из профиля handleLogOut;
 */

const SideBarMenu: FC<ISideBarMenu> = ({ user, handleLogOut }) => {
  const navigate = useNavigate()

  const data = user ? userData : noUserData

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, index: string) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      navigate(index)
    }
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      handleLogOut()
    }
  }

  return (
    <section className={styles.sideBar}>
      {user && (
        <Heading type={HeadingType.NORMAL} className={styles.sideBar__heading}>
          {user}
        </Heading>
      )}

      <ul role="list" className={styles.sideBar__list}>
        {data &&
          data.map((item, index) => (
            <SideBar key={index} isVisible={true} title={item.title}>
              <ul role="list" className={styles.sideBar__sublinks}>
                {item.routes?.map((el, i) => (
                  <li key={i}>
                    <Link
                      role="link"
                      onKeyDown={e => handleKeyDown(e, el.route)}
                      to={el.route}
                      className={styles.sideBar__sublink}>
                      {el.subtitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </SideBar>
          ))}
      </ul>
      {user && <SideBar onKeyUp={handleKeyUp} onClick={handleLogOut} isVisible={false} title="Выход" />}
    </section>
  )
}

export default SideBarMenu
