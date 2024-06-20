import { FC } from 'react'

import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Span from '@/shared/ui/Span/Span'

import styles from './RequiredFieldTitle.module.scss'

interface IRequiredFieldTitleProps {
  text: string
}

/**
 * Компонент с текстом обязательного заголовка поля ввода для формы
 *
 * @param {string} text Текст заголовка
 */
export const RequiredFieldTitle: FC<IRequiredFieldTitleProps> = ({ text }) => {
  return (
    <Paragraph className={styles.fieldlabeltext}>
      <Span>{`* `}</Span>
      {text}
    </Paragraph>
  )
}
