import React, { FC } from 'react'
import styles from './PageControls.module.scss'
import { Dropdown } from '../../components/Dropdown/Dropdown'

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
          {/* <img src={iconGrid} alt="Показать карточки сеткой" /> */}
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#BDC2D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M2 12H22" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 12V21.5" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.75 22V12" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 12V2" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M15.75 12V2.54004"
              stroke="#BDC2D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
        <li
          className={`${styles.cardsControl} ${cardView === 'list' && styles.active}`}
          onClick={() => handleCardViewChange('list')}>
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#BDC2D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10 2V22" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 12H22" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
        <li
          className={`${styles.cardsControl} ${cardView === 'compact' && styles.active}`}
          onClick={() => handleCardViewChange('compact')}>
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#BDC2D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10 2V22" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 8.5H22" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 15.5H22" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
      </ul>
    </div>
  )
}
