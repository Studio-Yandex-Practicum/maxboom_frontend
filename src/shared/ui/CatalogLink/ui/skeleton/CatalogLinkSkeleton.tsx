import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ICatalogLinkSkeleton {
  key: number
  width: number
  height: number
}

/**
 * Компонент CatalogLinkSkeleton - заставка, пока не загрузятся CatalogLink
 * @param {number} key - индекс списка
 * @param {number} width - ширина скелетона
 * @param {number} height  - высота скелетона
 */

const CatalogLinkSkeleton: FC<ICatalogLinkSkeleton> = ({ key, width, height }) => {
  return (
    <li key={key}>
      <Skeleton count={1} height={height} width={width} />
    </li>
  )
}

export default CatalogLinkSkeleton
