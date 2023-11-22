import { FC, PropsWithChildren } from 'react'
import styles from './wrapper.module.scss'

/**
 * Component WrapperForMainContent
 * Обертка для компонентов. Выполняет центрирование на странице.
 *
 * @example
 * <WrapperForMainContent>
 *  <ChildrenComponent />
 * </WrapperForMainContent>
 */
const WrapperForMainContent: FC<PropsWithChildren> = props => {
  const { children } = props
  return <div className={styles.wrapper}>{children}</div>
}

export default WrapperForMainContent
