import { FC } from 'react'

import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import SideBar from '@/widgets/SideBar'

import { userData, noUserData } from '../model/data/data'
import { ISideBarMenu } from '../model/types/types'

import styles from './SideBarMenu.module.scss'

/**
 * Компонент SideBarMenu раскрывающийся в бургер меню
 * @param {user} string - название разворачивающейся кнопки;
 * @param {handleLogOut} function - название разворачивающейся кнопки; *
 */

const SideBarMenu: FC<ISideBarMenu> = ({ user, handleLogOut }) => {
  const data = user ? userData : noUserData

  return (
    <section className={styles.sideBar}>
      {user && (
        <Heading type={HeadingType.NORMAL} className={styles.sideBar__heading}>
          {user}
        </Heading>
      )}

      <ul className={styles.sideBar__list}>
        {data &&
          data.map((item, index) => (
            <li key={index}>
              <SideBar isVisible={true} title={item.title}>
                <ul className={styles.sideBar__sublinks}>
                  {item.routes?.map((el, i) => (
                    <li key={i}>
                      <Link to={el.route || '#'} className={styles.sideBar__sublink}>
                        {el.subtitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SideBar>
            </li>
          ))}
      </ul>
      {user && <SideBar onClick={handleLogOut} isVisible={false} title="Выход" />}
    </section>
  )
}

export default SideBarMenu
