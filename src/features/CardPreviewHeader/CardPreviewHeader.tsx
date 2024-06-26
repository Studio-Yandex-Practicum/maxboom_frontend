import classnames from 'classnames'
import { FC } from 'react'

import IconCompare from '@/assets/icons/IconCompare.svg'
import IconLike from '@/assets/icons/IconLike'
import { Button, ButtonSize } from '@/shared/ui/Button/Button'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './CardPreviewHeader.module.scss'

interface TCardPreviewHeader {
  brand: string
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
export const CardPreviewHeader: FC<TCardPreviewHeader> = ({
  isLiked,
  isInCompared,
  handleLike,
  handleAddToCompared,
  brand
}) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-buttons']}>
        <Button size={ButtonSize.XS} className={styles['button']} onClick={handleLike}>
          <IconLike
            styles={classnames(styles.icon, {
              [styles['active']]: isLiked
            })}
          />
          В избранное
        </Button>
        <Button size={ButtonSize.XS} className={styles['button']} onClick={handleAddToCompared}>
          <IconCompare
            className={classnames(styles.icon, {
              [styles['active']]: isInCompared
            })}
          />
          В сравнение
        </Button>
      </div>
      <div className={styles.procuder}>
        <Paragraph className={styles['producer-title']}>{brand}</Paragraph>
        <Paragraph className={styles['producer-subtitle']}>Производитель</Paragraph>
      </div>
    </header>
  )
}
