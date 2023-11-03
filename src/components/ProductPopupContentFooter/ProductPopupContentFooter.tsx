import React, { FC } from 'react'
import styles from './ProductPopupContentFooter.module.scss'
import { Button } from '../../pages/ProductsPage/Button/Button'

interface TProductPopupContent {
  handleRedirect: VoidFunction
}

/**
 * Компонент подвала модального окна с карточкой товара.
 * @param {function} handleRedirect-  функция перенаправляет на отдельную страницу товвара;
 */
export const ProductPopupContentFooter: FC<TProductPopupContent> = ({ handleRedirect }) => {
  return (
    <footer className={styles.footer}>
      <Button size="l" color="primary" onClick={handleRedirect}>
        Открыть страницу товара
      </Button>
    </footer>
  )
}
