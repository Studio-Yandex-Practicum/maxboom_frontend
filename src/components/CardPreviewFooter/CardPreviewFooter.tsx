import React, { FC } from 'react'
import styles from './CardPreviewFooter.module.scss'
import { Button, EButtonColor, EButtonSize } from '../../pages/ProductsPage/Button/Button'

interface TCardPreview {
  handleRedirect: VoidFunction
}

/**
 * Компонент подвала модального окна с карточкой товара.
 * @param {function} handleRedirect-  функция перенаправляет на отдельную страницу товвара;
 */
export const CardPreviewFooter: FC<TCardPreview> = ({ handleRedirect }) => {
  return (
    <footer className={styles.footer}>
      <Button size={EButtonSize.Large} color={EButtonColor.Primary} onClick={handleRedirect}>
        Открыть страницу товара
      </Button>
    </footer>
  )
}
