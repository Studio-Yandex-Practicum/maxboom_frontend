import React, { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'
import classNames from 'classnames'
import styles from './Input.module.scss'

export enum InputTheme {
  ACCENT = 'accent',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum InputSize {
  M = 'medium',
  S = 'small'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  theme: InputTheme
  customSize: InputSize
  mask?: string
  name: string
}

/**
 * Компонент поля ввода текста
 * @param {string} label - лейбл инпута для доступности;
 * @param {InputTheme} theme - enum для выбора цветовой схемы;
 * @param {InputSize} customSize - enum для выбора размера инпута;
 * @param {string} mask - задать маску, например, для номера телефона: mask="+7 (999) 999-99-99";
 * @param {string} name - html-атрибут для связки инпута с лейблом и работы валидации Formik;
 */
export const Input: React.FC<InputProps> = props => {
  const { className, label, theme, customSize, mask, name, ...rest } = props
  const additionalClasses = [className, styles[theme], styles[customSize]]

  return (
    <>
      <label htmlFor={name} className={classNames(styles.label)}>
        {label}
      </label>
      {mask ? (
        <InputMask mask={mask} className={classNames(styles.input, additionalClasses)} {...rest} />
      ) : (
        <input className={classNames(styles.input, additionalClasses)} {...rest} />
      )}
    </>
  )
}
