import { type FC } from 'react'

import { IProduct } from '@/shared/model/types/ProductModel'
import Link from '@/shared/ui/Link/Link'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './ProductEntity.module.scss'

/**
 * Компонент служит для отображения товаров, пришедших с сервера.
 * @param {IImagesData[]} images-картика с изображением продукта;
 * @param {string} name- название продукта;
 * @param {number} code -артикул продукта;
 * @param {number} price -стоимость продукта;
 * @param {string} currency - валюта, в которой обозначена стоимость;
 */

export const ProductEntity: FC<IProduct> = ({ ...product }) => {
  return (
    <div className={styles.productEntity}>
      <div className={styles.productEntity__imageBox}>
        <img src={product.images[0].image} alt="product" className={styles.image} />
      </div>

      <article className={styles.description}>
        <Subheading className={styles.code}>{product.code}</Subheading>
        <Link to={'#'} className={styles.name}>
          {product.name}
        </Link>
      </article>
    </div>
  )
}
