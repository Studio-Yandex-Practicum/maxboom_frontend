import React, { ChangeEvent, useState } from 'react'
import styles from './Dropdown.module.scss'

interface DropdownProps {
  items: (string | number)[]
  defaultItem?: string
  onSelect: (selectedValue: string) => void
}

/**
 * Компонент для инпута - выпадающего списка.
 * @param {array} items - список элементов выпадающего списка для выбора;
 * @param {string} defaultItem - выбранный по умолчанию элемент списка;
 * @param {function} onSelect - функция, применяющая выбранное из списка значение;
 */
export const Dropdown: React.FC<DropdownProps> = ({ items, defaultItem, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultItem || '')

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedItem(value)
    onSelect(value)
  }

  return (
    <select className={styles.select} value={selectedItem} onChange={handleSelect}>
      {items.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}
