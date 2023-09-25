import React from 'react'
import styles from './logo.module.scss'
import logo from '../../images/logo/maxboom.jpg'

function Logo() {
  return (
    <div className={`${styles.container}`}>
      <a href="#" className={`${styles.link}`} title="Интернет-магазин maxboom.ru">
        <img src={logo} alt="maxboom" className={`${styles.logo}`} />
      </a>
    </div>
  )
}

export default Logo
