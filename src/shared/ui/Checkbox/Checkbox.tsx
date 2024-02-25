import { FC } from 'react'
import { Field, useField } from 'formik'
import style from './Checkbox.module.scss'
import { Input } from '@/shared/ui/Input/Input'
import classNames from 'classnames'

export interface CheckboxProps {
  name: string
  value?: string
  label?: string
  htmlFor: string
  theme?: CheckboxTheme
  size?: CheckboxSize
  className?: string
}

export enum CheckboxSize {
  M = 'medium'
}

export enum CheckboxTheme {
  PRIMARY = 'primary'
}

/**
 * компонент Button
 * @param {CheckboxTheme} props.theme - тема представления
 * @param {CheckboxSize} props.size - размер
 */

const Checkbox: FC<CheckboxProps> = props => {
  const {
    className,
    value,
    htmlFor,
    label,
    name,
    theme = CheckboxTheme.PRIMARY,
    size = CheckboxSize.M
  } = props

  const additionalClasses = [className, theme && style[theme], style[size]]

  const [field] = useField({ name, type: 'radio', value })

  return (
    <label className={style.formReturn__checkbox} htmlFor={htmlFor}>
      <Field
        checked={field.checked}
        className={classNames(style.formReturn__radio, additionalClasses)}
        as={Input}
        label={label}
        name={name}
        type="radio"
        value={value}
      />
      <span>{label}</span>
    </label>
  )
}

export default Checkbox
