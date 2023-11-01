import React, { FC } from 'react'
import classnames from 'classnames'
import IconCompare from '../../assets/icons/IconCompare'
import IconLike from '../../assets/icons/IconLike'
import styles from './ProductPopupContentHeader.module.scss'
import { Button } from '../../ui/Button/Button'

interface TProductPopupContentHeader {
  isLiked: boolean
  isInCompared: boolean
  handleLike: VoidFunction
  handleAddToCompared: VoidFunction
}

/**
 * Компонент с контентом поп-апа товара.
 * @param {boolean} isLiked-  добавлен ли товар в избранное;
 * @param {boolean} isInCompared-  добавлен ли товар в список для сравнения;
 * @param {function} handleLike-  функция добавления в избранное;
 * @param {function} handleAddToCompared-  функция добавления в список для сравнения;

 */
export const ProductPopupContentHeader: FC<TProductPopupContentHeader> = ({
  isLiked,
  isInCompared,
  handleLike,
  handleAddToCompared
}) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-buttons']}>
        <Button size="xs" color="transparent" onClick={handleLike}>
          <IconLike
            styles={classnames(styles.icon, {
              [styles['active']]: isLiked
            })}
          />
          В избранное
        </Button>
        <Button size="xs" color="transparent" onClick={handleAddToCompared}>
          <IconCompare
            styles={classnames(styles.icon, {
              [styles['active']]: isInCompared
            })}
          />
          В сравнение
        </Button>
      </div>
      <div className={styles.procuder}>
        {/* @TODO: Завести shared/ui-компоненты под типографику
         https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/77 */}
        <p className={styles['producer-title']}>Maxboom</p>
        <p className={styles['producer-subtitle']}>Производитель</p>
      </div>
    </header>
  )
}
