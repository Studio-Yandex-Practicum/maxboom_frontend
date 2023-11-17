import React from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'
import { EPlace } from '../../../utils/types'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'place'> & {
  place: EPlace.SearchHeader | EPlace.Subscribe | EPlace.SubscribeFooter
}

/**
 * Компонент инпута.
 * @param {string} place - описание инпута по местоположению;
 */

export const Input: React.FC<InputProps> = ({ place, ...props }) => {
  const inputClasses = classNames(styles.input, {
    [styles.inputSearchHeader]: place === EPlace.SearchHeader,
    [styles.inputSubscribe]: place === EPlace.Subscribe,
    [styles.inputSubscribeFooter]: place === EPlace.SubscribeFooter
  })

  return <input type="text" autoComplete="off" className={inputClasses} {...props} />
}
