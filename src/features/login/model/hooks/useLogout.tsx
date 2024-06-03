import { useNavigate } from 'react-router'

import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'

import { logout } from '../services/logout/logout'

/**
 * Хук для разлогирования пользователя
 * @returns {function} logoutHandle функция выхода пользователя и перенаправления на страницу выхода
 */
export const useLogout = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHandle = () => {
    dispatch(logout())
    navigate(Routes.LOGOUT)
  }

  return logoutHandle
}
