import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CatalogLinkSkeleton: FC = () => {
  return (
    <>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} count={1} height={35} width={140} />
        ))}
    </>
  )
}

export default CatalogLinkSkeleton
