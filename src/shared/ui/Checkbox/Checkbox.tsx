import { FC } from 'react'
import { Field, useField } from 'formik'
import style from './Checkbox.module.scss'
import { Input } from '@/shared/ui/Input/Input'
import classNames from 'classnames'
import { ECheckboxTheme, ECheckboxSize } from '@/shared/model/types/common'

export interface CheckboxProps {
  name: string
  value?: string
  label?: string
  htmlFor: string
  theme?: ECheckboxTheme
  size?: ECheckboxSize
  className?: string
}

/**
 * компонент Button
 * @param {string} props.name - имя для привязки к htmlFor
 * @param {string} props.value - значение выбранного поля
 * @param {string} props.label - название поля
 * @param {string} props.htmlFor - для привязки к field
 * @param {ECheckboxTheme} props.theme - тема представления
 * @param {ECheckboxSize} props.size - размер
 */

const Checkbox: FC<CheckboxProps> = props => {
  const {
    className,
    value,
    htmlFor,
    label,
    name,
    theme = ECheckboxTheme.PRIMARY,
    size = ECheckboxSize.M
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
