import React, { FC } from 'react'
import styles from './PageControls.module.scss'
import { Dropdown } from '../../components/Dropdown/Dropdown'
import iconGrid from '../../assets/icons/grid-8-svgrepo-com.svg'
import iconList from '../../assets/icons/grid-5-svgrepo-com.svg'
import iconListCompact from '../../assets/icons/grid-6-svgrepo-com.svg'

type TPageControls = {
  cardView: string
  handleCardViewChange: (view: string) => void
  handleItemsPerPageChange: (selectedOption: string) => void
  handleSortChange: (selectedOption: string) => void
  itemPerPageOptions: number[]
  sortOptions: string[]
}

export const PageControls: FC<TPageControls> = ({
  cardView,
  handleCardViewChange,
  handleItemsPerPageChange,
  handleSortChange,
  itemPerPageOptions,
  sortOptions
}) => {
  return (
    <div className={styles.pageControls}>
      <div className={styles.dropdowns}>
        <Dropdown items={sortOptions} onSelect={handleSortChange} />
        <Dropdown items={itemPerPageOptions} onSelect={handleItemsPerPageChange} />
      </div>
      <ul className={styles.cardsControls}>
        <li
          className={`${styles.cardsControl} ${cardView === 'grid' && styles.active}`}
          onClick={() => handleCardViewChange('grid')}>
          <img src={iconGrid} alt="Показать карточки сеткой" />
        </li>
        <li
          className={`${styles.cardsControl} ${cardView === 'list' && styles.active}`}
          onClick={() => handleCardViewChange('list')}>
          <img src={iconList} alt="Показать карточки списком" />
        </li>
        <li
          className={`${styles.cardsControl} ${cardView === 'compact' && styles.active}`}
          onClick={() => handleCardViewChange('compact')}>
          <img src={iconListCompact} alt="Показать карточки компактным списком" />
        </li>
      </ul>
    </div>
  )
}
