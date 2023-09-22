import styles from './logo.module.scss'
import logo from '../../images/logo/maxboom.jpg'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type TLogoProps = {
  width: string
  height: string
}

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
