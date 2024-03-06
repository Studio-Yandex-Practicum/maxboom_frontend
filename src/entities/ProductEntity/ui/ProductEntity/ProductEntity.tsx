import { type FC } from 'react'

import { TProduct } from '@/mockData/productsData'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './ProductEntity.module.scss'

/**
 * Компонент служит для отображения товаров, пришедших с сервера.
 * @param {string} src-картика с изображением продукта;
 * @param {string} name- название продукта;
 * @param {string} article -артикул продукта;
 * @param {number} price -стоимость продукта;
 * @param {string} currency - валюта, в которой обозначена стоимость;
 */

export const ProductEntity: FC<TProduct> = product => {
  return (
    <div className={`${styles.description}`}>
      <div className={`${styles.frame}`}>
        <img src={product.src} alt={'product'} className={styles.image} />
      </div>
      <div className={`${styles.description_wrapper}`}>
        <Subheading>{product.article}</Subheading>
        <a className={`${styles.name}`}>{product.name}</a>
      </div>
    </div>
  )
}
