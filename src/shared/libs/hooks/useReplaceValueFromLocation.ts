import { useLocation } from 'react-router'

/**
 * Функция извлечения нужных параметров из URL с помощью useLocation
 * @param {string} varN - значение, которое нужно заменить;
 * @param {string} changeN - на что нужно заменить;
 */
export const useReplaceValueFromLocation = (var1: string, change1: string, var2: string, change2: string) => {
  const location = useLocation()
  return location.search.replace(var1, change1)?.replace(var2, change2)
}
