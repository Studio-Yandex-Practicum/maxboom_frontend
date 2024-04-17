import { type FC } from 'react'

import { IProductData } from '@/pages/CartPage/model/types'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './ProductEntity.module.scss'

/**
 * Компонент служит для отображения товаров, пришедших с сервера.
 * @param {IImagesData[]} images-картика с изображением продукта;
 * @param {string} name- название продукта;
 * @param {number} id -артикул продукта;
 * @param {number} price -стоимость продукта;
 * @param {string} currency - валюта, в которой обозначена стоимость;
 */

export const ProductEntity: FC<IProductData> = product => {
  return (
    <div className={`${styles.description}`}>
      <div className={`${styles.frame}`}>
        <img src={product.images[0].image} alt={'product'} className={styles.image} />
      </div>
      <div className={`${styles.description_wrapper}`}>
        <Subheading>{product.id}</Subheading>
        <a className={`${styles.name}`}>{product.name}</a>
      </div>
    </div>
  )
}
