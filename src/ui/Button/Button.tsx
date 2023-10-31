import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

export type ButtonProps = {
  size: 'xs' | 's' | 'm' | 'l'
  color: 'primary' | 'secondary' | 'transparent' | 'success'
  onClick: () => void
  children: React.ReactNode
}

/**
 * Компонент кнопки.
 * Изначально проектировался для компонентов страницы Products.
 * Возможно, пойдет в shared/ui.
 * @param {string} size - размер кнопки (xs, s, m, l);
 * @param {string} color - тип/цвет кнопки (primary, secondary, прозрачная, активная);
 * @param {function} onClick - функция-обработчик клика по кнопке;
 * @param {function} children - пропс-ребенок - то, что внутри кнопки;
 */
export const Button: React.FC<ButtonProps> = ({ size, color, onClick, children }) => {
  const buttonClasses = classNames(styles.button, {
    [styles.buttonXs]: size === 'xs',
    [styles.buttonS]: size === 's',
    [styles.buttonM]: size === 'm',
    [styles.buttonL]: size === 'l',
    [styles.buttonPrimary]: color === 'primary',
    [styles.buttonSecondary]: color === 'secondary',
    [styles.buttonTransparent]: color === 'transparent',
    [styles.buttonSuccess]: color === 'success'
  })

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}
