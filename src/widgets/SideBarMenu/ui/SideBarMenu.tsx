import { KeyboardEvent, FC } from 'react'

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
 * @param {user} string - название разворачивающейся кнопки;
 * @param {handleLogOut} function - название разворачивающейся кнопки; *
 */

const SideBarMenu: FC<ISideBarMenu> = ({ user, handleLogOut }) => {
  const data = user ? userData : noUserData

  const onKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()

      console.log('Link')
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
                      onKeyDown={onKeyDown}
                      to={el.route || '#'}
                      className={styles.sideBar__sublink}>
                      {el.subtitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </SideBar>
          ))}
      </ul>
      {user && <SideBar onClick={handleLogOut} isVisible={false} title="Выход" />}
    </section>
  )
}

export default SideBarMenu
