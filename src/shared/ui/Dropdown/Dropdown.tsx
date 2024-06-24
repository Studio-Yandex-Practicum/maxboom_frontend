import React, { ChangeEvent, useState } from 'react'

import type { TSortOptions } from '@/widgets/PageControls/PageControls'

import styles from './Dropdown.module.scss'

interface DropdownProps extends React.HTMLProps<HTMLSelectElement> {
  items: TSortOptions[]
  defaultItem?: string
  onSelect: React.ChangeEventHandler<HTMLSelectElement>
  changeValue?: string
}

/**
 * Компонент для инпута - выпадающего списка.
 * @param {array} items - список элементов выпадающего списка для выбора;
 * @param {string} defaultItem - выбранный по умолчанию элемент списка;
 * @param {function} onSelect - функция, применяющая выбранное из списка значение;
 * @param {string} changeValue - выбранное название фильтра;
 */
export const Dropdown: React.FC<DropdownProps> = ({
  items,
  defaultItem,
  onSelect,
  changeValue,
  ...props
}) => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultItem || '')

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedItem(value)
    onSelect(e)
  }

  return (
    <select
      className={styles.select}
      value={changeValue ? changeValue : selectedItem}
      onChange={handleSelect}
      {...props}>
      {items.map(item => (
        <option value={item.name} key={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  )
}
