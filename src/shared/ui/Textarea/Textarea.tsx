import React, { TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'
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
 */
export const Textarea: React.FC<TextareaProps> = props => {
  const { className, theme, customSize, ...rest } = props
  const additionalClasses = [className, theme ? styles[theme] : '', customSize ? styles[customSize] : '']

  return <textarea rows={4} className={classNames(styles.textarea, additionalClasses)} {...rest} />
}
