import React, { useState } from 'react'
import _sprite from '../../assets/images/_sprite.svg'
import styles from './Input.module.scss'

interface IProps {
  type: string
  placeholder: string
  title: string
  icon?: string
  className: string
  onSubmit: (value: string) => void
}

const Input = ({ type, placeholder, title, icon, className, onSubmit }: IProps) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClickSubmit = () => {
    onSubmit(value)
  }

  return (
    <div className={`${styles.inputContainer} ${isFocused ? styles.focused : null} ${className}`}>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />
      <button type="button" onClick={handleClickSubmit}>
        {title}
        {!icon ? null : (
          <svg>
            <use href={`${_sprite}#icon-subsc`}></use>
          </svg>
        )}
      </button>
    </div>
  )
}

export default Input
