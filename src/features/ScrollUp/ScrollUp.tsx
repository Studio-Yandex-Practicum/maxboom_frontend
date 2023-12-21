import { useState, useEffect } from 'react'
import styles from './ScrollUp.module.scss'
import classNames from 'classnames'
import IconUp from '@/entities/ButtonUp/IconUp'

/*
 * Кнопка Вверх для быстрого перемещения в начало страницы
 */
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return <div> {showTopBtn && <IconUp goToTop={goToTop} className={classNames(styles.iconPosition)} />} </div>
}
export default ScrollToTop
