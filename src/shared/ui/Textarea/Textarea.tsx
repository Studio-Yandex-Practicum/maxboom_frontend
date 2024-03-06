import classNames from 'classnames'
import React, { TextareaHTMLAttributes } from 'react'

import styles from './Textarea.module.scss'

export enum TextareaTheme {
  ACCENT = 'accent',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum TextareaSize {
  M = 'medium',
  S = 'small'
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: TextareaTheme
  customSize?: TextareaSize
}

/**
 * Компонент поля ввода текста (многострочный)
 * @param {TextareaTheme} theme - enum для выбора цветовой схемы;
 * @param {TextareaSize} customSize - enum для выбора размера инпута;
 * @param {number} rows - количество отображаемый строк текста в поле ввода;
 */
export const Textarea: React.FC<TextareaProps> = props => {
  const { className, theme, customSize, rows, ...rest } = props
  const additionalClasses = [className, theme ? styles[theme] : '', customSize ? styles[customSize] : '']

  return <textarea rows={rows} className={classNames(styles.textarea, additionalClasses)} {...rest} />
}
