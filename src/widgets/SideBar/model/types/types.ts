import { ReactElement } from 'react'

export interface ISideBar {
  title?: string
  isVisible?: boolean
  onClick?: () => void
  children?: ReactElement | JSX.Element | JSX.Element[]
}
