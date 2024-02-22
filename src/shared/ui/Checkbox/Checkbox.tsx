// Checkbox.tsx
import { FC } from 'react'
import { Field, useField } from 'formik'
import styles from './Checkbox.module.scss'
import { Input } from '@/shared/ui/Input/Input'

export interface CheckboxProps {
  name: string
  value?: string
  label?: string
  htmlFor: string
  theme?: CheckboxTheme
  size?: CheckboxSize
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

const Checkbox: FC<CheckboxProps> = ({ name, value, label, htmlFor }) => {
  // Используем хук useField для интеграции с Formik
  const [field] = useField({ name, type: 'radio', value })

  return (
    <label className={styles.formReturn__checkbox} htmlFor={htmlFor}>
      <Field
        checked={field.checked}
        className={styles.formReturn__radio}
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
