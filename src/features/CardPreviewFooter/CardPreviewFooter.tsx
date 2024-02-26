import { FC } from 'react'

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'

import styles from './CardPreviewFooter.module.scss'

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
      <Button size={ButtonSize.M} theme={ButtonTheme.PRIMARY} onClick={handleRedirect}>
        Открыть страницу товара
      </Button>
    </footer>
  )
}
