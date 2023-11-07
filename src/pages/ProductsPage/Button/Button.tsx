import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

export enum EButtonSize {
  XSmall = 'xs',
  Small = 's',
  Medium = 'm',
  Large = 'l'
}

export enum EButtonColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Transparent = 'transparent',
  Outlined = 'outlined',
  Success = 'success'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: EButtonSize
  color: EButtonColor
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
    [styles.buttonXs]: size === EButtonSize.XSmall,
    [styles.buttonS]: size === EButtonSize.Small,
    [styles.buttonM]: size === EButtonSize.Medium,
    [styles.buttonL]: size === EButtonSize.Large,
    [styles.buttonPrimary]: color === EButtonColor.Primary,
    [styles.buttonSecondary]: color === EButtonColor.Secondary,
    [styles.buttonTransparent]: color === EButtonColor.Transparent,
    [styles.buttonOutlined]: color === EButtonColor.Outlined,
    [styles.buttonSuccess]: color === EButtonColor.Success
  })

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}
