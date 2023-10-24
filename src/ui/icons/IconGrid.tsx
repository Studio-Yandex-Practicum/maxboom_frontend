import React from 'react'

/**
 * Компонент иконки выбора расположения карточек "сетка"
 */
export const IconGrid = () => {
  return (
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
      <path d="M15.75 12V2.54004" stroke="#BDC2D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
