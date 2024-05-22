import { ComponentType, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { getUserAuthStatus } from '@/features/login/model/selectors/getUserAuthStatus'
import { Routes } from '@/shared/config/routerConfig/routes'

interface ProtectedRouteProps {
  element: ComponentType
}

/**
 * Компонент для защиты маршрута от неавторизованного пользователя. Перенаправляет на страницу входа
 * @param {Element} element - Защищаемый маршрут
 */
const ProtectedRoute: FC<ProtectedRouteProps> = ({ element: Element, ...rest }) => {
  const isAuth = useSelector(getUserAuthStatus)

  return isAuth ? <Element {...rest} /> : <Navigate to={Routes.LOGIN} />
}

export default ProtectedRoute
