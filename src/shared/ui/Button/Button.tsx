import React, { ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import style from './Button.module.scss'

export enum ButtonTheme {
  OUTLINE = 'outline',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success'
}

export enum ButtonSize {
  M = 'medium',
  S = 'small',
  L = 'big',
  XS = 'xsmall'
}

export enum ButtonDesign {
  SQUARE = 'square',
  ROUND = 'round'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  design?: ButtonDesign
  size?: ButtonSize
}

/**
 * компонент Button
 * @param {ButtonTheme} props.theme - тема представления
 * @param {ButtonSize} props.size - размер
 * @param {ButtonDesign} props.design - дизайн (круг, квадрат)
 * @param {boolean} props.disabled - отключение нажатий по кнопке
 */

export const Button: FC<ButtonProps> = props => {
  const { className, children, theme, design = ButtonDesign.SQUARE, size = ButtonSize.M, ...rest } = props

  const additionalClasses = [className, theme && style[theme], style[size], style[design]]

  return (
    <button type="button" className={classNames(style.button, additionalClasses)} {...rest}>
      {children}
    </button>
  )
}
