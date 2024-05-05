import { type FC } from 'react'

import styles from './Pagination.module.scss'

type TPaginationProps = {
  currentPage: number
  totalPages: number
  handlePageChange: (pageNumber: number) => void
  handleShowMore: VoidFunction
}

/**
 * Компонент пагинации для просмотра страниц
 * @param {number} currentPage - порядковый номер текущей страницы;
 * @param {number} totalPages - количество страниц для просмотра;
 * @param {function} handlePageChange - функция изменения отображаемой страницы;
 * @param {function} handleShowMore - функция управления подгрузкой дополнительного контента;
 */
export const Pagination: FC<TPaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
  handleShowMore
}) => {
  return (
    <div className={styles.pagination}>
      <div className={styles['pagination-buttons']}>
        <button className={styles.button} onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
          {`<<`}
        </button>
        <button
          className={styles.button}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          {`<`}
        </button>
        <span className={styles['current-page']}>
          Страница {currentPage === 0 ? 1 : currentPage} из {totalPages}
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
      {currentPage < totalPages && (
        <button className={`${styles.button} ${styles['button_active']}`} onClick={handleShowMore}>
          Показать больше
        </button>
      )}
    </div>
  )
}
