import { KeyboardEvent, FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getSideBarAuth, getSideBarUnAuth } from '@/entities/SideBarEntity/model/functions/sideBarOptions'
import { useLogout } from '@/features/login/model/hooks/useLogout'
import { getCurrentUserEmail } from '@/features/login/model/selectors/getUserAuthStatus'
import SideBar from '@/features/SideBar'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'

import styles from './SideBarMenu.module.scss'

/**
 * Компонент SideBarMenu раскрывающийся в бургер меню
 */

const SideBarMenu: FC = () => {
  const navigate = useNavigate()
  const email = useSelector(getCurrentUserEmail)
  const logoutHandle = useLogout()

  const data = useMemo(() => {
    return email ? getSideBarAuth() : getSideBarUnAuth()
  }, [email])

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, index: string) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      navigate(index)
    }
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      logoutHandle()
    }
  }

  return (
    <section className={styles.sideBar}>
      {email && (
        <Heading type={HeadingType.NORMAL} className={styles.sideBar__heading}>
          {email}
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
      {email && <SideBar onKeyUp={handleKeyUp} onClick={logoutHandle} isVisible={false} title="Выход" />}
    </section>
  )
}

export default SideBarMenu
