import styles from './logo.module.scss'
import React, { FC } from 'react'
import logo from '../../assets/images/logo/maxboom.jpg'
import { Link } from 'react-router-dom'

type TLogoProps = {
  width: string
  height: string
}
/**
 * @param {string} width - ширина логотипа
 * @param {string} height  - высота логотипа
 */

const Logo: FC<TLogoProps> = ({ width, height }) => {
  return (
    <div className={`${styles.container}`}>
      <Link to="" className={`${styles.link}`}>
        <img src={logo} alt="maxboom" style={{ width, height }} />
      </Link>
    </div>
  )
}

export default Logo