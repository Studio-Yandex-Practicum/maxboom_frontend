import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './context-menu-element.module.scss'

import { LEFT_POSITION, RIGHT_POSITION } from '../../utils/constants'

type TContextMenuElement = {
  readonly children: ReactNode
  readonly content: ReactNode
  className?: string
  type?: 'left' | 'right'
}

const ContextMenuElement: FC<TContextMenuElement> = ({ children, content, className, type = LEFT_POSITION }) => {
  // todo:
  //
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
    //console.log("мышь над элементом")
    //setVisability(true)
  }

  const handleMouseLeave = () => {
    //console.log("мышь покидает элеммент")
    //setVisability(false)
  }

  const contextStyle = {
    right: '0',
    top: top
  }

  const contextMenu = (
    <div className={`${styles['context-menu']} `} style={(type === RIGHT_POSITION && contextStyle) || { top: top }}>
      {content}
    </div>
  )

  return (
    <div
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
