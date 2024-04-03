import classNames from 'classnames'
import { FC } from 'react'
import { Link as ReactLink, LinkProps } from 'react-router-dom'

import styles from './Link.module.scss'

export type TLinkProps = {
  className?: string
  categoryId?: number
} & LinkProps

/**
 * shared/ui компонент ссылки, расширяет Link из react-router-dom;
 * @param {Array<string> | string} className - внешние стили;
 * @param {React.ReactNode} children - любой валидный JSX;
 * @return {FC} - возвращает Link
 */
const Link: FC<TLinkProps> = ({ className, children, ...rest }) => {
  const linkClass = classNames(styles.link, className)

  return (
    <ReactLink className={linkClass} {...rest}>
      {children}
    </ReactLink>
  )
}

export default Link
