import React, { ButtonHTMLAttributes } from 'react'
import style from './Button.module.scss'

export enum ButtonTheme {
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.BACKGROUND, disabled, size = ButtonSize.M, ...rest } = props

  return (
    <button
      type="button"
      disabled={disabled}
      className={[style.button, style[theme], className, style[size]].join(' ')}
      {...rest}>
      {children}
    </button>
  )
}
