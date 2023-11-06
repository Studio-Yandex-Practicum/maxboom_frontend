import React, { ButtonHTMLAttributes, FC } from 'react'
import style from './Button.module.scss'
import classNames from 'classnames'
export enum ButtonTheme {
  OUTLINE = 'outline',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export enum ButtonSize {
  M = 'medium',
  S = 'small',
  L = 'big'
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
  disabled?: boolean
}

export const Button: FC<ButtonProps> = props => {
  const { className, children, theme, disabled, design = ButtonDesign.SQUARE, size = ButtonSize.M, ...rest } = props

  const additionalClasses = [
    className,
    theme && style[theme],
    style[size],
    { [style.disabled]: disabled },
    style[design]
  ]

  return (
    <button type="button" disabled={disabled} className={classNames(style.button, additionalClasses)} {...rest}>
      {children}
    </button>
  )
}
