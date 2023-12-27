import React, { FC } from 'react'
import styles from './paragraph.module.scss'
import classNames from 'classnames'

export enum ParagraphTheme {
  ERROR = 'error'
}

type TParagraphProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
  theme?: ParagraphTheme
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 * @param {ParagraphTheme} theme - для передачи темы оформления текста
 */
// TODO сделать пропс size и стили для него
const Paragraph: FC<TParagraphProps> = ({ children, className, theme, ...props }) => {
  const paragraphClasses = classNames(className, styles.paragraph, theme && styles[theme])

  return (
    <p className={paragraphClasses} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
