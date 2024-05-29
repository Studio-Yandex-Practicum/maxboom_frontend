import { FC } from 'react'

import { IProduct } from '@/shared/model/types/ProductModel'

import styles from './AccountCartCard.module.scss'

interface IAccountCartCardProps {
  product: IProduct
}

export const AccountCartCard: FC<IAccountCartCardProps> = ({ product }) => {
  return <div className={styles.accountCartCard}>{product.name}</div>
}
