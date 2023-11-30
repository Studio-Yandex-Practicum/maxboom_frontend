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

const Paragraph: FC<TParagraphProps> = ({ children, className, theme, ...props }) => {
  const paragraphClasses = classNames(className, styles.paragraph, {
    [styles.error]: theme === ParagraphTheme.ERROR
  })

  return (
    <p className={paragraphClasses} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
