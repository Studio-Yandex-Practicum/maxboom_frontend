import { type FC } from 'react'

import { RollUp } from '@/features/RollUp/RollUp'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import type { TProductInfo } from './model/type/type'
import styles from './ProductInfo.module.scss'

/**
 * Блок с описанием товара на странице товара
 * @param {string} description описание товара
 */
export const ProductInfo: FC<TProductInfo> = ({ description }) => {
  return (
    <RollUp>
      <Paragraph className={styles.text}>{description}</Paragraph>
    </RollUp>
  )
}
