export interface ISideBarMenu {
  user: string
  handleLogOut: () => void
}

export interface IData {
  title?: string
  routes?: Ilinks[]
}

interface Ilinks {
  subtitle?: string
  route?: string
  to?: string
}
