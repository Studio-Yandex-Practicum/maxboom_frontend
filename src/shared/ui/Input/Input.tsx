import React from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'target'> & {
  target: 'search-header' | 'subscribe' | 'subscribe-footer'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Компонент инпута.
 * @param {string} target - описание инпута по местоположению;
 * @param {function} onChange - функция-обработчик ввода;
 */

export const Input: React.FC<InputProps> = ({ target, onChange, ...props }) => {
  const inputClasses = classNames(styles.input, {
    [styles.inputSearchHeader]: target === 'search-header',
    [styles.inputSubscribe]: target === 'subscribe',
    [styles.inputSubscribeFooter]: target === 'subscribe-footer'
  })

  return <input type="text" autoComplete="off" className={inputClasses} onChange={onChange} {...props} />
}
