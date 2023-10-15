import React, { FC } from 'react'
import styles from './Pagination.module.scss'

type TPaginationProps = {
  currentPage: number
  totalPages: number
  handlePageChange: (pageNumber: number) => void
  handleShowMore: () => void
}

export const Pagination: FC<TPaginationProps> = ({ currentPage, totalPages, handlePageChange, handleShowMore }) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationButtons}>
        <button className={styles.button} onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
          {`<<`}
        </button>
        <button
          className={styles.button}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          {`<`}
        </button>
        <span className={styles.currentPage}>
          Страница {currentPage} из {totalPages}
        </span>
        <button
          className={styles.button}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          {`>`}
        </button>
        <button
          className={styles.button}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}>
          {`>>`}
        </button>
      </div>
      <button className={`${styles.button} ${styles.buttonActive}`} onClick={handleShowMore}>
        Показать больше
      </button>
    </div>
  )
}
