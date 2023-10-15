import React, { useState } from 'react'
import styles from './Dropdown.module.scss'

interface DropdownProps {
  items: (string | number)[]
  defaultItem?: string
  onSelect: (selectedValue: string) => void
}

export const Dropdown: React.FC<DropdownProps> = ({ items, defaultItem, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultItem || '')

  const handleSelect = (value: string) => {
    setSelectedItem(value)
    onSelect(value)
  }

  return (
    <select className={styles.select} value={selectedItem} onChange={e => handleSelect(e.target.value)}>
      {items.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}
