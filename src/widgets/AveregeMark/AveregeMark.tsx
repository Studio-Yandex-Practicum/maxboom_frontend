import { FC } from 'react'

import IconStar from '@/assets/icons/IconStar'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './AveregeMark.module.scss'
import { STORE_COMMENT } from './model/constants/constants'
import { Mark } from './ui/Mark/Mark'

interface IAveregeMarkProps {
  deliverySpeedScore: number
  priceScore: number
  qualityScore: number
  score: number
}

/**
 * Widget секции средней оценки магазина
 *
 * @param {number} score  оценка общая
 * @param {number} deliverySpeedScore  оценка за скорость доставки
 * @param {number} priceScore  оценка за цену
 * @param {number} qualityScore  оценка за качество
 */
export const AveregeMark: FC<IAveregeMarkProps> = ({
  deliverySpeedScore,
  priceScore,
  qualityScore,
  score
}) => {
  return (
    <section className={styles.aveargemark}>
      <div className={styles.aveargemark__markcontainer}>
        <Paragraph className={styles.aveargemark__commonscore}>
          {score}
          <IconStar />
        </Paragraph>
        <Heading className={styles.aveargemark__header}>Рейтинг нашего магазина</Heading>
        <ul className={styles.aveargemark__scores}>
          <Mark title="Скорость доставки" mark={deliverySpeedScore} />
          <Mark title="Цена" mark={priceScore} />
          <Mark title="Качество товара" mark={qualityScore} />
        </ul>
      </div>
      <div className={styles.aveargemark__commentcontainer}>
        <Paragraph>{STORE_COMMENT}</Paragraph>
      </div>
    </section>
  )
}
