import { type FC, ReactNode, useEffect, useRef, useState } from 'react'

import { LEFT_POSITION, RIGHT_POSITION } from '@/shared/constants/constants'

import styles from './contextMenuElement.module.scss'

type TContextMenuElement = {
  readonly children: ReactNode
  readonly content: ReactNode
  className?: string
  type?: 'left' | 'right'
}

/**
 * @param {string} className - нужно для изменения некоторых css-параметров
 * @param {string} type - нужно для определения, к какому краю прилегает текст
 */
const ContextMenuElement: FC<TContextMenuElement> = ({
  children,
  content,
  className,
  type = LEFT_POSITION
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(0)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    setTop(rect.bottom - rect.top)
  }, [])

  // const [visible, setVisability] = useState(false)

  const handleMouseEnter = () => {
    //setVisability(true)
  }

  const handleMouseLeave = () => {
    //setVisability(false)
  }

  const contextStyle = {
    right: '0',
    top: top
  }

  const contextMenu = (
    <div
      className={`${styles['context-menu']} `}
      style={(type === RIGHT_POSITION && contextStyle) || { top: top }}>
      {content}
    </div>
  )

  // @TODO: Добавить обработчик клика по элементу из ContextMenuElement
  // От таких кликов меню должно скрываться
  // https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/188

  return (
    <div
      tabIndex={0}
      ref={ref}
      className={`${className} ${styles['context-body']} `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {children}
      {contextMenu}
    </div>
  )
}

export default ContextMenuElement
