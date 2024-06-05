import { type FC } from 'react'

import SideBarButton from '@/entities/SideBarButton'

import SideBarMenu from '../SideBarMenu/SideBarMenu'

interface IAdaptiveSideBarProps {
  handleClick: VoidFunction
}

/**
 * HOC для отрисовки сайд-бар меню в полном виде или в виде кнопки в зависимости от переданного флага
 * @param {boolean} isBarMenu Нужно ли отображать полноценное меню или только кнопку
 * @returns {FC} AdaptiveSideBar - Компонент (меню или кнопка для вызова попапа с меню) в зависимости от значения входного параметра
 */
export const withAdaptiveSideBar = (isBarMenu: boolean) => {
  const AdaptiveSideBar: FC<IAdaptiveSideBarProps> = ({ handleClick }) => {
    if (isBarMenu) {
      return <SideBarMenu />
    } else {
      return <SideBarButton onClick={handleClick} />
    }
  }

  return AdaptiveSideBar
}
