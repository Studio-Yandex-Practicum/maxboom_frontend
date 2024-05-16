import classNames from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

import styles from './Input.module.scss'

export enum InputTheme {
  ACCENT = 'accent',
  NORMAL = 'normal',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum InputSize {
  M = 'medium',
  S = 'small'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme: InputTheme
  customSize: InputSize
  mask?: string
}

/**
 * Компонент поля ввода текста
 * @param {InputTheme} theme - enum для выбора цветовой схемы;
 * @param {InputSize} customSize - enum для выбора размера инпута;
 * @param {string} mask - задать маску, например, для номера телефона: mask="+7 (999) 999-99-99";
 */
export const Input: React.FC<InputProps> = props => {
  const { className, theme, customSize, mask, ...rest } = props
  const additionalClasses = [className, styles[theme], styles[customSize]]

  return (
    <>
      {props.type === 'tel' && mask ? (
        <InputMask mask={mask} className={classNames(styles.input, additionalClasses)} {...rest} />
      ) : (
        <input className={classNames(styles.input, additionalClasses)} {...rest} />
      )}
    </>
  )
}
