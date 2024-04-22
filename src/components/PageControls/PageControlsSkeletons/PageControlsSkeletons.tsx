import { type FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './PageControlsSkeletons.module.scss'

export const PageControlsSkeletons: FC = () => {
  return (
    <div className={styles['sk-page-controls']}>
      <div className={styles['sk-page-controls__dropdowns']}>
        <Skeleton className={styles['sk-page-controls__dropdown']} inline={true} />
        <Skeleton className={styles['sk-page-controls__dropdown']} inline={true} />
      </div>
      <ul className={styles['sk-page-controls__cards-controls']}>
        <Skeleton className={styles['sk-page-controls__cards-control']} inline={true} />
        <Skeleton className={styles['sk-page-controls__cards-control']} inline={true} />
        <Skeleton className={styles['sk-page-controls__cards-control']} inline={true} />
      </ul>
    </div>
  )
}
