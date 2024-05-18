import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ICatalogLinkSkeleton {
  width: number
  height: number
}

/**
 * Компонент CatalogLinkSkeleton - заставка, пока не загрузятся CatalogLink
 * @param {number} width - ширина скелетона
 * @param {number} height  - высота скелетона
 */

const CatalogLinkSkeleton: FC<ICatalogLinkSkeleton> = ({ width, height }) => {
  return <Skeleton count={1} height={height} width={width} />
}

export default CatalogLinkSkeleton
